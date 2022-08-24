function ListPost() {
    return (
        <div id='post' className='h-fit flex justify-between rounded-t-md drop-shadow-md'>
            <div className='flex flex-col w-full h-fit bg-white drop-shadow-sm'>
                <div id='headerpost' className='flex justify-between border-b px-8 py-8'>
                    <div id='profil' className='w-fit flex gap-4 px-4'>
                        <img className='bg-white rounded-2xl w-12 h-12' src='photo-1.jpg' alt='not-found'></img>
                        <div className='flex flex-col gap-1 text-left'>
                            <div className='flex gap-4 text-sm'>
                                <p className="text-gray-900 font-sans font-bold ">Anonymous</p>
                                <label className="flex rounded-full bg-green-300 text-green-600 px-1">Bijak</label>
                            </div>
                            <p className='text-gray-400 font-sans text-xs'>Sab. 13 Agu 2022. 3mnt lalu</p>
                        </div>
                    </div>
                    <div id='opsi' className='flex gap-4 items-center pr-4'>
                        <button className='font-bold font-sans text-xs text-gray-900 border-2 border-gray-900 p-2 h-fit rounded-full hover:bg-gray-900 hover:text-white hover:border-gray-900'>Ikuti</button>
                        <button className=' text-lg'><i class="bi-three-dots-vertical" /></button>
                    </div>
                </div>
                <div id='postcontent' className='text-left px-28 py-8'>
                    halo, saknadyan urip ra sepiro tapi koe ngelarani ra kiro-kiro
                    slebeeewww
                </div>
                <div id='aksi' className='text-left flex gap-4 justify-between px-32 py-4 bg-gray-100 border-y border-gray-300 p-1'>
                    <button className='text-gray-400 bg-gray-200 outline outline-1 justify-center items-center w-20 h-20 text-sm flex gap-1 font-sans px-4 rounded-full hover:bg-green-300 hover:text-green-500'>
                        Bijak
                    </button>
                    <button className='text-gray-400 bg-gray-200 outline outline-1 justify-center items-center w-20 h-20 text-sm flex gap-1 font-sans px-4 rounded-full hover:bg-indigo-300 hover:text-indigo-500'>
                        Cerdas
                    </button>
                    <button className='text-gray-400 bg-gray-200 outline outline-1 justify-center items-center w-20 h-20 text-sm flex gap-1 font-sans px-4 rounded-full hover:bg-yellow-300 hover:text-yellow-500'>
                        Pelawak
                    </button>
                    <button className='text-gray-400 bg-gray-200 outline outline-1 justify-center items-center w-20 h-20 text-sm flex gap-1 font-sans px-4 rounded-full hover:bg-blue-300 hover:text-blue-500'>
                        Biasa
                    </button>
                    <button className='text-gray-400 bg-gray-200 outline outline-1 justify-center items-center w-20 h-20 text-sm flex gap-1 font-sans px-4 rounded-full hover:bg-red-300 hover:text-red-500'>
                        Nakal
                    </button>
                </div>
                <div id='komen' className='flex flex-col gap-4 px-32 py-4 bg-gray-50 text-left'>
                    <div className='flex flex-col gap-2 bg-gray-200 rounded-full py-2 px-4'>
                        <div id='profilkomen' className='flex gap-4'>
                            <img className='bg-white rounded-2xl w-8 h-8' src='photo-1.jpg' alt='not-found'></img>
                            <div className='flex flex-col'>
                                <div className='flex gap-4 text-xs'>
                                    <p className="text-gray-900 font-sans font-bold ">Anonymous 2</p>
                                    <label className="flex rounded-full bg-red-300 text-red-600 px-1">Nakal</label>
                                </div>
                                <p className='text-gray-400 font-sans text-[10px]'>Sab. 13 Agu 2022. 3mnt lalu</p>
                            </div>
                        </div>
                        <div id='isikomen' className='px-12 text-sm'>
                            <p>Hahahaha kasihan amat...</p>
                        </div>
                    </div>
                    <div id='kirimkomen' className='flex gap-4'>
                        <input type='text' className='w-4/5 bg-gray-200 rounded-full px-4 py-2 outline-0' placeholder='Kirim komentar?...'></input>
                        <button className='px-2 w-1/5 border-2 bg-gray-200 border-gray-300 text-gray-500 font-semibold rounded-full text-sm hover:bg-gray-900 hover:text-white hover:border-gray-900'>Komen</button>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default ListPost;