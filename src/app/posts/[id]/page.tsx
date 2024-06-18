import CommentsList from "@/components/entities/CommentsList/CommentsList";
import { postService } from "@/services/JPH.services";
import type { Metadata } from "next";
import styles from "./postPage.module.scss";

interface Params {
    params: {
        id: string;
    };
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
    const post = await postService.getPost(params.id);
    const title = post?.title;
    const description = post?.body;
    return {
        title,
        description
    };
}

const PostPage = async ({ params }: Params) => {
    const post = await postService.getPost(params.id);
    const { username } = await postService.getLoginByPostId(
        post.userId.toString()
    );
    return (
        <section className={styles.post}>
            <div className={styles.content}>
                <h1>{post?.title}</h1>
                <h3>Author: {username}</h3>
                <p>{post?.body}</p>
                <CommentsList id={params.id} />
            </div>
        </section>
    );
};

export default PostPage;
