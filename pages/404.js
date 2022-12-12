
import Image from "next/image";
import Link from "next/link";

const Error = () => {
    return (
        <div>
            <Image src='/image/functional-trainer.png' width={100} height={100} />
            <Link href="/">
                <button>Back to home</button>
            </Link>
        </div>
    );
};

export default Error;