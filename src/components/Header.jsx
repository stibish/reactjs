import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { Button } from 'react-bootstrap';
import '../App.css';
import {
	MDBContainer,
	MDBNavbar,
	MDBNavbarBrand,
	MDBNavbarToggler,
	MDBIcon,
	MDBNavbarNav,
	MDBNavbarItem,
	MDBNavbarLink,
	MDBBtn,
	MDBCollapse,
} from 'mdb-react-ui-kit';

function Header() {
	const [showBasic, setShowBasic] = useState(false);
	return (
		<div>
			<MDBNavbar
				expand="lg"
				light
				bgColor="light">
				<MDBContainer fluid>
					<MDBNavbarBrand>
						<Nav.Link
							as={Link}
							to="/">
							A&B
						</Nav.Link>
					</MDBNavbarBrand>

					<MDBNavbarToggler
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
						onClick={() => setShowBasic(!showBasic)}>
						<MDBIcon
							icon="bars"
							fas
						/>
					</MDBNavbarToggler>

					<MDBCollapse
						navbar
						show={showBasic}>
						<MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
							<MDBNavbarItem>
								<MDBNavbarLink
									active
									aria-current="page">
									<Nav.Link
										as={Link}
										to="/">
										Главная
									</Nav.Link>
								</MDBNavbarLink>
							</MDBNavbarItem>
							<MDBNavbarItem>
								<MDBNavbarLink
									active
									aria-current="page">
									<Nav.Link
										as={Link}
										to="/favorites">
										Избранное
									</Nav.Link>
								</MDBNavbarLink>
							</MDBNavbarItem>
							<MDBNavbarItem>
								<MDBNavbarLink
									active
									aria-current="page">
									<Nav.Link
										as={Link}
										to="/cart">
										Корзина
									</Nav.Link>
								</MDBNavbarLink>
							</MDBNavbarItem>
							<MDBNavbarItem>
								<MDBNavbarLink
									active
									aria-current="page">
									<Nav.Link
										as={Link}
										to={'/description'}>
										Описание
									</Nav.Link>
								</MDBNavbarLink>
							</MDBNavbarItem>
							<MDBNavbarItem>
								<MDBNavbarLink
									active
									aria-current="page">
									<Nav.Link
										as={Link}
										to={'/feedback'}>
										Обратная связь
									</Nav.Link>
								</MDBNavbarLink>
							</MDBNavbarItem>
						</MDBNavbarNav>

						<form className="d-flex input-group w-auto">
							<input
								type="search"
								className="form-control"
								placeholder="Type query"
								aria-label="Search"
							/>
							<MDBBtn color="primary">Поиск</MDBBtn>
						</form>
					</MDBCollapse>
				</MDBContainer>
			</MDBNavbar>
		</div>
	);
}

export default Header;
