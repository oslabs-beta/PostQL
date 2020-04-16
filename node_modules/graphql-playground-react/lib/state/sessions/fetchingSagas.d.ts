import { ApolloLink } from 'apollo-link';
import { SubscriptionClient } from 'subscriptions-transport-ws';
import { ForkEffect } from 'redux-saga/effects';
import { SchemaFetcher } from '../../components/Playground/SchemaFetcher';
export declare function setSubscriptionEndpoint(endpoint: any): void;
export interface LinkCreatorProps {
    endpoint: string;
    headers?: Headers;
    credentials?: string;
}
export interface Headers {
    [key: string]: string | number | null;
}
export declare const defaultLinkCreator: (session: LinkCreatorProps, subscriptionEndpoint?: string) => {
    link: ApolloLink;
    subscriptionClient?: SubscriptionClient;
};
export declare let schemaFetcher: SchemaFetcher;
export declare function setLinkCreator(newLinkCreator: any): void;
export declare function formatError(error: any, fetchingSchema?: boolean): any;
export declare const fecthingSagas: ForkEffect<never>[];
export { ForkEffect };
