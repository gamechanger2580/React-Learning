import React , { useState , useEffect} from 'react';

const Home = () => {
  const [inputValue , setInputValue] = useState(0);

  const increment = () => {
    setInputValue(inputValue + 1)
  }

  const decrement = () =>{
    setInputValue(inputValue - 1)
  }
  
  // useEffect(() => {
  //    console.log("Run");
  // }, [])  

  const btnStyle ={
    padding: 20,
    border: "none",
    backgroundColor: "#f1f1f1",
    margin: 10
  }

  return (
    <div>
      <input style={{padding:20, border: '1px solid rgba(0,0,0,0.4)'}}  type='number' placeholder='Enter Something' 
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
          console.log(inputValue)
        }}

      />

      {/* <button style={btnStyle} onClick={decrement} > - </button>
      <button style={btnStyle} onClick={increment} > + </button> */}

    </div>
  )
}

export default Home