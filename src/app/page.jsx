import Image from "next/image";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Solutons from "./components/Solutons";
import About from "./components/About";
import Questions from "./components/Questions";
import Contact from "./components/Contact";

export default function Home() { 
  return (
    <>
      <Navbar/>
       <section className="w-screen min-h-screen">
            <Hero/>
        </section>
        <section className="w-screen min-h-screen">
           <Solutons/>
        </section>
        <section id="About"  className="w-screen min-h-screen bg-[#151515]">
           <About/>
        </section>
        <section id="FAQ"  className="w-screen min-h-screen bg-[#f1f1f1]">
           <Questions/>
        </section>
         <section id="Contact" className="w-screen min-h-[550px] bg-[#000000]">
            <Contact/>
         </section>
      </>
  );
}
