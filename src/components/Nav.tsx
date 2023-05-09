import { useRouter } from "next/router";
import { FaShoppingCart } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";

const NavBar: React.FC = () => {
  const router = useRouter();
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center bg-green-800 text-zinc-50 sm:gap-16">
      <div className="flex justify-center">
        <div className="px-2">
          <button onClick={() => void router.push("/")}>
            <div className="flex items-center gap-1">
              <div className="text-6xl">Z</div>
              <div className="hidden text-xl sm:block">yzan&apos;s</div>
            </div>
          </button>
        </div>
        <div>
          <button
            onClick={() => void router.push("/order")}
            className="px-2 py-5 hover:bg-green-900 sm:hidden"
          >
            ORDER
          </button>
          <button
            onClick={() => void router.push("/order")}
            className="hidden px-2 py-5 hover:bg-green-900 sm:block"
          >
            ORDER ONLINE
          </button>
        </div>
      </div>
      <div className="flex justify-center">
        <div>
          <button
            onClick={() => void router.push("/about")}
            className="px-2 py-5 hover:bg-green-900 sm:hidden"
          >
            ABOUT
          </button>
        </div>
        <div>
          <button
            onClick={() => void router.push("/about")}
            className="hidden px-2 py-5 hover:bg-green-900 sm:block"
          >
            ABOUT US
          </button>
        </div>
        <div>
          <button
            onClick={() => void router.push("/menu")}
            className="px-2 py-5 hover:bg-green-900"
          >
            MENU
          </button>
        </div>
        <div>
          <button
            onClick={() => void router.push("/signin")}
            className="px-2 py-6 hover:bg-red-600 sm:hidden"
          >
            <MdAccountCircle />
          </button>
        </div>
        <div>
          <button
            onClick={() => void router.push("/signin")}
            className="hidden px-2 py-5 hover:bg-red-600 sm:block"
          >
            SIGN IN
          </button>
        </div>
        <div>
          <button
            onClick={() => void router.push("/checkout")}
            className="px-2 py-5 hover:bg-green-900"
          >
            <div className="flex items-center gap-1">
              <div>
                <FaShoppingCart />
              </div>
              <div>$0.00</div>
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
