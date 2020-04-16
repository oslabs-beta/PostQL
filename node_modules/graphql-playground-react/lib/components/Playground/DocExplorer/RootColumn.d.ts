import * as React from 'react';
export interface Props {
    searchValue: string;
    schema: any;
    width: number;
    handleSearch: (value: string) => void;
    sessionId: string;
}
export default class RootColumn extends React.PureComponent<Props, {}> {
    render(): JSX.Element;
}
