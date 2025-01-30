import Header from '@/Components/Header'
import SwiperComppnent from '@/Components/Slider/SliderComponent'
import React from 'react'
import SectionCursos from "@/app/Cursos/page";
import WhyAnyPage from '../WhyAny/page';
import StepByStepSection from '../StepByStep/page';
import SectionFirstStep from '../FirstStep/SectionFirstStep'
import HowIsAny from '../HowIsAny/page';
import Opinions from '../Opinions/page';


export default function IndexPage() {
  return (
    <>
      <Header/>
      <main>
        <SwiperComppnent />
        <SectionCursos />
        <WhyAnyPage />
        <StepByStepSection />
        <SectionFirstStep />
        <HowIsAny />
        <Opinions /> 
      </main>
      <footer>
      </footer>
    </>
  )
}
