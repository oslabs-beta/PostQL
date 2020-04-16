import { GraphQLSchema } from 'graphql';
interface Options {
    commentDescriptions?: boolean;
}
export declare function sdlArray(schema: GraphQLSchema, options?: Options): ({
    instanceOf: string;
    fields: any[];
    interfaces: any[];
    args: any[];
    implementations: any[];
    name: string;
    description: string;
    serialize: import("graphql").GraphQLScalarSerializer<any>;
    parseValue: import("graphql").GraphQLScalarValueParser<any>;
    parseLiteral: import("graphql").GraphQLScalarLiteralParser<any>;
    extensions: Readonly<Record<string, any>>;
    astNode: import("graphql").ScalarTypeDefinitionNode;
    extensionASTNodes: readonly import("graphql").ScalarTypeExtensionNode[];
} | {
    instanceOf: string;
    fields: any[];
    interfaces: any[];
    args: any[];
    implementations: any[];
    name: string;
    description: string;
    isTypeOf: import("graphql").GraphQLIsTypeOfFn<any, any>;
    extensions: Readonly<Record<string, any>>;
    astNode: import("graphql").ObjectTypeDefinitionNode;
    extensionASTNodes: readonly import("graphql").ObjectTypeExtensionNode[];
} | {
    instanceOf: string;
    fields: any[];
    interfaces: any[];
    args: any[];
    implementations: any[];
    name: string;
    description: string;
    resolveType: import("graphql").GraphQLTypeResolver<any, any>;
    extensions: Readonly<Record<string, any>>;
    astNode?: import("graphql").InterfaceTypeDefinitionNode;
    extensionASTNodes: readonly import("graphql").InterfaceTypeExtensionNode[];
} | {
    instanceOf: string;
    fields: any[];
    interfaces: any[];
    args: any[];
    implementations: any[];
    name: string;
    description: string;
    resolveType: import("graphql").GraphQLTypeResolver<any, any>;
    extensions: Readonly<Record<string, any>>;
    astNode: import("graphql").UnionTypeDefinitionNode;
    extensionASTNodes: readonly import("graphql").UnionTypeExtensionNode[];
} | {
    instanceOf: string;
    fields: any[];
    interfaces: any[];
    args: any[];
    implementations: any[];
    name: string;
    description: string;
    extensions: Readonly<Record<string, any>>;
    astNode: import("graphql").EnumTypeDefinitionNode;
    extensionASTNodes: readonly import("graphql").EnumTypeExtensionNode[];
} | {
    instanceOf: string;
    fields: any[];
    interfaces: any[];
    args: any[];
    implementations: any[];
    name: string;
    description: string;
    extensions: Readonly<Record<string, any>>;
    astNode: import("graphql").InputObjectTypeDefinitionNode;
    extensionASTNodes: readonly import("graphql").InputObjectTypeExtensionNode[];
})[];
export declare function getSDL(schema: GraphQLSchema | null | undefined, commentsDisabled?: boolean): string;
export declare function downloadSchema(schema: GraphQLSchema, type: string): void;
export {};
