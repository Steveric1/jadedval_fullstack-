import {
  MdGroup,
  MdMilitaryTech,
  MdOutlineHowToReg,
  MdWorkOutline,
  MdOutlineEmojiObjects,
  MdOutlineBuildCircle,
} from "react-icons/md";
import folder from "@/assets/icons/folderSupervised_.svg?react";
import facebook from "@/assets/icons/facebook.svg?react";
import twitter from "@/assets/icons/twitter.svg?react";
import instagram from "@/assets/icons/instagram.svg?react";

import {
  blockchainCourse,
  frontendCourse,
  frontendStudent,
  backendCourse,
  backendStudent,
  uiuxCourse,
  uiuxStudent,
  instructor1,
  instructor2,
  instructor3,
  instructor4,
} from "@/assets/images";

export const faqs: { question: string; answer: string }[] = [
  {
    question: "How long do I have access to course materials?",
    answer:
      "Once enrolled, you have lifetime access to all course materials, including future updates. You can learn at your own pace and revisit lessons whenever you need to refresh your knowledge.",
  },
  {
    question: "Are there any prerequisites for the courses?",
    answer:
      "Prerequisites vary by course. Our beginner-level courses assume no prior experience, while advanced courses may require foundational knowledge. Each course description clearly outlines any prerequisites needed for success.",
  },
  {
    question: "What kind of support is available during the course?",
    answer:
      "We provide comprehensive support through multiple channels: a dedicated Q&A forum, weekly live sessions with instructors, and a community platform where you can connect with peers. Pro and Enterprise plans include additional 1-on-1 mentoring sessions.",
  },
  {
    question: "Are the certifications recognized by employers?",
    answer:
      "Our program prepares you for industry-recognized certifications from providers like AWS, Microsoft, Google, and CompTIA. We also provide our own course completion certificates, which are valued by many employers as evidence of practical skill development.",
  },
];

export const navLinks: {
  label: string;
  path: string;
}[] = [
  {
    label: "Home",
    path: "./",
  },
  {
    label: "About",
    path: "#about",
  },
  {
    label: "Courses",
    path: "#courses",
  },
  {
    label: "Experts",
    path: "#experts",
  },
];

export const featureCards: {
  icon: React.ElementType;
  title: string;
  description: string;
}[] = [
  {
    icon: MdMilitaryTech,
    title: "Industry Relevant Skills",
    description:
      "Our curriculum is continuously updated to match current industry demands, ensuring you learn what employers are looking for.",
  },
  {
    icon: MdGroup,
    title: "Expert Mentorship",
    description:
      "Learn directly from industry professionals who bring years of real-world experience to guide your learning journey.",
  },
  {
    icon: folder,
    title: "Portfolio Building",
    description:
      "Complete real-world projects that demonstrate your skills and create a professional portfolio to showcase to potential employers.",
  },
];

export const learningPoints: { text: string }[] = [
  {
    text: "Interactive video lessons with hands-on exercises",
  },
  {
    text: "Weekly live sessions with instructors and peers",
  },
  {
    text: "Industry-standard tools and technologies",
  },
  {
    text: "Capstone projects that solve real business problems",
  },
];

export const courses: {
  title: string;
  description: string;
  image: string;
  linkText: string;
}[] = [
  {
    title: "UI/UX Design",
    description: "Learn design fundamentals and build modern UIs",
    image: uiuxCourse,
    linkText: "Enroll",
  },
  {
    title: "Frontend Development",
    description:
      "Master HTML, CSS and JavaScript to create responsive, dynamic web interfaces",
    image: frontendCourse,
    linkText: "Enroll",
  },
  {
    title: "Backend Development",
    description:
      "Learn server-side programming to build APIs and manage databases",
    image: backendCourse,
    linkText: "Enroll",
  },
  {
    title: "Blockchain Technology",
    description:
      "Explore decentralized apps, smart contracts and blockchain integration",
    image: blockchainCourse,
    linkText: "Enroll",
  },
];

export const simpleSteps: { step: string; icon: React.ElementType }[] = [
  {
    step: "Enroll online",
    icon: MdOutlineHowToReg,
  },
  {
    step: "Learn through Live Classes and Labs",
    icon: MdOutlineEmojiObjects,
  },
  {
    step: "Complete Real Projects",
    icon: MdOutlineBuildCircle,
  },
  {
    step: "Get certified and Job-Ready",
    icon: MdWorkOutline,
  },
];

export const instructors: { name: string; title: string; image: string }[] = [
  {
    name: "Mr. Wisdom",
    title: "CEO/Mobile Developer",
    image: instructor1,
  },
  {
    name: "Mr. Eric",
    title: "Backend Developer",
    image: instructor2,
  },
  {
    name: "Mr. David",
    title: "Web Developer",
    image: instructor3,
  },
  {
    name: "Mr. Pelumi",
    title: "Frontend Developer",
    image: instructor4,
  },
];

export const testimonials: {
  text: string;
  name: string;
  title: string;
  image: string;
}[] = [
  {
    name: "Amina B.",
    title: "Junior Frontend Developer",
    image: frontendStudent,
    text: "Before this program, I struggled to build responsive websites. Now, I build sleek, mobile-friendly apps with React and Tailwind. I even landed a freelance gig within 6 weeks.",
  },
  {
    name: "Johnson.",
    title: "Backend Engineer Intern",
    image: backendStudent,
    text: "The backend course broke everything down clearly — from Node.js to working with APIs and databases. I’m now confident building scalable web apps and got hired as a backend intern.",
  },
  {
    name: "Kelechi M.",
    title: "UI/UX Designer",
    image: uiuxStudent,
    text: "I always had an eye for design but lacked direction. Learning Figma, wireframing, and design systems gave me the edge to start my own UI/UX portfolio — and a client project!",
  },
];

type Footer = {
  title: string;
  links: { label: string; href: string }[];
}[];

export const footerLinks: Footer = [
  {
    title: "Courses",
    links: [
      {
        label: "Frontend Development",
        href: "#courses",
      },
      {
        label: "Backend Development",
        href: "#courses",
      },
      {
        label: "UI/UX Design",
        href: "#courses",
      },
      {
        label: "Blockchain Technology",
        href: "#courses",
      },
    ],
  },
  {
    title: "Company",
    links: [
      {
        label: "About Us",
        href: "#about",
      },
      {
        label: "Faqs",
        href: "#faqs",
      },
      {
        label: "Contact Us",
        href: "#enroll-form",
      },
      {
        label: "Privacy Policy",
        href: "#",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        label: "Our Partners",
        href: "#",
      },
      {
        label: "Become a partner",
        href: "#",
      },
    ],
  },
];

export const socialIcons: {
  icon: React.ElementType;
  link: string;
  alt: string;
}[] = [
  {
    icon: twitter,
    link: "https://twitter.com",
    alt: "twitter_logo",
  },
  {
    icon: instagram,
    link: "https://instagram.com",
    alt: "instaram_logo",
  },
  {
    icon: facebook,
    link: " https://facebook.com",
    alt: " facebook_logo",
  },
];
