import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Management from "./components/Management"
import Extension from "./components/Extension";
import Needs from "./components/Needs";
import Task from "./components/Task";
import Sponser from "./components/Sponser";
import Footer from "./components/Footer";
export default function Home(){
  return(
    <div>
      <Navbar />
      <Hero />
      <Management />
      <Extension />
      <Needs />
      <Task />
      <Sponser />
      <Footer />
    </div>
  )
}