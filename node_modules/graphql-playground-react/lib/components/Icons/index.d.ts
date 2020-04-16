/// <reference types="react" />
interface IProps {
    title?: string;
    color?: string;
    width?: number;
    height?: number;
    stroke?: string;
    fill?: string;
    strokeWidth?: number;
    className?: string;
    children?: any;
    viewBox?: string;
    y?: string;
    x?: string;
    onClick?: () => void;
}
export declare const AddIcon: (props: IProps) => JSX.Element;
export declare const AddFullIcon: (props: IProps) => JSX.Element;
export declare const FullArrowRightIcon: (props: IProps) => JSX.Element;
export declare const SettingsIcon: (props: IProps) => JSX.Element;
export declare const CrossIcon: (props: IProps) => JSX.Element;
export declare const ArrowRight: (props: IProps) => JSX.Element;
export declare const History: (props: IProps) => JSX.Element;
export declare const Star: ({ height, width, stroke, fill, strokeWidth, onClick, ...props }: IProps) => JSX.Element;
export declare const Search: ({ height, width, strokeWidth, color, ...props }: IProps) => JSX.Element;
export declare const ShareIcon: ({ width, height, color, ...props }: IProps) => JSX.Element;
export declare const Triangle: (props: IProps) => JSX.Element;
export {};
