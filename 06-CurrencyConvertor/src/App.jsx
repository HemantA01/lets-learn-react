import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import backgroundImg1 from './assets/pexels-abstract-background-21175565-13565201.jpg'
import CurrencyInputBox from './components/CurrencyInputBox'
import useCurrencyInfo from './customhooks/useCurrencyInfo'

function App() {
  const [amount, setAmount] = useState()
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr')
  const [convertedAmount, setConvertedAmount] = useState(0)
  
  const currecyInfo = useCurrencyInfo(from)
  const options = Object.keys(currecyInfo)  //'Object.keys(currecyInfo)' to getch all the keys from the returned data
  
  const swap = () => {
    setFrom(to)
    setTo(from)
    setAmount(convertedAmount)
    setConvertedAmount(amount)
  }

  const convert = () =>{
      if(amount == undefined || Number(amount) == 'NaN') {
        alert('Please enter a valid Number for currency exchange functionality')
        return;
      } else {
        setConvertedAmount(amount *  currecyInfo[to])
      }
  } 

  return (
    <>
      <div className="w-full max-w-lg mx-auto px-4 py-3 my-8 flex items-center justify-center"
      >
        <h1 className='my-8'>Currency Convertor</h1>
      </div>
      <div class="w-full max-w-lg mx-auto px-4 py-3 my-8 flex items-center justify-center">
        
        <div class="p-3 bg-white rounded-xl shadow-lg max-w-md w-full">
      {/* Your UI Card or Content */}
        <div className="w-full max-w-xs mx-12">
          <form onSubmit={(e) => {
            e.preventDefault();
            convert()
          }}>
      <CurrencyInputBox
        header='Send' 
        label='From'
        amount={amount}
        currencyOptions={options}
        onCurrencyChange={(currency) => setFrom(currency)}
        selectCurrency={from}
        onAmountChange={(amount) => setAmount(amount)}
      />

      
      <div className="relative my-1 flex items-center justify-center">
        <div className="absolute inset-x-0 h-px bg-gray-200"></div>
        <button
          type="button"
          aria-label="Swap currencies"
          className="relative z-10 flex size-8 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 shadow-sm hover:bg-gray-50 hover:text-gray-900"
          onClick={swap}
        >
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
          </svg>
        </button>
      </div>

      <CurrencyInputBox
        header='Receive' 
        label='To'
        amount={convertedAmount}
        currencyOptions={options}
        onCurrencyChange={(currency) => setTo(currency)}
        selectCurrency={to}
        amountDisable         // = amountDisable='true'
      />

      
      <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 my-2 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase() }
                    </button>
      {/* <p className="mt-2.5 text-center text-xs text-gray-500">1 USD = 0.9243 EUR · Updated 2m ago</p> */}
      </form>
    </div>
      </div>
    </div>
    </>
  )
}

export default App
