import { NavLink } from "react-router-dom";
import ListBox from "./component/Badges";

function LeftBar() {
    return (
        <div className="flex flex-col gap-4 h-full w-full bg-gray-100 drop-shadow-md p-4">
            <div className='p-2 bg-white rounded-2xl shadow-sm'>
                <div id='profil' className='w-full justify-between items-center flex gap-4'>
                    <div className='flex gap-4'>
                        <img className='bg-white rounded-2xl w-16 h-16' src='photo-1.jpg' alt='not-found'></img>
                        <div className='flex flex-col justify-center gap-1 text-left'>
                            <p className="text-gray-900 font-sans font-bold ">Anonymous</p>
                            <p className='text-xs text-gray-400'>@Anonymous</p>
                        </div>
                    </div>
                    <span className="mr-4 text-lg font-medium text-green-400">$12.00</span>
                </div>
            </div>
            <div>
                <ListBox />
            </div>
            <div className="flex flex-col overflow-hidden bg-white rounded-2xl divide-y text-left justify-center items-center text-lg font-semibold text-gray-600">
                <NavLink
                    to="profil"
                    className={({ isActive }) =>
                        isActive ? 'py-2 px-4 w-full bg-gray-300 hover:bg-gray-200 cursor-pointer' : 'py-2 px-4 w-full bg-white hover:bg-gray-200 cursor-pointer'
                    }
                >
                    Profil
                </NavLink>
                <NavLink
                    to="linimasa"
                    className={({ isActive }) =>
                        isActive ? 'py-2 px-4 w-full bg-gray-300 hover:bg-gray-200 cursor-pointer' : 'py-2 px-4 w-full bg-white hover:bg-gray-200 cursor-pointer'
                    }
                >
                    Linimasa
                </NavLink>
                <NavLink
                    to="gacha"
                    className={({ isActive }) =>
                        isActive ? 'py-2 px-4 w-full bg-gray-300 hover:bg-gray-200 cursor-pointer' : 'py-2 px-4 w-full bg-white hover:bg-gray-200 cursor-pointer'
                    }
                >
                    Gacha
                </NavLink>
                <NavLink
                    to="opsi"
                    className={({ isActive }) =>
                        isActive ? 'py-2 px-4 w-full bg-gray-300 hover:bg-gray-200 cursor-pointer' : 'py-2 px-4 w-full bg-white hover:bg-gray-200 cursor-pointer'
                    }
                >
                    Pengaturan
                </NavLink>
                
                <span className="py-2 px-4 w-full bg-red-600 text-white hover:bg-red-500 cursor-pointer">Logout</span>
            </div>
            <div className="text-sm text-gray-500">
                CERITANYA SOSMED V.0.1a
            </div>
        </div>
    );
}

export default LeftBar;