import * as React from 'react';
import { GraphQLSchema } from 'graphql';
export interface Props {
    schema: GraphQLSchema;
    sessionId: string;
    children: Array<React.ReactElement<any>>;
    maxWidth: number;
    setWidth: (props?: any) => any;
    setActiveContentRef: (ref: any) => void;
}
export interface SideTabContentProps {
    schema: GraphQLSchema;
    sessionId?: string;
    ref?: any;
    setWidth?: (props?: any) => any;
}
export interface State {
    searchValue: string;
    widthMap: any;
}
declare const ConnectedGraphDocs: any;
export default ConnectedGraphDocs;
