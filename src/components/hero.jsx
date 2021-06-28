import React, {useEffect} from 'react'
import '../App.css'
import HeroCaption from './hero-caption'
import { useHistory } from 'react-router-dom'

const Hero = () => {
  let history = useHistory();
  // useEffect(() => {
  //   setTimeout(() => {
  //     history.push('/album');
  //   }, 10000); 
  // },[])  
  

  return (
    <div className="hero">
      <HeroCaption />
    </div>
  )
}

export default Hero;