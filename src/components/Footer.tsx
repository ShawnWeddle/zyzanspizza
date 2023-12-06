import { useRouter } from "next/router";

const Footer: React.FC = () => {
  const router = useRouter();
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
      </a>{" "}
      ◆{" "}
      <button
        className="hover:underline"
        onClick={() => {
          void router.push("/admin");
        }}
      >
        All Orders
      </button>
    </div>
  );
};

export default Footer;
