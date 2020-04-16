import * as React from 'react';
export interface State {
    component?: any;
}
declare const asyncComponent: (importComponent: any) => {
    new (props: Readonly<any>): {
        state: State;
        componentDidMount(): void;
        render(): JSX.Element;
        context: any;
        setState<K extends "component">(state: State | ((prevState: Readonly<State>, props: Readonly<any>) => State | Pick<State, K>) | Pick<State, K>, callback?: () => void): void;
        forceUpdate(callback?: () => void): void;
        readonly props: Readonly<any> & Readonly<{
            children?: React.ReactNode;
        }>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        shouldComponentUpdate?(nextProps: Readonly<any>, nextState: Readonly<State>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<any>, prevState: Readonly<State>): any;
        componentDidUpdate?(prevProps: Readonly<any>, prevState: Readonly<State>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<any>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<any>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<any>, nextState: Readonly<State>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<any>, nextState: Readonly<State>, nextContext: any): void;
    };
    new (props: any, context?: any): {
        state: State;
        componentDidMount(): void;
        render(): JSX.Element;
        context: any;
        setState<K extends "component">(state: State | ((prevState: Readonly<State>, props: Readonly<any>) => State | Pick<State, K>) | Pick<State, K>, callback?: () => void): void;
        forceUpdate(callback?: () => void): void;
        readonly props: Readonly<any> & Readonly<{
            children?: React.ReactNode;
        }>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        shouldComponentUpdate?(nextProps: Readonly<any>, nextState: Readonly<State>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<any>, prevState: Readonly<State>): any;
        componentDidUpdate?(prevProps: Readonly<any>, prevState: Readonly<State>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<any>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<any>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<any>, nextState: Readonly<State>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<any>, nextState: Readonly<State>, nextContext: any): void;
    };
    contextType?: React.Context<any>;
};
export default asyncComponent;
