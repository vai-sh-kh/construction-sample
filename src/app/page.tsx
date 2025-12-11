import {
  Navbar,
  Hero,
  About,
  Services,
  Projects,
  Team,
  Testimonials,
  FAQ,
  Blog,
  Footer,
} from "@/components";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Team />
        <Testimonials />
        <FAQ />
        <Blog />
      </main>
      <Footer />
    </>
  );
}
