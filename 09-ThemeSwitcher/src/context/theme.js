import { createContext, useContext } from 'react';  //Req.d in every file

//create ThemeContext
export const ThemeContext = createContext({
    themeMode: 'light',
    lightTheme: () => {},
    darkTheme: () => {}
})  

//create ThemeContextProvider
export const ThemeProvider = ThemeContext.Provider

//create a custom hook
export default function useTheme(){
    return useContext(ThemeContext) //gives access to the values inside 'ThemeContext'
}

//Note: Context + ProviderContext is wrap up into a single class to use eveywhere and is preffered at enterprise level.