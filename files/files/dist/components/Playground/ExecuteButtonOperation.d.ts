import * as React from 'react';
export interface Props {
    operation: any;
    onMouseOver: (operation: any) => void;
    onMouseOut: () => void;
    onMouseUp: (operation: any) => void;
    highlight: any;
}
declare class ExecuteButtonOperation extends React.PureComponent<Props> {
    render(): JSX.Element;
    private onMouseOver;
    private onMouseUp;
}
export default ExecuteButtonOperation;
