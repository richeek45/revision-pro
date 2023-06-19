import React from 'react'
import Link from 'next/link'

interface List {
	route: string;
	text: string;
}

const content = [{ route: "/collections", text: "Your Collections" }, { route: "/lastviewed", text: "Previous Tests" }, { route: "/stats", text: "Your Stats" },
{ route: "/settings", text: "Settings" }, { route: "/trash", text: "Trash" }]
const SideBar = () => {
	console.log(content)
	return (
		<aside className=' flex justify-center sm:w-1/5 h-[90vh] bg-slate-100 mr-5'>
			<div className='h-full w-full mt-5 mx-2'>
				<ul>
					{content.map((list: List, index: number) => (
						<Link href={list.route} key={index}>
							<li className='px-6 py-4 bg-white m-4 rounded hover:shadow-md'>
								{list.text}
							</li>
						</Link>
					))}
				</ul>
			</div>
		</aside>
	)
}

export default SideBar