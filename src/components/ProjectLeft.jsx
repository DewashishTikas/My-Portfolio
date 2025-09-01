import { Link } from "react-router"

export default function ProjectLeft({ image, name,link, techSkills, description }) {
  return (
    <div className="flex md:flex-row flex-col gap:10 md:gap-30 justify-center pb-5 px-4">
      <div className="md:w-1/2 w-full hover:scale-105 cursor-pointer">
        <Link to={link} target="_blank">
          <img className="w-full" src={image} alt={name} />
        </Link>
      </div>
      <div className="md:w-1/2 w-full self-center">
        <h3 className="text-3xl md:text-4xl font-bold">{name}</h3>
        <p className="text-md md:text-lg mb-2">{description}</p>
        <p className="space-x-2">{techSkills.map((skill) => {
          return <span className='bg-gray-700 px-2 py-1 rounded-md ' key={skill}>{skill}</span>
        })}</p>
      </div>
    </div>
  )
}
