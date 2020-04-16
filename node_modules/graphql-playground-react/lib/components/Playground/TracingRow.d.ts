import * as React from 'react';
export interface TracingRowProps {
    path: Array<string | number>;
    startOffset: number;
    duration: number;
}
export interface TracingRowState {
    collapsed: boolean;
}
export default class TracingRow extends React.Component<TracingRowProps, TracingRowState> {
    state: {
        collapsed: boolean;
    };
    render(): JSX.Element;
    private printDuration;
}
