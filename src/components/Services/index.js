import React from 'react'
import { ServicesContainer,ServicesWrapper,ServicesCard,ServicesIcon,Servicesh1,Servicesh2,Servicesp } from './ServicesElements'
import Icon1 from '../../images/svg-6.svg'
import Icon2 from '../../images/svg-7.svg'
import Icon3 from '../../images/svg-8.svg'
const Services = () => {
  return (
    <>
    <ServicesContainer id='services'>
        <Servicesh1>Our Services</Servicesh1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon1}/>
                <Servicesh2>Reduce Expenses</Servicesh2>
                <Servicesp>We help reduce your fees and increase your savings</Servicesp>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon2}/>
                <Servicesh2>Virtual Offices</Servicesh2>
                <Servicesp>There with you, anytime, anywhere</Servicesp>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon3}/>
                <Servicesh2>Premium Benefits</Servicesh2>
                <Servicesp>With our Premium Metal card, enjoy 2% Waiver on fuel Surcharge</Servicesp>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
    </>
  )
}

export default Services