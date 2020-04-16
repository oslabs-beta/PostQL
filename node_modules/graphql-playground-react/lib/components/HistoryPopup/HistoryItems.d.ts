import { Session } from '../../state/sessions/reducers';
import { OrderedMap } from 'immutable';
import { ThemeInterface } from '../../styled';
export interface Props {
    items: OrderedMap<string, Session>;
    selectedItemIndex: string;
    onItemSelect: (index: string) => void;
    onItemStarToggled: (sessionId: string) => void;
    searchTerm: string;
    theme: ThemeInterface;
}
declare const _default: any;
export default _default;
