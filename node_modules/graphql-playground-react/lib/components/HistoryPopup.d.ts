import { HistoryFilter } from '../types';
import { Session } from '../state/sessions/reducers';
import { OrderedMap } from 'immutable';
export interface ReduxProps {
    isOpen: boolean;
    closeHistory: () => void;
    items: OrderedMap<string, Session>;
    toggleHistoryItemStarring: (sessionId: string) => void;
    duplicateSession: (session: Session) => void;
}
export interface State {
    selectedFilter: HistoryFilter;
    selectedItemIndex: string;
    searchTerm: string;
}
declare const _default: any;
export default _default;
