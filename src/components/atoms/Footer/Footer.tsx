import { FC } from 'react'

import styles from './styles.module.scss'

interface FooterProps {
    companyName?: string
    year?: number
}

const Footer: FC<FooterProps> = ({ companyName = 'Default Company', year }) => {
    return (
        <p className={`${styles.textCenterWhite} bg-blue-800 p-4`}>
            &copy; {year} {companyName}. All rights reserved.
        </p>
    )
}

export default Footer
