
export default function About() {
    return (
        <main className="h-screen w-full flex flex-col gap-2 justify-center items-center bg-white text-black">
            <div className="p-10 flex flex-col gap-5 text-center">
                <h1 className="text-[45px] font-bold">
                    This is the <span className="text-gray-600">about</span> page
                </h1>
                <p className="text-lg">

                </p>
            </div>
            <div className="flex flex-row gap-10">
                {/* <button className="p-3 w-[max-content] bg-black text-white rounded-lg">Request Demo</button> */}
                {/* <a href="/apiFetch" className="p-3 w-[max-content] border border-black bg-slate-50 rounded-lg">Try for free</a> */}
            </div>
        </main>
    );
}
