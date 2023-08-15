import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useAuthContext } from "~/hooks/useAuthContext";
import { api } from "~/utils/api";
import OrderProfile from "./OrderProfile";
import type { Order } from "@prisma/client";
interface UserProfileProps {
  userId: string;
}

const UserProfile: React.FC<UserProfileProps> = (props: UserProfileProps) => {
  const router = useRouter();
  const { userId } = props;
  const { authState, authDispatch } = useAuthContext();
  const { user } = authState;

  const [userOrders, setUserOrders] = useState<Order[]>([]);

  if (userId !== user?.userId) {
    void router.push("/");
  }

  const findOrders = api.order.findOrders.useQuery(userId, {
    onSuccess(data) {
      setUserOrders(data.data.orders);
    },
    onError(error) {
      console.log(error);
    },
  });

  useEffect(() => {
    findOrders;
  }, [findOrders]);

  const orders = userOrders.map((order, index) => {
    return (
      <OrderProfile
        key={index}
        order={order}
        userOrders={userOrders}
        setUserOrders={setUserOrders}
      />
    );
  });

  return (
    <div className="mt-2 w-full grow sm:max-w-screen-sm">
      <div className="bg-gradient-to-br from-blue-700 to-blue-800 p-2 text-center text-4xl text-zinc-50 sm:rounded-t">
        {user?.firstName} {user?.lastName}
      </div>
      <div className="sm:bg-bluegit -800/10 max-h-full border-gray-500 p-3 sm:rounded-b sm:border-2 sm:p-1">
        <p className="p-2">Email: {user?.email}</p>
        <p className="px-2 text-xl font-semibold">Orders ({orders.length}):</p>
        <div className="p-2">
          {orders.length > 0 ? (
            orders
          ) : (
            <p>
              You have not placed any orders yet.{" "}
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

        <div className="flex justify-center">
          <button
            className="m-2 rounded bg-gradient-to-br from-green-700 to-green-800 p-2 text-center text-xl font-semibold text-zinc-50 hover:from-green-600 hover:to-green-700"
            onClick={() => {
              authDispatch({
                type: "LOGOUT",
                payload: null,
              });
              void router.push("/");
            }}
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
