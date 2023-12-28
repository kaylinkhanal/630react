'use client'
import React,{useState} from 'react'
const page = () => {
  const answer = 'JAVASCRIPT'
  let [randomName, setRandomName] = useState('J V S RI T')
  const [lives,setLives] = useState(5)
  const [wrongInputs, setWrongInputs] = useState('')

  const checkLetters = (e,id)=>{
    const expectedChar = answer[id]
    if(e.target.value.toUpperCase() !== expectedChar && e.target.value != ''){
      setLives(lives-1)
      setWrongInputs(wrongInputs+e.target.value)
    }else{
      const expectedOutput = randomName.split('').map((item,id)=>{
        if(item== ' ' && answer[id]== e.target.value.toUpperCase()){
        return e.target.value.toUpperCase()
        }
        return item
        })
        setRandomName(expectedOutput.join(''))
    }
  }

  if(lives === 0 ){
    return (
      <div>
        You lost you loser!
      </div>
    )
  }
  return (
    <div> 
      
      {randomName.split('').map((item , id)=>{
        if (item === ' ' ){
          return <input onChange={(e)=>checkLetters(e,id)}/>
        }
        else{
          return <input value={item}/>
        }
        
      })}
      {randomName}
      <br/>
      Remaining Lives: {lives}
      <br/>
      You have tried: {wrongInputs.toUpperCase()}
    </div>
  )
}
export default page