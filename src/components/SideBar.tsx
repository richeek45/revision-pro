import React from 'react'
import Link from 'next/link'

interface List {
    route: string;
    text: string;
}

const content = [{ route: "/collections", text: "Your Collections" }, { route: "/lastviewed", text: "Previous Tests" }, { route: "/stats", text: "Your Stats" }, 
{route: "/settings", text: "Settings" }, {route: "/trash", text: "Trash"} ]
const SideBar = () => {
    console.log(content)
    return (
        <aside className=' flex justify-between w-1/5 h-[90vh]'>
            <ul className='h-full bg-slate-100'>
                {content.map((list: List, index: number) => (
                    <Link href={list.route} key={index}>
                        <li className='px-6 py-4 bg-white m-4 rounded hover:shadow-md'>
                            {list.text}
                        </li>
                    </Link>
                ))}
            </ul>
        </aside>
    )
}

export default SideBar