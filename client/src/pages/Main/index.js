import WelcomeSection from '../../components/Sections/Welcome'
import News from '../../components/Sections/News'
import SpecialistsSection from '../../components/Sections/Specialists'
import Interlayer from '../../components/Sections/Interlayer'
import WhyUs from '../../components/Sections/WhyUs'
import Interlayer2 from '../../components/Sections/Interlayer2'
import Etaps from '../../components/Sections/Etaps'
import Ask from '../../components/Sections/Ask'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { Routes, Route } from 'react-router-dom'
import Newsletter from '../Newsletter'

export default function Main() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={
          <>
            <WelcomeSection/>
            <News/>
            <Interlayer/>
            <WhyUs/>
            <Interlayer2/>
            <SpecialistsSection/>
            <Ask/>
          </>
        }
        />
        <Route path='/news/:id' element={<Newsletter/>}/>
      </Routes>
      <Footer/>
    </>
  )
}
