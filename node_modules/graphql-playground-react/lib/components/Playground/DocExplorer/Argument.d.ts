/// <reference types="react" />
export interface Props {
    arg: any;
    x: number;
    y: number;
    showDefaultValue?: boolean;
    sessionId: string;
}
export default function Argument({ arg, showDefaultValue, x, y, }: Props): JSX.Element;
