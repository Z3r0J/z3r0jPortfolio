import React from 'react'
import { FaUniversity } from 'react-icons/fa'

export const CardTimeLine = ({ education }) => {
  return (
	<div className="timeline-row">
			<div className="timeline-time">
				{education.startYear}<small>{education.endYear}</small>
			</div>
			<div className="timeline-content bg-dark">
				<i className="icon-attachment text-white"><FaUniversity/></i>
				<h4 className='text-white'>{education.school}</h4>
				<small className='text-white mb-2'>{education.degree}</small>
				<p className='text-white text-center'>{education.description}</p>
			</div>
	</div>
  )
}
