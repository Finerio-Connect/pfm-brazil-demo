import React, { FC } from 'react';
interface IStyledComponentProps {
    componentStyles?: string;
    primaryColor: string;
    primaryColor10: string;
    primaryColor20: string;
    primaryColor40: string;
    primaryColor60: string;
    secondaryColor: string;
    secondaryColor2: string;
    secondaryColor3: string;
    secondaryColor4: string;
    accentColor: string;
    neutralColor: string;
    neutralColor05: string;
    neutralColor10: string;
    neutralColor20: string;
    neutralColor40: string;
    neutralColor60: string;
    neutralColor80: string;
    neutralColor100: string;
    neutralColor120: string;
    intenseColor: string;
    chargeColor: string;
    debitColor: string;
    expenseColor: string;
    incomeBarSelColor: string;
    expenseBarSelColor: string;
    expenseBgColor: string;
    bgPrimary: string;
}
declare const withTheme: (Component: FC<unknown>) => React.FC<IStyledComponentProps>;
export default withTheme;
