import Head from "next/head";
import Link from "next/link";


const index = () => {
    return (
        <div>
            <Head>
                <title>Blog page</title>
            </Head>
            <h2>This is index js</h2>  
            <Link href='/'>Home</Link>          
        </div>
    );
};

export default index;