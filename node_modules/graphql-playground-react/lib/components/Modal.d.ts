/// <reference types="react" />
export interface Props {
    isOpen: boolean;
    contentLabel: string;
    onRequestClose: () => void;
    children: JSX.Element;
}
declare const ModalComponent: ({ isOpen, onRequestClose, contentLabel, children, }: Props) => JSX.Element;
export default ModalComponent;
