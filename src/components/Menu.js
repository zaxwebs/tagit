import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import ThemeToggler from './ThemeToggler'

const Menu = () => {
	return (
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
			<Navbar.Brand href="/#">TagIt</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="ml-auto">
					<Nav.Item>
						<ThemeToggler />
					</Nav.Item>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	)
}

export default Menu
