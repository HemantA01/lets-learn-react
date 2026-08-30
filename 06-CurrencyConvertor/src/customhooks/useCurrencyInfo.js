import {useState, useEffect} from 'react'

function useCurrencyInfo(currency){
    const [data, setData] = useState({})    // 1
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json())      // 2
        .then((res) => setData(res[currency]))
        //console.log('data is: ', data)
        
    }, [currency])  // 3
    ///console.log('data is: ', data)
    return data
}

export default useCurrencyInfo;

/*
1: Empty obj. is put inside "useState" hook so that if we encounter any contingency plan (i.e., we don't get any result from API), empty object will get returned
2: result provided by API is converted to JSON
3: "currency" is passed in the dependency array as we are dependent on currency to display the exchange rates whenever changes occur
*/ 