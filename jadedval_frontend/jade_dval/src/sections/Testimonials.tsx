import { testimonials } from "@/constants";
import Quote from "@/assets/icons/quote.svg?react";

const Testimonials = () => {
  return (
    <section className="section-my section-mx section-px ">
      <h2 className="text-black text-center">Testimonials</h2>

      {/* Testimonials card */}
      <div className="flex flex-wrap mt-8 gap-8 justify-center sm:justify-between">
        {testimonials.map((testimonial, idx) => (
          <div key={idx} className="flex-1 p-4 group duration-300 ease-in-out hover:-translate-y-2 hover:shadow-md transition-all flex relative flex-col max-w-[300px] sm:max-w-[350px] min-w-[280px]">
            {/* background gradient */}
            <div className="absolute hidden transition-colors duration-200 group-hover:block inset-0 -z-10 rounded-lg brand-gradient opacity-10" />
            <Quote className="text-brand w-16 h-16" />

            <p className="flex-grow mt-4 sm:mt-6 text-sm sm:text-base">
              {testimonial.text}
            </p>

            <div className="flex gap-4 mt-2 sm:mt-4 items-center">
              <div className="w-12 sm:w-14 sm:h-14 h-12 rounded-full overflow-hidden ">
                <img
                  src={testimonial.image}
                  className="w-full h-full object-cover"
                  alt={testimonial.title}
                />
              </div>
              <div className="bg-a">
                <p className="font-montserrat sm:text-lg font-semibold">
                  {testimonial.name}
                </p>
                <p className="max-sm:text-sm max-w-sm">{testimonial.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
