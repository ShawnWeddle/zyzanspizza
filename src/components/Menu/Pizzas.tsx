import Image from "next/image";
import { pizzaToppingsList } from "~/data/names";

const PizzaMenu: React.FC = () => {
  const Toppings = pizzaToppingsList.map((item, index) => {
    return <div key={index}>{item}</div>;
  });

  return (
    <div className="flex flex-col items-center sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg">
      <div className="m-2 text-6xl font-semibold">PIZZA</div>
      <div className="m-2 grid grid-cols-1 md:grid-cols-2">
        <div>
          <div className="flex">
            <div className="m-1">
              <span className="p-1 font-bold italic text-red-500 dark:rounded-md dark:bg-red-500 dark:text-zinc-50">
                Size:
              </span>
            </div>
            <table className="m-1 mx-5 border-collapse">
              <tbody>
                <tr className="border-b-2 border-black dark:border-zinc-50">
                  <td className="border-r-2 border-black px-1 text-center dark:border-zinc-50">
                    Small
                  </td>
                  <td className="border-r-2 border-black px-1 text-center dark:border-zinc-50">
                    10&quot;
                  </td>
                  <td className="px-1 font-bold">$6.99</td>
                </tr>
                <tr className="border-b-2 border-black dark:border-zinc-50">
                  <td className="border-r-2 border-black px-1 text-center dark:border-zinc-50">
                    Medium
                  </td>
                  <td className="border-r-2 border-black px-1 text-center dark:border-zinc-50">
                    12&quot;
                  </td>
                  <td className="px-1 font-bold">$7.99</td>
                </tr>
                <tr className="border-b-2 border-black dark:border-zinc-50">
                  <td className="border-r-2 border-black px-1 text-center dark:border-zinc-50">
                    Large
                  </td>
                  <td className="border-r-2 border-black px-1 text-center dark:border-zinc-50">
                    14&quot;
                  </td>
                  <td className="px-1 font-bold">$8.99</td>
                </tr>
                <tr>
                  <td className="border-r-2 border-black px-1 text-center dark:border-zinc-50">
                    Extra Large
                  </td>
                  <td className="border-r-2 border-black px-1 text-center dark:border-zinc-50">
                    16&quot;
                  </td>
                  <td className="px-1 font-bold">$9.99</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex">
            <div className="m-1">
              <span className="p-1 font-bold italic text-red-500 dark:rounded-md dark:bg-red-500 dark:text-zinc-50">
                Crust:
              </span>
            </div>
            <div className="m-1">
              Choose between <span className="font-bold"> hand-tossed </span> or
              <span className="font-bold"> crispy thin </span> crust
            </div>
          </div>
          <div className="flex">
            <div className="m-1">
              <span className="p-1 font-bold italic text-red-500 dark:rounded-md dark:bg-red-500 dark:text-zinc-50">
                Sauces:
              </span>
            </div>
            <div className="m-1 grid grid-cols-2">
              <div className="px-1">Pizza sauce</div>
              <div className="px-1">Alfredo</div>
              <div className="px-1">Ranch</div>
              <div className="px-1">BBQ</div>
              <div className="px-1">Buffalo</div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex">
            <div className="m-1">
              <span className="p-1 font-bold italic text-red-500 dark:rounded-md dark:bg-red-500 dark:text-zinc-50">
                Toppings:
              </span>{" "}
            </div>
            <div className="m-1">
              (<span className="font-bold">$1.50</span>s /{" "}
              <span className="font-bold">$1.75</span>m /{" "}
              <span className="font-bold">$2.00</span>L /{" "}
              <span className="font-bold">$2.25</span>xL each)
            </div>
          </div>
          <div className="my-2 mx-3 grid grid-cols-3">{Toppings}</div>
          <div className="flex">
            <div className="m-1">
              <span className="p-1 font-bold italic text-red-500 dark:rounded-md dark:bg-red-500 dark:text-zinc-50">
                Crust Flavors:
              </span>
            </div>
            <div className="m-1">
              Choose between
              <span className="font-bold"> garlic, parmesan, </span> or
              <span className="font-bold"> BOTH! </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PizzaMenu;

/**<div className="relative aspect-video w-72">
          <Image src="/pizza-main.png" fill alt="" className="object-contain" />
        </div> */
