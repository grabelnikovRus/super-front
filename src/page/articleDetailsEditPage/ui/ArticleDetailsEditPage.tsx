import { type FC } from "react"
import { useParams } from "react-router-dom";

export const ArticleDetailsEditPage: FC = () => {
    const { id } = useParams<{ id: string }>()

console.log(Boolean(id))
    return (
        <div>
            {id ? "Edit Page" : "Create Page" }
        </div>
    )
};
