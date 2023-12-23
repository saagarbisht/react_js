import React from 'react'
import ReactDOM from 'react-dom/client'
import Cart from './Cart.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Cart text={"Fake texts are unwanted SMS messages that scammers use to trick people into giving them money or personal information. These texts are also known as SMS phishing scams, or smishing."} heading={"Asus Laptop"} btn={"Buy Now"}/>

    <Cart text={"Fake texts are unwanted SMS messages that scammers use to trick people into giving them money or personal information. These texts are also known as SMS phishing scams, or smishing."} heading={"Lenovo Laptop"} btn={"Don't buy"}/>

    <Cart/>
  </React.StrictMode>,
)
