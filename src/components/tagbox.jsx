import React from 'react'
import { RxCross2 } from "react-icons/rx";
import "./table.css"
import "./mobile.css"
const tagbox = (props) => {
    const number = props.number;
    const space="1";
  return (
    <div className=' tagbox h-7 rounded-md pl-2 flex align-middle'>TAG {number}<RxCross2 className='cross ml-1'/></div>
  )
}

export default tagbox