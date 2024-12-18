import Header from "@/Components/Header"
import SwiperComppnent from "@/Components/Slider/SliderComponent";
import SectionCursos from "./Cursos/page";


export default function Home() {
  return (
    <>
      <Header/>
      <main>
        <SwiperComppnent />
        <SectionCursos/>
      </main>
      <footer>
      </footer>
    </>
  );
}
