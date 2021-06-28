import React, { useState } from 'react'
import '../App.css'
import FormAlert from './form-alert'
import FormButton from './form-button'

const FormFields = ({ setIsForm }) => {
  const [isAlert, setIsAlert] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setIsAlert(true);
    setTimeout(() => {
      setIsAlert(false);
      setIsForm(false);
    }, 1000);
  }

  return (
    <div>
      <form className="form">
        <h1 className="form__header">Contact</h1>
        <div className="form__inputs">
          <label 
            htmlFor="name"
            className="form__label"
          >
            Name
          </label>
          <input 
            className="form__input"
            type="text" 
            name="name" 
            placeholder="Enter your name"
          />
          <label 
            htmlFor="lastname"
            className="form__label"
          >
            Lastname
          </label>
          <input 
            className="form__input"
            type="text" 
            name="lastname" 
            placeholder="Enter your lastname"
          />
          <label 
            htmlFor="email"
            className="form__label"
          >
            Email
          </label>
          <input 
            className="form__input"
            type="email" 
            name="email" 
            placeholder="Enter your email"
          />
          <label 
            htmlFor="phone"
            className="form__label"
          >
            Phone
          </label>
          <input 
            className="form__input"
            type="tel" 
            name="phone" 
            placeholder="Enter your phone"
          />
          <label 
            htmlFor="content"
            className="form__label"
          >
            Content
          </label>
          <textarea
            className="form__input form__input--textarea" 
            type="tel" 
            name="content" 
            placeholder="Write something..."
          />
        </div>
        <FormButton onClick={handleClick}>
          Send
        </FormButton>
      </form>
      <FormAlert isAlert={isAlert} />
    </div>
  )
}

export default FormFields;