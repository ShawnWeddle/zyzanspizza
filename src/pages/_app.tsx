import { type AppType } from "next/app";
import { AuthContextProvider } from "~/context/AuthContext";
import { OrderContextProvider } from "~/context/OrderContext";

import { api } from "~/utils/api";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <AuthContextProvider>
      <OrderContextProvider>
        <Component {...pageProps} />
      </OrderContextProvider>
    </AuthContextProvider>
  );
};

export default api.withTRPC(MyApp);
