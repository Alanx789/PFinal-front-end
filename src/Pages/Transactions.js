import React, {useState} from 'react'
import "./mainPage.css";
import PropTypes from 'prop-types'

export const Transactions = ({id, money}) => {

const[action, setAction]= useState(undefined)

const handleOnClickPayments = (e) => {
    setAction(0)
  }

  const handleOnClickWithdrawal = (e) => {
    setAction(1)
  }

  

  const handleSubmit = (e) => {
    e.preventDefault();
    let money_inserted = parseInt(e.target.value);

    //validacion del dinero con la bd
    {(money<money_inserted)? alert("Insufficient resources"):
    <div>
      {action===1? alert('Payment Succesfully') : alert('Transaction Succesfully')}
    </div>
    }
    
  }

  return (
    <>
        <form onSubmit={handleSubmit}>
            <h1 className="h1">Please write the desidered quantity, then click on what you want to do</h1>
            <input type="text" />
            <button className="button" type="submit" onClick={handleOnClickPayments}>Pay</button>
            <button className="button" type="subrmit" onClick={handleOnClickWithdrawal}>Withdrawal</button>
        </form>
        
    </>
  
  )
}


Transactions.propType = {
    id : PropTypes.string.isRequired,
   // money : PropTypes.integer.isRequired
}