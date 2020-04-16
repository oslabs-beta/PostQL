import * as React from 'react';
export interface Props {
    onRequestClose: (endpoint: string) => void;
    endpoint: string;
}
export interface State {
    endpoint: string;
    valid?: boolean;
}
export default class EndpointPopup extends React.Component<Props, State> {
    checkEndpoint: any;
    constructor(props: any);
    componentDidMount(): void;
    render(): JSX.Element;
    private onChangeEndpoint;
    private submit;
    private close;
}
