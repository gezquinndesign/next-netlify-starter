import Head from 'next/head'
import Footer from '@components/Footer'
import RecipeApp from '@components/RecipeApp'
import { promises as fs } from 'fs';

async function getData() {
  const file = await fs.readFile(process.cwd() + '/app/data.json', 'utf8');
  return JSON.parse(file);
}

export async function getServerSideProps() {
  const data = await getData();
  return { props: { recipes: data } };
}

export default function Home({ recipes }) {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <RecipeApp recipes={recipes} />
      </main>

      <Footer />
    </div>
  )
}
