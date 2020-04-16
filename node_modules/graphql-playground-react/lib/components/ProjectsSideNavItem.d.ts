import * as React from 'react';
export interface Props {
    env: string;
    onSelectEnv: (env: string, projectName?: string) => void;
    activeEnv: string;
    count: number;
    deep: boolean;
    projectName?: string;
    activeProjectName?: string;
}
export default class ProjectsSideNavItem extends React.Component<Props, {}> {
    render(): JSX.Element;
    private selectEndpoint;
}
