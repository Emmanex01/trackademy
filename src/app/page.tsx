import HeroSection from "../components/HeroSection"
import NavBar from "../components/NavBar"

const LandingPage = () => {
  return (
    <div className="min-h-screen px-6 md:px-8 lg:px-16">
      <NavBar/>
      <HeroSection/>
    </div>
  )
}

export default LandingPage
