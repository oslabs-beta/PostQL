import * as React from 'react';
export interface Props {
    schema: any;
    withinType?: any;
    searchValue: string;
    level: number;
    sessionId: string;
}
export default class SearchResults extends React.Component<Props, {}> {
    shouldComponentUpdate(nextProps: any): boolean;
    render(): JSX.Element;
}
