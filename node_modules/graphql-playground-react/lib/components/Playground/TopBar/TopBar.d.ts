import { ISettings } from '../../../types';
export interface Props {
    endpoint: string;
    shareEnabled?: boolean;
    fixedEndpoint?: boolean;
    isPollingSchema: boolean;
    endpointUnreachable: boolean;
    editEndpoint: (value: string) => void;
    prettifyQuery: () => void;
    openHistory: () => void;
    share: () => void;
    refetchSchema: () => void;
    settings: ISettings;
}
declare const _default: any;
export default _default;
export declare const Button: any;
