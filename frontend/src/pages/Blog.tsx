import { useParams } from "react-router-dom";
import { useBlog } from "../hooks";
import { CompleteBlog } from "../components/CompleteBlog";
import { CompleteBlogSkeleton } from "../components/CompleteBlogSkeleton";

export const Blog = () => {

    const { id } = useParams();
    const { loading, blog } = useBlog({
        id: id || ""
    });
    
    if(loading || !blog) {
        return <div>
            <CompleteBlogSkeleton />
        </div>
    }

    return <div>
        <CompleteBlog blog={blog}/>
    </div>
};