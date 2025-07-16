import { useState } from 'react'
import './App.css'
import Header from "./Header";
import HeaderBelow from "./HeaderBelow";
import HeroSection from "./herosection";
import AboutUs from "./AboutUs";
import OurServices from "./OurServices";
import Skills from "./Skills";
import Portfolio from "./portfolio";
import WorkingProgress from "./workingprogress";
import ClientSay from "./clientsay";
import NumberStats from './number';
import TeamMember from './TeamMember';
import OurFAQ from './OurFAQ';
import BlogNews from './BlogNews';
import Collab from './collab';
import Footer from './footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <HeaderBelow/>
      <HeroSection />
      <AboutUs />
      <OurServices /> 
      <Skills />
      <Portfolio />
      <WorkingProgress />
      <ClientSay />
      <NumberStats />
      <TeamMember />
      <OurFAQ />
      <BlogNews />
      <Collab />
      <Footer />
    </> 
  )
}

export default App
