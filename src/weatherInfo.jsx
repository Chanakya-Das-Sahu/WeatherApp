import React from 'react'
import { WiHumidity } from "react-icons/wi";
const weatherInfo = (props) => {
  return (
    <>
    <div>
          {props.icons}{props.infos}{props.digit}
     {/* <div>{props.infos}</div> */}
    </div>
    </>
  )
}

export default weatherInfo;
// 