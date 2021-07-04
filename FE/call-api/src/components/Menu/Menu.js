import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
const menus = [
    {
        name: 'Trang chủ',
        to: '/',
        exact: true
    },
    {
        name: 'Quản lý sản phẩm',
        to: '/productlist',
        exact: false
    }
];
const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
        <Route
            path={to}
            exact={activeOnlyWhenExact}
            children={({ match }) => {
                var active = match ? 'active' : '';
                return (
                    <li className={`nav-item ${active}`}>
                        <Link to={to} className='nav-link'>
                            {label}
                        </Link>
                    </li>
                )
            }}
        />
    )
}
export default class Menu extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <a className="navbar-brand" href="/">CAll API</a>
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        {this.showMenus(menus)}
                    </ul>
                </div>
            </nav>
        )
    }
    showMenus = (menus) => {
        var result = null;
        if (menus.length > 0) {
            result = menus.map((menu, index) => {
                return (
                    <MenuLink
                        key={index}
                        label={menu.name}
                        activeOnlyWhenExact={menu.exact}
                        to={menu.to}
                    />
                )
            })
        }
        return result;
    }
}
