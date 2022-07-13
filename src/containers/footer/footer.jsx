import React from 'react'
import "./footer.css"
import { SiInstagram,SiFacebook } from "react-icons/si"
const footer = () => {
  const style = {fill:"white", width:"50px", height:"30px"}
  return (
    <footer className='footer__cont'>
      <div className='footer__cont-socials'>
        <title>Nuestras Redes</title>
        <a href="https://instagram.com/nautica_martin" target="_blank"><SiInstagram style={style} /></a>
        <a href="https://facebook.com/Nautica-Martin-815472771921200/" target="_blank"><SiFacebook style={style} /></a>
      </div>
      <div className='footer__cont-resources'>
        <title>Recursos</title>
        <a href="#" target="_blank"></a>
        <a href="#" target="_blank"></a>
        <a href="#" target="_blank"></a>
      </div>
      <div className='footer__cont-legal'>
        <title>Legales</title>
        <a href="#" target="_blank">Terminos de Uso</a>
        <a href="#" target="_blank">Politica de Privacidad</a>
        <a href="#" target="_blank">Aviso Legal</a>
      </div>
      <div className='footer__cont-links'>
        <title>Links</title>
        <a href="#" target="_blank">Feedback</a>
      </div>
    </footer>
  )
}

export default footer