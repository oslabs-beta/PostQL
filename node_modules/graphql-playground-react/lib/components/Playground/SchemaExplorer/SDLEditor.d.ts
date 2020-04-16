import * as React from 'react';
import { GraphQLSchema } from 'graphql';
import { ISettings } from '../../../types';
export interface Props {
    schema?: GraphQLSchema | null;
    isPollingSchema: boolean;
    getRef?: (ref: SDLEditor) => void;
    width?: number;
    sessionId?: string;
    settings: ISettings;
}
declare class SDLEditor extends React.PureComponent<Props, {
    overflowY: boolean;
}> {
    cachedValue: string;
    private editor;
    private node;
    constructor(props: any);
    componentDidMount(): void;
    componentDidUpdate(prevProps: Props): void;
    componentWillReceiveProps(nextProps: any): void;
    componentWillUnmount(): void;
    handleScroll: (e: any) => void;
    render(): JSX.Element;
    setRef: (ref: any) => void;
    getCodeMirror(): any;
    getClientHeight(): any;
}
export default SDLEditor;
