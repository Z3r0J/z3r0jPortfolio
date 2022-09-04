import { React } from 'react';
import { FcFile, FcComments } from 'react-icons/all'
import { motion } from 'framer-motion';
import './Index.css'
import { Languages } from '../Languages/Languages';
import { Contacts } from '../Contacts/Contacts';
import Text from '../../helpers/lang/Text';
import { Footer } from '../Footer/Footer';

const textAnimate = {
  offscreen:{
      x:200,
      opacity:0
  },
  onscreen:{
      x:0,
      opacity:1,
      transition:{
        duration:2,
        type:"tween",
        bounce:0.4
      }
  }
};

const Index = () =>{
  return(
    <div className='container-fluid mt-4'>
      <div className='row justify-content-center'>
        <div className='col-lg-8 col-xl-8 col-md-12'>
        <motion.div className='card bg-dark shadow shadow-3 border border-light text-white'
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: [1,0.5,0.6,0.7,0.8,0.9,1] }}
            transition={{ duration: 0.5,
            type:'tween' }}>
          <div className='card-body'>
            <div className='row'>
            <div className='col-xl-6 col-lg-6 col-md-12'>
                <img src='/shape_pattern.png'/>
              </div>
              <motion.div
              initial={"offscreen"}
              whileInView={"onscreen"}
              viewport={{once:true, amount:1}}
              transition={{staggerChildren:1}}
              className='col-xl-6 col-lg-6 col-md-12'>
                <motion.span variants={textAnimate} className='fw-700 h5 text-style'><Text tid={"welcomeMessage"}/></motion.span>
                <motion.h3 variants={textAnimate} className='fw-bolder mt-2 mb-2 name-style'>JEAN CARLOS<br/>REYES</motion.h3>
                <motion.p variants={textAnimate}>
                <Text tid={"firstHistory"}/>
                <br/>
                <br/>
                <Text tid={"secondHistory"}/>
                  <br />
                  <br />
                  <Text tid={"thirdHistory"}/>
                </motion.p>
                <a href='#' className='btn btn-success rounded-2 shadow shadow-2 me-2'><FcFile/> Resume</a>
                <a href='#' className='btn btn-light rounded-2 shadow shadow-2'><FcComments/> Contacts</a>
              </motion.div>
            </div>
          </div>
        </motion.div>
        </div>
      </div>
      <Languages/>
      <Contacts/>
      <Footer/>
    </div>
  )
}

export default Index;
