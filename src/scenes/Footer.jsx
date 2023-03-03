import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className=" bg-red flex flex-col pb-12">
      <div className="w-10/12 mx-auto">
        <SocialMediaIcons />
        <div className="md:flex justify-center md:justify-between text-center ">
          <p className="font-playfair font-semibold text-2xl text-yellow">
            Walters Souto
          </p>
          <p className="font-playfair text-md text-yellow">
            © 2023 walterssouto. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
