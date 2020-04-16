import * as React from 'react';
export interface Props {
    animate: boolean;
    disabled?: boolean;
    onClick?: () => void;
}
declare const PollingIcon: React.SFC<Props>;
export default PollingIcon;
