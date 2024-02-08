import { FC } from 'react'
import Image from 'next/image'

const LOGO_HEIGHT = 48
const LOGO_WIDTH = 48

interface LogoProps {
    imageSrc?: string
    altText?: string
    titleText?: string
}

const Logo: FC<LogoProps> = ({ imageSrc = '/next.svg', altText = '', titleText = '' }) => (
    <Image
        height={LOGO_HEIGHT}
        width={LOGO_WIDTH}
        src={imageSrc}
        title={titleText}
        alt={altText}
        className="h-10 w-auto"
    />
)

export default Logo
