import * as React from 'react';
export interface Props {
    schema: any;
    field: any;
    level: number;
    sessionId: string;
}
export interface State {
    showDeprecated: boolean;
}
export default class FieldDoc extends React.Component<Props, State> {
    state: {
        showDeprecated: boolean;
    };
    ref: any;
    componentDidMount(): void;
    shouldComponentUpdate(nextProps: any): boolean;
    scrollToRight(): void;
    setRef: (ref: any) => void;
    render(): JSX.Element;
}
