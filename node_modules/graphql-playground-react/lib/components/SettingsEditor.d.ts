import * as React from 'react';
export interface Props {
    value: string;
    onChange: (value: string) => void;
    onSave: () => void;
    isYaml?: boolean;
    isConfig?: boolean;
    readOnly?: boolean;
}
export declare class SettingsEditor extends React.Component<Props, {}> {
    componentDidMount(): void;
    render(): JSX.Element;
    private handleKeydown;
}
export declare const PlaygroundSettingsEditor: any;
export declare const GraphQLConfigEditor: any;
