import { ThemeInterface } from '../styled';
export interface SharingProps {
    allTabs: boolean;
    headers: boolean;
    history: boolean;
    theme: ThemeInterface;
    toggleShareHistory: () => void;
    toggleShareHeaders: () => void;
    toggleShareAllTabs: () => void;
    share: () => void;
    shareUrl?: string;
    reshare: boolean;
    isSharingAuthorization: boolean;
    children?: any;
}
export interface State {
    open: boolean;
}
declare const _default: any;
export default _default;
