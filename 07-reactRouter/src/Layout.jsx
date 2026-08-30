import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from "react-router";

function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout

//'Outlet' uses the 'Layout.jsx' file as a base and keet the headers. footers & other layouts (except 'Outlet') intact passed within it.