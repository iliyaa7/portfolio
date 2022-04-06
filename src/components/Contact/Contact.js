import React from 'react';
import './Contact.css';
import separatorPath from '../../images/separator.svg';
import useFormAndValidation from '../../utils/Validation';
import loadingPath from '../../images/loading.png'



function Contact(props) {
  const inputRef = React.useRef();

    const {
      values, handleChange, errors, isValid, setIsValid, resetForm
    } = useFormAndValidation();

    React.useEffect(() => {
      if(props.isEmailSuccessful) resetForm();
    },[props.isEmailSuccessful]);

    React.useEffect(() => {
      setIsValid(inputRef.current.closest('form').checkValidity());
    },[setIsValid, values]);

    const submitMessage = () => {
      if (props.isServerError) {
        return 'Something went wrong with the server, please try again'
      } else if(props.isEmailSuccessful) {
        return 'Your email was sent successfully'
      } else {
        return ''
      }
    }

    const templateId = 'template_ozeckyp';
    const userId = '9lf6SGwwm5pfJyXKo';
    const serviceId = 'service_cg5uzyk'

    function handleSubmit(e) {
      e.preventDefault();
      const { email, phone, name, message } = values;
      const tamplateParams = {
            name,
            email,
            phone: phone || '000',
            message
      };
      props.handleSendEmail(serviceId, templateId, tamplateParams, userId)
    }


  return(
    <section className='contact' id='contact'>
        <h1 className='about__heading about__heading_type_contact'>Contact</h1>
        <div className='contact__links-container'>
          <p className='contact__phone' target='_blank'>0547626322</p>
          <a className='contact__link' href="mailto:iliyaa7@gmail.com" target='_blank'>iliyaa7@gmail.com</a>
          <a className='contact__link' href="https://www.linkedin.com/in/iliya-gomon/" target='_blank'>Linkedin</a>
          <a className='contact__link'  href="https://drive.google.com/file/d/1VtUQeuOn1XR6VgOQXxK68PtCbZgkpykf/view?usp=sharing" target='_blank'>CV</a>

        </div>
        <img className='about__separator'  src={separatorPath} alt='separator'/>
        <form className='contact__form' onSubmit={handleSubmit}>
          <label className='contact__input-title'>Name :</label>
          <input value={values.name || ''} onChange={handleChange} ref={inputRef} name='name' type='text' noValidate required className='contact__input' minLength='2' maxLength='30' placeholder='Enter your name*'></input>
          <span className='contact__input-error' id='name-error'>{errors.name}</span>
          <label className='contact__input-title'>Email :</label>
          <input value={values.email || ''} onChange={handleChange} name='email' type='email' noValidate required className='contact__input' placeholder='Enter your email*' pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'></input>
          <span className='contact__input-error' id='email-error'>{errors.email}</span>
          <label className='contact__input-title'>Phone :</label>
          <input value={values.phone || ''} onChange={handleChange} name='phone' type='text' noValidate className='contact__input' placeholder='Phone number'></input>
          <label className='contact__input-title'>Message :</label>
          <textarea name='message' value={values.message || ''} onChange={handleChange} type='text' noValidate required className='contact__input contact__input_type_textarea' placeholder='Your massege' minLength={2}></textarea>
          <span className='contact__input-error' id='email-error'>{errors.message}</span>
          <button  className='contact__submit-button'>SUBMIT</button>
          <span className={`contact__input-error contact__input-error_type_submit ${props.isEmailSuccessful && 'contact__input-error_type_success'}`} id='submit-error'>{submitMessage()}</span>
          {props.isLoading &&
            <div className='contact__loading-container'>
              <span className='contact__loading' id='submit-error'>Loading</span>
              <img src={loadingPath} className='contact__loading-image rotation' alt='image of the loading proccess'/>
            </div>
          }
        </form>
    </section>
  )
}

export default Contact;