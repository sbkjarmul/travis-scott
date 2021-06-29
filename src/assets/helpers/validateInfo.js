export default function validateInfo(values) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/;
  let errors = {};

  if (!values.name.trim()) {
    errors.name = 'Name required';
  }

  if (!values.lastname.trim()) {
    errors.lastname = 'Lastname required';
  }

  if (!values.email) {
    errors.email = 'Email required';
  } else if (!emailRegex.test(values.email)) {
    errors.email = 'Email addres is invalid';
  }

  if (!values.phone) {
    errors.phone = 'Phone required';
  } else if (!phoneRegex.test(values.phone)) {
    errors.phone = `Phone's format is invalid. Need to be 9 characters`
  }

  if (!values.message.trim()) {
    errors.message = 'Message required';
  }

  return errors;
}