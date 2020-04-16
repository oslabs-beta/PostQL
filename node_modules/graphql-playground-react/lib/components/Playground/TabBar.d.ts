import { Session } from '../../state/sessions/reducers';
export interface Props {
    onNewSession: any;
    isApp?: boolean;
}
export interface ReduxProps {
    sessions: Session[];
    selectedSessionId: string;
    reorderTabs: (src: number, dest: number) => void;
}
declare const _default: any;
export default _default;
