import Image from "next/image";

const WingsMenu: React.FC = () => {
  return (
    <div className="flex flex-col items-center sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg">
      <div className="m-2 text-6xl font-semibold">WINGS</div>
      <div className="m-2 grid grid-cols-2 gap-2">
        <div>
          <div className="rounded-t bg-gradient-to-br from-green-700 to-green-800 p-1 text-center text-2xl font-semibold text-zinc-50">
            Bone-In Wings
          </div>
          <div className="max-h-full rounded-b border-2 border-gray-500 bg-green-800/10 p-1">
            <p className="m-1">
              Tender, juicy, delicious, and chickeny. Don&apos;t forget the
              dipping sauces and please do not eat the bones.
            </p>
            <div className="flex flex-col md:flex-row">
              <table className="m-1">
                <tbody>
                  <tr>
                    <td>8-piece</td>
                    <td className="font-bold">$9.99</td>
                  </tr>
                  <tr>
                    <td>12-piece</td>
                    <td className="font-bold">$14.49</td>
                  </tr>
                  <tr>
                    <td>16-piece</td>
                    <td className="font-bold">$18.49</td>
                  </tr>
                  <tr>
                    <td>24-piece</td>
                    <td className="font-bold">$23.99</td>
                  </tr>
                </tbody>
              </table>
              <div className="flex">
                <div>
                  <span className="m-1 p-1 font-bold italic text-red-500 dark:rounded-md dark:bg-red-500 dark:text-zinc-50">
                    Sauces:
                  </span>
                </div>
                <div>
                  <div>Plain (No Sauce)</div>
                  <div>Buffalo</div>
                  <div>BBQ</div>
                  <div>Garlic Parmesan</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="rounded-t bg-gradient-to-br from-green-700 to-green-800 p-1 text-center text-2xl font-semibold text-zinc-50">
            Boneless Wings
          </div>
          <div className="max-h-full rounded-b border-2 border-gray-500 bg-green-800/10 p-1 ">
            <p className="m-1">
              Yeah, uh... let me get it boneless. Glorified chicken nuggets.
              Poor source of calcium.
            </p>
            <div className="flex flex-col md:flex-row">
              <table className="m-1">
                <tbody>
                  <tr>
                    <td>8-piece</td>
                    <td className="font-bold">$7.99</td>
                  </tr>
                  <tr>
                    <td>12-piece</td>
                    <td className="font-bold">$11.49</td>
                  </tr>
                  <tr>
                    <td>16-piece</td>
                    <td className="font-bold">$14.49</td>
                  </tr>
                  <tr>
                    <td>24-piece</td>
                    <td className="font-bold">$18.99</td>
                  </tr>
                </tbody>
              </table>

              <div className="flex">
                <div className="m-1">
                  <span className="p-1 font-bold italic text-red-500 dark:rounded-md dark:bg-red-500 dark:text-zinc-50">
                    Sauces:
                  </span>
                </div>
                <div className="m-1">
                  <div>Buffalo</div>
                  <div>BBQ</div>
                  <div className="whitespace-nowrap">Garlic Parmesan</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WingsMenu;
