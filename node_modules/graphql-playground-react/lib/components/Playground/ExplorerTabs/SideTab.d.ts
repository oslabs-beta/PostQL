import * as React from 'react';
export interface Props {
    label: string;
    activeColor: string;
    children: any;
    active?: boolean;
    tabWidth?: string;
    onClick?: () => any;
}
export default class SideTab extends React.PureComponent<Props> {
    render(): JSX.Element;
}
export interface TabProps {
    active: boolean;
    activeColor: string;
}
