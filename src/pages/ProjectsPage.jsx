import React from 'react'
import ProjectLeft from '../components/ProjectLeft'
import project1 from '../assets/images/WhereIntheWorld.svg'
export default function ProjectsPage() {
  return (
    <section id="projects" className='bg-gradient-to-b from-black to-gray-950 text-white'>
      <h2 className='md:text-4xl text-3xl font-bold text-center py-10'>Projects</h2>
      <ProjectLeft image={project1} name="Where in the world?" link="https://dt-where-in-the-world.netlify.app" description="An interactive web app that displays information about every country using the REST Countries API.
Users can search by country name, filter by region, switch between light/dark mode, and view detailed information including population, currencies, and border countries." techSkills={["React", "ReactDom ", "FetchApi", "Tailwind CSS"]} />
    </section>
  )
}
