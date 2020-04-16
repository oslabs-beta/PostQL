import * as React from 'react';
import 'isomorphic-fetch';
import { Store } from 'redux';
export declare const store: Store<any>;
export interface Props {
    endpoint?: string;
    subscriptionEndpoint?: string;
    history?: any;
    match?: any;
    headers?: any;
}
export interface State {
    endpoint?: string;
    subscriptionEndpoint?: string;
    shareUrl?: string;
    loading: boolean;
    headers: any;
}
export interface ReduxProps {
    injectState: (state: any) => void;
}
export default class GraphQLBinAppHOC extends React.Component<Props> {
    render(): JSX.Element;
}
