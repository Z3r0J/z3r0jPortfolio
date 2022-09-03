import { React } from 'react'
import ProgrammingLang from '../../helpers/ProgrammingLang'
import { motion } from 'framer-motion'
import Text from '../../helpers/lang/Text'


const bar={
  offscreen:{x:-100, opacity:0},
  onscreen:{
  x:0,
  opacity:1,
  transition: {
  type:"spring",
  bounce:0.6,
  duration:2}
}

}

const textAnimate={
  offscreen:{y:100, opacity:0},
  onscreen:{y:0,
  opacity:1,
  transition: {type:"spring",
  bounce:0.4,
  duration:2}
}
}

const cardAnimate = {
  offscreen: {x:-100,opacity:0},
  onscreen: {
    x:0,
    opacity:1,
    transition:{
      type: "tween",
      bounce:0.6,
      duration:0.5
    }
  }
}

export const Languages = () =>{
  return(
    !ProgrammingLang?<div></div>:
      <div className='row mt-4 mb-3 p-3' style={{background:"#11202b"}}>
              <motion.h3
              initial={"offscreen"}
              whileInView={"onscreen"}
              viewport={{once:false, amount:1}}
              variants={textAnimate} className='text-white fw-700 text-center'><Text tid='programmingLang'/></motion.h3>
        {ProgrammingLang.map(lang=>{
            return(
              <motion.div 
              initial={"offscreen"}
              whileInView={"onscreen"}
              viewport={{once:false, amount:1}}
              transition={{staggerChildren:0.5}} className='col-lg-4 col-md-12 mt-3' key={lang.name}>
              <motion.div variants={cardAnimate} className='card bg-dark shadow shadow-2 border border-dark text-white'>
                <div className='card-body'>
                  <motion.div variants={textAnimate} className='card-title'>{lang.name}</motion.div>
                  <div className='progress'>
                    <motion.div variants={bar} className={`progress-bar bg-${lang.color}`} role='progressbar' aria-label={lang.name} aria-valuenow={lang.experience} aria-valuemin='0' aria-valuemax='100' style={{width:`${lang.experience}%`}}>{lang.name}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
            )
          })}
      </div>
  )
}
