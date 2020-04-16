import * as React from 'react';
export interface Props {
    isReloadingSchema: boolean;
    onReloadSchema?: () => void;
}
declare const Reload: React.SFC<Props>;
export default Reload;
