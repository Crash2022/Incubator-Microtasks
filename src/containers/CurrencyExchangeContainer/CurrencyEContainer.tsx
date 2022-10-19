import React from 'react';
import {CurrencyExchange} from '../../components/CurrencyExchange/CurrencyExchange';
import { CurrencyState, CurrencyType } from '../../redux/currencyReducer';
import { Dispatch } from 'redux';
import {CurrencyReducersTypes,
    changeActionAC,
    changeCurrencyFieldAC,
    changeCurrentCurrencyAC} from '../../redux/actions';
import { connect, ConnectedProps } from 'react-redux';

type TProps = ConnectedProps<typeof connector>;

type DispatchToPropsType = {
    setCurrencyAmount: (amountOfBYN: string, amountOfCurrency: string) => void
    setAction: (isBuying: boolean) => void
    changeCurrency: (currency: string) => void
}

const CurrencyEContainer: React.FC<TProps> = props => {

    const {
        currencies,
        currentCurrency,
        isBuying,
        amountOfBYN,
        amountOfCurrency,
        setCurrencyAmount,
        setAction,
        changeCurrency,
    } = props;

    let currencyRate: number = 0;
    const currenciesName = currencies.map((currency: CurrencyType) => {
        if (currency.currencyName === currentCurrency) {
            currencyRate = isBuying ? currency.buyRate : currency.sellRate;
        }
        return currency.currencyName;
    });

    const changeCurrencyField = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.currentTarget.value;
        if (!isFinite(+value)) return;
        if (e.currentTarget.dataset.currency) {
            const trigger: string = e.currentTarget.dataset.currency;
            if (trigger === 'byn') {
                if (value === '') {
                    setCurrencyAmount(value, value);
                } else {
                    setCurrencyAmount(value, (+Number(value).toFixed(2) / currencyRate).toFixed(2));
                }
            } else {
                if (value === '') {
                    setCurrencyAmount(value, value);
                } else {
                    setCurrencyAmount((+Number(value).toFixed(2) * currencyRate).toFixed(2), value);
                }
            }
        }
    };
    const changeAction = (e: React.MouseEvent<HTMLSpanElement>) => {
        e.currentTarget.dataset.action === 'buy' ? setAction(true) : setAction(false);
    };

    const changeCurrentCurrency = (e: React.MouseEvent<HTMLLIElement>) => {
        e.currentTarget.dataset.currency && changeCurrency(e.currentTarget.dataset.currency);
    };

    return (
        <React.Fragment>
            <CurrencyExchange
                currenciesName={currenciesName}
                currentCurrency={currentCurrency}
                currencyRate={currencyRate}
                isBuying={isBuying}
                amountOfBYN={amountOfBYN}
                amountOfCurrency={amountOfCurrency}
                changeCurrencyField={changeCurrencyField}
                changeAction={changeAction}
                changeCurrentCurrency={changeCurrentCurrency}
            />
        </React.Fragment>
    );
};

const mapStateToProps = ( { currency } : {currency: CurrencyState} ): CurrencyState => {
    return {
        currencies: currency.currencies,
        currentCurrency: currency.currentCurrency,
        isBuying: currency.isBuying,
        amountOfBYN: currency.amountOfBYN,
        amountOfCurrency: currency.amountOfCurrency,
    };
};

const mapDispatchToProps = (dispatch: Dispatch<CurrencyReducersTypes>): DispatchToPropsType => {
    return {
        setCurrencyAmount(amountOfBYN: string, amountOfCurrency: string) {
            dispatch(changeCurrencyFieldAC(amountOfBYN, amountOfCurrency));
        },
        setAction(isBuying: boolean) {
            dispatch(changeActionAC(isBuying));
        },
        changeCurrency(currency: string) {
            dispatch(changeCurrentCurrencyAC(currency));
        },
    };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export const CurrencyExchangeContainer = connector(CurrencyEContainer);