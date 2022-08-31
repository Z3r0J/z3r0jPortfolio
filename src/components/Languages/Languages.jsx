import { React } from 'react'
import './Languages.css'
import programminglang from '../../helpers/programminglang'

export const Languages = () =>{
  return(
      <div className='row mt-4 mb-3'>
              <h3 className='text-white fw-700'>Languages and Tools</h3>
        {programminglang.map(lang=>{
          return(
        
      <div className='col-lg-4 col-md-12 mt-3'>
      <div className='card bg-dark shadow shadow-2 border border-dark text-white'>
        <div className='card-body'>
          <div className='card-title'>{lang.name}</div>
          <div className='progress'>
            <div className={`progress-bar bg-${lang.color}`} role='progressbar' aria-label={lang.name} aria-valuenow={lang.experience} aria-valuemin='0' aria-valuemax='100' style={{width:`${lang.experience}%`}}>{lang.name}</div>
          </div>
        </div>
      </div>
    </div>
        )})}
      </div>
  )
}