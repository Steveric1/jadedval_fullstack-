import { useState } from "react";
import Button from "@/components/Button";
import useEnroll from "@/hooks/useEnroll";  // Import the custom hook

const EnrollForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    interest: "",
    emailConsent: false,
  });

  const { enroll, loading, error, success } = useEnroll();  // Get hook functions and states

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const target = e.target;
    const { name, value } = target;

    if (target instanceof HTMLInputElement && target.type === "checkbox") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: target.checked,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await enroll(formData);  // Call the hook to handle the API request
  };

  return (
    <section id="enrollForm" className="section-my section-mx section-px">
      <div className="flex max-w-[1100px] sm:p-20 m-auto flex-col items-center shadow-md">
        <h2>
          Enroll <span className="text-brand">Now!</span>
        </h2>
        <p className="max-w-lg text-center mt-4">
          Join thousands of successful students who have transformed their careers with our training programs.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col max-sm:px-4 md:gap-8 gap-4 sm:my-14 my-8 w-full max-md:max-w-lg">
          <div className="flex md:flex-row flex-col gap-4 justify-between">
            <div className="flex flex-1 flex-col gap-2 max-w-lg">
              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="border-2 focus:border-brand border-gray-300 px-4 py-2 rounded-xs"
                placeholder="Enter your first name"
                required
              />
            </div>
            <div className="flex flex-1 flex-col gap-2 max-w-lg">
              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="border-2 focus:border-brand border-gray-300 px-4 py-2 rounded-xs"
                placeholder="Enter your last name"
                required
              />
            </div>
          </div>

          <div className="flex md:flex-row flex-col gap-4 justify-between">
            <div className="flex flex-1 flex-col gap-2 max-w-lg">
              <label htmlFor="email">Email Address:</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                className="border-2 focus:border-brand border-gray-300 px-4 py-2 rounded-xs"
                placeholder="you@example.com"
                required
              />
            </div>
            <div className="flex flex-1 flex-col gap-2 max-w-lg">
              <label htmlFor="phone">Phone Number:</label>
              <input
                type="tel"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="border-2 focus:border-brand border-gray-300 px-4 py-2 rounded-xs"
                placeholder="+234..."
                required
              />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <label htmlFor="interest"> Area of interest </label>
            <select
              name="interest"
              id="interest"
              value={formData.interest}
              onChange={handleInputChange}
              className="px-4 py-2 border-2 font-poppins rounded-xs"
              required
            >
              <option value="" disabled>Select your primary interest</option>
              <option value="UI/UX Design">UI/UX Design</option>
              <option value="Frontend Development">Frontend Development</option>
              <option value="Backend Development">Backend Development</option>
              <option value="Blockchain Technology">Blockchain Technology</option>
            </select>
          </div>

          <div className="flex gap-4 items-start leading-snug max-sm:mt-2">
            <input
              type="checkbox"
              name="emailConsent"
              id="emailConsent"
              checked={formData.emailConsent}
              onChange={handleInputChange}
              className="w-4 h-4 mt-1"
            />
            <label htmlFor="emailConsent" className="font-poppins sm:text-base text-sm font-normal">
              I agree to receive emails about TechSkillsPro courses, promotions, and updates. You can unsubscribe at any time.
            </label>
          </div>

          <Button
            type="submit"
            children={loading ? "Submitting..." : "Enroll"}
            borderRadius="border-none"
            className="text-white py-2 font-semibold opacity-70 hover:opacity-100 active:bg-white active:text-brand mt-4 transition-all"
          />

          {error && <div className="text-red-500 mt-2">{error}</div>}
          {success && <div className="text-green-500 mt-2">Enrollment successful!</div>}
        </form>
      </div>
    </section>
  );
};

export default EnrollForm;
