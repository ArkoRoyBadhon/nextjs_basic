import { useRouter } from "next/router";


const blogd = () => {
    const router = useRouter();
    const id = router.query.blogd;
    return (
        <div>
            <h3>This is extra testing {id}</h3>
        </div>
    );
};

export default blogd;