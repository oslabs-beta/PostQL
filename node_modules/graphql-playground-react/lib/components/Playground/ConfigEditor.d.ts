import * as React from 'react';
export interface Props {
    value?: string;
    onEdit?: (value: string) => void;
    onPrettifyQuery?: () => void;
    onRunQuery?: () => void;
    editorTheme?: string;
    readOnly?: boolean;
    isYaml?: boolean;
}
/**
 * The editor to edit json and yaml
 */
export declare class ConfigEditor extends React.Component<Props, {}> {
    editor: any;
    cachedValue: any;
    node: HTMLDivElement;
    ignoreChangeEvent: boolean;
    constructor(props: any);
    componentDidMount(): void;
    componentDidUpdate(prevProps: any): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
    setNode: (node: any) => void;
    /**
     * Public API for retrieving the CodeMirror instance from this
     * React component.
     */
    getCodeMirror(): any;
    /**
     * Public API for retrieving the DOM client height for this component.
     */
    getClientHeight(): number;
    private onKeyUp;
    private onEdit;
}
