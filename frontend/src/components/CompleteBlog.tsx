import { Blog } from "../hooks"
import { Appbar } from "./Appbar"
import { Avatar } from "./BlogCard"

export const CompleteBlog = ({ blog }: { blog: Blog }) => {
    return <div>
        <Appbar />
        <div className="flex justify-center">
            <div className="grid grid-cols-12 px-10 max-w-screen-xl w-full pt-12">
                <div className="col-span-8 mr-10">
                    <div className="text-5xl font-extrabold">
                        {blog.title}
                    </div>
                    <div className="text-slate-500 pt-2">
                        Posted on 5th December 2023
                    </div>
                    <div className="pt-4">
                        {blog.content}
                    </div>
                </div>
                <div className="col-span-4">
                    <div className="text-slate-600 text-lg">
                        Author
                    </div>
                    <div className="flex ">
                        <div className="flex flex-col justify-center pr-4">
                            <Avatar size="big" name={blog.author.name || "Anonymous"} />
                        </div>
                        <div>
                            <div className="text-xl font-bold">
                                {blog.author.name  || "Anonymous"}
                            </div>
                            <div className="pt-2 text-slate-500">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam dolorum optio aspernatur nesciunt eligendi possimus neque illo doloremque sunt dolore eveniet sapiente reprehenderit, laborum voluptas commodi? Fugit nesciunt labore dolore.
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
    
}