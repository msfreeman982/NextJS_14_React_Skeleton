import type { Metadata } from 'next'
import MainLayout from '@/components/templates/MainLayout'
import links from '@/data/mocks'

import '@/styles/global.css'

interface RootLayoutProps {
    children: React.ReactNode
}

export const metadata: Metadata = {
    title: 'Hello Marcus',
    description: 'I see you like to use the unpaid labor of programmers',
}

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
    return (
        <html lang="en">
            <body>
                <MainLayout links={links}>{children}</MainLayout>
            </body>
        </html>
    )
}
