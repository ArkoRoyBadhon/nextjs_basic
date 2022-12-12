import Head from "next/head";
import Link from "next/link";
import Image from "next/image";



export default function Home() {
  return (
    <div>
      {/* <Head>
        <title>Home Page</title>
      </Head>
      <h1>Hello world</h1>
      <Link href={'/blog/bloginfo'}>
      Blog
      </Link>

    <Image src="/image/functional-trainer.png" width={420} height={320}></Image> */}

      {/* <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1> */}

      <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>

    </div>
  )
}
