import "./foryoubanner.scss"
import Logo from "../../assets/logo_small.png"

const ForYouBanner = () => {
  return (
    <div className="header-banner">
        <img src={Logo} alt=""/>
        <div className="foryou">
            <button>For You</button>
        </div>
        <div className="following">
            <button>Following</button>
        </div>
    </div>
  )
}

export default ForYouBanner;