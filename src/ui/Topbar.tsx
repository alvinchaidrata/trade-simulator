import React, { useState } from 'react'
import { Drawer } from 'antd'
import { RxHamburgerMenu } from 'react-icons/rx'
import '../styles/topbar.scss'

export default function Topbar() {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false)

	const openDrawer = () => {
		setIsDrawerOpen(true)
	}

	const closeDrawer = () => {
		setIsDrawerOpen(false)
	}

	return (
		<>
			<div className="absolute right-0 top-0 w-full">
				<div className="mx-auto flex w-full max-w-md justify-end p-5">
					<button
						type="button"
						onClick={openDrawer}
					>
						<RxHamburgerMenu className="h-6 w-6 text-white" />
					</button>
				</div>
			</div>

			<Drawer
				open={isDrawerOpen}
				closable={false}
				keyboard={true}
				onClose={closeDrawer}
			>
				<p>Some contents...</p>
				<p>Some contents...</p>
				<p>Some contents...</p>
			</Drawer>
		</>
	)
}
