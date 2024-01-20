import { createclient } from "contentful";
import Image from "next/image";
import styles from "./page.module.css";
import Link from 'next/link';

export default function Home() {
  return (
    <main className={styles.main}>
      <h2>App router</h2>
      <Link href={ "/page-router" }>Go to the pages router</Link>
    </main>
  );
}
