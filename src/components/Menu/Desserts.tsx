import Image from "next/image";

const DessertsMenu: React.FC = () => {
  return (
    <div className="flex flex-col items-center sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg">
      <div className="m-2 text-6xl font-semibold">DESSERTS</div>
      <div className="m-2 grid grid-cols-2 gap-2 lg:grid-cols-3">
        <div>
          <div className="rounded-t bg-gradient-to-br from-green-700 to-green-800 p-1 text-center text-2xl font-semibold text-zinc-50">
            Big Brownie
          </div>
          <div className="max-h-full rounded-b border-2 border-gray-500 bg-green-800/10 p-1">
            <p>
              Who doesn&apos;t love big, fudgy, chocolately brownies? You
              don&apos;t? Then you can lick the chocolate syrup off the top.
            </p>
            <div className="flex justify-center">
              <p className="font-bold">$6.99</p>
            </div>
          </div>
        </div>
        <div>
          <div className="rounded-t bg-gradient-to-br from-green-700 to-green-800 p-1 text-center text-2xl font-semibold text-zinc-50">
            Big Cookie
          </div>
          <div className="max-h-full rounded-b border-2 border-gray-500 bg-green-800/10 p-1">
            <p>
              A big, warm, chocolate chip cookie. Designed to be shared, but
              technically you can eat it by yourself.
            </p>
            <div className="flex justify-center">
              <p className="font-bold">$6.99</p>
            </div>
          </div>
        </div>
        <div>
          <div className="rounded-t bg-gradient-to-br from-green-700 to-green-800 p-1 text-center text-2xl font-semibold text-zinc-50">
            Pull-Apart Cinnamon Rolls
          </div>
          <div className="max-h-full rounded-b border-2 border-gray-500 bg-green-800/10 p-1">
            <p>
              Like Grandma used to make, but better. Bite-sized cinnamon roll
              pieces drizzled with icing.
            </p>
            <div className="flex justify-center">
              <p className="font-bold">$6.99</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DessertsMenu;
