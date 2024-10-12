import Navbar from './components/Navbar'
import Header from './components/Header'
import Intro from './components/Intro'
import Events from './components/Events'
import Brand from './components/Brand'
import Form from './components/Form'
import Footer from './components/Footer'
export default function Home() {
  return (
    <div className="w-full h-full min-h-screen">
      <div className=" w-full  bg-gradient-svg">
        <Navbar />
        <Header />
      </div>
      <div className="w-full bg-gradient-svg-2">
        <Intro />
      </div>
      <div className="w-full bg-gradient-svg-3">
        <Events />
      </div>
      <Brand />
      <div>
        <Form />
      </div>
      <Footer />
    </div>
  )
}
