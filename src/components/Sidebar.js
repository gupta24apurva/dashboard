import React from 'react'

const Sidebar = () => {
    return (
        <div className=" flex flex-col w-1/6 bg-blue-500 items-center space-y-5">
            <p className="text-2xl font-bold text-white mt-6">Board.</p>
            <ul className="text-white space-y-3">
                <li className='font-bold'>Dashboard</li>
                <li>Transactions</li>
                <li>Schedules</li>
                <li>Users</li>
                <li>Settings</li>
            </ul>
            <ul className="text-white">
                <li>Help</li>
                <li>Contact Us</li>
            </ul>
        </div>
    )
}

export default Sidebar
