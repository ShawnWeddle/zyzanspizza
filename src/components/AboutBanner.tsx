import Image from "next/image";

const AboutBanner: React.FC = () => {
  return (
    <div>
      <Image
        src="/Bistro.png"
        width={4800}
        height={2700}
        alt=""
        className="h-72 w-screen object-cover sm:h-96"
      />
    </div>
  );
};

export default AboutBanner;
