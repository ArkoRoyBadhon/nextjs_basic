import Link from "next/link";

const Post = ({ post }) => {
    // console.log(post);
    return (
        <div className="card bg-base-100 shadow-xl my-2">
            <div className="card-body">
                <h2 className="card-title">{post.title}</h2>
                <div className="card-actions justify-end">
                    <Link href={`/posts/${post?.id}`}>
                        <button className="btn btn-primary">See details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Post;