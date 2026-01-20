
import Footer from '../components/Footer'
import HomeBanner from '../components/HomeBanner'
import Milestone from '../components/Milestone'
import ServiceSection from '../components/ServiceSection'

const HomePage = () => {
  return (
    <div className='py-13'>
      <HomeBanner/>
      <Milestone/>
      <ServiceSection/>
      <Footer/>
    </div>
  )
}

export default HomePage