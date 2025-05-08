import { courses } from "@/constants";
import ArrowRight from "@/assets/icons/arrowRight.svg?react";

const Courses = () => {
  return (
    <section id="courses" className="section-mx section-my section-px">
      <div className="flex flex-col">
        <div className="">
          <p className="font-semibold text-brand mb-2">Start Learning</p>
          <h2 className="mb-4">Featured Courses</h2>
          <p>
            {" "}
            Our carefully structured syllabus is designed to support learners at
            every level
          </p>
        </div>

        {/* Course cards */}
        <div className="flex  flex-wrap justify-between max-sm:justify-center gap-4 mt-6 sm:mt-8">
          {courses.map((course, idx) => (
            <a href="#enrollForm" className="">
              <div
                key={idx}
                className=" sm:max-w-[290px] group flex flex-col max-w-[250px] active:scale-95 transition-all min-w-[250px] max-sm:min-w-[200px] flex-1"
              >
                {/* course card image */}
                <div className="sm:h-[280px] h-[230px] group-hover:border-2 group-hover:border-brand rounded-3xl overflow-hidden ">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* course card text */}
                <h3 className="font-semibold mt-4">{course.title}</h3>
                <p className="max-w-[290px] flex-grow opacity-80">
                  {course.description}
                </p>
                <div className=""></div>
                <a
                  href="#"
                  className="flex sm:mt-2 mt-3 justify-center transition-all group-hover:gap-4 gap-2 items-center w-fit"
                >
                  <p className=" text-brand group-hover:underline transition-all">
                    {course.linkText}
                  </p>
                  <ArrowRight className="text-brand" />
                </a>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
