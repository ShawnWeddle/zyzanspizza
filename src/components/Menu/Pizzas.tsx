import Image from "next/image";
import { pizzaToppingsList, specialtyPizzas } from "~/data/names";

const PizzaMenu: React.FC = () => {
  const Toppings = pizzaToppingsList.map((item, index) => {
    return <div key={index}>{item}</div>;
  });

  const Specialties = specialtyPizzas.map((item, index) => {
    return (
      <div key={index} className="m-1">
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
    <div className="flex max-w-screen-lg flex-col items-center">
      <div className="text-6xl font-semibold">PIZZA</div>
      <div className="m-4 text-center text-2xl font-semibold">
        Create Your Own Pizza
      </div>
      <div className="grid grid-cols-2">
        <div>
          <div className="flex">
            <div>
              <span className="m-1 p-1 font-bold italic text-red-500 dark:rounded-md dark:bg-red-500 dark:text-zinc-50">
                Size:
              </span>
            </div>
            <table className="ml-4 border-collapse">
              <tbody>
                <tr className="border-b-2 border-black dark:border-zinc-50">
                  <td className="border-r-2 border-black px-1 text-center dark:border-zinc-50">
                    Small
                  </td>
                  <td className="border-r-2 border-black px-1 text-center dark:border-zinc-50">
                    10&quot;
                  </td>
                  <td className="px-1">$6.99</td>
                </tr>
                <tr className="border-b-2 border-black dark:border-zinc-50">
                  <td className="border-r-2 border-black px-1 text-center dark:border-zinc-50">
                    Medium
                  </td>
                  <td className="border-r-2 border-black px-1 text-center dark:border-zinc-50">
                    12&quot;
                  </td>
                  <td className="px-1">$7.99</td>
                </tr>
                <tr className="border-b-2 border-black dark:border-zinc-50">
                  <td className="border-r-2 border-black px-1 text-center dark:border-zinc-50">
                    Large
                  </td>
                  <td className="border-r-2 border-black px-1 text-center dark:border-zinc-50">
                    14&quot;
                  </td>
                  <td className="px-1">$8.99</td>
                </tr>
                <tr>
                  <td className="border-r-2 border-black px-1 text-center dark:border-zinc-50">
                    Extra Large
                  </td>
                  <td className="border-r-2 border-black px-1 text-center dark:border-zinc-50">
                    16&quot;
                  </td>
                  <td className="px-1">$9.99</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <span className="m-1 p-1 font-bold italic text-red-500 dark:rounded-md dark:bg-red-500 dark:text-zinc-50">
              Crust:
            </span>
            Choose between <span className="font-bold"> hand-tossed </span> or
            <span className="font-bold"> crispy thin </span> crust
          </div>
          <div className="flex">
            <div className="my-2">
              <span className="m-1 p-1 font-bold italic text-red-500 dark:rounded-md dark:bg-red-500 dark:text-zinc-50">
                Sauces:
              </span>
            </div>
            <div className="mt-2 grid grid-cols-2">
              <div className="px-1">Pizza sauce</div>
              <div className="px-1">Alfredo</div>
              <div className="px-1">Ranch</div>
              <div className="px-1">BBQ</div>
              <div className="px-1">Buffalo</div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="m-2">
            <span className="p-1 font-bold italic text-red-500 dark:rounded-md dark:bg-red-500 dark:text-zinc-50">
              Toppings:
            </span>{" "}
            ($1.50s / $1.75m / $2.00L / $2.25xL each)
          </div>
          <div className="m-2 grid grid-cols-3">{Toppings}</div>
          <div>
            <span className="m-1 p-1 font-bold italic text-red-500 dark:rounded-md dark:bg-red-500 dark:text-zinc-50">
              Crust Flavors:
            </span>
            Choose between
            <span className="font-bold"> garlic, parmesan, </span> or
            <span className="font-bold"> BOTH! </span>
          </div>
        </div>
      </div>

      <div className="m-4 text-center text-2xl font-semibold">
        Specialty Pizzas
      </div>
      <div className="grid grid-cols-5">{Specialties}</div>
    </div>
  );
};

export default PizzaMenu;

/**<div className="relative aspect-video w-72">
          <Image src="/pizza-main.png" fill alt="" className="object-contain" />
        </div> */
