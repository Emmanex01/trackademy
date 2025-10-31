import Categories from "../components/landingPage/Categories"
import HeroSection from "../components/landingPage/HeroSection"
import NavBar from "../components/landingPage/NavBar"
import Revolutionalize from "../components/landingPage/Revolutionalize"

const LandingPage = () => {
  return (
    <div className="min-h-screen px-6 md:px-8 lg:px-16">
      <NavBar/>
      <HeroSection/>
      <Revolutionalize/>
      <Categories/>
    </div>
  )
}

export default LandingPage
