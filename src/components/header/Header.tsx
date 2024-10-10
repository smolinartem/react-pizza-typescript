import { useMediaQuery } from '@uidotdev/usehooks'
import MobileBottomLinks from './MobileBottomLinks'
import MobileTopLinks from './MobileTopLinks'
import LaptopLinks from './LaptopLinks'

export default function Header() {
  const isSmallDevice = useMediaQuery('only screen and (max-width : 768px)')
  return (
    <header>
      {isSmallDevice ? (
        <>
          <MobileTopLinks />
          <MobileBottomLinks />
        </>
      ) : (
        <LaptopLinks />
      )}
    </header>
  )
}
