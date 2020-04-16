import { GraphQLField } from 'graphql';
import { Map, List, Record } from 'immutable';
export declare type DocsState = Map<string, DocsSessionState>;
export interface NavItem {
    x: number;
    y: number;
    field: GraphQLField<any, any>;
}
export interface DocsSessionState {
    readonly navStack: List<Map<string, NavItem>>;
    readonly docsOpen: boolean;
    readonly docsWidth: number;
    readonly keyMove: boolean;
    readonly activeTabIdx: number | null;
}
declare const DocsSession_base: Record.Factory<{
    navStack: List<any>;
    docsOpen: boolean;
    docsWidth: number;
    activeTabIdx: any;
    keyMove: boolean;
}>;
export declare class DocsSession extends DocsSession_base {
    toJSON(): {
        navStack: List<any>;
        docsOpen: boolean;
        docsWidth: number;
        activeTabIdx: any;
        keyMove: boolean;
    };
}
declare const _default: any;
export default _default;
