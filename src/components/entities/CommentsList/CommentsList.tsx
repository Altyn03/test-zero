import { commentsService } from "@/services/JPH.services";
import { IComment } from "@/types/comment-types";
import { FC } from "react";
import styles from "./commentsList.module.scss";

const CommentsList: FC<{ id: string }> = async ({ id }) => {
    const comments: IComment[] = await commentsService.getComments(id);
    return (
        <div className={styles.container}>
            <h3>Comments:</h3>
            <ul className={styles.list}>
                {comments.map((comment) => (
                    <li key={comment.id}>
                        <h4>{comment.email}</h4>
                        <h4>{comment.body}</h4>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CommentsList;
