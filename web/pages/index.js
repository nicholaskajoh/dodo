import Link from 'next/link';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout pageTitle="Home">
      <h1>
        Welcome to DoDo Studio!
      </h1>

      <p>
        <Link href="/piano">Piano</Link>
      </p>
    </Layout>
  );
}
