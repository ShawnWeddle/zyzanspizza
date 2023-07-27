import { type NextPage } from "next";
import Head from "next/head";
import NavBar from "~/components/Nav";
import HomeBanner from "~/components/HomeBanner";
import ExploreMenu from "~/components/ExploreMenu";

const Home: NextPage = () => {
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
        <div className="m-6 hidden px-1 font-serif italic sm:block">
          ◆ The greatest pizza restaurant to never exist ◆
        </div>
        <HomeBanner />
        <div className="m-6 text-2xl font-semibold">Explore Our Menu</div>
        <ExploreMenu />
        <div className="m-4 hidden text-transparent sm:block">.</div>
        <div className="my-6 font-serif italic sm:hidden">
          ◆ The greatest pizza restaurant to never exist ◆
        </div>
      </main>
    </>
  );
};

export default Home;
