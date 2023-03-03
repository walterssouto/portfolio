import githubLogo from '../assets/github.svg'
import upworkLogo from '../assets/upwork.svg'
const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/walterssouto"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src="../assets/linkedin.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.github.com/walterssouto"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="github-link" src={githubLogo} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.upwork.com/freelancers/~01e340c2cc703ac541"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="upwork-link" src={upworkLogo} />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
