import AmazeNFT from "./components/AmazeNFT"
import CollectionNFT from "./components/CollectionNFT"
import CollectionOver from "./components/CollectionOver"
import DiscoverNFT from "./components/DiscoverNFT"
import Hero from "./components/Hero"
import SignUpNFT from "./components/SignUpNFT"
import Layout from "./layout"


type Props = {}

const NFTPage = ({}: Props) => {
  return (
    <Layout>
       <Hero/>
       <AmazeNFT/>
       <CollectionOver/>
       <CollectionNFT/>
       <SignUpNFT/>
       <DiscoverNFT/>
    </Layout>
  )
}

export default NFTPage