import { footerLinks, socialIcons } from "@/constants";
import { logo } from "@/assets/images";

const Footer = () => {
  return (
    <section className="md:mb-4 md:px-8 section-mx">
      <div className="bg-accent sm:px-12 px-6 py-4 md:rounded-[40px]">
        <div className="sm:my-14 my-6 flex flex-wrap justify-center gap-4 sm:gap-8 text-white">
          <div className="flex-1">
            <img
              src={logo}
              className="w-[80px] h-[43px]"
              width={80}
              height={43}
              alt="jade D'val"
            />
            <p className="max-w-sm mt-2 text-sm">
              Empowering careers through industry-leading tech education and
              certification programs.
            </p>
          </div>

          {footerLinks.map((footer, idx) => (
            <div className="flex flex-col min-w-[108px] flex-1" key={idx}>
              <h3 className="mb-4">{footer.title}</h3>
              <div className="flex flex-col sm:gap-4 gap-2">
                {footer.links.map((link, idx) => (
                  <ul key={idx}>
                    <li className="hover:text-brand/40 transition-all">
                      <a href={link.href}>{link.label}</a>
                    </li>
                  </ul>
                ))}
              </div>
            </div>
          ))}
        </div>

        <hr className="sm:mt-10 my-4" />

        <div className="flex sm:flex-row flex-col gap-4 items-center sm:justify-between ">
          <p className="text-white max-sm:text-sm">
            © {new Date().getFullYear()} Jade D'val Tech. All rights reserved
          </p>
          <div className="flex gap-8 items-center">
            {socialIcons.map((icons, idx) => {
              const Icon = icons.icon;
              return <a key={idx} href={icons.link} target="blank" rel="noopener noreferrer " className=""><Icon className="text-white" /></a>;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
