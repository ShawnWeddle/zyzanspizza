import Image from "next/image";
import { specialtyPizzas } from "~/data/names";

const SpecialtyPizzasMenu: React.FC = () => {
  const Specialties = specialtyPizzas.map((item, index) => {
    return (
      <div key={index}>
        <div className="rounded-t bg-gradient-to-br from-green-700 to-green-800 text-center text-xl text-zinc-50">
          {item[0]}
        </div>
        <div className="max-h-full rounded-b border-2 border-gray-500 bg-green-800/10 p-1">
          {item[1]}
        </div>
      </div>
    );
  });
  return (
    <div className="flex flex-col items-center sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg">
      <div className="m-2 text-6xl font-semibold">SPECIALTY PIZZAS</div>
      <div className="my-1 text-center text-xl">
        Small <span className="font-bold"> $11.49 </span> / Medium{" "}
        <span className="font-bold"> $12.99 </span> / Large{" "}
        <span className="font-bold"> $14.99 </span> / Extra-Large{" "}
        <span className="font-bold"> $16.99 </span>
      </div>
      <div className="m-2 grid grid-cols-3 gap-2 lg:grid-cols-5">
        {Specialties}
      </div>
    </div>
  );
};

export default SpecialtyPizzasMenu;
