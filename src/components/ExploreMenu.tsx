import Image from "next/image";

const ExploreMenu: React.FC = () => {
  return (
    <div className="grid grid-cols-3 gap-1 sm:gap-3 md:gap-4 lg:grid-cols-7 lg:gap-3 xl:gap-4">
      <div className="flex flex-col justify-between rounded-md bg-gradient-to-br from-green-700 to-green-800 text-white shadow shadow-green-800 hover:from-green-600 hover:to-green-700">
        <div className="relative aspect-video w-28 rounded-t-md sm:w-32 md:w-40 lg:w-32 xl:w-40">
          <Image
            src="/pizza-main.png"
            fill
            alt=""
            className="rounded-t-md object-cover"
          />
        </div>
        <div className="text-center text-xl">Pizza</div>
      </div>
      <div className="flex flex-col justify-between rounded-md bg-gradient-to-br from-green-700 to-green-800 text-white shadow shadow-green-800 hover:from-green-600 hover:to-green-700">
        <div className="relative aspect-video w-28 rounded-t-md sm:w-32 md:w-40 lg:w-32 xl:w-40">
          <Image
            src="/wings.jpg"
            fill
            alt=""
            className="rounded-t-md object-cover"
          />
        </div>
        <div className="text-center text-xl">Wings</div>
      </div>
      <div className="flex flex-col justify-between rounded-md bg-gradient-to-br from-green-700 to-green-800 text-white shadow shadow-green-800 hover:from-green-600 hover:to-green-700">
        <div className="relative aspect-video w-28 rounded-t-md sm:w-32 md:w-40 lg:w-32 xl:w-40">
          <Image
            src="/breadsticks.jpg"
            fill
            alt=""
            className="rounded-t-md object-cover"
          />
        </div>
        <div className="text-center text-xl">Sides</div>
      </div>
      <div className="flex flex-col justify-between rounded-md bg-gradient-to-br from-green-700 to-green-800 text-white shadow shadow-green-800 hover:from-green-600 hover:to-green-700">
        <div className="relative aspect-video w-28 rounded-t-md sm:w-32 md:w-40 lg:w-32 xl:w-40">
          <Image
            src="/rolls.jpg"
            fill
            alt=""
            className="rounded-t-md object-cover"
          />
        </div>
        <div className="text-center text-xl">Desserts</div>
      </div>
      <div className="flex flex-col justify-between rounded-md bg-gradient-to-br from-green-700 to-green-800 text-white shadow shadow-green-800 hover:from-green-600 hover:to-green-700">
        <div className="relative aspect-video w-28 rounded-t-md sm:w-32 md:w-40 lg:w-32 xl:w-40">
          <Image
            src="/drinks.jpg"
            fill
            alt=""
            className="rounded-t-md object-cover"
          />
        </div>
        <div className="text-center text-xl">Drinks</div>
      </div>
      <div className="flex flex-col justify-between rounded-md bg-gradient-to-br from-green-700 to-green-800 text-white shadow shadow-green-800 hover:from-green-600 hover:to-green-700">
        <div className="relative aspect-video w-28 rounded-t-md sm:w-32 md:w-40 lg:w-32 xl:w-40">
          <Image
            src="/sauce.jpg"
            fill
            alt=""
            className="rounded-t-md object-cover"
          />
        </div>
        <div className="text-center text-xl">Sauces</div>
      </div>
      <div className="green-700 col-span-3 flex justify-center text-gray-800 lg:col-span-1 lg:justify-start">
        <button className="flex flex-row justify-center gap-1 text-xl font-semibold text-gray-800 hover:text-green-800 lg:flex-col lg:gap-0">
          <div>View</div>
          <div>Full</div>
          <div>Menu ➧</div>
        </button>
      </div>
    </div>
  );
};

export default ExploreMenu;
