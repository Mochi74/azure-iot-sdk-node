// Copyright (c) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

'use strict';

import { errors } from 'azure-iot-common';
import * as _ from 'lodash';
import { DeviceIdentity } from './device';
import { Registry } from './registry';
import { Callback } from './interfaces';

/**
 * @private
 */
export interface TwinData {
  deviceId: string;
  etag: string;
  tags: { [key: string]: any; };
  properties: {
    /**
     * Reported properties: those are written to by the device and read by the service.
     */
    reported: { [key: string]: any; };
    /**
     * Desired properties: those are written to by the service and read by the device.
     */
    desired: { [key: string]: any; };
  };
}

/**
 * A Device Twin is document describing the state of a device that is stored by an Azure IoT hub and is available even if the device is offline.
 * It is built around 3 sections:
 *   - Tags: key/value pairs only accessible from the service side
 *   - Desired Properties: updated by a service and received by the device
 *   - Reported Properties: updated by the device and received by the service.
 *
 * Note that although it is a possibility, desired and reported properties do not have to match
 * and that the logic to sync these two collections, if necessary, is left to the user of the SDK.
 *
 * For more information see {@link https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-devguide-device-twins|Understanding Device Twins}.
 *
 * The recommended way to obtain a {@link azure-iothub.Twin} for a specific device is to use the {@link azure-iothub.Registry.getTwin} method.
 */
export class Twin implements TwinData {
  /**
   * Unique identifier of the device identity associated with the twin, as it exists in the device identity registry.
   */
  deviceId: string;
  /**
   * Tag used in optimistic concurrency to avoid multiple parallel editions of the device twin.
   */
  etag: string;
  /**
   * Collection of key/value pairs that is available only on the service side and can be used in queries to find specific devices.
   */
  tags: {
    [key: string]: string;
  };
  /**
   * The desired and reported properties dictionnaries (respectively in `properties.desired` and `properties.reported`).
   */
  properties: {
    /**
     * Reported properties: those are written to by the device and read by the service.
     */
    reported: { [key: string]: any; };
    /**
     * Desired properties: those are written to by the service and read by the device.
     */
    desired: { [key: string]: any; };
  };

  private _registry: Registry;

  /**
   * Instantiates a new {@link Twin}. The recommended way to get a new {@link Twin} object is to use the {@link Registry#getTwin} method.
   * @constructor
   * @param {string|Object}  device      A device identifier string or an object describing the device. If an Object,
   *                                     it must contain a deviceId property.
   * @param {Registry}       registryClient   The HTTP registry client used to execute REST API calls.
   */
  constructor(device: DeviceIdentity | string, registryClient: Registry) {
    /*Codes_SRS_NODE_IOTHUB_TWIN_16_002: [The `Twin(device, registryClient)` constructor shall throw a `ReferenceError` if `device` is falsy.]*/
    if (device === null || device === undefined || device === '') throw new ReferenceError('\'device\' cannot be \'' + device + '\'');
    /*Codes_SRS_NODE_IOTHUB_TWIN_16_003: [The `Twin(device, registryClient)` constructor shall throw a `ReferenceError` if `registryClient` is falsy.]*/
    if (!registryClient) throw new ReferenceError('\'registryClient\' cannot be \'' + registryClient + '\'');

    if (typeof(device) === 'string') {
      /*Codes_SRS_NODE_IOTHUB_TWIN_16_001: [The `Twin(device, registryClient)` constructor shall initialize an empty instance of a `Twin` object and set the `deviceId` base property to the `device` argument if it is a `string`.]*/
      this.deviceId = device;
    } else {
      if (!device.deviceId) {
        /*Codes_SRS_NODE_IOTHUB_TWIN_16_007: [The `Twin(device, registryClient)` constructor shall throw an `ArgumentError` if `device` is an object and does not have a `deviceId` property.]*/
        throw new errors.ArgumentError('\'device\' must have a deviceId property');
      } else {
        /*Codes_SRS_NODE_IOTHUB_TWIN_16_006: [The `Twin(device, registryClient)` constructor shall initialize an empty instance of a `Twin` object and set the properties of the created object to the properties described in the `device` argument if it's an `object`.]*/
        _.merge(this, device);
      }
    }

    /*Codes_SRS_NODE_IOTHUB_TWIN_16_005: [The `Twin(device, registryClient)` constructor shall set the `Twin.etag` to `*`.]*/
    this.etag = this.etag || '*';
    this.tags = this.tags || {};

    this.properties = _.assign({ desired: {} }, this.properties);

    this._registry = registryClient;
  }

  /**
   * @method            module:azure-iothub.Twin.get
   * @description       Gets the latest version of this device twin from the IoT Hub service.
   * @param {Function}  done        The function to call when the operation is
   *                                complete. `done` will be called with three
   *                                arguments: an Error object (can be null), a
   *                                {@link module:azure-iothub.Twin|Twin}
   *                                object representing the created device
   *                                identity, and a transport-specific response
   *                                object useful for logging or debugging.
   */
  get(done: Callback<Twin>): void {
    /*Codes_SRS_NODE_IOTHUB_TWIN_16_020: [The `get` method shall call the `getTwin` method of the `Registry` instance stored in `_registry` property with the following parameters:
    - `this.deviceId`
    - `done`]*/
    this._registry.getTwin(this.deviceId, (err, result, response) => {
      if (err) {
      /*Codes_SRS_NODE_IOTHUB_TWIN_16_022: [The method shall call the `done` callback with an `Error` object if the request failed]*/
        done(err);
      } else {
        /*Codes_SRS_NODE_IOTHUB_TWIN_16_021: [The method shall copy properties, tags, and etag in the twin returned in the callback of the `Registry` method call into its parent object.]*/
        this.properties = result.properties;
        this.tags = result.tags;
        this.etag = result.etag;
        /*Codes_SRS_NODE_IOTHUB_TWIN_16_023: [The method shall call the `done` callback with a `null` error object, its parent instance as a second argument and the transport `response` object as a third argument if the request succeeded.]*/
        done(null, this, response);
      }
    });
  }

  /**
   * @method            module:azure-iothub.Twin.update
   * @description       Update the device twin with the patch provided as argument.
   * @param {Object}    patch       Object containing the new values to apply to this device twin.
   * @param {Function}  done        The function to call when the operation is
   *                                complete. `done` will be called with three
   *                                arguments: an Error object (can be null), a
   *                                {@link module:azure-iothub.Twin|Twin}
   *                                object representing the created device
   *                                identity, and a transport-specific response
   *                                object useful for logging or debugging.
   */
  update(patch: any, done: Callback<Twin>): void {
    /*Codes_SRS_NODE_IOTHUB_TWIN_16_019: [The `update` method shall call the `updateTwin` method of the `Registry` instance stored in `_registry` property with the following parameters:
    - `this.deviceId`
    - `patch`
    - `this.etag`
    - `done`]*/
    this._registry.updateTwin(this.deviceId, patch, this.etag, (err, result, response) => {
      if (err) {
        /*Codes_SRS_NODE_IOTHUB_TWIN_16_022: [The method shall call the `done` callback with an `Error` object if the request failed]*/
        done(err);
      } else {
        /*Codes_SRS_NODE_IOTHUB_TWIN_16_021: [The method shall copy properties, tags, and etag in the twin returned in the callback of the `Registry` method call into its parent object.]*/
        this.properties = result.properties;
        this.tags = result.tags;
        this.etag = result.etag;
        /*Codes_SRS_NODE_IOTHUB_TWIN_16_023: [The method shall call the `done` callback with a `null` error object, its parent instance as a second argument and the transport `response` object as a third argument if the request succeeded.]*/
        done(null, this, response);
      }
    });
  }

  /*Codes_SRS_NODE_IOTHUB_TWIN_16_015: [The `toJSON` method shall return a copy of the `Twin` object that doesn't contain the `_registry` private property.]*/
  toJSON(): object {
    // The registry object has a reference to https which has circular references, so we need to remove it from the JSON.
    let serializable: any = {};
    _.merge(serializable, this);
    serializable._registry = undefined;

    return serializable;
  }
}
