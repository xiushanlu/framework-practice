import { useState } from 'react'
import './Hero.css'

function Hero() {
  let [clickTimes, setClickTimes] = useState(0);

  let updateClickTimes = () => {
    setClickTimes(++clickTimes);
  }

  return (
    <div className="w-screen bg-amber-50 flex flex-col px-10 py-20 gap-3">
      <h1>Hi!</h1>
      <p>This button was clicked {clickTimes} times since reload.</p>
      <button onClick = {updateClickTimes}>Learn more</button>
    </div>
  )
}

export default Hero
