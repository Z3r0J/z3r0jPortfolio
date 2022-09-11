import React, { useState } from 'react'
import { MyProjects } from '../../helpers/MyProjects'
import Spinner from '../Spinner/Spinner'
import { ProjectCard } from './Cards/ProjectCard';
import { Footer } from '../Footer/Footer'
import Text from '../../helpers/lang/Text';
import { FaGithub } from 'react-icons/fa';

export const Projects = () => {

  const [myProjects,setProjects] = useState(null);
  const [buttonState,setButtonState] = useState({
    All : true,
    React : false,
    C : false,
    API : false
  })

  const filter = (language) =>{
    language === "React" ? setProjects(MyProjects.filter(Projects =>Projects.stack.some(x=>x === language))) : ""
    language === "C#" ? setProjects(MyProjects.filter(Projects =>Projects.stack.some(x=>x === language))) : ""
    language === "API" ? setProjects(MyProjects.filter(Projects =>Projects.stack.some(x=>x === language))) : ""
  }

  return (
    !myProjects ? setProjects(MyProjects)
    :  <div className='container-fluid mt-4'>
    <h2 className='text-white text-center fw-bolder'><Text tid={"projects"}/></h2>
    <div className='row d-flex justify-content-center'>
      <div className='col-xl-6 col-lg-6 col-md-12'>
        |<div className='card bg-dark rounded-3'>
          <div className='card-body d-inline-flex justify-content-center'>
          <button className={buttonState.All?'btn btn-success rounded-4 me-3 wh-100':"btn text-white-50 border-0"} onClick={() =>{setProjects(MyProjects); buttonState.All = true; buttonState.React= false; buttonState.API = false; buttonState.C =false;}}>All</button>
            <button className={buttonState.React?'btn btn-success rounded-4 me-3 wh-100':"btn text-white-50 border-0"} onClick={()=>{filter("React"); buttonState.All = false; buttonState.React= true; buttonState.API = false; buttonState.C =false;}}>React</button>
            <button className={buttonState.C?'btn btn-success rounded-4 me-3 wh-100':"btn text-white-50 border-0"} onClick={()=>{filter("C#"); buttonState.All = false; buttonState.React= false; buttonState.API = false; buttonState.C =true;}}>C#</button>
            <button className={buttonState.API?'btn btn-success rounded-4 me-3 wh-100':"btn text-white-50 border-0"} onClick={()=>{filter("API"); buttonState.All = false; buttonState.React=false; buttonState.API = true; buttonState.C =false;}}>WEB API</button>
          </div>
        </div>
      </div>
    </div>
    <div className='row mt-4 d-flex ms-2 me-3 d-flex justify-content-center'>
      {myProjects.map(projects=>{
        return(
          <ProjectCard project={projects} key={projects.id}/>
        )
      })}
    </div>
    <div className='row d-flex justify-content-center mt-3 mb-3'>
      <div className="col-xl-4 col-lg-4 col-md-12">
      <a href='https://github.com/Z3r0J?tab=repositories' target={"_blank"} className='btn btn-primary w-100 fs-5'><FaGithub/> More on Github</a>
      </div>
    </div>
    <Footer/>
</div> 
  )
}
