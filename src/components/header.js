import React from "react"

import HeaderNavigation from "./header-navigation"

const Header = () => {
  return (
    <header className="font-heading tracking-wide bg-gray-700 p-8 text-3xl text-white font-bold flex items-center justify-between ">
      <div>Shane's Gatsby Starter</div>

      <HeaderNavigation />
    </header>
  )
}

export default Header
