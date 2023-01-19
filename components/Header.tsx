import Link from 'next/link'
import React, { Dispatch, SetStateAction } from 'react'

interface IHeader {
  setCount?: Dispatch<SetStateAction<number>>
  count?: number
}

const Header = ({ setCount, count = 0 }: IHeader) => {
  const handleClickButton = () => {
    if (typeof setCount === 'function') {
      setCount((prevState) => prevState + 1)
    }
  }

  const handleClickButtonReset = () => {
    if (typeof setCount === 'function') {
      // do something
      setCount(0)
    }
  }

  return (
    <>
      <div className='header'>
        <div className='section'>
          <div className='article'>
            <Link href='/'>
              <a>
                <b>Remote Header</b>
              </a>
            </Link>
          </div>
          <div className='article'>
            <ul>
              <li>
                <Link href='/item1'>
                  <a>Item 1</a>
                </Link>
              </li>
              <li>
                <Link href='/item2'>
                  <a>Item 2</a>
                </Link>
              </li>
              <li>
                <button onClick={handleClickButton}>Incrementar contador</button>
              </li>
              <li>
                <button onClick={handleClickButtonReset}>Resetear</button>
              </li>
              {count === 10 && (
                <li>
                  <span>El contador es 10 y generó un re-render</span>
                </li>
              )}
            </ul>
          </div>
        </div>
        <div className='login'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            enableBackground='new 0 0 24 24'
            height='38px'
            viewBox='0 0 24 24'
            width='38px'
            fill='#000000'
          >
            <g>
              <rect fill='none' height='24' width='24' />
            </g>
            <g>
              <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20z' />
            </g>
          </svg>
        </div>
      </div>
    </>
  )
}

export default Header
