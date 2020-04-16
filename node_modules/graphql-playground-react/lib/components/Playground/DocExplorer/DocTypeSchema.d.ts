/// <reference types="react" />
export interface DocTypeSchemaProps {
    type: any;
    fields: any[];
    interfaces: any[];
    level: number;
    sessionId: string;
}
declare const _default: ({ type, fields, interfaces, level }: DocTypeSchemaProps) => JSX.Element;
export default _default;
