import ActionsRow from "./ActionsRow"
import Nav from "./Nav"


const Header = () => {
  return (
    <header className="flex pt-8 pb-7 w-full max-w-fl justify-between">
      <Nav/>
      <ActionsRow/>
    </header>
  )
}

export default Header