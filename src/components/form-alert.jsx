import React from 'react'
import '../App.css'

const FormAlert = ({ isAlert }) => {
  return (
    <div className={isAlert ? 'form__alert form__alert--active' : 'form__alert'}>
      <p>Twoja wiadomość została wysłana</p>
    </div>
  )
}

export default FormAlert;