import Header from '@/Components/Header'
import SwiperComppnent from '@/Components/Slider/SliderComponent'
import React from 'react'
import SectionCursos from "@/app/Cursos/page";
import WhyAnyPage from '../WhyAny/page';

export default function IndexPage() {
  return (
    <>
      <Header/>
      <main>
        <SwiperComppnent />
        <SectionCursos />
        <WhyAnyPage />
      </main>
      <footer>
      </footer>
    </>
  )
}
