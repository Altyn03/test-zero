import { IPost } from "@/types/post-types";
import { atom } from "nanostores";

export const postsStore = atom<IPost[]>([]);

export const setPosts = (data: IPost[]) => {
    postsStore.set(data);
};

export const addPosts = (newPosts: IPost[]) => {
    const currentPosts = postsStore.get();
    postsStore.set([...currentPosts, ...newPosts]);
};
