import React,{ useRef, useState } from 'react'
import '../Contacts/Contacts.css'
import emailjs from '@emailjs/browser'
import { FaWindowClose } from 'react-icons/fa';

export const Contacts = () => {

  const form = useRef();

  const [inputValue, setInputValue] = useState({
    from_name:"",
    user_email:"",
    message:""
  });

  const [response,setResponse] = useState("")

  const handleInput=(e)=>{
    setInputValue(
      {
        ...inputValue,
        [e.currentTarget.name]: e.currentTarget.value
      }
      )

      console.log(inputValue)
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7z72cz4', 'template_oflu7aq', form.current, '_dP4WZ_mQBasv-CB0')
      .then((result) => {
          console.log(result.text);
           setResponse(`${inputValue.from_name}, the email was sended sucessfully, I will keep in touch soon...`);
          const toastLiveExample = document.getElementById('liveToast');
          toastLiveExample.style='display:flex!important';

          setInputValue({from_name:"",user_email:"",message:""});
      }, (error) => {
          console.log(error.text);
          setResponse(`Oops ${inputValue.from_name}, something went wrong...`);
      });
  };

  const handleCloseToast=()=>{

    const toastLiveExample = document.getElementById('liveToast')
    toastLiveExample.style='display:none!important';

  }

  return (
    <div className="row mt-4 mb-3 bg-contacts text-white d-flex justify-content-center">
        <h3 className='text-white text-center'>Contacts</h3>
        <div className='col-lg-4 col-xl-4 col-md-4'>
          <div className='card bg-dark mb-3'>
            <div className='card-body'>
              <form ref={form} onSubmit={sendEmail}>
              <label className='form-label fs-5'>Name<span className='text-danger'>*</span></label>
              <input type={"text"} name="from_name" value={inputValue.from_name || ''} onChange={handleInput} className='form-control mb-2 bg-transparent text-white' placeholder='You name' required/>
              <label className='form-label fs-5'>Email<span className='text-danger'>*</span></label>
              <input type={"email"} name="user_email" value={inputValue.user_email || ''} onChange={handleInput} className='form-control mb-2 bg-transparent text-white' placeholder='You Email' required/>
              <label className='form-label fs-5'>Message<span className='text-danger'>*</span></label>
              <textarea name='message' value={inputValue.message || ''} onChange={handleInput} className="form-control mb-3 bg-transparent text-white" required></textarea>
              <input type="hidden" name="to_name" value="Jean Carlos Reyes"/>
              <button type='submit' className='btn btn-primary rounded rounded-3 w-100 ms-auto me-auto'>Send Contact</button>
              </form>
            </div>
          </div>
          <div className="toast-container position-fixed bottom-0 end-0 p-3">
  <div id="liveToast" className="toast bg-dark" role="alert" aria-live="assertive" aria-atomic="true">
    <div className="toast-header bg-dark">
      <img src="/icon_jc.png" className="rounded me-2" width={"32"} alt="<Jean Carlos/>"/>
      <strong className="me-auto">{"<Jean Carlos/>"}</strong>
      <small>Website</small>
      <button type="button" className="btn border-0" data-bs-dismiss="toast" aria-label="Close" onClick={handleCloseToast}>
        <FaWindowClose className='text-white'/>
      </button>
    </div>
    <div className="toast-body bg-dark">
      {response}
    </div>
  </div>
</div>
        </div>
    </div>
  )
}
