import Image from "next/image";

const WingsMenu: React.FC = () => {
  return (
    <div className="flex max-w-screen-lg flex-col items-center">
      <div className="text-6xl font-semibold">WINGS</div>
      <div className="grid grid-cols-2">
        <div>
          <div className="m-4 text-center text-2xl font-semibold">
            Bone-In Wings
          </div>
          <div className="m-4 flex">
            <table>
              <tbody>
                <tr>
                  <td>8-piece</td>
                  <td>$9.99</td>
                </tr>
                <tr>
                  <td>12-piece</td>
                  <td>$14.49</td>
                </tr>
                <tr>
                  <td>16-piece</td>
                  <td>$18.49</td>
                </tr>
                <tr>
                  <td>24-piece</td>
                  <td>$23.99</td>
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
        <div>
          <div className="m-4 text-center text-2xl font-semibold">
            Boneless Wings
          </div>
          <div className="m-4 flex">
            <table>
              <tbody>
                <tr>
                  <td>8-piece</td>
                  <td>$7.99</td>
                </tr>
                <tr>
                  <td>12-piece</td>
                  <td>$11.49</td>
                </tr>
                <tr>
                  <td>16-piece</td>
                  <td>$14.49</td>
                </tr>
                <tr>
                  <td>24-piece</td>
                  <td>$18.99</td>
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
                <div>Buffalo</div>
                <div>BBQ</div>
                <div>Garlic Parmesan</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WingsMenu;
