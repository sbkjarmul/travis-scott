import React, { useState } from 'react'
import '../App.css'
import FormAlert from './form-alert'
import FormButton from './form-button'
import RobotChecker from './robot-checker'
import useForm from '../assets/helpers/useForm'
import validate from '../assets/helpers/validateInfo'

const FormFields = ({ setIsForm }) => {
  const [isAlert, setIsAlert] = useState(false);
  const [isRobotChecker, setIsRobotChecker] = useState(false);
  const { handleChange, values, handleSubmit, errors, clearFormFields } = useForm(validate, setIsRobotChecker);

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
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
            value={values.name}
            onChange={handleChange}
          />
          {errors.name && <p className="form__error">{errors.name}</p>}
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
            value={values.lastname}
            onChange={handleChange}
          />
          {errors.lastname && <p className="form__error">{errors.lastname}</p>}
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
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p className="form__error">{errors.email}</p>}
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
            value={values.phone }
            onChange={handleChange}
          />
          {errors.phone && <p className="form__error">{errors.phone}</p>}
          <label 
            htmlFor="message"
            className="form__label"
          >
            Message
          </label>
          <textarea
            className="form__input form__input--textarea" 
            type="tel" 
            name="message" 
            placeholder="Write something..."
            value={values.message}
            onChange={handleChange}
          />
          {errors.message && <p className="form__error">{errors.message}</p>}
        </div>
        <FormButton>Send</FormButton>
      </form>
      {isRobotChecker && 
      <RobotChecker 
        setIsRobotChecker={setIsRobotChecker} 
        setIsAlert={setIsAlert} 
        setIsForm={setIsForm}
        clearFormFields={clearFormFields} 
      />}
      <FormAlert isAlert={isAlert} />
    </div>
  )
}

export default FormFields;