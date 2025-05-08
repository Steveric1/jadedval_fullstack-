import { students } from "@/assets/images";
import Button from "@/components/Button";

const Hero = () => {
  return (
    <section className="section-mx md:px-8 relative xl:my-16 md:my-10 my-8 overflow-hidden">
      <div className="md:max-h-[500px] max-h-screen flex gap-8 flex-col md:flex-row">
        <div className="flex-1 flex flex-col max-md:px-4 max-md:text-center max-md:items-center lg:gap-8 gap-4 ">
          <h1 className="text-brand max-lg:text-3xl">
            Kickstart Your Career With IT Skills Build Your <br className="hidden md:block" />
            <span className="bg-brand opacity-50 backdrop-blur-lg text-white p-1 rounded-xl">
              Future!
            </span>
          </h1>
          <p className="max-w-md">
            Practical, well structured hands-on training designed <br /> to get
            you job-ready — faster.
          </p>
          <div className="flex md:gap-4 gap-2 md:flex-row ">
            <Button className="text-white min-w-[126px] text-base active:scale-90 font-semibold py-2 transition-all duration-200 hover:opacity-100  opacity-50"> View Courses</Button>
            <Button className="text-white min-w-[126px] text-base active:scale-90 font-semibold py-2.5 transition-all duration-200 hover:opacity-100  opacity-50">Partner </Button>
          </div>
        </div>

        {/* Hero image */}
        <div className="relative flex-1  w-full flex justify-center items-end">
          {/* small screen background overlay */}
          <div className="absolute right-0 -z-10 w-full  h-full  bg-accent" />
          <img
            src={students}
            alt=""
            className=" object-contain w-full h-full max-md:w-[80%]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
