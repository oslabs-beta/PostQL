import * as React from 'react';
export interface Props {
    schema: any;
    sessionId: string;
}
export default class GraphDocsRoot extends React.PureComponent<Props, {}> {
    render(): JSX.Element;
}
