const Footer: React.FC = () => {
  return (
    <div className="w-full bg-gradient-to-r from-green-700 to-green-800 p-2 text-center text-white">
      Developed by{" "}
      <a
        className="hover:underline"
        href="https://shawnweddle.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Shawn Weddle
      </a>
    </div>
  );
};

export default Footer;
