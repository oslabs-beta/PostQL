/**
 *  Copyright (c) Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the license found in the
 *  LICENSE file in the root directory of this source tree.
 */
import * as React from 'react';
export interface Props {
    schema: any;
    onClickType: any;
}
export default class SchemaDoc extends React.Component<Props, {}> {
    shouldComponentUpdate(nextProps: any): boolean;
    render(): JSX.Element;
}
