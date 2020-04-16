/// <reference types="react" />
export interface Props {
    type: any;
    x: number;
    y: number;
    clickable?: boolean;
    className?: string;
    beforeNode?: JSX.Element | null | false;
    afterNode?: JSX.Element | null | false;
    onSetWidth?: (width: number) => void;
    showParentName?: boolean;
    collapsable?: boolean;
    lastActive: boolean;
    sessionId?: string;
}
declare const _default: any;
export default _default;
