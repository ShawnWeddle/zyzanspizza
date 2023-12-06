import { type NextPage } from "next";
import Head from "next/head";
import NavBar from "~/components/Nav";
import AboutBanner from "~/components/AboutBanner";
import ExploreMenu from "~/components/ExploreMenu";
import Footer from "~/components/Footer";

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>Zyzan&apos;s Pizza</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="dark flex min-h-screen flex-col items-center bg-zinc-50 dark:bg-zinc-800 dark:text-zinc-50 sm:bg-gradient-to-r sm:from-zinc-50 sm:via-amber-50 sm:to-zinc-50 dark:sm:bg-gradient-to-br dark:sm:from-zinc-700 dark:sm:to-zinc-800">
        <NavBar />
        <div className="m-6 px-1 font-serif text-sm italic sm:text-base">
          ◆ The greatest pizza restaurant to never exist ◆
        </div>
        <AboutBanner />
        <div className="m-4 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem commodi ea ullam ab, necessitatibus veritatis beatae
            quos nemo, quaerat quod possimus illo nihil minus vitae earum. Odit,
            velit. Libero ullam laboriosam asperiores tempora sit consequuntur
            possimus quos quod nihil veniam temporibus voluptates alias commodi
            pariatur, qui voluptatem enim consequatur quas.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem commodi ea ullam ab, necessitatibus veritatis beatae
            quos nemo, quaerat quod possimus illo nihil minus vitae earum. Odit,
            velit. Libero ullam laboriosam asperiores tempora sit consequuntur
            possimus quos quod nihil veniam temporibus voluptates alias commodi
            pariatur, qui voluptatem enim consequatur quas.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum esse
            vitae pariatur voluptatibus, atque beatae a? Aspernatur, dolorum
            similique a dignissimos maxime aliquid necessitatibus veniam!
          </p>
        </div>
        <div className="m-6 text-2xl font-semibold">Explore Our Menu</div>
        <ExploreMenu />
        <div className="m-4 hidden text-transparent sm:block">.</div>
        <Footer />
      </main>
    </>
  );
};

export default About;
