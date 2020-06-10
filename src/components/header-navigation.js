import React, { useState } from "react"
import { Link } from "gatsby"

import IconMenu from "../images/icon-menu.svg"
import IconMenuClose from "../images/icon-menu-close.svg"
import "./header-navigation.css"

export default function HeaderNavigation() {
  const [menu, setMenu] = useState(false)

  function menuChild() {
    document.addEventListener(
      "click",
      function (event) {
        if (window.innerWidth < 768) {
          /** Child Navigation */
          if (!event.target.matches(".navigation__with-child a")) return
          let classList = event.target.parentNode.classList

          if (!classList.contains("parent-open")) {
            event.preventDefault()

            classList.add("parent-open")

            let menuChild = event.target.parentNode.querySelector(
              ".navigation__child"
            )

            menuChild.style.height = "auto"

            let height = menuChild.clientHeight + "px"
            menuChild.style.height = "0px"

            setTimeout(() => {
              menuChild.style.height = height
            }, 0)
          } else {
            return
          }
        }
      },
      false
    )
  }

  return (
    <>
      <button
        data-menu-visible={menu}
        aria-hidden
        onClick={() => setMenu(menu ? false : true)}
        className="h-8 text-grey md:hidden z-100"
      >
        <IconMenu />
      </button>
      <nav
        data-menu-visible={menu}
        className="navigation fixed inset-0 py-12 px-6 bg-black md:block md:relative md:inset-auto md:p-0 overflow-scroll md:overflow-auto"
      >
        <button
          data-menu-visible={menu}
          aria-hidden
          onClick={() => setMenu(menu ? false : true)}
          className="h-8 w-6 text-white md:hidden z-100 fixed top-0 right-0 m-4"
        >
          <IconMenuClose />
        </button>

        <div className="flex justify-center items-center">
          <ul className="block md:flex">
            <li>
              <Link to="/">Item</Link>
            </li>

            <li className="navigation__with-child">
              <Link
                className="flex items-center"
                to="/somewhere-else/"
                onClick={menuChild()}
              >
                Item with Children{" "}
                <svg
                  className="w-6 ml-2 poi"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <ul className="navigation__child">
                <li>
                  <Link to="/">Child</Link>
                </li>
                <li>
                  <Link to="/">Child</Link>
                </li>
                <li>
                  <Link to="/">Child</Link>
                </li>
                <li>
                  <Link to="/">Child</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/">Item</Link>
            </li>

            <li className="navigation__with-child">
              <Link
                className="flex items-center"
                to="/somewhere-else/"
                onClick={menuChild()}
              >
                Item with Children{" "}
                <svg
                  className="w-6 ml-2 poi"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <ul className="navigation__child">
                <li>
                  <Link to="/">Child</Link>
                </li>
                <li>
                  <Link to="/">Child</Link>
                </li>
                <li>
                  <Link to="/">Child</Link>
                </li>
                <li>
                  <Link to="/">Child</Link>
                </li>
                <li>
                  <Link to="/">Child</Link>
                </li>
                <li>
                  <Link to="/">Child</Link>
                </li>
                <li>
                  <Link to="/">Child</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/">Item</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}
