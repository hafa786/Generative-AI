import React from "react";
import '../styles/components.css'

type BannerProps = {
    text: string
}

const Banner: React.FC<BannerProps>  = ({ text }) => {
    return(
        <div className="banner p-3 bg-fuchsia-800 text-white justify-between items-center">
        <center>{text}</center>
      </div>
    )
}

export default Banner