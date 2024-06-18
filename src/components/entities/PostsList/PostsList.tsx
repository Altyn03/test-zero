"use client";

import { postService } from "@/services/JPH.services";
import { addPosts, postsStore, setPosts } from "@/store/posts";
import type { IPost } from "@/types/post-types";
import { useStore } from "@nanostores/react";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import styles from "./postList.module.scss";

const PostsList: FC<{ posts: IPost[] }> = ({ posts }) => {
    useEffect(() => {
        setPosts(posts);
    }, [posts]);

    const [fetching, setFetching] = useState<boolean>(false);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const limit: number = 20;

    const loadMorePosts = async () => {
        setFetching(true);
        try {
            const data = await postService.getPosts(limit, currentPage);
            addPosts(data);
        } catch (error) {
            console.error("Failed to load more posts:", error);
        } finally {
            setFetching(false);
        }
    };

    useEffect(() => {
        if (fetching && currentPage > 1 && currentPage < 6) {
            loadMorePosts();
        }
    }, [fetching, currentPage]);

    useEffect(() => {
        const scrollHandler = () => {
            if (
                document.documentElement.scrollHeight -
                    (document.documentElement.scrollTop + window.innerHeight) <
                    100 &&
                !fetching
            ) {
                setCurrentPage((prev) => prev + 1);
                setFetching(true);
            }
        };

        document.addEventListener("scroll", scrollHandler);
        return () => {
            document.removeEventListener("scroll", scrollHandler);
        };
    }, [fetching]);

    const postsState = useStore(postsStore);
    return (
        <>
            <ul className={styles.postsList}>
                {postsState.map((post) => (
                    <li key={post.id}>
                        <Link href={`/posts/${post.id.toString()}`}>
                            <h2>
                                {post.title.charAt(0).toUpperCase() +
                                    post.title.slice(1)}
                            </h2>
                        </Link>
                    </li>
                ))}
            </ul>
            {fetching && currentPage < 6 && <h2>Loading...</h2>}
        </>
    );
};

export default PostsList;
