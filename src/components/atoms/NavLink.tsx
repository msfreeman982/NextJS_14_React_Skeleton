import { FC } from 'react'
import Link from 'next/link'

interface NavLinkProps {
    href: string
    label: string
}

const NavLink: FC<NavLinkProps> = ({ href, label }) => (
    <Link href={href} className="text-black hover:text-gray-300">
        {label}
    </Link>
)

export default NavLink
