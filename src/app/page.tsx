import AcademicExperts from "../components/landingPage/AcademicExperts"
import Categories from "../components/landingPage/Categories"
import Footer from "../components/landingPage/Footer"
import HeroSection from "../components/landingPage/HeroSection"
import NavBar from "../components/landingPage/NavBar"
import News from "../components/landingPage/News"
import Revolutionalize from "../components/landingPage/Revolutionalize"
import Testimonials from "../components/landingPage/Testimonials"
import TopCourses from "../components/landingPage/TopCourses"
import TransformExp from "../components/landingPage/TransformExp"

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <div className="px-6 md:px-8 lg:px-16">
        <NavBar/>
        <HeroSection/>
        <Revolutionalize/>
        <Categories/>
        <TopCourses/>
        <Testimonials/>
        <TransformExp/>
        <AcademicExperts/>
        <News/>
      </div>
      <Footer/>
    </div>
  )
}

export default LandingPage
