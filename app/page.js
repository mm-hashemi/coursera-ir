'use client'
import Companies from "@/components/companies";
import Courses from "@/components/courses";
import Sliders from "@/components/slides";


export default function Home() {
   


  return (
  
   <div>
    <section className="">
   <Sliders/>

    </section>
    <section className="">
   <Companies/>
      
      </section>
      <section className="">
   <Courses/>
      
      </section>
   </div>
  );
}
