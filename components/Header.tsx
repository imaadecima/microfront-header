import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <>
      <header>
        <section>
          <article>
            <Link href='/'>
              <a>
                <b>Remote Header</b>
              </a>
            </Link>
          </article>
          <article>
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
                <Link href='/item3'>
                  <a>Item 3</a>
                </Link>
              </li>
              <li>
                <Link href='/item4'>
                  <a>Item 4</a>
                </Link>
              </li>
            </ul>
          </article>
        </section>
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
      </header>
      <style jsx>{`
        header {
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

        section {
          display: flex;
          align-items: center;
          width: 100%;
        }

        article {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: row;
        }

        article b {
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
        }
      `}</style>
    </>
  )
}

export default Header
