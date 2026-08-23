import { useState } from 'react'

function App() {
  const [color, setColor] = useState("olive")
  return (
    
     <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center right-10 top-4 bottom-4 inset-y-0 px-2'>
        <div className='flex flex-col justify-center gap-3 shadow-lg bg-white px-3 px-2 rounded-xl'>
          <button className='outline-none px-4 rounded-full py-2 bg-red-500 text-white hover:bg-red-600 transition shadow-lg'
          onClick={() => setColor('red')}>Red</button>
          <button className='outline-none px-4 rounded-full py-2 bg-green-500 text-white hover:bg-green-600 transition shadow-lg'
          onClick={() => setColor('green')}>Green</button>
          <button className='outline-none px-4 rounded-full py-2 bg-blue-500 text-white hover:bg-blue-600 transition shadow-lg'
          onClick={() => setColor('blue')}>Blue</button>
          <button className='outline-none px-4 rounded-full py-2 bg-orange-500 text-white hover:bg-orange-600 transition shadow-lg'
          onClick={() => setColor('orange')}>Orange</button>
          <button className='outline-none px-4 rounded-full py-2 bg-teal-500 text-white hover:bg-teal-600 transition shadow-lg'
          onClick={() => setColor('teal')}>Teal</button>
          <button className='outline-none px-4 rounded-full py-2 bg-slate-500 text-white hover:bg-slate-600 transition shadow-lg'
          onClick={() => setColor('#64748b')}>Slate</button>
          <button className='outline-none px-4 rounded-full py-2 bg-yellow-500 text-white hover:bg-yellow-600 transition shadow-lg'
          onClick={() => setColor('yellow')}>Yellow</button>
          <button className='outline-none px-4 rounded-full py-2 bg-emerald-500 text-white hover:bg-emerald-600 transition shadow-lg'
          onClick={() => setColor('#10b981')}>Emerald</button> 
          <button className='outline-none px-4 rounded-full py-2 bg-fuchsia-500 text-white hover:bg-fuchsia-600 transition shadow-lg'
          onClick={() => setColor('fuchsia')}>Fuchsia</button> 
          <button className='outline-none px-4 rounded-full py-2 bg-violet-500 text-white hover:bg-violet-600 transition shadow-lg'
          onClick={() => setColor('violet')}>Violet</button> 
          <button className='outline-none px-4 rounded-full py-2 bg-black text-white hover:bg-black transition shadow-lg'
          onClick={() => setColor('black')}>Black</button> 
        </div>
      </div>      
     </div>

    
  )
}

export default App

/*
CSS color names only support standard keywords like red, blue, green, orange, yellow, teal, violet, and black. Browser CSS engine 
does not recognize "emerald" or "slate" as valid HTML/CSS color keywords (they are Tailwind utility names, not native CSS color 
keywords), so the inline style property silently fails and falls back to nothing. 
In order to fix those ones, Pass valid CSS color values (Hex codes, RGB, or valid CSS keywords) into setColor(...)
*/