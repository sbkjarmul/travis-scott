import React from 'react'

const FormButton = ({ children, onClick }) => {
 
  return (
    <button className="form__button" onClick={onClick}>
     {children}
    </button>
  )
}

export default FormButton;