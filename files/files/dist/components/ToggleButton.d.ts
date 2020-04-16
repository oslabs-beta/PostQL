/// <reference types="react" />
export interface Props {
    checked: boolean;
    onChange: (e: any) => void;
    className?: string;
}
declare const ToggleButton: ({ checked, onChange, className }: Props) => JSX.Element;
export default ToggleButton;
