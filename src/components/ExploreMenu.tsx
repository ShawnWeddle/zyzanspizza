import Image from "next/image";
import { useRouter } from "next/router";

const ExploreMenu: React.FC = () => {
  const router = useRouter();
  return (
    <div className="grid grid-cols-3 gap-1 sm:gap-3 md:gap-4 lg:grid-cols-7 lg:gap-3 xl:gap-4">
      <button
        onClick={() => void router.push("/menu/pizza")}
        className="rounded-md bg-gradient-to-br from-green-700 to-green-800 text-zinc-50 shadow shadow-green-800 hover:from-green-600 hover:to-green-700"
      >
        <div className="relative aspect-video w-28 rounded-t-md sm:w-32 md:w-40 lg:w-32 xl:w-40">
          <Image
            src="/pizza-main.png"
            fill
            alt=""
            className="rounded-t-md object-cover"
          />
        </div>
        <div className="text-center text-xl">Pizza</div>
      </button>
      <button
        onClick={() => void router.push("/menu/wings")}
        className="rounded-md bg-gradient-to-br from-green-700 to-green-800 text-zinc-50 shadow shadow-green-800 hover:from-green-600 hover:to-green-700"
      >
        <div className="relative aspect-video w-28 rounded-t-md sm:w-32 md:w-40 lg:w-32 xl:w-40">
          <Image
            src="/wings.jpg"
            fill
            alt=""
            className="rounded-t-md object-cover"
          />
        </div>
        <div className="text-center text-xl">Wings</div>
      </button>
      <button
        onClick={() => void router.push("/menu/sides")}
        className="rounded-md bg-gradient-to-br from-green-700 to-green-800 text-zinc-50 shadow shadow-green-800 hover:from-green-600 hover:to-green-700"
      >
        <div className="relative aspect-video w-28 rounded-t-md sm:w-32 md:w-40 lg:w-32 xl:w-40">
          <Image
            src="/breadsticks.jpg"
            fill
            alt=""
            className="rounded-t-md object-cover"
          />
        </div>
        <div className="text-center text-xl">Sides</div>
      </button>
      <button
        onClick={() => void router.push("/menu/desserts")}
        className="rounded-md bg-gradient-to-br from-green-700 to-green-800 text-zinc-50 shadow shadow-green-800 hover:from-green-600 hover:to-green-700"
      >
        <div className="relative aspect-video w-28 rounded-t-md sm:w-32 md:w-40 lg:w-32 xl:w-40">
          <Image
            src="/rolls.jpg"
            fill
            alt=""
            className="rounded-t-md object-cover"
          />
        </div>
        <div className="text-center text-xl">Desserts</div>
      </button>
      <button
        onClick={() => void router.push("/menu/drinks")}
        className="rounded-md bg-gradient-to-br from-green-700 to-green-800 text-zinc-50 shadow shadow-green-800 hover:from-green-600 hover:to-green-700"
      >
        <div className="relative aspect-video w-28 rounded-t-md sm:w-32 md:w-40 lg:w-32 xl:w-40">
          <Image
            src="/drinks.jpg"
            fill
            alt=""
            className="rounded-t-md object-cover"
          />
        </div>
        <div className="text-center text-xl">Drinks</div>
      </button>
      <button
        onClick={() => void router.push("/menu/sauces")}
        className="rounded-md bg-gradient-to-br from-green-700 to-green-800 text-zinc-50 shadow shadow-green-800 hover:from-green-600 hover:to-green-700"
      >
        <div className="relative aspect-video w-28 rounded-t-md sm:w-32 md:w-40 lg:w-32 xl:w-40">
          <Image
            src="/sauce.jpg"
            fill
            alt=""
            className="rounded-t-md object-cover"
          />
        </div>
        <div className="text-center text-xl">Sauces</div>
      </button>
      <button
        onClick={() => void router.push("/menu")}
        className="green-700 col-span-3 text-left lg:col-span-1 lg:justify-start"
      >
        <div className="flex flex-row justify-center gap-1 text-xl font-semibold hover:text-green-800 lg:flex-col lg:gap-0">
          <div>View</div>
          <div>Full</div>
          <div>Menu ➧</div>
        </div>
      </button>
    </div>
  );
};

export default ExploreMenu;
