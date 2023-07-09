import { type NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import NavBar from "~/components/Nav";
import DrinksMenu from "~/components/Menu/Drinks";

const Drinks: NextPage = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Zyzan&apos;s Pizza</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="dark flex min-h-screen flex-col items-center bg-zinc-50 dark:bg-zinc-800 dark:text-zinc-50 sm:bg-gradient-to-r sm:from-zinc-50 sm:via-amber-50 sm:to-zinc-50 dark:sm:bg-gradient-to-br dark:sm:from-zinc-700 dark:sm:to-zinc-800">
        <NavBar />
        <div className="h-16"></div>
        <DrinksMenu />
        <button
          className="p-1 text-xl font-semibold hover:text-green-800"
          onClick={() => {
            void router.push("/menu");
          }}
        >
          🡄 View Full Menu
        </button>
      </main>
    </>
  );
};

export default Drinks;
