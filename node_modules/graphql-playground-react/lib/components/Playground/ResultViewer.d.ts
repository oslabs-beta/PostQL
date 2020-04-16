/**
 *  Copyright (c) Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the license found in the
 *  LICENSE file in the root directory of this source tree.
 */
import * as React from 'react';
export interface Props {
    value: string;
    isSubscription: boolean;
    hideGutters?: boolean;
}
/**
 * ResultViewer
 *
 * Maintains an instance of CodeMirror for viewing a GraphQL response.
 *
 * Props:
 *
 *   - value: The text of the editor.
 *
 */
export declare class ResultViewer extends React.Component<Props, {}> {
    private node;
    private viewer;
    componentDidMount(): void;
    shouldComponentUpdate(nextProps: any): boolean;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
    setRef: (ref: any) => void;
    /**
     * Public API for retrieving the CodeMirror instance from this
     * React component.
     */
    getCodeMirror(): any;
    /**
     * Public API for retrieving the DOM client height for this component.
     */
    getClientHeight(): any;
}
