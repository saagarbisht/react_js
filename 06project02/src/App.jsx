import { useState, useCallback, useEffect, useRef} from "react"

function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [char, setChar] = useState(false);
  const [password, setPassword] = useState();

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(number){
      const num = "0123456789"
      str += num;
    };

    if(char){
      const specialChar = "`!@#$&*+-_"
      str += specialChar;
    }

    for(let i = 1; i <= length; i++){
      pass += str[Math.floor(Math.random() * str.length)];
    }

    setPassword(pass);

  } , [length, number, char, setPassword])

  const passwordRef = useRef(null);

  const copyPassword = useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])
  useEffect(()=>{
    passwordGenerator()
  }, [length, number, char, passwordGenerator])
  return (
    <>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-8 text-orange-500 bg-gray-700 my-5">
      <h1 className="text-white text-center my-3">Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text" 
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />
        <button className="outline-none bg-orange-500 text-white px-3 py-0.5 shrink-0" onClick={copyPassword}>copy</button>
      </div>
      <div className="flex text-sm gap-x-2">

        <div className="flex item-center gap-x-1">
        <input 
        type="range"
        className="cursor-pointer"
        min={6}
        max={28}
        value={length}
        onChange={e => setLength(e.target.value)}
        />
        <label>Length : {length}</label>
        </div>

        <div className="flex item-center gap-x-1">
        <input 
        type="checkbox"
        defaultChecked={number}
        id="number-input"
        onChange={() => {
          setNumber(prev => !prev)
        }}
        />
        <label>Numbers</label>
        </div>

        <div className="flex item-center gap-x-1">
        <input 
        type="checkbox"
        defaultChecked={char}
        id="charater-input"
        onChange={() => {
          setChar(prev =>!prev)
        }}
        />
        <label>Characters</label>
        </div>

      </div>
    </div>
    </>
  )
}

export default App