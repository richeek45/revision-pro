import React from 'react'

const content = ["Create New Collection", "Your Stack", "Previously Viewed Tests", "Your Stats"]
const SideBar = () => {
    console.log(content)
    return (
        <aside className='w-1/5 h-4/5 bg-slate-100'>
            <ul>
                {content.map((list: string, index: number) => (
                    <li key={index} className='px-6 py-4 bg-white m-4 rounded shadow-md'
                    >
                        {list}
                    </li>
                ))}
            </ul>
        </aside>
    )
}

export default SideBar