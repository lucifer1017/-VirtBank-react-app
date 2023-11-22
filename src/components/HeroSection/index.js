import React,{useState} from 'react'
import Video from '../../videos/video.mp4'
import { Button } from '../ButtonElement'
import { HeroContainer,HeroBg,VideoBg,HeroContent,Heroh1,Herop ,HeroBtnWrapper,ArrowForward,ArrowRight} from './HeroElements'

import { FaArrowRight } from 'react-icons/fa'
const HeroSection = () => {
    const [hover,setHover]=useState(false)

    const onHover=()=>{
        setHover(!hover)
    }
  return (
    <HeroContainer>
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
        </HeroBg>
        <HeroContent>
            <Heroh1>Virtual Banking Made Easy</Heroh1>
            <Herop>Sign Up for a new Account today and 
                receive $250 in credit towards your next payment</Herop>
                <HeroBtnWrapper>
                    <Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true' >Get Started {hover ?<ArrowForward/>:<ArrowRight/>}</Button>
                </HeroBtnWrapper>

        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection