import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <nav className="md:px-32 pt-8">
        <div className="flex items-center md:justify-start justify-center">
            <Image
                src="/joysphere.png"
                className="scale-75 md:scale-100"
                width={110}
                height={110}
                alt="Jakkrawan"
            />
            <p className="justify-center md:pl-4 text-[20px] md:text-[25px] font-[1000]">พรรคจักรวาลคือความสุข</p>
        </div>
    </nav>
  )
}

export default Navbar