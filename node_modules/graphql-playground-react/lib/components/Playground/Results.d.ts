import { List } from 'immutable';
import { ResponseRecord } from '../../state/sessions/reducers';
export interface Props {
    setRef: (ref: any) => void;
}
export interface ReduxProps {
    responses: List<ResponseRecord>;
}
declare const _default: any;
export default _default;
