import * as React from 'react';
export interface Props {
    open: boolean;
    children: any;
    anchorOrigin?: {
        vertical?: 'bottom' | 'top';
        horizontal?: 'left' | 'right' | 'center';
    };
    renderAfterContent?: () => any;
    onClick?: () => void;
    onClose?: (e?: any) => void;
}
declare class Tooltip extends React.PureComponent<Props, {}> {
    static defaultProps: Partial<Props>;
    componentDidMount(): void;
    componentWillUnmount(): void;
    handleClickOutside: (event: any) => void;
    render(): JSX.Element;
}
export default Tooltip;
