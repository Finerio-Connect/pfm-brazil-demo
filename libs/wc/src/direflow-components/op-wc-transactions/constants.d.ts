import { ICurrentFilterValues, IFormValues, IFilterFormValues } from './interfaces';
import { State } from './types/State';
export declare const PREFIX_CLASS: string;
export declare const INITIAL_VALUES: IFormValues;
export declare const INITIAL_FILTER_VALUES: IFilterFormValues;
export declare const INITIAL_CURRENT_FILTER_VALUES: ICurrentFilterValues;
export declare const INITIAL_STATE: State;
export declare const DEFAULT_MAIN_PROPS: {
    transactionsData: never[];
    accountsData: never[];
    categoriesData: never[];
    isEmpty: boolean;
    title: null;
    titleShow: boolean;
    accountColumnText: null;
    accountColumnOrder: number;
    accountColumnShow: boolean;
    dateColumnText: null;
    dateColumnOrder: number;
    dateColumnShow: boolean;
    amountColumnText: null;
    amountColumnOrder: number;
    amountColumnShow: boolean;
    descriptionColumnText: null;
    descriptionColumnOrder: number;
    descriptionColumnShow: boolean;
    categoryColumnText: null;
    categoryColumnOrder: number;
    categoryColumnShow: boolean;
    nameFieldLabel: null;
    nameFieldOrder: number;
    categoryFieldLabel: null;
    categoryFieldOrder: number;
    subcategoryFieldLabel: null;
    subcategoryFieldOrder: number;
    ammountFieldLabel: null;
    ammountFieldOrder: number;
    transactionTypeFieldLabel: null;
    transactionTypeFieldOrder: number;
    accountFieldLabel: null;
    accountFieldOrder: number;
    dateFieldLabel: null;
    dateFieldOrder: number;
    newTransactionTitle: null;
    newTransactionButton: null;
    editTransactionTitle: null;
    editTransactionButton: null;
    deleteTransactionButtonText: null;
    newTransactionDisabled: boolean;
    editTransactionDisabled: boolean;
    deleteTransactionDisabled: boolean;
    chargeText: null;
    debitText: null;
    searchPlaceholder: null;
    searchDebounceTime: number;
    defaultFilterOptions: {};
    filterDisabled: boolean;
    filterModalTitle: null;
    cleanFilterButtonText: null;
    submitFilterButtonText: null;
    predefinedDateFilterTitle: null;
    customDateFilterTitle: null;
    lastWeekButtonText: null;
    lastFifteenDaysButtonText: null;
    lastThirtyDaysButtonText: null;
    emptyViewTitle: null;
    emptyViewDescription: null;
    emptyViewActionText: null;
};
