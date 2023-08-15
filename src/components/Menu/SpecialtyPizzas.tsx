import { specialtyPizzaDescriptions } from "~/data/names";

const SpecialtyPizzasMenu: React.FC = () => {
  const Specialties = specialtyPizzaDescriptions.map((item, index) => {
    return (
      <div key={index}>
        <div className="bg-gradient-to-br from-green-700 to-green-800 p-2 text-center text-xl text-zinc-50 sm:rounded-t sm:p-0">
          {item[0]}
        </div>
        <div className="max-h-full border-gray-500 p-3 sm:rounded-b sm:border-2 sm:bg-green-800/10 sm:p-1">
          {item[1]}
        </div>
      </div>
    );
  });
  return (
    <div className="flex grow flex-col items-center sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg">
      <div className="m-2 flex flex-col gap-4 text-center text-6xl font-semibold sm:flex-row">
        <span>SPECIALTY</span>
        <span>PIZZAS</span>
      </div>
      <div className="my-1 flex flex-col gap-1.5 text-center text-xl sm:flex-row">
        <div>
          Small <span className="font-bold"> $11.49 </span> / Medium{" "}
          <span className="font-bold"> $12.99 </span>
        </div>
        <div className="hidden sm:block">/</div>
        <div>
          Large <span className="font-bold"> $14.99 </span> / Extra-Large{" "}
          <span className="font-bold"> $16.99 </span>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:m-2 sm:grid-cols-3 sm:gap-2 lg:grid-cols-5">
        {Specialties}
      </div>
    </div>
  );
};

export default SpecialtyPizzasMenu;
