import { GraphQLConfig } from '../graphqlConfig';
import { EditorColours } from '../styled/theme';
import { ISettings } from '../types';
import { Session, Tab } from '../state/sessions/reducers';
import { ApolloLink } from 'apollo-link';
import { GraphQLSchema } from 'graphql';
export interface PlaygroundWrapperProps {
    endpoint?: string;
    endpointUrl?: string;
    subscriptionEndpoint?: string;
    setTitle?: boolean;
    settings?: ISettings;
    shareEnabled?: boolean;
    fixedEndpoint?: boolean;
    folderName?: string;
    configString?: string;
    showNewWorkspace?: boolean;
    isElectron?: boolean;
    canSaveConfig?: boolean;
    onSaveConfig?: (configString: string) => void;
    onNewWorkspace?: () => void;
    getRef?: (ref: any) => void;
    platformToken?: string;
    env?: any;
    config?: GraphQLConfig;
    configPath?: string;
    injectedState?: any;
    createApolloLink?: (session: Session, subscriptionEndpoint?: string) => ApolloLink;
    tabs?: Tab[];
    schema?: {
        __schema: any;
    };
    codeTheme?: EditorColours;
    workspaceName?: string;
    headers?: any;
}
export interface ReduxProps {
    theme: string;
    injectTabs: (tabs: Tab[]) => void;
}
export interface State {
    endpoint: string;
    subscriptionPrefix?: string;
    subscriptionEndpoint?: string;
    shareUrl?: string;
    platformToken?: string;
    configIsYaml?: boolean;
    configString?: string;
    activeProjectName?: string;
    activeEnv?: string;
    headers?: any;
    schema?: GraphQLSchema;
}
declare const _default: any;
export default _default;
