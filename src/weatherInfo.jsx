import React from 'react'

const weatherInfo = (props) => {
  return (
    <>
    <div>
     {props.icons}
     <div>{props.infos}<br/>{props.digit}</div>
    </div>
    </>
  )
}

export default weatherInfo;