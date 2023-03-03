import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { api } from "../lib/axios";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};


const Project = ({  description,
  html_url,
  updated_at,
  name,
  created_at,
  repos_url,
  default_branch, }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = name.split("-").join(" ").toLowerCase();

  return (
    <a href={html_url} className="decoration-none" target="_blank" rel="noreferrer">
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{projectTitle}</p>
        <p className="mt-7">
         {description}
        </p>
      </div>
      <img src={`https://raw.githubusercontent.com/walterssouto/${name}/${default_branch}/public/cover.png`} className='w-[400px] h-[400px] object-cover ' alt={projectTitle} />
    </motion.div>
    </a>
  );
};

const Projects = () => {

  const [repositories, setRepositories] = useState([])
  useEffect(() => {
    api
      .get('users/walterssouto/repos?per_page=30', {
        params: {
          _sort: 'updated_at',
          _order: 'desc',
        },
      })
      .then((response) => {
        setRepositories(response.data)
      })
  }, [])

  return (
    <section id="projects" className="pt-24 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          If you're a developer, feel free to use some of the above examples 
          to study and improve your skills. :)
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-red
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div>
          {
            repositories.map( (repository) => 
              (<Project key={repository.id}
                  name={repository.name}
                  description={repository.description}
                  html_url={repository.html_url}
                  created_at = {repository.created_at}
                  updated_at={repository.updated_at}
                  repos_url={repository.repos_url}
                  default_branch={repository.default_branch} 
                  
              />)
             
          
          )}

          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
