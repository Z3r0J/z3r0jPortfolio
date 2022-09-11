import React from 'react'
import { FaGithub } from 'react-icons/fa'
import Text from '../../../helpers/lang/Text'

export const ProjectCard = ({ project }) => {
    return (
        <div className='col-xl-5 col-lg-5 col-md-12 mt-2 mb-2'>
            <div className='card bg-dark rounded-1 shadow shadow-3 border-0 wh-100'>
                <div className='card-header bg-transparent text-white text-center border-0 h6'><span className='fw-bold'>{project.name}</span></div>
                <div className='card-body'>
                    <div className='d-flex justify-content-around mt-2 mb-3'>
                        <div className='badge bg-primary text-badge'>{project.category}</div>
                        {project.stack.map(lang => { return <span className='text-white-50 me-1 text-name'>{lang + " "}</span> })}
                    </div>
                    <div className="accordion accordion-flush" id={"accordionFlushExample" + project.id}>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id={"flush-headingOne" + project.id}>
                                <button className="accordion-button collapsed bg-dark border-top border-bottom border-light text-white-50 rounded-0" type="button" data-bs-toggle="collapse" data-bs-target={"#flush-collapseOne" + project.id} aria-expanded="false" aria-controls={"flush-collapseOne" + project.id}>
                                    <Text tid={"about"}/>
                                </button>
                            </h2>
                            <div id={"flush-collapseOne" + project.id} className="accordion-collapse collapse" aria-labelledby={"flush-headingOne" + project.id} data-bs-parent={"#accordionFlushExample" + project.id}>
                                <div className="accordion-body bg-dark text-center text-white">{<Text tid={project.description} key={project.id}/>}
                                    <br />
                                    {project.collaborator.length > 0 ?
                                    <div className='mt-2'>
                                        <span className='h6 fw-bold'><Text tid={"collab"}/></span>
                                        <ul className='mt-3'>
                                            {project.collaborator.length > 0 ? project.collaborator.map(colab => { return <li key={colab} className="text-decoration-none">{colab}</li> }) : ""}
                                        </ul>
                                    </div>
                                        : ""}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='container-fluid mt-4'>
                        {project.github!==""?<a href={project.github} target="_blank" className='btn btn-outline-light me-3' style={{width:"45%"}}><FaGithub className='me-2'/>Github</a>:""}
                        {project.projectUrl!==""?<a href={project.projectUrl} target="_blank" className='btn btn-outline-light me-3' style={{width:"45%"}}>Visit</a>:""}
                    </div>
                </div>
            </div>
        </div>
    )
}
