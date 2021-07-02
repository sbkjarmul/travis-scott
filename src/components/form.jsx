import React, { useState } from 'react'
import '../App.css'
import '../styles/form.css'
import '../styles/controls.css'
import FormFields from './form-fields'
import { IoMdClose } from 'react-icons/io'

const Form = ({ isForm, setIsForm }) => {

  const handleClick = () => {
    setIsForm(false);
  }
  
  return (
    <div className={ isForm ? 'form__container form__container--active' : 'form__container' }>
      <button  className="form__close" onClick={handleClick}>
        <IoMdClose/>
      </button>
      <FormFields setIsForm={setIsForm} />
    </div>
  )
}

export default Form;