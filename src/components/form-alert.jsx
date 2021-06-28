import React from 'react'
import '../App.css'

const FormAlert = ({ isAlert }) => {
  const setClass = () => {
    if (isAlert) {
      return 'form__alert form__alert--active'
    }

    return 'form__alert'
  }

  return (
    <div className={setClass()}>
      <h3>Correct!</h3>
      <p>Message has been sent.</p>
    </div>
  )
}

export default FormAlert;