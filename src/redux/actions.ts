export enum ACTIONS_TYPE {
    CHANGE_CURRENCY_FIELD_TYPE = 'CurrencyExchange/CHANGE_CURRENCY_FIELD_TYPE',
    CHANGE_CHANGE_ACTION = 'CurrencyExchange/CHANGE_CHANGE_ACTION',
    CHANGE_CURRENT_CURRENCY = 'CurrencyExchange/CHANGE_CURRENT_CURRENCY'
}

export type ChangeCurrencyFieldACType = ReturnType<typeof changeCurrencyFieldAC>
export const changeCurrencyFieldAC = (amountOfBYN: string, amountOfCurrency: string)/*: ChangeCurrencyFieldType*/ => ({
    type: ACTIONS_TYPE.CHANGE_CURRENCY_FIELD_TYPE,
    amountOfBYN, amountOfCurrency
} as const);

export type ChangeActionACType = ReturnType<typeof changeActionAC>
export const changeActionAC = (isBuying: boolean)/*: ChangeAction*/ => ({
    type: ACTIONS_TYPE.CHANGE_CHANGE_ACTION,
    isBuying
} as const);

export type ChangeCurrentCurrencyACType = ReturnType<typeof changeCurrentCurrencyAC>
export const changeCurrentCurrencyAC = (currentCurrency: string)/*: ChangeCurrentCurrencyType*/ => ({
    type: ACTIONS_TYPE.CHANGE_CURRENT_CURRENCY,
    currentCurrency
} as const);

export type CurrencyReducersTypes = ChangeCurrencyFieldACType | ChangeActionACType | ChangeCurrentCurrencyACType;