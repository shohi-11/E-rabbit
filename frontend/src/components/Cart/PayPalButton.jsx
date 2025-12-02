import React from 'react';
import {PayPalButtons, PayPalScriptProvider} from "@paypal/react-paypal-js";

const payPalButton = ({amount,onSuccess, onError}) => {
  return (
    <PayPalScriptProvider options ={{"client-id":"AWc4H-jjDU7ysZ4Cl-K0Fi4mjwIFHcwoMjmBRqnV9UXNEjdiMAD00SeT1Rmpgq7IfziyBt-yZ0rb7Ju_"}}>

     <PayPalButtons style={{layout: "vertical"}}
     createOrder={(data, actions) =>{
      return actions.order.create({
        purchase_units: [{amount : {value: amount}}]
      })
     }}
     onApprove ={(data, actions) =>{
      return actions.order.capture().then(onSuccess)
     }}
     onError ={onError}/>
    </PayPalScriptProvider>
  )
}

export default payPalButton;