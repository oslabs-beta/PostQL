/// <reference types="react" />
export interface EnumTypeSchemaProps {
    type: any;
    sdlType?: boolean;
}
declare const EnumTypeSchema: ({ type, sdlType }: EnumTypeSchemaProps) => JSX.Element;
export default EnumTypeSchema;
