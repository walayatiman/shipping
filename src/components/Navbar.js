import { Link } from "gatsby"
import React, { useState } from "react"
import styled from "styled-components"

const MenuIcon = styled.button`
  position: relative;
  top: 0rem;
  right: 0rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 1.5rem;
  height: 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 5;

  div {
    width: 1.5rem;
    height: 0.1rem;
    background: black;
    border-radius: 5px;
    transform-origin: 1px;
    transition: opacity 250ms, transform 250ms;

    :first-child {
      transform: ${({ isActive }) =>
        isActive ? "rotate(45deg)" : "rotate(0)"};
    }

    :nth-child(2) {
      opacity: ${({ isActive }) => (isActive ? "0" : "1")};
    }

    :nth-child(3) {
      transform: ${({ isActive }) =>
        isActive ? "rotate(-45deg)" : "rotate(0)"};
    }
  }
`

const Nav = styled.div``

const MenuLinks = styled.nav`
  transition: transform 250ms;
  transform: ${({ isActive }) =>
    isActive ? "translateX(0)" : "translateX(100%)"};

  li {
    margin-top: 1rem;
  }
  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    height: 100vh;
    width: 100%;
    justify-content: center;
    position: absolute;
    background-color: #f62459;
    top: 0;
    right: -1px;
  }
`

export default function Navbar() {
  const [isActive, setActive] = useState(false)

  return (
    <div className="bg-gray-800">
      <Nav>
        <MenuLinks isActive={isActive} className="lg:hidden">
          <nav>
            <ul>
              <li>
                <Link to="/" className="nav_link hover:text-red-500">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/" className="nav_link hover:text-red-500">
                  About
                </Link>
              </li>
              <li>
                <Link to="/" className="nav_link hover:text-red-500">
                  Portfolio
                </Link>
              </li>
            </ul>
          </nav>
        </MenuLinks>
      </Nav>
      <section className="px-2.5 py-1.5  shadow-md border-md container mx-auto">
        <main className="flex items-center justify-between">
          <section className="flex items-center" space-x-8>
            <Link to="#">
              <div className="flex items-center bg-red-50 rounded">
                <svg
                  class="w-6 h-6 w-12 rounded object-cover"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"
                  ></path>
                </svg>
              </div>
            </Link>
            <div className="lg:block hidden">
              <ul className="flex items-center space-x-5">
                <Link to="/" className="active nav_link">
                  Home
                </Link>
                <Link to="/" className="active nav_link">
                  About
                </Link>
                <Link to="/" className="active nav_link">
                  Portfolio
                </Link>
              </ul>
            </div>
          </section>
          <section className="flex items-center space-x-5">
            <div>
              <ul className="flex items-center space-x-4">
                <li className="lg:block hidden">
                  <div className="relative">
                    <div className="absolute left-1.5 top-1.5">
                      <svg
                        class="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        ></path>
                      </svg>
                    </div>
                    <input
                      type="search"
                      placeholder="Search"
                      className="w-full h-8 p-1 rounded-md bg-gray-700 focus:bg-gray-100 focus:ring ring-yellow-300 focus:outline-none pl-8"
                    />
                  </div>
                </li>
                <li className="lg:hidden">
                  <button className="focus:outline-none">
                    <svg
                      class="w-6 h-6 text-gray-400 hover:text-gray-200 focus:text-gray-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                      ></path>
                    </svg>
                  </button>
                </li>
                <li>
                  <Link to="#">
                    <svg
                      class="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                      ></path>
                    </svg>
                  </Link>
                </li>
                <li className="lg:hidden">
                  <MenuIcon
                    isActive={isActive}
                    onClick={() => setActive(!isActive)}
                  >
                    <div />
                    <div />
                    <div />
                  </MenuIcon>
                </li>
              </ul>
            </div>
          </section>
        </main>
      </section>
    </div>
  )
}
