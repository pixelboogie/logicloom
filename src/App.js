import { useState } from 'react'

const App = () => {
  const [ text, setText] = useState('')
  const [ response, setResponse] = useState('')
  //console.log(text)

  const getCompletion = async () =>{
   const response = await fetch('http://localhost:8000/completion',{
      method: 'POST',
      body: JSON.stringify({text}),
      headers: {'Content-Type': 'application/json'}
    })
    const data = await response.json()
    //console.log(data)
    setResponse(data.message.content)
  }

  return (
    <div>
      <input onChange={e => setText(e.target.value)}/>
      <button onClick={getCompletion}>Submit</button>
      <p>{ response }</p>
    </div>
  )
}

export default App;
