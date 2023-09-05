import React from 'react'

const Header = ({user}) => {
    return (
        <div>
            <nav
                className="flex items-center justify-between flex-wrap bg-white py-4 lg:px-12">
                <div className="flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 border-solid border-b-2 border-gray-300 pb-5 lg:pb-0">
                    <div className="flex items-center flex-shrink-0 text-gray-800 mr-16">
                        <span className="font-semibold text-xl tracking-tight">Dashboard</span>
                    </div>
                </div>

                
            </nav>
        </div>
    )
}

export default Header
