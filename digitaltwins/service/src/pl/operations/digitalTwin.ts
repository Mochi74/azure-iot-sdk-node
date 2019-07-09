/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/digitalTwinMappers";
import * as Parameters from "../models/parameters";
import { IotHubGatewayServiceAPIs20190701PreviewContext } from "../iotHubGatewayServiceAPIs20190701PreviewContext";

/** Class representing a DigitalTwin. */
export class DigitalTwin {
  private readonly client: IotHubGatewayServiceAPIs20190701PreviewContext;

  /**
   * Create a DigitalTwin.
   * @param {IotHubGatewayServiceAPIs20190701PreviewContext} client Reference to the service client.
   */
  constructor(client: IotHubGatewayServiceAPIs20190701PreviewContext) {
    this.client = client;
  }

  /**
   * @summary Gets the list of interfaces.
   * @param digitalTwinId Digital Twin ID. Format of digitalTwinId is DeviceId[~ModuleId]. ModuleId
   * is optional.
   * @param [options] The optional parameters
   * @returns Promise<Models.DigitalTwinGetInterfacesResponse>
   */
  getInterfaces(digitalTwinId: string, options?: msRest.RequestOptionsBase): Promise<Models.DigitalTwinGetInterfacesResponse>;
  /**
   * @param digitalTwinId Digital Twin ID. Format of digitalTwinId is DeviceId[~ModuleId]. ModuleId
   * is optional.
   * @param callback The callback
   */
  getInterfaces(digitalTwinId: string, callback: msRest.ServiceCallback<Models.DigitalTwinInterfaces>): void;
  /**
   * @param digitalTwinId Digital Twin ID. Format of digitalTwinId is DeviceId[~ModuleId]. ModuleId
   * is optional.
   * @param options The optional parameters
   * @param callback The callback
   */
  getInterfaces(digitalTwinId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DigitalTwinInterfaces>): void;
  getInterfaces(digitalTwinId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.DigitalTwinInterfaces>, callback?: msRest.ServiceCallback<Models.DigitalTwinInterfaces>): Promise<Models.DigitalTwinGetInterfacesResponse> {
    return this.client.sendOperationRequest(
      {
        digitalTwinId,
        options
      },
      getInterfacesOperationSpec,
      callback) as Promise<Models.DigitalTwinGetInterfacesResponse>;
  }

  /**
   * @summary Updates desired properties of multiple interfaces.
   * Example URI: "digitalTwins/{digitalTwinId}/interfaces"
   * @param digitalTwinId Digital Twin ID. Format of digitalTwinId is DeviceId[~ModuleId]. ModuleId
   * is optional.
   * @param interfacesPatchInfo Multiple interfaces desired properties to update.
   * @param [options] The optional parameters
   * @returns Promise<Models.DigitalTwinUpdateInterfacesResponse>
   */
  updateInterfaces(digitalTwinId: string, interfacesPatchInfo: Models.DigitalTwinInterfacesPatch, options?: Models.DigitalTwinUpdateInterfacesOptionalParams): Promise<Models.DigitalTwinUpdateInterfacesResponse>;
  /**
   * @param digitalTwinId Digital Twin ID. Format of digitalTwinId is DeviceId[~ModuleId]. ModuleId
   * is optional.
   * @param interfacesPatchInfo Multiple interfaces desired properties to update.
   * @param callback The callback
   */
  updateInterfaces(digitalTwinId: string, interfacesPatchInfo: Models.DigitalTwinInterfacesPatch, callback: msRest.ServiceCallback<Models.DigitalTwinInterfaces>): void;
  /**
   * @param digitalTwinId Digital Twin ID. Format of digitalTwinId is DeviceId[~ModuleId]. ModuleId
   * is optional.
   * @param interfacesPatchInfo Multiple interfaces desired properties to update.
   * @param options The optional parameters
   * @param callback The callback
   */
  updateInterfaces(digitalTwinId: string, interfacesPatchInfo: Models.DigitalTwinInterfacesPatch, options: Models.DigitalTwinUpdateInterfacesOptionalParams, callback: msRest.ServiceCallback<Models.DigitalTwinInterfaces>): void;
  updateInterfaces(digitalTwinId: string, interfacesPatchInfo: Models.DigitalTwinInterfacesPatch, options?: Models.DigitalTwinUpdateInterfacesOptionalParams | msRest.ServiceCallback<Models.DigitalTwinInterfaces>, callback?: msRest.ServiceCallback<Models.DigitalTwinInterfaces>): Promise<Models.DigitalTwinUpdateInterfacesResponse> {
    return this.client.sendOperationRequest(
      {
        digitalTwinId,
        interfacesPatchInfo,
        options
      },
      updateInterfacesOperationSpec,
      callback) as Promise<Models.DigitalTwinUpdateInterfacesResponse>;
  }

  /**
   * @summary Gets the interface of given interfaceId.
   * Example URI: "digitalTwins/{digitalTwinId}/interfaces/{interfaceName}"
   * @param digitalTwinId Digital Twin ID. Format of digitalTwinId is DeviceId[~ModuleId]. ModuleId
   * is optional.
   * @param interfaceName The interface name.
   * @param [options] The optional parameters
   * @returns Promise<Models.DigitalTwinGetInterfaceResponse>
   */
  getInterface(digitalTwinId: string, interfaceName: string, options?: msRest.RequestOptionsBase): Promise<Models.DigitalTwinGetInterfaceResponse>;
  /**
   * @param digitalTwinId Digital Twin ID. Format of digitalTwinId is DeviceId[~ModuleId]. ModuleId
   * is optional.
   * @param interfaceName The interface name.
   * @param callback The callback
   */
  getInterface(digitalTwinId: string, interfaceName: string, callback: msRest.ServiceCallback<Models.DigitalTwinInterfaces>): void;
  /**
   * @param digitalTwinId Digital Twin ID. Format of digitalTwinId is DeviceId[~ModuleId]. ModuleId
   * is optional.
   * @param interfaceName The interface name.
   * @param options The optional parameters
   * @param callback The callback
   */
  getInterface(digitalTwinId: string, interfaceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DigitalTwinInterfaces>): void;
  getInterface(digitalTwinId: string, interfaceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.DigitalTwinInterfaces>, callback?: msRest.ServiceCallback<Models.DigitalTwinInterfaces>): Promise<Models.DigitalTwinGetInterfaceResponse> {
    return this.client.sendOperationRequest(
      {
        digitalTwinId,
        interfaceName,
        options
      },
      getInterfaceOperationSpec,
      callback) as Promise<Models.DigitalTwinGetInterfaceResponse>;
  }

  /**
   * @summary Returns a DigitalTwin model definition for the given id.
   * If "expand" is present in the query parameters and id is for a device capability model then it
   * returns
   * the capability metamodel with expanded interface definitions.
   * @param modelId Model id Ex: <example>urn:contoso:TemperatureSensor:1</example>
   * @param [options] The optional parameters
   * @returns Promise<Models.DigitalTwinGetDigitalTwinModelResponse>
   */
  getDigitalTwinModel(modelId: string, options?: Models.DigitalTwinGetDigitalTwinModelOptionalParams): Promise<Models.DigitalTwinGetDigitalTwinModelResponse>;
  /**
   * @param modelId Model id Ex: <example>urn:contoso:TemperatureSensor:1</example>
   * @param callback The callback
   */
  getDigitalTwinModel(modelId: string, callback: msRest.ServiceCallback<any>): void;
  /**
   * @param modelId Model id Ex: <example>urn:contoso:TemperatureSensor:1</example>
   * @param options The optional parameters
   * @param callback The callback
   */
  getDigitalTwinModel(modelId: string, options: Models.DigitalTwinGetDigitalTwinModelOptionalParams, callback: msRest.ServiceCallback<any>): void;
  getDigitalTwinModel(modelId: string, options?: Models.DigitalTwinGetDigitalTwinModelOptionalParams | msRest.ServiceCallback<any>, callback?: msRest.ServiceCallback<any>): Promise<Models.DigitalTwinGetDigitalTwinModelResponse> {
    return this.client.sendOperationRequest(
      {
        modelId,
        options
      },
      getDigitalTwinModelOperationSpec,
      callback) as Promise<Models.DigitalTwinGetDigitalTwinModelResponse>;
  }

  /**
   * Invoke a digital twin interface command.
   * @summary Invoke a digital twin interface command.
   * @param digitalTwinId
   * @param interfaceName
   * @param commandName
   * @param payload
   * @param [options] The optional parameters
   * @returns Promise<Models.DigitalTwinInvokeInterfaceCommandResponse>
   */
  invokeInterfaceCommand(digitalTwinId: string, interfaceName: string, commandName: string, payload: any, options?: Models.DigitalTwinInvokeInterfaceCommandOptionalParams): Promise<Models.DigitalTwinInvokeInterfaceCommandResponse>;
  /**
   * @param digitalTwinId
   * @param interfaceName
   * @param commandName
   * @param payload
   * @param callback The callback
   */
  invokeInterfaceCommand(digitalTwinId: string, interfaceName: string, commandName: string, payload: any, callback: msRest.ServiceCallback<any>): void;
  /**
   * @param digitalTwinId
   * @param interfaceName
   * @param commandName
   * @param payload
   * @param options The optional parameters
   * @param callback The callback
   */
  invokeInterfaceCommand(digitalTwinId: string, interfaceName: string, commandName: string, payload: any, options: Models.DigitalTwinInvokeInterfaceCommandOptionalParams, callback: msRest.ServiceCallback<any>): void;
  invokeInterfaceCommand(digitalTwinId: string, interfaceName: string, commandName: string, payload: any, options?: Models.DigitalTwinInvokeInterfaceCommandOptionalParams | msRest.ServiceCallback<any>, callback?: msRest.ServiceCallback<any>): Promise<Models.DigitalTwinInvokeInterfaceCommandResponse> {
    return this.client.sendOperationRequest(
      {
        digitalTwinId,
        interfaceName,
        commandName,
        payload,
        options
      },
      invokeInterfaceCommandOperationSpec,
      callback) as Promise<Models.DigitalTwinInvokeInterfaceCommandResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getInterfacesOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "digitalTwins/{digitalTwinId}/interfaces",
  urlParameters: [
    Parameters.digitalTwinId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  responses: {
    200: {
      bodyMapper: Mappers.DigitalTwinInterfaces,
      headersMapper: Mappers.DigitalTwinGetInterfacesHeaders
    },
    default: {}
  },
  serializer
};

const updateInterfacesOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "digitalTwins/{digitalTwinId}/interfaces",
  urlParameters: [
    Parameters.digitalTwinId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.ifMatch
  ],
  requestBody: {
    parameterPath: "interfacesPatchInfo",
    mapper: {
      ...Mappers.DigitalTwinInterfacesPatch,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.DigitalTwinInterfaces,
      headersMapper: Mappers.DigitalTwinUpdateInterfacesHeaders
    },
    default: {}
  },
  serializer
};

const getInterfaceOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "digitalTwins/{digitalTwinId}/interfaces/{interfaceName}",
  urlParameters: [
    Parameters.digitalTwinId,
    Parameters.interfaceName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  responses: {
    200: {
      bodyMapper: Mappers.DigitalTwinInterfaces,
      headersMapper: Mappers.DigitalTwinGetInterfaceHeaders
    },
    default: {}
  },
  serializer
};

const getDigitalTwinModelOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "digitalTwins/models/{modelId}",
  urlParameters: [
    Parameters.modelId
  ],
  queryParameters: [
    Parameters.expand,
    Parameters.apiVersion
  ],
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Object"
        }
      },
      headersMapper: Mappers.DigitalTwinGetDigitalTwinModelHeaders
    },
    default: {}
  },
  serializer
};

const invokeInterfaceCommandOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "digitalTwins/{digitalTwinId}/interfaces/{interfaceName}/commands/{commandName}",
  urlParameters: [
    Parameters.digitalTwinId,
    Parameters.interfaceName,
    Parameters.commandName
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.connectTimeoutInSeconds,
    Parameters.responseTimeoutInSeconds
  ],
  requestBody: {
    parameterPath: "payload",
    mapper: {
      required: true,
      serializedName: "payload",
      type: {
        name: "Object"
      }
    }
  },
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Object"
        }
      },
      headersMapper: Mappers.DigitalTwinInvokeInterfaceCommandHeaders
    },
    default: {}
  },
  serializer
};
