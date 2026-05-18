import footerBg from '../assets/footer/footer-bg.svg'
import logo from '../assets/logo.svg'
import { FaGithub, FaLinkedin, FaReact } from "react-icons/fa"
import { BsTypescript } from "react-icons/bs"
import { RiTailwindCssFill } from "react-icons/ri"
import { SiFastapi } from "react-icons/si"
import { BiLogoPostgresql } from "react-icons/bi"
import { Figma } from '../assets/footer/Figma.tsx'


const team = [
  {
    name: 'Valeriy Lysenko',
    role: 'Scrum Master / Web Developer',
    linkedin: 'https://www.linkedin.com/in/valeriylysenko',
    github: 'https://github.com/Valeriusdev'
  },
  {
    name: 'Rika Miyata',
    role: 'UX Designer / Web Developer',
    linkedin: 'https://www.linkedin.com/in/rika-miyata-4bab99243/',
    github: 'https://github.com/Tayrika'
  },
  {
    name: 'Bryan Hoyem',
    role: 'Web Developer',
    linkedin: 'https://linkedin.com/in/bryanhoyem',
    github: 'https://github.com/bhoyem'
  },
  {
    name: 'Ekaterina Kushnir',
    role: 'Web Developer',
    linkedin: 'https://www.linkedin.com/in/ekaterina-kushnir-mikhaylova/',
    github: 'https://github.com/katiaku'
  },
  {
    name: 'Ruben Aguilar',
    role: 'UI Designer / Web Developer',
    linkedin: 'https://linkedin.com/in/rubenaguilar-',
    github: 'https://github.com/rubenaguilardev'
  }
]

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-background-dark">
      <div className="absolute inset-0 flex items-start justify-center overflow-hidden">
        <img
          src={footerBg}
          alt="footer background image"
          className="object-contain object-top translate-y-12"
        />
      </div>
      <div className='relative px-4 sm:px-6 py-8 md:px-8 lg:p-10 max-w-360 mx-auto space-y-6'>
        <div className='flex flex-col md:flex-row items-center gap-2 justify-center'>
          <img src={logo} alt="Stemly logo" className='w-12 md:w-13 lg:w-14' />
          <h2 className='text-2xl md:text-3xl lg:text-4xl font-heading tracking-wide font-semibold text-transparent bg-clip-text bg-linear-to-r from-brand-secondary to-brand'>STEMLY</h2>
        </div>


        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3'>
          {team.map(({ name, role, linkedin, github }) => (
            <div
              key={name}
              className='flex flex-col justify-between border border-muted/10 p-3 lg:p-4 rounded-[10px] space-y-4 hover:border-brand hover:bg-brand/5 transition-colors duration-400'>
              <div>
                <h2 className='text-sm lg:text-base font-semibold'>{name}</h2>
                <span className='text-xs font-medium text-muted'>{role}</span>
              </div>
              <div className='flex gap-2 text-2xl md:text-3xl'>
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className='hover:scale-120 transition-transform duration-300'>
                  <FaLinkedin color='#0A66C2' />
                </a>
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className='hover:scale-120 transition-transform duration-300'>
                  <FaGithub />
                </a>
              </div>
            </div>
          ))}
          <div className='lg:hidden group items-center gap-2 flex  justify-center border border-muted/10 p-3 lg:p-4 rounded-[10px] space-y-4 hover:border-brand hover:bg-brand/5 transition-colors duration-400'>
            <div className='text-3xl md:text-4xl lg:text-5xl group-hover:scale-120 transition-transform duration-300'>
              <FaGithub />
            </div>
            <span className='text-muted font-heading font-semibold md:text-lg lg:text-xl group-hover:text-brand'>Github Repository</span>
          </div>
        </div>
        <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-6 sm:space-y-0'>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href='https://github.com/chingu-voyages/V60-tier3-team-39'
          >
            <div className='hidden group lg:flex items-center gap-2'>
              <div className='text-3xl md:text-4xl lg:text-5xl group-hover:scale-120 transition-transform duration-300'>
                <FaGithub />
              </div>
              <span className='text-muted font-heading font-semibold md:text-lg lg:text-xl group-hover:text-brand'>Github Repository</span>
            </div>
          </a>
          <div className='flex sm:flex-col md:flex-row md:items-center gap-2 sm:gap-1 md:gap-2 justify-center'>
            <span className='text:lg lg:text-xl text-muted font-heading font-semibold'>Tech Stack</span>
            <div className='flex items-center gap-2 text-3xl md:text-4xl lg:text-5xl'>
              <BsTypescript color='#007ACC' />
              <FaReact color='#00BCD4' />
              <RiTailwindCssFill color='#38BDF8' />
              <Figma className='w-5 md:w-6 lg:w-8' />
              <SiFastapi color='#049688' />
              <div className='text-[#336791] text-4xl md:text-5xl lg:text-6xl'>
                <BiLogoPostgresql />
              </div>
            </div>
          </div>
        </div>
      </div>


    </footer >

  )
}

export default Footer