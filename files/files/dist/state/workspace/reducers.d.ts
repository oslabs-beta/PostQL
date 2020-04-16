import { DocsState } from '../docs/reducers';
import { SessionState } from '../sessions/reducers';
import { SharingState } from '../sharing/reducers';
import { HistoryState } from '../history/reducers';
import { Map, Record, OrderedMap } from 'immutable';
import { GeneralState } from '../general/reducers';
import { AppHistory } from '../appHistory/reducers';
import { ISettings } from '../../types';
export declare function getSelectedWorkspaceId(state: any): any;
export declare function getSelectedWorkspace(state: any): any;
declare const Workspace_base: Record.Factory<{
    docs: Map<string, unknown>;
    sessions: SessionState;
    sharing: SharingState;
    history: OrderedMap<unknown, unknown>;
}>;
export declare class Workspace extends Workspace_base {
    docs: DocsState;
    sessions: SessionState;
    sharing: SharingState;
    history: HistoryState;
}
export declare const defaultSettings: ISettings;
declare const RootState_base: Record.Factory<{
    workspaces: Map<string, any>;
    selectedWorkspace: string;
    settingsString: string;
    stateInjected: boolean;
    appHistory: AppHistory;
    general: GeneralState;
}>;
export declare class RootState extends RootState_base {
    workspaces: Map<string, Workspace>;
    selectedWorkspace: string;
    settingsString: string;
    stateInjected: false;
    appHistory: AppHistory;
    general: GeneralState;
}
export declare const rootReducer: (state: RootState, action: any) => any;
export declare function makeWorkspace(endpoint: any): any;
export default rootReducer;
export declare const getSessionCounts: (arg: any) => any;
export declare const getSettingsString: (state: any) => any;
export declare const getSettings: import("reselect").OutputSelector<any, any, (res: any) => any>;
export declare function normalizeSettingsString(settingsString: any): string;
export declare const getTheme: (state: any, customSettings: any) => any;
