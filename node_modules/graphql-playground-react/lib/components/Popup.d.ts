import * as React from 'react';
export interface Props {
    onRequestClose: () => void;
    width?: number;
    closeInside?: boolean;
    darkBg?: boolean;
}
export declare const fieldModalStyle: {
    overlay: {
        zIndex: number;
        backgroundColor: string;
        display: string;
        alignItems: string;
        justifyContent: string;
    };
    content: {
        position: string;
        width: number;
        height: string;
        top: string;
        left: string;
        right: string;
        bottom: string;
        borderRadius: number;
        padding: number;
        border: string;
        background: string;
        overflow: string;
    };
};
export default class Popup extends React.Component<Props, {}> {
    render(): JSX.Element;
}
