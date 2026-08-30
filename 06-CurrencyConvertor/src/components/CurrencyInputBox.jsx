import { useEffect, useRef, useState } from 'react'

function CurrencyInputBox({
  header,
  label,
  amount,
  currencyOptions = [],
  onCurrencyChange,
  selectCurrency,
  onAmountChange,
  amountDisable = false,
}) {
  const [open, setOpen] = useState(false)
  const dropdownRef = useRef(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleCurrencySelect = (currency) => {
    onCurrencyChange(currency)
    setOpen(false)
  }

  return (
    <div className="w-full">

      {/* Optional Header */}
      {header && (
        <div className="mb-2">
          <span className="text-xs font-medium text-slate-500">
            {header}
          </span>
        </div>
      )}

      {/* Input Container */}
      <div
        className={`
          relative
          flex
          items-center
          w-full
          h-12
          bg-white
          border
          border-slate-200
          rounded-xl
          shadow-sm
          transition-all
          duration-200

          focus-within:border-blue-500
          focus-within:ring-2
          focus-within:ring-blue-500/10

          ${amountDisable ? 'bg-slate-50' : ''}
        `}
      >

        {/* Amount */}
        <div className="flex-1 min-w-0 h-full">

          <input
            type="number"
            value={amount ?? ''}
            disabled={amountDisable}
            placeholder="0"
            aria-label={label || 'Amount'}
            onChange={(e) => onAmountChange?.(e.target.value)}
            className="
              w-full
              h-full
              px-4
              bg-transparent
              outline-none
              border-none
              text-[15px]
              font-medium
              text-slate-800
              placeholder:text-slate-300
              disabled:text-slate-500
              disabled:cursor-not-allowed
            "
          />

        </div>


        {/* Vertical Divider */}
        <div className="h-7 w-px bg-slate-200 shrink-0" />


        {/* Currency Selector */}
        <div
          ref={dropdownRef}
          className="relative h-full w-[92px] shrink-0"
        >

          {/* Selected Currency Button */}
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-haspopup="listbox"
            aria-expanded={open}
            className="
              w-full
              h-full
              px-3
              flex
              items-center
              justify-between
              gap-2
              rounded-r-xl
              bg-transparent
              text-slate-700
              hover:bg-slate-50
              transition-colors
              outline-none
            "
          >

            <span className="text-sm font-semibold tracking-wide">
              {selectCurrency?.toUpperCase()}
            </span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className={`
                w-3.5
                h-3.5
                text-slate-400
                transition-transform
                duration-200
                ${open ? 'rotate-180' : ''}
              `}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m6 9 6 6 6-6"
              />
            </svg>

          </button>


          {/* Dropdown */}
          {open && (
            <div
              className="
                absolute
                right-0
                top-[calc(100%+6px)]
                z-[999]

                w-44
                max-h-60
                overflow-y-auto

                rounded-xl
                border
                border-slate-200
                bg-white

                shadow-[0_10px_30px_rgba(15,23,42,0.12)]

                py-1

                scrollbar-thin
                scrollbar-thumb-slate-300
                scrollbar-track-transparent
              "
              role="listbox"
            >

              {currencyOptions.map((currency) => {
                const isSelected = selectCurrency === currency

                return (
                  <button
                    key={currency}
                    type="button"
                    role="option"
                    aria-selected={isSelected}
                    onClick={() => handleCurrencySelect(currency)}
                    className={`
                      w-full
                      h-9
                      px-3
                      flex
                      items-center
                      justify-between

                      text-left
                      text-sm

                      transition-colors

                      ${
                        isSelected
                          ? 'bg-blue-50 text-blue-600'
                          : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                      }
                    `}
                  >

                    <span
                      className={
                        isSelected
                          ? 'font-semibold'
                          : 'font-medium'
                      }
                    >
                      {currency.toUpperCase()}
                    </span>


                    {isSelected && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m5 12 4 4L19 6"
                        />
                      </svg>
                    )}

                  </button>
                )
              })}

            </div>
          )}

        </div>

      </div>

    </div>
  )
}

export default CurrencyInputBox