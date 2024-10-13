import localFont from "next/font/local"

const manrope = localFont({
    src:"../../public/fonts/Manrope-VariableFont_wght.ttf",
    variable: "--font-manrope"
  })
const openSansRegular = localFont({
    src:"../../public/fonts/OpenSans-Regular.ttf",
    variable: "--font-open-sans",
  })
const openSansMedium = localFont({
    src:"../../public/fonts/OpenSans-Medium.ttf",
    variable: "--font-open-sans-medium",
  })
const openSansBold = localFont({
    src:"../../public/fonts/OpenSans-Bold.ttf",
    variable: "--font-open-sans-bold",
  })
const openSansExtraBold = localFont({
    src:"../../public/fonts/OpenSans-ExtraBold.ttf",
    variable: "--font-open-sans-extra-bold",
  })

export {manrope,openSansRegular,openSansBold,openSansMedium,openSansExtraBold};