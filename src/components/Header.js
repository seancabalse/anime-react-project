import React from 'react'
import logo from '../assests/logo.png';

function Header(props) {
    return (
        <header>
            <nav className="bg-pink-300">
                <div className="max-w-6x1 mx-auto px-4">
                    <div className="flex justify-between">
                        <div className="flex-1 space-x-7">
                            <div>
                                <a href="#" className="flex items-center py-4 px-2">
                                    <img src={logo}alt="Logo" className="h-12 w-12 mr-2" />
                                    <span className="font-extrabold text-green-700 text-5xl">The<strong className="text-green-900 text-5xl">Anime</strong>Herald</span>
                                </a>
                            </div>
                        </div>
                        <div className="mx-auto px-4 my-auto">
                            <div className="hidden md:flex items-center space-x-3 ">
                                    <form
                                            onSubmit={props.searchAnime}>
                                        <div className="shadow overflow-hidden sm:rounded-md">
                                            <div className="px-4 py-4 bg-white sm:p-3">
                                                <input
                                                        type="search"
                                                        placeholder="Search for an anime"
                                                        required 
                                                        value={props.search}
                                                        onChange={event => props.setSearch(event.target.value)}/>
                                            </div>
                                        </div>
                                    </form> 
                            </div>
                        </div>
                        <div className="mx-auto px-4 my-auto">
                            <div className="hidden md:flex items-center space-x-3 ">
                                        <a href="" className="text-lg py-2 px-2 font-medium text-green-700 rounded hover:bg-green-500 hover:text-white transition duration-300">Log In</a>
                                        <a href="" className="py-2 px-2 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300">Sign Up</a>
                                    </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
