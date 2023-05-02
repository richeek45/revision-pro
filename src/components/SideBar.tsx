import React from 'react'
import Link from 'next/link'

interface List {
    route: string;
    text: string;
}

const content = [{ route: "/collections", text: "Your Collections" }, { route: "/lastviewed", text: "Previously Viewed Tests" }, { route: "/stats", text: "Your Stats" }]
const SideBar = () => {
    console.log(content)
    return (
        <aside className='w-1/5 h-4/5 bg-slate-100'>
            <ul>
                {content.map((list: List, index: number) => (
                    <Link href={list.route} key={index}>
                        <li className='px-6 py-4 bg-white m-4 rounded shadow-md'>
                            {list.text}
                        </li>
                    </Link>
                ))}
            </ul>
        </aside>
    )
}

export default SideBar