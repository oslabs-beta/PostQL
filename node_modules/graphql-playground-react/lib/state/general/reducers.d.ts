import { Record } from 'immutable';
declare const GeneralState_base: Record.Factory<{
    historyOpen: boolean;
    fixedEndpoint: boolean;
    endpoint: string;
    configString: string;
    envVars: {};
}>;
export declare class GeneralState extends GeneralState_base {
    historyOpen: boolean;
    fixedEndpoint: boolean;
    endpoint: string;
    configString: string;
    envVars: any;
}
declare const _default: any;
export default _default;
