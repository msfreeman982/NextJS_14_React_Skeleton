import { FC, ReactNode } from 'react'
import Header from '@/components/organism/Header'
import Footer from '@/components/atoms/Footer/Footer'

interface MainLayoutProps {
    children: ReactNode
    links: { href: string; label: string }[]
}

const MainLayout: FC<MainLayoutProps> = ({ children, links }) => {
    return (
        <>
            <header>
                <Header links={links} />
            </header>
            {children}
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default MainLayout
