
import { useEffect, useState } from 'react'
import CurrencyInputBox from './components/currencyInputBox'
import useCurrencyInfo from './customhooks/useCurrencyInfo'

function App() {
  const [amount, setAmount] = useState()
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr')
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currecyInfo = useCurrencyInfo(from)
  const options = Object.keys(currecyInfo)

  const convert = () => {
    if (
      amount === undefined ||
      amount === '' ||
      Number.isNaN(Number(amount))
    ) {
      alert('Please enter a valid number')
      return
    }

    if (!currecyInfo[to]) {
      alert('Exchange rate is not available yet')
      return
    }

    setConvertedAmount(Number(amount) * currecyInfo[to])
  }

  const swap = () => {
    setFrom(to)
    setTo(from)
  }

  useEffect(() => {
    if (
      amount === undefined ||
      amount === '' ||
      Number.isNaN(Number(amount)) ||
      !currecyInfo[to]
    ) {
      setConvertedAmount(0)
      return
    }

    setConvertedAmount(Number(amount) * currecyInfo[to])
  }, [amount, to, currecyInfo])

  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-8">

      <div className="w-full max-w-[590px]">

        {/* Header */}
        <div className="text-center mb-3">

          <h1 className="text-xl font-bold text-slate-800 mt-0 mb-0">
            Currency Converter
          </h1>

          <p className="text-xs text-slate-500 mt-0">
            Convert currencies quickly and easily
          </p>
        </div>


        {/* Converter Card */}
        <div className="bg-[#0F3040] border border-slate-200 rounded-2xl shadow-sm p-4">

          {/* Card top */}
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-wide text-slate-400">
                Exchange
              </p>
              <p className="text-sm font-semibold text-slate-300">
                Enter amount
              </p>
            </div>

            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-50 border border-green-100">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
              <span className="text-[10px] font-medium text-green-600">
                Live
              </span>
            </div>
          </div>


          <form
            onSubmit={(e) => {
              e.preventDefault()
              convert()
            }}
          >

            {/* FROM */}
            <div className="rounded-xl bg-slate-50 border border-slate-200 p-3">

              <div className="flex justify-between items-center mb-1.5">
                <span className="text-[11px] font-medium text-slate-500">
                  You send
                </span>

                <span className="text-[10px] font-semibold text-slate-400 uppercase">
                  {from}
                </span>
              </div>

              <CurrencyInputBox
                header='Send'
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />

            </div>


            {/* SWAP */}
            <div className="relative h-9 flex items-center justify-center">

              <div className="absolute left-0 right-0 h-px bg-slate-200" />

              <button
                type="button"
                onClick={swap}
                aria-label="Swap currencies"
                className="
                  relative z-10
                  w-8 h-8
                  flex items-center justify-center
                  rounded-full
                  bg-white
                  border border-slate-200
                  text-blue-600
                  shadow-sm
                  hover:bg-blue-50
                  hover:border-blue-200
                  transition
                  active:scale-95
                "
              >
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
                    d="M7 7h11l-3-3m3 3-3 3M17 17H6l3 3m-3-3 3-3"
                  />
                </svg>
              </button>

            </div>


            {/* TO */}
            <div className="rounded-xl bg-slate-50 border border-slate-200 p-3">

              <div className="flex justify-between items-center mb-1.5">
                <span className="text-[11px] font-medium text-slate-500">
                  You receive
                </span>

                <span className="text-[10px] font-semibold text-slate-400 uppercase">
                  {to}
                </span>
              </div>

              <CurrencyInputBox
                header='Receive'
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable
              />

            </div>


            {/* RATE */}
            {amount && currecyInfo[to] && (
              <div className="flex items-center justify-center mt-3">
                <div className="px-3 py-1.5 rounded-lg bg-blue-50 text-blue-600 text-[11px] font-medium">
                  1 {from.toUpperCase()} ={' '}
                  {Number(currecyInfo[to]).toFixed(4)}{' '}
                  {to.toUpperCase()}
                </div>
              </div>
            )}


            {/* BUTTON */}
            <div className="flex items-center justify-center mt-3">
              <div className="relative group">
                <button
                  className="relative inline-block p-px font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
                >
                  <span
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  ></span>

                  <span className="relative z-10 block px-6 py-2 rounded-xl bg-gray-950">
                    <div className="relative z-10 flex items-center space-x-2">
                      <span className="transition-all duration-500 group-hover:translate-x-1"
                      >   Convert {from.toUpperCase()} → {to.toUpperCase()}</span
                      >
                      <svg
                        className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
                        data-slot="icon"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          clip-rule="evenodd"
                          d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                          fill-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </span>
                </button>
              </div>
            </div>


          </form>


          {/* Footer */}
          <div className="flex items-center justify-center gap-1.5 mt-3">
            <span className="text-[10px] text-slate-400">
              Exchange rates updated regularly
            </span>
          </div>

        </div>


        {/* Bottom */}
        <p className="text-center text-[10px] text-slate-400 mt-4">
          Fast • Simple • Reliable
        </p>

      </div>
    </main>
  )
}

export default App
