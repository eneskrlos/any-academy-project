import Header from '@/Components/Header'
import SwiperComppnent from '@/Components/Slider/SliderComponent'
import React from 'react'
import SectionCursos from "@/app/Home/SectionCursos";
import WhyAnyPage from './WhyAnyPage';
import StepByStepSection from '../StepByStep/page';

export default function IndexPage() {
  return (
    <>
      <Header/>
      <main>
        <SwiperComppnent />
        <SectionCursos />
        <WhyAnyPage />
        <StepByStepSection />
      </main>
      <footer>
      </footer>
    </>
  )
}
