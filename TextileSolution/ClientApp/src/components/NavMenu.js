import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem  } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';

export class NavMenu extends Component {
    static displayName = NavMenu.name;

    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render() {
        return (
            <header>
                <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
                  
                        <NavbarBrand tag={Link} to="/">TextileSolution</NavbarBrand>
                        <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                        <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
                            <ul className="navbar-nav flex-grow">
                                <NavItem>
                                    <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
                                </NavItem>
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>
                                        Masters
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem>
                                            <Link className="text-dark" to="/buyer/master">Buyer</Link>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <Link className="text-dark" to="/company/create">Company</Link>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <Link className="text-dark" to="/vendor/create">Vendor</Link>
                                        </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>
                                            <Link className="text-primary" to="/user/create">User</Link>
                                        </DropdownItem>
                                    </DropdownMenu>
                            </UncontrolledDropdown>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Reports
                                    </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        <Link className="text-dark" to="/buyer/master">Buyer List</Link>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <Link className="text-dark" to="/company/create">Company List</Link>
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        <Link className="text-dark" to="/vendor/create">Question List</Link>
                                    </DropdownItem>
                                   
                                   
                                </DropdownMenu>
                            </UncontrolledDropdown>
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>
                                        UserName
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem>
                                            Profile
                                        </DropdownItem>
                                        <DropdownItem>
                                            Settings
                                        </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>
                                            <Link className="text-primary" to="/mis/logout">Logout</Link>
                                        </DropdownItem>
                                    </DropdownMenu>
                            </UncontrolledDropdown>
                            <NavItem>
                                <NavLink tag={Link} className="text-dark" to="/ContactUs">Contact Us</NavLink>
                            </NavItem>
                            </ul>
                        </Collapse>
                   
                </Navbar>
            </header>
        );
    }
}
