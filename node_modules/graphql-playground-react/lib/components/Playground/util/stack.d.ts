import { Map } from 'immutable';
export declare function getNewStack(root: any, schema: any, stack: Map<any, any>): Map<any, any>;
export declare function getDeeperType(type: any, depth?: number): any;
export interface SerializedRoot {
    queries: any[];
    mutations: any[];
    subscriptions: any[];
}
export declare function getRootMap(schema: any): any;
export declare function serializeRoot(schema: any): SerializedRoot;
export declare function getElementRoot(obj: any, index: number): any;
export interface SerializedObj {
    fields: any[];
    interfaces: any[];
    args: any[];
    implementations: any[];
}
export declare function serialize(schema: any, field: any): SerializedObj;
export declare function getElement(obj: any, index: number): any;
export declare function getElementIndex(schema: any, main: any, element: any): number;
