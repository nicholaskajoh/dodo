import Head from 'next/head';

import styles from './styles.module.css';

export default function Layout({ pageTitle, children }) {
  return (
    <>
      <Head>
        <title>DoDo Studio | {pageTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.container}>{children}</main>
    </>
  );
}
