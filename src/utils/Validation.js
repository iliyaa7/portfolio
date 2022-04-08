import {useState, useCallback} from 'react';

export default function useFormAndValidation() {
  const [ values, setValues ] = useState({});
  const [ errors, setErrors ] = useState({});
  const [ isValid, setIsValid ] = useState(false);
  const [isInputValid, setIsInputValid] = useState(false);

  const handleChange = (e) => {
    const {name, value} = e.target
    setValues({...values, [name]: value });
    setErrors({...errors, [name]: e.target.validationMessage});
    setIsValid(e.target.closest('form').checkValidity());
    setIsInputValid({...isInputValid, [name]: e.target.checkValidity()});
  };



  const resetForm = useCallback((newValues = {}, newErrors = {}, newIsValid = false, newIsInputValid = {}) => {
    setValues(newValues);
    setErrors(newErrors);
    setIsValid(newIsValid);
    setIsInputValid(newIsInputValid)
  }, [setValues, setErrors, setIsValid]);

  return { values, handleChange, errors, isValid, resetForm, setValues, setIsValid, isInputValid };
}
