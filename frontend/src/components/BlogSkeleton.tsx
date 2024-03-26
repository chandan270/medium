import { Circle } from "./BlogCard"

export const BlogSkeleton = () => {
    return <div role="status" className="animate-pulse">
        <div className="p-4 border-b border-slate-200 pb-4 w-screen max-w-screen-md">
            <div className="flex">
                <div className="relative inline-flex items-center justify-center w-6 h-6 overflow-hidden bg-gray-200 rounded-full"></div>
                <div className="font-extralight pl-2 text-sm flex justify-center flex-col w-20">
                    <div className="h-3 bg-gray-200 rounded-full"></div>
                </div>
                <div className="flex justify-center flex-col pl-2">
                    <Circle />
                </div>
                <div className="font-thin pl-2 text-slate-500 text-sm flex justify-center flex-col w-20">
                    <div className="h-3 bg-gray-200 rounded-full"></div>
                </div>
            </div>
            <div className="text-xl font-semibold pt-4">
                <div className="h-4 bg-gray-200 rounded-full mb-2.5"></div>
            </div>
            <div className="text-md font-thin">
                <div className="h-3 bg-gray-200 rounded-full mb-2.5"></div>
            </div>
        </div>
        <span className="sr-only">Loading...</span>
    </div>
}