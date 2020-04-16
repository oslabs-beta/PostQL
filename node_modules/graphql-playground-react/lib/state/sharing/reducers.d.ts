import { Record } from 'immutable';
declare const SharingState_base: Record.Factory<{
    history: boolean;
    headers: boolean;
    allTabs: boolean;
    shareUrl: any;
}>;
export declare class SharingState extends SharingState_base {
    history: boolean;
    headers: boolean;
    allTabs: boolean;
    shareUrl: any;
}
declare const _default: any;
export default _default;
