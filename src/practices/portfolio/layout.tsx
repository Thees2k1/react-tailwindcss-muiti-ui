import { ReactNode } from "react"


type Props = {
    children?: ReactNode
}

const Layout = ({children}:Props) => {
  return (
    <div><h1>prot</h1>
        {children}
    </div>
  )
}

export default Layout