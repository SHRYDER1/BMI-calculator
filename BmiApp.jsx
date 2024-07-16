import React from 'react'
import { useMemo } from 'react';
import { useState } from 'react'

export default function BmiApp() {
    const [weight,Setweight]=useState(40);
    const [height,SetHeight]=useState(90);
 const output=useMemo(()=>{
          const claculateheight=height/100;
          return (weight/(claculateheight*claculateheight)).toFixed(1);
 },[weight,height])
  return (
    <main>
        <h1>BMI Calculator</h1>
        <div className='input-section'>
            <p className='slider-output'> Weight : {weight} kg</p>
            <input className='input-slider' type='range' step='1' min='40' max='200' value={weight} onChange={(e)=>Setweight(e.target.value)}/>
            <p className='slider-output'>Height : {height}cm</p>
            <input className='input-slider' type='range' step='1' min='140' max='220' value={height} onChange={(e)=>SetHeight(e.target.value)}/>

        </div>
        <div className='output-section'>
            <p>Your BMI is</p>
            <p className='output'>{output}</p>
        </div>
     
    </main>
  )
}
