export interface TracingFormat {
    version: 1;
    startTime: string;
    endTime: string;
    duration: number;
    execution: {
        resolvers: Array<{
            path: Array<string | number>;
            parentType: string;
            fieldName: string;
            returnType: string;
            startOffset: number;
            duration: number;
        }>;
    };
}
export interface ReduxProps {
    tracing?: TracingFormat;
    tracingSupported?: boolean;
    startTime?: Date;
    endTime?: Date;
    queryRunning: boolean;
    query: any;
}
declare const _default: any;
export default _default;
