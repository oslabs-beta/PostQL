import * as React from 'react';
export interface ToggleProps {
    choices: string[];
    onChange: (choice: string, i: number) => void;
    activeChoice: string;
}
declare const Toggle: React.SFC<ToggleProps>;
export default Toggle;
