import { featureCards, learningPoints } from "@/constants";
import { MdOutlineSchool, MdCheckCircleOutline } from "react-icons/md";

const About = () => {
    return (
        <section id="about" className="overflow-hidden section-mx section-my section-px">
            <div className="flex flex-col items-center justify-center">
                <div className="flex flex-col text-center items-center justify-center gap-2">
                    <h2>About The Program </h2>
                    <span className="bg-brand w-34 h-1.5 rounded-xs"></span>
                </div>
                <p className="max-w-4xl text-center mt-6">
                    Our comprehensive training program is designed to help you master
                    in-demand tech skills and advance your career in the IT industry. We
                    focus on practical, hands-on learning to ensure you're ready for
                    real-world challenges.
                </p>

                {/* Features sub-section */}
                <div className="flex flex-wrap  gap-4 mt-6 sm:mt-8">
                    {featureCards.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <div
                                key={index}
                                className="relative flex-1 transform hover:-translate-y-2 hover:shadow-lg transition duration-300 min-w-[322px]"
                            >
                                {/* background gradient */}
                                <div className="absolute inset-0 -z-10  brand-gradient opacity-10" />
                                {/* vertical bar */}
                                <div className="absolute h-full w-2 bg-brand -z-9" />

                                {/* card conents */}
                                <div className="p-8">
                                    <div className="bg-accent/10 rounded-full p-4 w-fit">
                                        <Icon className="w-6 h-6 text-brand" />
                                    </div>
                                    <h3 className="mt-4">{feature.title}</h3>
                                    <p className="mt-5 mb-4 text-sm opacity-70">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                    
                </div>

                {/* Learning approach sub-section */}
                <div className=" w-full flex md:flex-row shadow-sm flex-col justify-center items-center gap-12 mt-6 sm:mt-8 bg-brand/5 p-8 rounded-2xl">
                    <div className="flex-1">
                        <h3 className="">Our Learning Approach</h3>
                        <p className=" mt-4  max-w-3xl">
                            We believe in learning by doing. Our program combines theoretical
                            knowledge with practical application, allowing you to develop a
                            deep understanding of concepts while building real-world skills.
                        </p>

                        <div className="mt-5 flex flex-col gap-2">
                            {learningPoints.map((point, idx) => (
                                <div
                                    key={idx}
                                    className="flex gap-2 w-fit justify-center items-center"
                                >
                                    <MdCheckCircleOutline className="h-6 w-6 text-brand " />
                                    <p className="text-sm">{point.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right hand side - "completion rate" */}
                    <div className="relative md:flex hidden">
                        <div className="absolute bg-brand/15 -inset-5 -z-10 rounded-full" />
                        <div className="w-48 h-48 flex justify-center items-center rounded-full bg-white">
                            <div className="flex flex-col  justify-center items-center">
                                <MdOutlineSchool className="h-10 w-10 text-brand" />
                                <p className="mt-2 font-montserrat font-bold text-lg">95%</p>
                                <p className="mt-1">Completion Rate</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
