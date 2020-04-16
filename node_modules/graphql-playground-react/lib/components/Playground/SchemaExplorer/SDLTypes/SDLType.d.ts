import * as React from 'react';
export interface Props {
    type: any;
    className?: string;
    beforeNode?: JSX.Element | null | false;
    afterNode?: JSX.Element | null | false;
    showParentName?: boolean;
    collapsable?: boolean;
}
export default class SDLType extends React.Component<Props> {
    render(): JSX.Element;
}
