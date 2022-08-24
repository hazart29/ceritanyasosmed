function PostMenu() {
    return (
        <div id='content' className='h-fit p-8 w-full'>
            <div id='post' className='h-2/6 py-4 flex justify-between'>
                <div id='photo' className='w-fit'>
                    <img className='bg-white rounded-full rounded-tr-none w-16 h-16' src='photo-1.jpg' alt='not-found'></img>
                </div>

                <div className='flex flex-col w-4/6 h-fit bg-white p-2 rounded-lg rounded-tl-none mx-4'>
                    <div className="flex justify-between p-2">
                        <label className='p-1 text-gray-300'>0/100</label>
                        <div className='flex gap-2'>
                            <button className="text-red-500 rounded-md p-1 hover:bg-red-500 hover:text-white">Hapus</button>
                            <button className="text-gray-900 rounded-md p-1 hover:bg-gray-900 hover:text-white">#tagar</button>
                        </div>
                    </div>
                    <textarea rows='4' className='block bg-gray-100 h-full w-full p-2 rounded-lg resize-none outline-0 focus:bg-gray-300 hover:bg-gray-300' placeholder='Post sesuatu?...'></textarea>
                    
                </div>

                <div id='btnpost' className='w-1/6'>
                    <button className='w-full bg-white rounded-sm p-2 font-bold font-sans hover:bg-blue-500 hover:text-white'>Kirim</button>
                </div>
            </div>

        </div>

    );
}

export default PostMenu;