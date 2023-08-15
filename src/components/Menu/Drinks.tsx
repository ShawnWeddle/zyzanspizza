import { drinksOptionsList } from "~/data/names";

const DrinksMenu: React.FC = () => {
  const DrinksOptions = drinksOptionsList.map((item, index) => {
    return (
      <div key={index}>
        <div className="flex min-h-full flex-col justify-center rounded border-2 border-green-800 bg-green-800/10 p-2 text-center text-xl">
          <div>{item.split(" ")[0]}</div>
          <div>{item.split(" ")[1]}</div>
        </div>
      </div>
    );
  });
  return (
    <div className="flex grow flex-col items-center sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg">
      <div className="m-2 text-6xl font-semibold">DRINKS</div>
      <div className="m-1 text-center text-xl">
        20 oz <span className="font-bold"> $1.99 </span> ◆ 2-liter{" "}
        <span className="font-bold"> $2.99 </span>
      </div>
      <div className="m-2 grid grid-cols-2 gap-2 sm:grid-cols-6">
        {DrinksOptions}
      </div>
    </div>
  );
};

export default DrinksMenu;
