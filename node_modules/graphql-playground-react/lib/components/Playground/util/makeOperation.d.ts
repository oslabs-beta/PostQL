import { Operation } from 'apollo-link';
export interface GraphQLRequestData {
    query: string;
    variables?: any;
    operationName?: string;
    extensions?: any;
}
export declare function makeOperation(request: GraphQLRequestData): Operation;
