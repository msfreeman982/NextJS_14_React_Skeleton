import { FC } from 'react'
import NavBar from '@/components/moleculs/NavBar/NavBar'

interface NavbarProps {
    links: { href: string; label: string }[]
}

const Header: FC<NavbarProps> = ({ links }) => {
    return (
        <div className="bg-white p-4">
            <NavBar links={links} />
        </div>
    )
}

export default Header
