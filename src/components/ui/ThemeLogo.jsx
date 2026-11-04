import { ASSETS } from '../../config/site'

/** Par de logos (blanco/verde); el CSS muestra el que corresponde al tema activo. */
export default function ThemeLogo({ className, alt = 'PlantCare' }) {
  return (
    <>
      <img src={ASSETS.logoDark} alt={alt} className={`${className} theme-logo-dark`} />
      <img src={ASSETS.logoLight} alt={alt} className={`${className} theme-logo-light`} />
    </>
  )
}
