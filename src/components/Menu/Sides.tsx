import Image from "next/image";

const SidesMenu: React.FC = () => {
  return (
    <div className="flex flex-col items-center sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg">
      <div className="m-2 text-6xl font-semibold">SIDES</div>
      <div className="grid grid-cols-1 sm:m-2 sm:grid-cols-2 sm:gap-2 lg:grid-cols-3">
        <div>
          <div className="bg-gradient-to-br from-green-700 to-green-800 p-2 text-center text-2xl font-semibold text-zinc-50 sm:rounded-t sm:p-1">
            Garlic Parm Bread Balls
          </div>
          <div className="max-h-full border-gray-500 p-3 sm:rounded-b sm:border-2 sm:bg-green-800/10 sm:p-1">
            <p>
              You do not need to read this description. The name tells you all
              you need to know.
            </p>
            <div className="flex justify-center">
              <table>
                <tbody>
                  <tr>
                    <td>16-piece</td>
                    <td className="font-bold">$3.49</td>
                  </tr>
                  <tr>
                    <td>32-piece</td>
                    <td className="font-bold">$5.99</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-gradient-to-br from-green-700 to-green-800 p-2 text-center text-2xl font-semibold text-zinc-50 sm:rounded-t sm:p-1">
            Cheese Bread
          </div>
          <div className="max-h-full border-gray-500 p-3 sm:rounded-b sm:border-2 sm:bg-green-800/10 sm:p-1">
            <p>
              Pull-apart breadsticks stuffed and covered with mozzarella and
              cheddar cheese
            </p>
            <div className="flex justify-center">
              <p className="font-bold">$4.99</p>
            </div>
          </div>
        </div>
        <div>
          <div className="w-screen bg-gradient-to-br from-green-700 to-green-800 p-2 text-center text-2xl font-semibold text-zinc-50 sm:w-full sm:rounded-t sm:p-1">
            Breadsticks
          </div>
          <div className="max-h-full border-gray-500 p-3 sm:rounded-b sm:border-2 sm:bg-green-800/10 sm:p-1">
            <p>Sticks of bread about six inches in length</p>
            <div className="flex justify-center">
              <table>
                <tbody>
                  <tr>
                    <td>4-piece</td>
                    <td className="font-bold">$2.99</td>
                  </tr>
                  <tr>
                    <td>8-piece</td>
                    <td className="font-bold">$4.99</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidesMenu;
