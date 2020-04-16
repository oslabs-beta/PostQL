import * as React from 'react';
import { GraphQLSchema } from 'graphql';
interface SDLHeaderProps {
    schema: GraphQLSchema;
}
interface State {
    open: boolean;
}
export default class SDLHeader extends React.Component<SDLHeaderProps, State> {
    ref: any;
    private node;
    constructor(props: any);
    componentWillMount(): void;
    componentWillUnmount(): void;
    handleClick: (e: any) => void;
    showOptions: () => void;
    printSDL: () => void;
    printIntrospection: () => void;
    setRef: (ref: any) => void;
    render(): JSX.Element;
}
export {};
