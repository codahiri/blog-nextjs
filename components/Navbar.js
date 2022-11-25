import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  const links = [
    {path: '/', label: 'Home'},
    {path: '/posts', label: 'Posts'},
    {path: '/about', label: 'About'},
    {path: '/contact', label: 'Contact'},
  ]
  return (
    <div className='container mx-auto flex justify-between items-center'>
      <div className='brand'>
        <Link href='/'>Biodasturchi</Link>
      </div>
      <ul className='flex'>
        {links.map(link => (
          <li className='ml-2' key={link.label}>
            <Link href={link.path}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Navbar