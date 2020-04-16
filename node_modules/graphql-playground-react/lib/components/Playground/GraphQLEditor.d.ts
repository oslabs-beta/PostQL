import { GraphQLSchema } from 'graphql';
import { List } from 'immutable';
import { ResponseRecord } from '../../state/sessions/reducers';
/**
 * The top-level React component for GraphQLEditor, intended to encompass the entire
 * browser viewport.
 */
export interface Props {
    onRef?: any;
    shareEnabled?: boolean;
    fixedEndpoint?: boolean;
    schema?: GraphQLSchema;
}
export interface ReduxProps {
    setStacks: (sessionId: string, stack: any[]) => void;
    updateQueryFacts: () => void;
    runQueryAtPosition: (position: number) => void;
    fetchSchema: () => void;
    openQueryVariables: () => void;
    closeQueryVariables: () => void;
    openVariables: (height: number) => void;
    closeVariables: (height: number) => void;
    openTracing: (height: number) => void;
    closeTracing: (height: number) => void;
    toggleTracing: () => void;
    toggleVariables: () => void;
    setEditorFlex: (flex: number) => void;
    stopQuery: (sessionId: string) => void;
    changeWidthDocs: (sessionId: string, width: number) => void;
    navStack: any[];
    docsOpen: boolean;
    queryRunning: boolean;
    responses: List<ResponseRecord>;
    subscriptionActive: boolean;
    variableEditorOpen: boolean;
    variableEditorHeight: number;
    currentQueryStartTime?: Date;
    currentQueryEndTime?: Date;
    responseTracingOpen: boolean;
    responseTracingHeight: number;
    responseExtensions: any;
    tracingSupported?: boolean;
    editorFlex: number;
    headers: string;
    headersCount: number;
    queryVariablesActive: boolean;
    operationName: string;
    query: string;
    sessionId: string;
}
export interface SimpleProps {
    children?: any;
}
export interface ToolbarButtonProps extends SimpleProps {
    onClick: (e: any) => void;
    title: string;
    label: string;
}
declare const _default: any;
export default _default;
