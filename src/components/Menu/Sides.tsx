import Image from "next/image";

const SidesMenu: React.FC = () => {
  return (
    <div className="flex max-w-screen-lg flex-col items-center">
      <div className="text-6xl font-semibold">SIDES</div>
      <div className="grid grid-cols-3">
        <div>
          <div className="m-4 text-center text-2xl font-semibold">
            Breadsticks
          </div>
          <div className="mx-4">Sticks of bread about six inches in length</div>
          <table>
            <tbody>
              <tr>
                <td>4-piece</td>
                <td>$2.99</td>
              </tr>
              <tr>
                <td>8-piece</td>
                <td>$4.99</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <div className="m-4 text-center text-2xl font-semibold">
            Cheese Bread
          </div>
          <div className="mx-4">
            Pull-apart breadsticks stuffed and covered with mozzarella and
            cheddar cheese
          </div>
          <div>$4.99</div>
        </div>
        <div>
          <div className="m-4 text-center text-2xl font-semibold">
            Garlic Parm Bread Balls
          </div>
          <div className="mx-4">
            You do not need to read this description. The name tells you all you
            need to know.
          </div>
          <table>
            <tbody>
              <tr>
                <td>16-piece</td>
                <td>$3.49</td>
              </tr>
              <tr>
                <td>32-piece</td>
                <td>$5.99</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SidesMenu;
