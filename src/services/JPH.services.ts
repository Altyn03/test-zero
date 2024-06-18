import { IComment } from "@/types/comment-types";
import { IPost, IUserFromPost } from "@/types/post-types";
import axios from "axios";

const httpJPH = axios.create({
    headers: {
        "Content-Type": "application/json"
    },
    baseURL: "https://jsonplaceholder.typicode.com/"
});

export const postService = {
    getPosts: async (limit: number, page: number): Promise<IPost[]> => {
        const content = await httpJPH.get<IPost[]>(
            `/posts?_limit=${limit}&_page=${page}`
        );
        return content.data;
    },
    getPost: async (id: string): Promise<IPost> => {
        const content = await httpJPH.get<IPost>(`/posts/${id}`);
        return content.data;
    },
    getLoginByPostId: async (id: string): Promise<IUserFromPost> => {
        const content = await httpJPH.get<IUserFromPost>(`/users/${id}`);
        return content.data;
    }
};

export const commentsService = {
    getComments: async (postId: string): Promise<IComment[]> => {
        const content = await httpJPH.get<IComment[]>(
            `/comments?postId=${postId}`
        );
        return content.data;
    }
};
