import React from 'react'
import { FaUniversity } from 'react-icons/fa'
import './TimeLine.css'
import { Education } from '../../helpers/Education'
import { CardTimeLine } from './CardTimeLine/CardTimeLine'

export const TimeLine = () => {
  return (
<div className="row mt-4" id='education'>
<div className="timeline">
<h3 className='text-white text-center mb-4'>Education</h3>
    {Education.map(ed=>{return(
      <CardTimeLine education={ed} key={ed.id}/>
    )})}
</div>
</div>
  )
}
