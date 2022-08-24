function Header() {
    return (
        <div id='header' className='flex text-white drop-shadow-md py-8 justify-center'>
          <ul className='flex gap-4 font-bold font-sans text-center justify-center bg-gray-900 px-4 py-2 w-fit rounded-full'>
            <li className='px-4 py-2 bg-white text-gray-900 rounded-full'>
              Sambat
            </li>
            <li className='px-4 py-2 rounded-full'>
              Profil
            </li>
            <li className='px-4 py-2 rounded-full'>
              Tentang
            </li>
          </ul>
        </div>);
}

export default Header;