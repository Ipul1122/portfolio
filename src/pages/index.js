import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero  from '../components/Hero';
import Skills from '../components/Skills';
import Project from '../components/Project';
// import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';


export default function Home(){
  return (
    <div>

      <Head>
        <title>Portfolio Muhammad Syaifulloh</title>
        <meta name="description" content="Portfolio of Muhammad Syaifulloh" />
      </Head>
      <main className='body'>
        <Navbar/>
        <Hero/>
        <Skills/>
        <Project/>
        {/* <Testimonials/> */}
        <Contact/>
      </main>
    </div>
  )
}