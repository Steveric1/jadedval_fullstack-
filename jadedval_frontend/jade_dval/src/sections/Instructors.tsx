import { instructors } from "@/constants";

const Instructors = () => {
  return (
    <section id="experts" className=" py-8 section-py bg-brand/20 text-center">
      <h2 className="">Meet Your Instructors</h2>
      <p className="max-w-sm mt-4  mx-auto ">
        Learn from seasoned IT Professionals with real-world experience
      </p>
      <div className=" mt-10  flex lg:px-26 px-17 flex-wrap gap-8 w-full justify-between max-sm:justify-center">
        {instructors.map((instructor, idx) => (
          <div className=" lg:max-w-[250px] max-w-[200px] lg:min-w-[200px] min-w-[190px] flex-1" key={idx}>
            <div className="lg:h-[300px] h-[250px] relative">
              {/* background black frame */}
              <div className="absolute -inset-2.5 -z-10 bg-black" />
              <img
                className="w-full h-full object-cover"
                src={instructor.image}
                alt={instructor.title}
              />
            </div>
            <h3 className="mt-4">{instructor.name}</h3>
            <p className="mt-1">{instructor.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Instructors;
