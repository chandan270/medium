import { Appbar } from "./Appbar"

export const CompleteBlogSkeleton = () => {
    return <div>
        <Appbar />
        <div className="flex justify-center animate-pulse">
            <div className="grid grid-cols-12 px-10 max-w-screen-xl w-full pt-12">
                <div className="col-span-8 mr-10">
                    <div className="text-5xl font-extrabold">
                        <div className="h-12 bg-gray-200 rounded-full w-1/2"></div>
                    </div>
                    <div className="text-slate-500 mt-4">
                        <div className="h-5 bg-gray-200 rounded-full w-56"></div>
                    </div>
                    <div className="pt-4">
                        <div className="h-4 mt-3 bg-gray-200 rounded-full"></div>
                        <div className="h-4 mt-3 bg-gray-200 rounded-full"></div>
                        <div className="h-4 mt-3 bg-gray-200 rounded-full"></div>
                        <div className="h-4 mt-3 bg-gray-200 rounded-full"></div>
                        <div className="h-4 mt-3 bg-gray-200 rounded-full"></div>
                        <div className="h-4 mt-3 bg-gray-200 rounded-full"></div>
                    </div>
                </div>
                <div className="col-span-4">
                    <div className="text-slate-600 text-lg">
                        <div className="h-5 bg-gray-200 rounded-full w-20"></div>
                    </div>
                    <div className="flex ">
                        <div className="flex flex-col justify-center pr-4">
                            <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-200 rounded-full"></div>
                        </div>
                        <div>
                            <div className="text-xl font-bold mt-4">
                                <div className="h-4 bg-gray-200 rounded-full w-20"></div>
                            </div>
                            <div className="pt-2 text-slate-500">
                                <div className="h-4 mt-3 bg-gray-200 rounded-full w-80"></div>
                                <div className="h-4 mt-3 bg-gray-200 rounded-full w-80"></div>
                                <div className="h-4 mt-3 bg-gray-200 rounded-full w-80"></div>
                                <div className="h-4 mt-3 bg-gray-200 rounded-full w-80"></div>
                                <div className="h-4 mt-3 bg-gray-200 rounded-full w-80"></div>
                                <div className="h-4 mt-3 bg-gray-200 rounded-full w-80"></div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
}