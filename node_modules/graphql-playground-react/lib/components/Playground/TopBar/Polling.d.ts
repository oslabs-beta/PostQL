import * as React from 'react';
export interface Props {
    interval: number;
    onReloadSchema: () => void;
}
interface State {
    windowVisible: boolean;
}
declare class SchemaPolling extends React.Component<Props, State> {
    timer: any;
    constructor(props: any);
    componentDidMount(): void;
    componentWillUnmount(): void;
    setWindowVisibility: () => void;
    componentWillReceiveProps(nextProps: Props): void;
    render(): JSX.Element;
    private updatePolling;
    private clearTimer;
}
export default SchemaPolling;
