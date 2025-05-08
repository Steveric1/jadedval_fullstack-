import {
  Faqs,
  Header,
  Hero,
  About,
  Courses,
  SimpleSteps,
  Instructors,
  Testimonials,
  Footer,
  EnrollForm,
} from "./sections";

function App() {
  return (
    <div className="max-w-[1536px] mx-auto ">
      <div className="relative overflow">
        {/* desktop Hero background overlay */}
        <div className="absolute md:block hidden right-0 top-0 bg-accent w-1/2 h-full -z-10 " />
        <Header />
        <Hero />
      </div>

      <About />
      <Courses />
      <SimpleSteps />
      <Instructors />
      <Testimonials />
      <EnrollForm />
      <Faqs />
      <Footer />
    </div>
  );
}

export default App;
