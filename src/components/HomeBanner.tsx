import Image from "next/image";

const HomeBanner: React.FC = () => {
  return (
    <div className="relative mt-10 sm:mt-0">
      <Image
        src="/pizza-main.png"
        width={4800}
        height={2700}
        alt=""
        className="h-72 w-screen object-cover sm:h-96"
      />
      <div className="absolute top-0 left-0 sm:top-10 sm:left-10">
        <div className="w-screen bg-gradient-to-br from-green-700/70 to-green-800/70 p-3 text-2xl font-bold italic text-white sm:w-auto sm:rounded-xl sm:from-green-700 sm:to-green-800 sm:text-3xl sm:shadow-md sm:shadow-green-800 md:text-4xl">
          Large One-Topping Pizzas Only $10.99
        </div>
      </div>

      <div className="absolute bottom-10 right-10">
        <button className="rounded-xl bg-gradient-to-br from-white to-gray-100 p-3 text-2xl font-bold italic text-green-700 shadow-md shadow-white hover:bg-gradient-to-br hover:from-gray-100 hover:to-green-100 hover:text-green-800 sm:text-3xl md:text-4xl">
          ORDER ONLINE
        </button>
      </div>
    </div>
  );
};

export default HomeBanner;
