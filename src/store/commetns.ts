import { IComment } from "@/types/comment-types";
import { atom } from "nanostores";

export const commentsStore = atom<IComment[]>([]);
export const setComments = (comments: IComment[]) => {
    commentsStore.set(comments);
};
