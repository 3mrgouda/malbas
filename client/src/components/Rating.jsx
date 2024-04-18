import React from "react";
import { IoMdStar, IoMdStarHalf } from "react-icons/io";

export default function Rating({ value,colorValue }) {
  return (
    <div>
      <span>
        {value >= 1 ? (
         <IoMdStar style={{color:colorValue}}/>
        ) : value >= 0.5 ? (
          <IoMdStarHalf style={{color:colorValue}}/>
        ) : (
         <IoMdStar style={{color:colorValue}}/>
        )}
      </span>
      {value >= 2 ?<IoMdStar style={{color:colorValue}}/> : value >= 1 ?           <IoMdStarHalf style={{color:colorValue}}/> :<IoMdStar style={{color:colorValue}}/>}
      {value >= 3 ? (
       <IoMdStar style={{color:colorValue}}/>
      ) : value >= 2.5 ? (
                  <IoMdStarHalf style={{color:colorValue}}/>
      ) : (
       <IoMdStar style={{color:colorValue}}/>
      )}
      {value >= 4 ? (
       <IoMdStar style={{color:colorValue}}/>
      ) : value >= 3.5 ? (
                  <IoMdStarHalf style={{color:colorValue}}/>
      ) : (
       <IoMdStar style={{color:colorValue}}/>
      )}
      {value >= 5 ? (
       <IoMdStar style={{color:colorValue}}/>
      ) : value >= 4.5 ? (
                  <IoMdStarHalf style={{color:colorValue}}/>
      ) : (
       <IoMdStar style={{color:colorValue}}/>
      )}
    </div>
  );
}
