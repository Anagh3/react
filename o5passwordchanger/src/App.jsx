import { useState,useCallback ,useEffect, useRef} from 'react'


function App() {
  const [length, setlength] = useState(8)
  const[NA,setNA]=useState(false);
  const[charA,setcharA]=useState(false);
  const[Password,setpassword]=useState("");

  const Passwordref=useRef(null)

  const PasswordGenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYXabcdefghijklmnopqrstuvwxyz"

    if(NA) str+="0123456789"
    if(charA) str+="!@#$%^&*"


    for(let i=1;i<=length;i++){
      let char=Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(char)

    }

    setpassword(pass)
  },[length,NA,charA,setpassword])


const copypass=useCallback(()=>{
  Passwordref.current?.select()
 // Passwordref.current?.setSelectionRange(0,3)
window,navigator.clipboard.writeText(Password)
},[Password])


  useEffect(()=>{
    PasswordGenerator()

  },[length,NA,charA,PasswordGenerator])


  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-xl px-8 my-10 text-orange-500  bg-gray-800'>

        <h1 className='text-white text-center '>Password Generator</h1>
      
        <div className="py-4 flex items-center justify-between shadow rounded-lg overflow-hidden mb-6">
          <input type="text"
          value={Password}
          className='outline-none w-full py-1 px-3'
          placeholder="Password"
          readOnly
          ref={Passwordref}
          />
          <button onClick={copypass} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range"
            min={8}
            max={16}
            value={length}
            className='cursor-pointer' 
            onChange={(e)=>{ setlength(e.target.value)}
            }
            ></input>
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            defaultChecked={NA}
            id='ni'
            onChange={()=>{
              setNA((prev)=>!prev);
            }}
            />
            <label htmlFor='numberinput'>Numbers</label>
          </div>


          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            defaultChecked={NA}
            id='ni'
            onChange={()=>{
              setcharA ((prev)=>!prev);
            }}
            />
            <label htmlFor='numberinput'>Character</label>
          </div>

        </div>
      </div>
    </>
  );
}
export default App
