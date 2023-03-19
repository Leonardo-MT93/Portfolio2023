import React from 'react';
import '../styles/biography.css';
import {motion} from 'framer-motion'

export const Biography = () => {

  return (
    <motion.div className='container_bio' >
      <div className='biography'>
        <div className='subtittle'>
        <motion.h2 className='subtitulo' initial={{y: -150}} animate={{y:0}} transition={{delay: 0.1, type: 'spring', stiffness: 75}}>A cerca de mí</motion.h2>
        </div>
        <motion.div className='bio_details' initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.5, duration: 1}}>
          <div className='bio_text'>
          <p className='biography_description'>Hola soy Leonardo Tolaba, soy desarrollador freelance con experiencia en Frontend y Backend. Actualmente estoy estudiando en UTN y mejorando mis habilidades en inglés en GreenWood.A través del bootcamp de Oracle ONE, adquirí un amplio conocimiento en ambas áreas. Como hablante de inglés intermedio, estoy ansioso por trabajar en un ambiente desafiante y propicio para el crecimiento continuo.</p>
          </div>
          <div className='bio_study'>
            <div className='study_card'>
              <img className='studyCard_img' src={require('../image/formacion/krause.webp')} alt='logo_formacion'></img>
              <p className='studyCard_text'>Técnico Mecánico<br></br>Esc.Téc. Otto Krause</p>
            </div>
            <div className='study_card'>
              <img className='studyCard_img' src={require('../image/formacion/utn.webp')} alt='logo_formacion'></img>
              <p className='studyCard_text'>Tecn. en Programación<br></br>UTN FRA - En curso</p>
            </div>
            <div className='study_card'>
              <img className='studyCard_img' src={require('../image/formacion/oracle.webp')} alt='logo_formacion'></img>
              <p className='studyCard_text'>FrontEnd Developer<br></br>Oracle ONE - 2022</p>

            </div>
            <div className='study_card'>
              <img className='studyCard_img' src={require('../image/formacion/greenwood.webp')} alt='logo_formacion'></img>
              <p className='studyCard_text'>Ingles B1<br></br>Instituto GreenWood</p>
            </div>
          </div>
        </motion.div>
        <motion.div className='bio_image' initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.5, duration: 1}}>
          <div className='contain_imgbio'>
          <img src={require('../image/PerfilPrincipal.webp')} className='imagen_foto' alt='imq'></img>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
