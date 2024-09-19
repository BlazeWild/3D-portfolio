import { BrowserRouter } from "react-router-dom"

import {About, Contact, Experience, Feedbacks, Hero,
  Navbar, Tech, Works,StarsCanvas, Footer} from "./components"

const App=() =>{
  return (
<BrowserRouter>
<div className="relative z-0 bg-primary">
  <div className="bg-hero-pattern bg-cover">
    <Navbar />
    <Hero />
  </div>
          <About />
          <Works />
          <Tech />

  <div className="relative z-0"></div>
  <Contact/>
  {/* <StarsCanvas/> */}
  <Footer />
</div>
</BrowserRouter>
  )
}

export default App
