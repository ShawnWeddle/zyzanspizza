const DessertsMenu: React.FC = () => {
  return (
    <div className="flex grow flex-col items-center sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg">
      <div className="m-2 text-6xl font-semibold">DESSERTS</div>
      <div className="grid grid-cols-1 sm:m-2 sm:grid-cols-2 sm:gap-2 lg:grid-cols-3">
        <div>
          <div className="bg-gradient-to-br from-green-700 to-green-800 p-2 text-center text-2xl font-semibold text-zinc-50 sm:rounded-t sm:p-1">
            Big Brownie
          </div>
          <div className="max-h-full border-gray-500 p-3 sm:rounded-b sm:border-2 sm:bg-green-800/10 sm:p-1">
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
          <div className="bg-gradient-to-br from-green-700 to-green-800 p-2 text-center text-2xl font-semibold text-zinc-50 sm:rounded-t sm:p-1">
            Big Cookie
          </div>
          <div className="max-h-full border-gray-500 p-3 sm:rounded-b sm:border-2 sm:bg-green-800/10 sm:p-1">
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
          <div className="bg-gradient-to-br from-green-700 to-green-800 p-2 text-center text-2xl font-semibold text-zinc-50 sm:rounded-t sm:p-1">
            Pull-Apart Cinnamon Rolls
          </div>
          <div className="max-h-full border-gray-500 p-3 sm:rounded-b sm:border-2 sm:bg-green-800/10 sm:p-1">
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
