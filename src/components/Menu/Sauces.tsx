import { sauceOptionsList } from "~/data/names";

const SaucesMenu: React.FC = () => {
  const SauceOptions = sauceOptionsList.map((item, index) => {
    return (
      <div key={index} className="m-1">
        <div className="flex min-h-full flex-col justify-center rounded border-2 border-green-800 bg-green-800/10 p-2 text-center text-xl">
          <div>{item.split(" ")[0]}</div>
          <div>{item.split(" ")[1]}</div>
        </div>
      </div>
    );
  });
  return (
    <div className="flex flex-col items-center sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg">
      <div className="text-6xl font-semibold">SAUCES</div>
      <div className="m-2 text-center text-xl">
        <span className="font-bold"> $0.75 </span> each
      </div>
      <div className="mb-4 grid grid-cols-6">{SauceOptions}</div>
    </div>
  );
};

export default SaucesMenu;
