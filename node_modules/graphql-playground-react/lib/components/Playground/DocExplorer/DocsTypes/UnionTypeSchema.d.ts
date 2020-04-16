/// <reference types="react" />
export interface EnumTypeSchemaProps {
    schema: any;
    type: any;
    level: number;
    sessionId: string;
}
declare const UnionTypeSchema: ({ schema, type, level, sessionId, }: EnumTypeSchemaProps) => JSX.Element;
export default UnionTypeSchema;
