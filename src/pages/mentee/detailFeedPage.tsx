const DetailFeedPage = () => {
    return (
        <div className="px-8 py-10 container mx-auto">
            <div className="grid grid-cols-12 items-center px-4">
                <div className="col-span-6">
                    <div className="flex flex-col">
                        <div>
                            <h1 className="text-3xl font-bold">Asep Udin</h1>
                        </div>
                        <div>
                            <p className="text-lg font-semibold">Frontend Batch 15</p>
                        </div>
                        <div>
                            <h1 className=" text-sm">TI</h1>
                        </div>
                        <div>
                            <h1 className="text-lg font-semibold">Universitas Brawijaya</h1>
                        </div>
                    </div>
                </div>
                <div className="col-span-6 flex justify-end">
                    <div className="flex flex-col gap-2">
                        <div>
                            <h1 className="text-sm">phone : 085729830543 </h1>
                        </div>
                        <div>
                            <p className="text-sm">telegram : @udinasep</p>
                        </div>
                        <div>
                            <p className="text-sm">discord : @udinasep#123</p>
                        </div>
                        <div>
                            <p className="text-sm">email :udinasep@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-end py-5  items-center px-4">
                <button type="button" className=" font-semibold text-white bg-[#3E31DF] hover:bg-[#03034F] rounded-full text-sm px-5 py-3 text-center">Add New Log</button>
            </div>
            <div className="space-y-3">
                <div className="border-2 flex gap-2 rounded-md border-black p-2">
                    <div className="text-sm w-1/4 font-semibold">
                        <h1>
                            End of Section
                        </h1>
                        <h1>
                            Bagas
                        </h1>
                        <p>
                            Sep 01, 2023
                        </p>
                    </div>
                    <div className="gap-y-4 flex flex-col">
                        <p className="text-sm">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                            anim id est laborum.
                        </p>
                        <div className="font-semibold">
                            <p>
                                Change Status: Continue Section
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default DetailFeedPage