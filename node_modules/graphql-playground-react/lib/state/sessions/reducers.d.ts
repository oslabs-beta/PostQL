import { OrderedMap, Map, List, Record } from 'immutable';
export interface SessionStateProps {
    sessions: OrderedMap<string, Session>;
    selectedSessionId: string;
    sessionCount: number;
    headers?: string;
}
export interface Tab {
    endpoint: string;
    query: string;
    name?: string;
    variables?: string;
    responses?: string[];
    headers?: {
        [key: string]: string;
    };
}
declare const Session_base: Record.Factory<any>;
export declare class Session extends Session_base {
    id: string;
    endpoint: string;
    query: string;
    file?: string;
    variables: string;
    responses?: List<ResponseRecord>;
    operationName?: string;
    queryRunning: boolean;
    subscriptionActive: boolean;
    operations: List<OperationDefinition>;
    variableToType: VariableToType;
    queryTypes: QueryTypes;
    date: Date;
    hasMutation: boolean;
    hasSubscription: boolean;
    hasQuery: boolean;
    isFile?: boolean;
    starred?: boolean;
    name?: string;
    filePath?: string;
    selectedUserToken?: string;
    headers?: string;
    absolutePath?: string;
    isSettingsTab?: boolean;
    isConfigTab?: boolean;
    currentQueryStartTime?: Date;
    currentQueryEndTime?: Date;
    isReloadingSchema: boolean;
    isSchemaPendingUpdate: boolean;
    responseExtensions: any;
    queryVariablesActive: boolean;
    endpointUnreachable: boolean;
    editorFlex: number;
    variableEditorOpen: boolean;
    variableEditorHeight: number;
    responseTracingOpen: boolean;
    responseTracingHeight: number;
    nextQueryStartTime?: Date;
    tracingSupported?: boolean;
    docExplorerWidth: number;
    changed?: boolean;
    scrollTop?: number;
    toJSON(): any;
}
export declare type VariableToType = Map<string, any>;
export interface QueryTypes {
    firstOperationName: string | null;
    subscription: boolean;
    query: boolean;
    mutation: boolean;
}
export interface OperationDefinition {
    startLine: number;
    endLine: number;
    name: string;
}
export interface ResponseType {
    resultID: string;
    date: string;
    time: Date;
}
declare const ResponseRecord_base: Record.Factory<{
    resultID: string;
    date: string;
    time: Date;
    isSchemaError: boolean;
}>;
export declare class ResponseRecord extends ResponseRecord_base {
    resultID: string;
    date: string;
    time: Date;
    isSchemaError: boolean;
}
export declare function sessionFromTab(tab: Tab): Session;
declare const SessionState_base: Record.Factory<{
    sessions: OrderedMap<string, unknown>;
    selectedSessionId: string;
    sessionCount: number;
    headers: string;
}>;
export declare class SessionState extends SessionState_base {
    sessions: OrderedMap<string, Session>;
    selectedSessionId: string;
    sessionCount: number;
    headers: string;
}
export declare function makeSessionState(endpoint: any): SessionState;
declare const _default: (state: any, action: any) => SessionState;
export default _default;
