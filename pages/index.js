import React, {useState} from "react"
function Home (){
  return (
    <div>
      <h2>Home</h2>
      <Contador />
    </div>
  )
}

function Contador(){
  const [contador, setContador] = useState(0)

  function adicionarContador(){
    setContador(contador + 1)
  }

  return (
  <div>{contador}</div>
  )

  
}
export default  Home