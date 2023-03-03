import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const MySkills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="skills" className="pt-10 max-w-[1720px] mx-auto pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between mx-auto md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-red">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7">
            A brief description about my main roles and habilities.
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveLarge ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full  before:border-2 before:border-blue before:z-[-1]"
            >
              <img
                alt="skills"
                className="z-10"
                src="assets/skills-image.png"
              />
            </div>
          ) : (
            <img alt="skills" className="z-10" src="assets/skills-image.png" />
          )}
        </div>
      </div>

      {/* SKILLS */}
      <div className="md:flex md:justify-evenly max-w-[1720px] mx-auto mt-16 gap-32">
        {/* EXPERIENCE */}
        <motion.div
          className="md:w-1/3 mt-16 md:mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="relative">
              <p className="font-playfair font-semibold text-5xl absolute top-0 z-10">01</p>
              <p className="font-playfair font-semibold text-3xl absolute top-16 z-10">
                Experience
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute left-[10%] top-0 " />
          </div>
          <p className="mt-5 w-full md:w-5/6 text-justify">
          Experienced Frontend Developer with expertise in React, HTML5,
           CSS3, and JavaScript. Designed and developed design systems for 
           gov't web pages and created COVID-19 data catalog on AWS. 
           Developed web pages for online processes, electronic invoices, and open data delivery. 
           
          </p>
        </motion.div>

        {/* INNOVATIVE */}
        <motion.div
          className="md:w-1/3 mt-16 md:mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="relative">
              <p className="font-playfair font-semibold absolute top-0 text-5xl z-10">02</p>
              <p className="font-playfair font-semibold text-3xl absolute top-16 z-10">
                Innovative
              </p>
            </div>
            <div className="w-1/2 md:w-3/4  h-32 bg-red absolute left-[10%] top-0" />
          </div>
          <p className="mt-5 w-full md:w-5/6 text-justify">
          Constantly seeking out new solutions and technologies to create unique, user-friendly experiences. I prioritize accessibility and adaptability, ensuring that my work can reach and benefit as many users as possible.
          </p>
        </motion.div>
        {/* IMAGINATIVE */}
        <motion.div
          className="md:w-1/3 mt-16 md:mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="relative">
              <p className="font-playfair font-semibold text-5xl absolute top-0 z-10">03</p>
              <p className="font-playfair font-semibold text-3xl absolute top-16 z-10">
                Imaginative
              </p>
            </div>
            <div className="w-1/2 md:w-3/4  h-32 bg-yellow absolute left-[10%] top-0 " />
          </div>
          <p className="mt-5 w-full md:w-5/6 text-justify">
          With all the coding and web development licenses and certificates 
          I have earned, including certifications from top companies like 
          Google and Meta, I consider myself a creative and innovative.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
