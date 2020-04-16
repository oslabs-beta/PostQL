import { GraphQLConfig } from '../graphqlConfig';
import { Map } from 'immutable';
export interface Props {
    config: GraphQLConfig;
    folderName: string;
    theme: string;
    activeEnv: string;
    onSelectEnv: (endpoint: string, projectName?: string) => void;
    onNewWorkspace?: () => void;
    showNewWorkspace: boolean;
    isElectron: boolean;
    activeProjectName?: string;
    configPath?: string;
}
export interface ReduxProps {
    counts: Map<string, number>;
    openConfigTab: () => void;
}
declare const _default: any;
export default _default;
