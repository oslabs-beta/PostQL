import { Record, OrderedMap } from 'immutable';
declare const AppHistory_base: Record.Factory<{
    items: OrderedMap<unknown, unknown>;
}>;
export declare class AppHistory extends AppHistory_base {
    items: OrderedMap<string, AppHistoryItem>;
}
declare const AppHistoryItem_base: Record.Factory<any>;
export declare class AppHistoryItem extends AppHistoryItem_base {
    type: 'local' | 'endpoint';
    configString?: string;
    configPath?: string;
    endpoint?: string;
    folderName?: string;
    env?: any;
    platformToken?: string;
    lastOpened: Date;
    config?: any;
}
declare const _default: any;
export default _default;
export declare const getAppHistory: (state: any) => any;
