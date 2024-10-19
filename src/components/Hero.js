import HeroImg from '../assets/Vep.jpg';
import { AiOutlineTwitter, AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";

export default function Hero() {
    const config  = {
        subtitle: 'I am a Full-stack developer and Mobile App developer',
        social: {
            linkedin: 'http://www.linkedin.com/in/veeramanikandane335559312'
        },
        so: {
        github: 'https://github.com/Veera1011/'
        }
    }


    return <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
       <div className='md:w-1/2 flex flex-col'>
            <h1 className=' text-white text-4xl font-hero-font'>Hi, <br/> I am <span>Veeramanikandan</span>
                <p className='text-2xl'>{config.subtitle}</p>
            </h1>
            <div className='flex py-10'>
                <a href={config.social.linkedin} className='hover:text-white'><AiOutlineLinkedin size={40}/></a>
                <a href={config.so.github} className='hover:text-white'><AiOutlineGithub size={40}/></a>
            </div>             
       </div>
       <img className='md:w-1/3' src={HeroImg} />
    </section>
}
