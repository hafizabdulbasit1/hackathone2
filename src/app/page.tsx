import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Product from "./components/Product";
import Essential from "./components/Essential";
import Features from "./components/Features";
import Gearup from "./components/Gearup";
import Prefooter from "./components/Prefooter";
import Footer from "./components/Footer";
export default function Home() {
  return (
   <div className=""> 
    <Navbar/>
    <Hero/>
    <Product/>
    <Features/>
    <Gearup/>
    <Essential/>
    <Prefooter/>
    <Footer/>
   </div>
  );
}
