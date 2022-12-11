import Head from "next/head";
import Link from "next/link";
import Image from "next/image";



export default function Home() {
  return (
    <div>
      <Head>
        <title>Home Page</title>
      </Head>
      <h1>Hello world</h1>
      <Link href={'/blog/bloginfo'}>
      Blog
      </Link>

    <Image src="/image/functional-trainer.png" width={420} height={320}></Image>


    </div>
  )
}
