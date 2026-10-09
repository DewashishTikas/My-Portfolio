import React from 'react'
import ProjectLeft from '../components/ProjectLeft'
import project1 from '../assets/images/WhereIntheWorld.svg'
import project2 from '../assets/images/storageApp.png'
export default function ProjectsPage() {
  return (
    <section id="projects" className='bg-linear-to-b from-black to-gray-950 text-white'>
      <h2 className='md:text-4xl text-3xl font-bold text-center py-10'>Projects</h2>
      <ProjectLeft image={project1} name="Where in the world?" link="https://dt-where-in-the-world.netlify.app" description="An interactive web app that displays information about every country using the REST Countries API.
Users can search by country name, filter by region, switch between light/dark mode, and view detailed information including population, currencies, and border countries." techSkills={["React", "ReactDom ", "FetchApi", "Tailwind CSS"]} />
      <ProjectLeft image={project2} name="My File Space" link="https://myfilespace.xyz" description="A full-stack cloud storage web application that allows users to securely upload, manage, and share files. Users can organize files, mark favourites, manage deleted files, and share content through public links or email invitations with viewer and editor permissions. It also supports Google and GitHub authentication, Google Drive integration, and secure cloud storage using AWS S3 and CloudFront." techSkills={["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "AWS S3", "CloudFront", "OAuth 2.0", "Google Drive API",  "Razorpay"]} />
    </section>
  )
}
