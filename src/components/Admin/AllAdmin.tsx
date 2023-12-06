import { useRouter } from "next/router";
import { api } from "~/utils/api";
import OrderAdmin from "./OrderAdmin";

const AllAdmin: React.FC = () => {
  const router = useRouter();
  const findOrders = api.order.findAllOrders.useQuery();
  const allOrders = findOrders.data?.status ? findOrders.data?.data.orders : [];

  const orders = allOrders.map((order, index) => {
    return <OrderAdmin key={index} order={order} />;
  });

  return (
    <div className="mt-2 w-full grow sm:max-w-screen-sm">
      <div className="bg-yellow-400 p-2 text-center text-4xl text-red-600 sm:rounded-t">
        All Orders
      </div>
      <div className="sm:bg-bluegit -800/10 max-h-full border-gray-500 p-3 sm:rounded-b sm:border-2 sm:p-1">
        <div className="p-2">
          {orders.length > 0 ? (
            orders
          ) : (
            <p>
              No orders have been placed yet.{" "}
              <button
                className="hover:underline"
                onClick={() => {
                  void router.push("/order");
                }}
              >
                Fix that.
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllAdmin;
