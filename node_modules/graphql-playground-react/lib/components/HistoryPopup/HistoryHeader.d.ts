/// <reference types="react" />
import { HistoryFilter } from '../../types';
export interface Props {
    selectedFilter: HistoryFilter;
    onSelectFilter: (filter: any) => void;
    onSearch: (value: string) => void;
}
declare const _default: (props: Props) => JSX.Element;
export default _default;
