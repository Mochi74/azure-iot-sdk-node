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
import { IotHubGatewayServiceAPIsContext } from "../iotHubGatewayServiceAPIsContext";

/** Class representing a DigitalTwin. */
export class DigitalTwin {
  private readonly client: IotHubGatewayServiceAPIsContext;

  /**
   * Create a DigitalTwin.
   * @param {IotHubGatewayServiceAPIsContext} client Reference to the service client.
   */
  constructor(client: IotHubGatewayServiceAPIsContext) {
    this.client = client;
  }

  /**
   * @summary Gets a digital twin.
   * @param id Digital Twin ID.
   * @param [options] The optional parameters
   * @returns Promise<Models.DigitalTwinGetDigitalTwinResponse>
   */
  getDigitalTwin(id: string, options?: msRest.RequestOptionsBase): Promise<Models.DigitalTwinGetDigitalTwinResponse>;
  /**
   * @param id Digital Twin ID.
   * @param callback The callback
   */
  getDigitalTwin(id: string, callback: msRest.ServiceCallback<any>): void;
  /**
   * @param id Digital Twin ID.
   * @param options The optional parameters
   * @param callback The callback
   */
  getDigitalTwin(id: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<any>): void;
  getDigitalTwin(id: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<any>, callback?: msRest.ServiceCallback<any>): Promise<Models.DigitalTwinGetDigitalTwinResponse> {
    return this.client.sendOperationRequest(
      {
        id,
        options
      },
      getDigitalTwinOperationSpec,
      callback) as Promise<Models.DigitalTwinGetDigitalTwinResponse>;
  }

  /**
   * @summary Updates a digital twin.
   * @param id Digital Twin ID.
   * @param digitalTwinPatch json-patch contents to update.
   * @param [options] The optional parameters
   * @returns Promise<Models.DigitalTwinUpdateDigitalTwinResponse>
   */
  updateDigitalTwin(id: string, digitalTwinPatch: any[], options?: Models.DigitalTwinUpdateDigitalTwinOptionalParams): Promise<Models.DigitalTwinUpdateDigitalTwinResponse>;
  /**
   * @param id Digital Twin ID.
   * @param digitalTwinPatch json-patch contents to update.
   * @param callback The callback
   */
  updateDigitalTwin(id: string, digitalTwinPatch: any[], callback: msRest.ServiceCallback<void>): void;
  /**
   * @param id Digital Twin ID.
   * @param digitalTwinPatch json-patch contents to update.
   * @param options The optional parameters
   * @param callback The callback
   */
  updateDigitalTwin(id: string, digitalTwinPatch: any[], options: Models.DigitalTwinUpdateDigitalTwinOptionalParams, callback: msRest.ServiceCallback<void>): void;
  updateDigitalTwin(id: string, digitalTwinPatch: any[], options?: Models.DigitalTwinUpdateDigitalTwinOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<Models.DigitalTwinUpdateDigitalTwinResponse> {
    return this.client.sendOperationRequest(
      {
        id,
        digitalTwinPatch,
        options
      },
      updateDigitalTwinOperationSpec,
      callback) as Promise<Models.DigitalTwinUpdateDigitalTwinResponse>;
  }

  /**
   * Invoke a digital twin root level command.
   * @summary Invoke a digital twin root level command.
   * @param id
   * @param commandName
   * @param payload
   * @param [options] The optional parameters
   * @returns Promise<Models.DigitalTwinInvokeRootLevelCommandResponse>
   */
  invokeRootLevelCommand(id: string, commandName: string, payload: any, options?: Models.DigitalTwinInvokeRootLevelCommandOptionalParams): Promise<Models.DigitalTwinInvokeRootLevelCommandResponse>;
  /**
   * @param id
   * @param commandName
   * @param payload
   * @param callback The callback
   */
  invokeRootLevelCommand(id: string, commandName: string, payload: any, callback: msRest.ServiceCallback<any>): void;
  /**
   * @param id
   * @param commandName
   * @param payload
   * @param options The optional parameters
   * @param callback The callback
   */
  invokeRootLevelCommand(id: string, commandName: string, payload: any, options: Models.DigitalTwinInvokeRootLevelCommandOptionalParams, callback: msRest.ServiceCallback<any>): void;
  invokeRootLevelCommand(id: string, commandName: string, payload: any, options?: Models.DigitalTwinInvokeRootLevelCommandOptionalParams | msRest.ServiceCallback<any>, callback?: msRest.ServiceCallback<any>): Promise<Models.DigitalTwinInvokeRootLevelCommandResponse> {
    return this.client.sendOperationRequest(
      {
        id,
        commandName,
        payload,
        options
      },
      invokeRootLevelCommandOperationSpec,
      callback) as Promise<Models.DigitalTwinInvokeRootLevelCommandResponse>;
  }

  /**
   * Invoke a digital twin command.
   * @summary Invoke a digital twin command.
   * @param id
   * @param componentPath
   * @param commandName
   * @param payload
   * @param [options] The optional parameters
   * @returns Promise<Models.DigitalTwinInvokeComponentCommandResponse>
   */
  invokeComponentCommand(id: string, componentPath: string, commandName: string, payload: any, options?: Models.DigitalTwinInvokeComponentCommandOptionalParams): Promise<Models.DigitalTwinInvokeComponentCommandResponse>;
  /**
   * @param id
   * @param componentPath
   * @param commandName
   * @param payload
   * @param callback The callback
   */
  invokeComponentCommand(id: string, componentPath: string, commandName: string, payload: any, callback: msRest.ServiceCallback<any>): void;
  /**
   * @param id
   * @param componentPath
   * @param commandName
   * @param payload
   * @param options The optional parameters
   * @param callback The callback
   */
  invokeComponentCommand(id: string, componentPath: string, commandName: string, payload: any, options: Models.DigitalTwinInvokeComponentCommandOptionalParams, callback: msRest.ServiceCallback<any>): void;
  invokeComponentCommand(id: string, componentPath: string, commandName: string, payload: any, options?: Models.DigitalTwinInvokeComponentCommandOptionalParams | msRest.ServiceCallback<any>, callback?: msRest.ServiceCallback<any>): Promise<Models.DigitalTwinInvokeComponentCommandResponse> {
    return this.client.sendOperationRequest(
      {
        id,
        componentPath,
        commandName,
        payload,
        options
      },
      invokeComponentCommandOperationSpec,
      callback) as Promise<Models.DigitalTwinInvokeComponentCommandResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getDigitalTwinOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "digitaltwins/{id}",
  urlParameters: [
    Parameters.id
  ],
  queryParameters: [
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
      headersMapper: Mappers.DigitalTwinGetDigitalTwinHeaders
    },
    default: {}
  },
  serializer
};

const updateDigitalTwinOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "digitaltwins/{id}",
  urlParameters: [
    Parameters.id
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.ifMatch
  ],
  requestBody: {
    parameterPath: "digitalTwinPatch",
    mapper: {
      required: true,
      serializedName: "digitalTwinPatch",
      type: {
        name: "Sequence",
        element: {
          type: {
            name: "Object"
          }
        }
      }
    }
  },
  responses: {
    202: {
      headersMapper: Mappers.DigitalTwinUpdateDigitalTwinHeaders
    },
    default: {}
  },
  serializer
};

const invokeRootLevelCommandOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "digitaltwins/{id}/commands/{commandName}",
  urlParameters: [
    Parameters.id,
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
      headersMapper: Mappers.DigitalTwinInvokeRootLevelCommandHeaders
    },
    default: {}
  },
  serializer
};

const invokeComponentCommandOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "digitaltwins/{id}/components/{componentPath}/commands/{commandName}",
  urlParameters: [
    Parameters.id,
    Parameters.componentPath,
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
      headersMapper: Mappers.DigitalTwinInvokeComponentCommandHeaders
    },
    default: {}
  },
  serializer
};
