import { FC } from 'react'
import Logo from '@/components/atoms/Logo'
import NavLink from '@/components/atoms/NavLink'

import styles from './styles.module.scss'

interface NavbarProps {
    titleText?: string
    altText?: string
    logo?: string
    links: { href: string; label: string }[]
    imageSrc?: string
}

const Navbar: FC<NavbarProps> = ({ titleText, altText, logo, links, imageSrc }) => {
    return (
        <nav>
            <div className={styles.containerMxAutoFlex}>
                <div>
                    <Logo titleText={titleText} altText={altText} imageSrc={logo} />
                </div>

                <div className="flex space-x-4">
                    {(links || []).map((link) => (
                        <NavLink key={link.href} href={link.href} label={link.label} />
                    ))}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
