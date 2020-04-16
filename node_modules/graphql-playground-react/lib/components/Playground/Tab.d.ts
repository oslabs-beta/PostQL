import { Session } from '../../state/sessions/reducers';
export interface Props {
    session: Session;
    selectedSessionId: string;
}
export interface ReduxProps {
    selectTab: (sessionId: string) => void;
    closeTab: (sessionId: string) => void;
    editName: (name: string) => void;
}
export interface State {
    overCross: boolean;
    editingName: boolean;
}
declare const _default: any;
export default _default;
