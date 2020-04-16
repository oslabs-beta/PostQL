/// <reference types="react" />
export interface Props {
    purple?: boolean;
    hideArrow?: boolean;
    children?: any;
    onClick?: (e?: any) => void;
}
export declare const Button: ({ purple, hideArrow, children, onClick }: Props) => JSX.Element;
export declare const ButtonBox: any;
