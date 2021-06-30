import { useState, useEffect } from 'react'

const useForm = (validate, setIsRobotChecker) => {
  const [values, setValues] = useState({
    name: '',
    lastname: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = e => {
    const { name, value } = e.target;

    setValues({
      ...values, 
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
  }

  const clearFormFields = () => {
    setValues({
      name: '',
      lastname: '',
      email: '',
      phone: '',
      message: ''
    });
  }

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      setIsRobotChecker(true);
    } 
  },[errors]);

  return { handleChange, values, handleSubmit, errors, clearFormFields };
}

export default useForm;