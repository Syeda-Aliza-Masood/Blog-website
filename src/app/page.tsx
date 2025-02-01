import Image from "next/image";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Contactbar from "@/components/Contactbar";
import Review from "@/components/Review";


export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Review />
      <Contactbar />
      <Footer />
      
      
    </div>
  );
}
