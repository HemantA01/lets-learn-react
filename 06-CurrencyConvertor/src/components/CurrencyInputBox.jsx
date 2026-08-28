import React, {useId} from "react";

function CurrencyInputBox({     //Input values passed into the function
    header,
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = 'usd',
    amountDisable = false,
    currencyDisable = false,
    className = ''    
}) {
  const amountInputId = useId()
  const amountHeaderId = useId()
    return (
        <>
        <label className="mb-1.5 block text-sm font-medium text-gray-700" htmlFor={amountHeaderId}>You {header}</label>
      <div className={`flex items-center rounded-md border border-gray-300 bg-white shadow-sm focus-within:border-gray-900 focus-within:ring-1 focus-within:ring-gray-900 ${className}`}>
        <input
          id={amountInputId}
          type="number"
          value={amount}
          disabled={amountDisable}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
          className="h-10 w-full border-0 bg-transparent px-3 text-sm text-gray-900 focus:outline-none focus:ring-0"
        />
        <label htmlFor={amountInputId} className="sr-only">{label} currency</label>
        <select
          id="convert-from-currency"
          className="h-10 shrink-0 rounded-e-md border-0 border-s border-gray-200 bg-transparent pe-7 ps-2 text-sm font-medium text-gray-600 focus:outline-none focus:ring-0"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>{currency.toUpperCase()}</option>
          ))}
        </select>
      </div>

        </>
    )
}

export default CurrencyInputBox;

//Always pass the key in the loop so that the loop performance should not downgrade
//${className} is added so that classes send by users can also be added.
//'useId' is a hook in React which always returns a unique Id. However, do not call useId to generate keys in a list.