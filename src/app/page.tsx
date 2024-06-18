import PostsList from "@/components/entities/PostsList/PostsList";
import { postService } from "@/services/JPH.services";
import type { Metadata } from "next";
import styles from "./postsPage.module.scss";

export const metadata: Metadata = {
    title: "All Posts - Test Zero",
    description: "All posts from JHP - Test Zero"
};

export default async function Home() {
    const posts = await postService.getPosts(20, 1);

    return (
        <section className={styles.posts}>
            <h1>Posts:</h1>
            <h2></h2>
            <PostsList posts={posts} />
        </section>
    );
}
