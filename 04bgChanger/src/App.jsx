import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState("black");

  return (
    <>
      <div
        className='w-full h-screen transition-colors duration-500'
        style={{ backgroundColor: color }}
      >
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-gray-100 px-3 py-2 rounded-2xl'>

            <button
              className='px-3 py-2 rounded-2xl text-white hover:opacity-80'
              style={{ backgroundColor: '#00FF00' }}
              onClick={() => setColor('#00FF00')}
            >
              Green
            </button>

            <button
              className='px-3 py-2 rounded-2xl text-white hover:opacity-80'
              style={{ backgroundColor: '#FF0000' }}
              onClick={() => setColor('#FF0000')}
            >
              Red
            </button>

            <button
              className='px-3 py-2 rounded-2xl text-white hover:opacity-80'
              style={{ backgroundColor: '#0000FF' }}
              onClick={() => setColor('#0000FF')}
            >
              Blue
            </button>

            <button
              className='px-3 py-2 rounded-2xl text-black hover:opacity-80'
              style={{ backgroundColor: '#FFFF00' }}
              onClick={() => setColor('#FFFF00')}
            >
              Yellow
            </button>

            <button
              className='px-3 py-2 rounded-2xl text-white hover:opacity-80'
              style={{ backgroundColor: '#800080' }}
              onClick={() => setColor('#800080')}
            >
              Purple
            </button>

            <button
              className='px-3 py-2 rounded-2xl text-white hover:opacity-80'
              style={{ backgroundColor: '#FFA500' }}
              onClick={() => setColor('#FFA500')}
            >
              Orange
            </button>

            <button
              className='px-3 py-2 rounded-2xl text-black hover:opacity-80'
              style={{ backgroundColor: '#FFC0CB' }}
              onClick={() => setColor('#FFC0CB')}
            >
              Pink
            </button>

            <button
              className='px-3 py-2 rounded-2xl text-black hover:opacity-80'
              style={{ backgroundColor: '#00FFFF' }}
              onClick={() => setColor('#00FFFF')}
            >
              Cyan
            </button>

            <button
              className='px-3 py-2 rounded-2xl text-white hover:opacity-80'
              style={{ backgroundColor: '#FF00FF' }}
              onClick={() => setColor('#FF00FF')}
            >
              Magenta
            </button>

            <button
              className='px-3 py-2 rounded-2xl text-white hover:opacity-80'
              style={{ backgroundColor: '#A52A2A' }}
              onClick={() => setColor('#A52A2A')}
            >
              Brown
            </button>

            <button
              className='px-3 py-2 rounded-2xl text-white hover:opacity-80'
              style={{ backgroundColor: '#808080' }}
              onClick={() => setColor('#808080')}
            >
              Gray
            </button>

            <button
              className='px-3 py-2 rounded-2xl text-black hover:opacity-80'
              style={{ backgroundColor: '#FFFFFF' }}
              onClick={() => setColor('#FFFFFF')}
            >
              White
            </button>

            <button
              className='px-3 py-2 rounded-2xl text-white hover:opacity-80'
              style={{ backgroundColor: '#000000' }}
              onClick={() => setColor('#000000')}
            >
              Black
            </button>

          </div>
        </div>
      </div>
    </>
  );
}

export default App;
