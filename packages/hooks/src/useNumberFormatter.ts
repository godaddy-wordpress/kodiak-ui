import * as React from 'react'

export const useNumberFormatter = ( initNumber : number, initLocale : string, initCurrency : string, initStyle : string) => {
    const [formattedNumber, setFormattedNumber] = React.useState(null);

    React.useEffect(() => {
        setFormattedNumber(setCurr(initNumber, initLocale, initCurrency, initStyle))

    }, [initNumber, initLocale, initCurrency, initStyle])
    
    return formattedNumber;
}

const setCurr = (initNumber : number, initLocale : string, initCurrency : string, initStyle : string) => {
    return (new Intl.NumberFormat(initLocale, {style: initStyle, currency: initCurrency}).format(initNumber));
}