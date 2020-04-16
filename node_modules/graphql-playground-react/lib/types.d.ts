import { Observable, FetchResult } from 'apollo-link';
export declare type ApolloLinkExecuteResponse = Observable<FetchResult>;
export declare type HistoryFilter = 'HISTORY' | 'STARRED';
export declare type Environment = 'Node' | 'Browser' | 'Cli';
export declare type GraphQLClient = 'fetch' | 'relay' | 'apollo' | 'graphql-request' | 'curl';
export declare type Theme = 'dark' | 'light';
export declare type CursorShape = 'line' | 'block' | 'underline';
export interface ISettings {
    ['editor.cursorShape']: CursorShape;
    ['editor.fontFamily']: string;
    ['editor.fontSize']: number;
    ['editor.reuseHeaders']: boolean;
    ['editor.theme']: Theme;
    ['general.betaUpdates']: boolean;
    ['prettier.printWidth']: number;
    ['prettier.tabWidth']: number;
    ['prettier.useTabs']: boolean;
    ['request.credentials']: 'omit' | 'include' | 'same-origin';
    ['schema.disableComments']: boolean;
    ['schema.polling.enable']: boolean;
    ['schema.polling.endpointFilter']: string;
    ['schema.polling.interval']: number;
    ['tracing.hideTracingResponse']: boolean;
    ['tracing.tracingSupported']: boolean;
}
