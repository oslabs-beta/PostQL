import * as React from 'react';
export interface Props {
    schema: any;
    type: any;
}
export interface State {
    showDeprecated: boolean;
}
export default class FieldDoc extends React.Component<Props, State> {
    state: {
        showDeprecated: boolean;
    };
    render(): JSX.Element;
}
