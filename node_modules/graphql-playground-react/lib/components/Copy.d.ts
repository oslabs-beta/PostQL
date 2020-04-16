import * as React from 'react';
export interface Props {
    text: string;
    color?: string;
    className?: string;
}
export interface State {
    copied: boolean;
}
export default class Copy extends React.Component<Props, State> {
    private copyTimer;
    constructor(props: any);
    componentWillUnmount(): void;
    render(): JSX.Element;
    private onCopy;
}
