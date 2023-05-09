import Image from "next/image";

const DessertsMenu: React.FC = () => {
  return (
    <div className="flex max-w-screen-lg flex-col items-center">
      <div className="text-6xl font-semibold">DESSERTS</div>
      <div className="grid grid-cols-3">
        <div>
          <div className="m-4 text-center text-2xl font-semibold">Brownie</div>
          <div className="mx-4">Sticks of bread about six inches in length</div>
        </div>
        <div>
          <div className="m-4 text-center text-2xl font-semibold">
            Cheese Bread
          </div>
          <div className="mx-4">
            Pull-apart breadsticks stuffed and covered with mozzarella and
            cheddar cheese
          </div>
        </div>
        <div>
          <div className="m-4 text-center text-2xl font-semibold">
            Garlic Parm Bread Balls
          </div>
          <div className="mx-4">
            You do not need to read this description. The name tells you all you
            need to know.
          </div>
        </div>
      </div>
    </div>
  );
};

export default DessertsMenu;
