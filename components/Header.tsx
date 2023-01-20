import Link from 'next/link'
import React, { Dispatch, SetStateAction, isValidElement, ReactElement, useState } from 'react'

interface IHeader {
  setCount?: Dispatch<SetStateAction<number>>
  count?: number
  menu?: ReactElement
}

const Header = ({ setCount, count = 0, menu }: IHeader) => {
  const [showMenu, setShowMenu] = useState(false)
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

  const handleShowMenu = () => {
    setShowMenu((prevState) => !prevState)
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
                <button onClick={handleClickButton}>Incrementar contador</button>
              </li>
              <li>
                <button onClick={handleClickButtonReset}>Resetear</button>
              </li>
              <li>
                <Link href='/item1'>
                  <a>Item 1</a>
                </Link>
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
            onClick={handleShowMenu}
          >
            <g>
              <rect fill='none' height='24' width='24' />
            </g>
            <g>
              <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20z' />
            </g>
          </svg>
          {showMenu && isValidElement(menu) && <div className='menu'>{menu}</div>}
        </div>
      </div>
      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          display: flex;
          align-items: center;
          width: 100%;
          padding: 1rem;
          background-color: white;
          border-bottom: 1px solid #eaeaea;
          box-shadow: 0 0 15px 0 rgb(0 0 0 / 10%);
        }

        .section {
          display: flex;
          align-items: center;
          width: 100%;
        }

        .article {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: row;
        }

        .article b {
          font-weight: 500;
        }

        ul {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: row;
          gap: 1rem;
        }

        li {
          list-style: none;
          font-weight: 300;
          color: #666;
          font-size: 1rem;
        }

        a {
          transition: color 200ms;
        }

        a:hover {
          text-decoration: underline;
          color: #0070f3;
        }

        .login {
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .login svg {
          display: flex;
          flex: 1;
          user-select: none;
          cursor: pointer;
        }

        button {
          background-color: white;
          border: 1px solid;
          border-color: #eaeaea;
          color: #666;
          border-radius: 4px;
          padding: 10px 15px;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
            Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
          cursor: pointer;
          transition: all 200ms ease-in-out;
          font-weight: 300;
          font-size: 1rem;
        }

        button:hover {
          border-color: black;
          color: black;
        }

        button:active {
          background-color: #eaeaea;
        }

        span {
          font-weight: 500;
          color: #388e3c;
        }

        .menu {
          position: absolute;
          width: 280px;
          top: 5rem;
          right: 1rem;
          border-radius: 4px;
          background-color: white;
          border: 1px solid #eaeaea;
          box-shadow: 0px 2px 8px rgb(0 0 0 / 15;
        }
        
      `}</style>
    </>
  )
}

export default Header
