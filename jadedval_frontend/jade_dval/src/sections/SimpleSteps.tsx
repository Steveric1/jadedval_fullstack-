import { simpleSteps } from "@/constants";
import { frontendCourse } from "@/assets/images";
import Button from "@/components/Button";

const SimpleSteps = () => {
  return (
    <section className="section-my section-mx section-px">
      <div className="max-w-4xl flex sm:flex-row flex-col-reverse gap-8 justify-between max-sm:items-center mx-auto">
        {/* section image */}
        <div className=" flex-1 max-w-[410px] md:max-h-[264px] bg-blue-100 ">
          <img
            src={frontendCourse}
            className="w-full h-full object-cover"
            alt="frontend_Course_image"
          />
        </div>

        {/* section text */}
        <div className="flex-1 flex flex-col items-end">
          <div>
            <p className="text-brand font-semibold">Simple steps</p>
            <h2 className="mt-2">How It Works</h2>

            <div className="mt-6 flex flex-col gap-2">
              {simpleSteps.map((steps, idx) => {
                const Icon = steps.icon;
                return (
                  <div key={idx} className="flex gap-2 items-center">
                    <Icon className="w-6 h-6 text-brand" />
                    <p>{steps.step}</p>
                  </div>
                );
              })}
            </div>
            <Button children="Enroll Now" borderRadius="rounded-none" className="text-white mt-4 w-fit active:scale-95 duration-200 font-semibold" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimpleSteps;
