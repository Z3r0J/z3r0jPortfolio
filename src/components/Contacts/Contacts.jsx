import React from 'react'
import '../Contacts/Contacts.css'
import {FaUserAlt} from 'react-icons/fa'

export const Contacts = () => {
  return (
    <div className="row mt-4 mb-3 bg-contacts text-white d-flex justify-content-center">
        <h3 className='text-white text-center'>Contacts</h3>
        <div className='col-lg-4 col-xl-4 col-md-4'>
          <div className='card bg-dark mb-3'>
            <div className='card-body'>
              <form>
              <label className='form-label fs-5'>Name<span className='text-danger'>*</span></label>
              <input type={"text"} onChange={()=>{}} className='form-control mb-2 bg-transparent text-white' placeholder='Insert a name' required/>
              <label className='form-label fs-5'>Email<span className='text-danger'>*</span></label>
              <input type={"email"} onChange={()=>{}} className='form-control mb-2 bg-transparent text-white' placeholder='Insert an Email' required/>
              <label className='form-label fs-5'>Message<span className='text-danger'>*</span></label>
              <textarea onChange={()=>{}} className="form-control mb-3 bg-transparent text-white" required></textarea>
              <button type='submit' className='btn btn-primary rounded rounded-3 w-100 ms-auto me-auto'>Send Contact</button>
              </form>
            </div>
          </div>
        </div>
    </div>
  )
}
