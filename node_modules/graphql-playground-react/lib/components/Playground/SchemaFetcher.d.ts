import { GraphQLSchema } from 'graphql';
import { ApolloLink } from 'apollo-link';
import { Map } from 'immutable';
import { LinkCreatorProps } from '../../state/sessions/fetchingSagas';
import * as LRU from 'lru-cache';
export interface TracingSchemaTuple {
    schema: GraphQLSchema;
    tracingSupported: boolean;
}
export interface SchemaFetchProps {
    endpoint: string;
    headers?: string;
    useTracingHeader?: boolean;
}
export declare type LinkGetter = (session: LinkCreatorProps) => {
    link: ApolloLink;
};
/**
 * The SchemaFetcher class servers the purpose of providing the GraphQLSchema.
 * All sagas and every part of the UI is using this as a singleton to prevent
 * unnecessary calls to the server. We're not storing this information in Redux,
 * as it's a good practice to only store serializable data in Redux.
 * GraphQLSchema objects are serializable, but can easily exceed the localStorage
 * max. Another reason to keep this in a separate class is, that we have more
 * advanced requirements like caching.
 */
export declare class SchemaFetcher {
    /**
     * The `sessionCache` property is used for UI components, that need fast access to the current schema.
     * If the relevant information of the session didn't change (endpoint and headers),
     * the cached schema will be returned.
     */
    sessionCache: LRU.Cache<string, TracingSchemaTuple>;
    /**
     * The `schemaInstanceCache` property is used to prevent unnecessary buildClientSchema calls.
     * It's tested by stringifying the introspection result, which is orders of magnitude
     * faster than rebuilding the schema.
     */
    schemaInstanceCache: LRU.Cache<string, GraphQLSchema>;
    /**
     * The `linkGetter` property is a callback that provides an ApolloLink instance.
     * This can be overriden by the user.
     */
    linkGetter: LinkGetter;
    /**
     * In order to prevent duplicate fetching of the same schema, we keep track
     * of all subsequent calls to `.fetch` with the `fetching` property.
     */
    fetching: Map<string, Promise<any>>;
    /**
     * Other parts of the application can subscribe to change of a schema for a
     * particular session. These subscribers are being kept track of in the
     * `subscriptions` property
     */
    subscriptions: Map<string, (schema: GraphQLSchema) => void>;
    constructor(linkGetter: LinkGetter);
    fetch(session: SchemaFetchProps): Promise<any>;
    subscribe(session: SchemaFetchProps, cb: (schema: GraphQLSchema) => void): void;
    refetch(session: SchemaFetchProps): Promise<{
        schema: GraphQLSchema;
        tracingSupported: boolean;
    }>;
    hash(session: SchemaFetchProps): string;
    private getSchema;
    private fetchSchema;
}
