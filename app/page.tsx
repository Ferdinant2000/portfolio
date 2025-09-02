import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Resume from "@/components/Resume";
import Works from "@/components/Works";
import Blogs from "@/components/Blogs";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-900">
      {/* <Navbar /> */}
      <section id="about"><About /></section>
      <section id="resume"><Resume /></section>
      <section id="works"><Works /></section>
      <section id="blogs"><Blogs /></section>
      <section id="contact"><Contact /></section>
    </main>
  );
}
