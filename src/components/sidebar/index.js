import { NavLink } from "react-router-dom";

function Sidebar(props) {

    const username = JSON.parse(localStorage.getItem('userInfo')) && JSON.parse(localStorage.getItem('userInfo')).username;


    return (
        <>
            <div className="relative min-h-screen md:flex" data-dev-hint="container">
                <input type="checkbox" id="menu-open" className="hidden" />

                <label htmlFor="menu-open"
                    className="absolute right-2 top-2 shadow-lg rounded-full p-2 bg-gray-light text-gray-dark md:hidden"
                    data-dev-hint="floating action button">
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </label>

                <header className="z-20 bg-gray-dark text-gray-light flex justify-between" data-dev-hint="mobile menu bar">
                    <div className={'flex items-center justify-between w-full mx-5'}>
                        <div className="flex items-center  hidden md:block">
                            <span className={"text-white whitespace-nowrap truncate text-xl mr-5"}>Arvan Challenge</span>
                            <span className={'text-base'}>Welcome {username}</span>
                        </div>
                        <button className={'border border-blue-light text-blue-light cursor-pointer w-20 h-10 rounded'}>
                            logout
                        </button>
                    </div>


                    <label htmlFor="menu-open" id="mobile-menu-button"
                        className="m-2 p-2 text-gray bg-gray-light rounded md:hidden block">
                        <svg id="menu-open-icon" className="h-6 w-6 transition duration-200 ease-in-out"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                        <svg id="menu-close-icon" className="h-6 w-6 transition duration-200 ease-in-out"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </label>
                </header>

                <aside id="sidebar"
                    className="z-10 pt-20 bg-blue text-white md:w-64 w-2/4 space-y-4 absolute inset-y-0 left-0 transform md:relative md:translate-x-0 transition duration-200 ease-in-out flex flex-col overflow-y-auto"
                    data-dev-hint="sidebar; px-0 for frameless; px-2 for visually inset the navigation">
                    <p className={'ml-5 text-xl'}>Post</p>
                    <NavLink exact={true} to={"/articles"} className={isActive => "py-2.5 pl-8" + (isActive && " bg-white/[.2]")}>All Articles</NavLink>
                    <NavLink exact={true} to={"/articles/create"} className={isActive => "py-2.5 pl-8" + (isActive && " bg-white/[.2]")}>New Article</NavLink>
                </aside>

                <main id="content" className="flex-1 p-6 lg:px-8">
                    <div className="max-w-8xl mx-auto">

                        <div className="px-4  sm:px-0  min-h-96 mt-16">

                            {props.children}

                        </div>

                    </div>
                </main>
            </div>
        </>
    );
}

export default Sidebar;
