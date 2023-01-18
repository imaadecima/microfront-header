import Header from 'components/Header'
import React from 'react'

const Item1 = () => {
  return (
    <>
      <Header />
      <div>Item1</div>
      <style jsx>{`
        div {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          background-color: aliceblue;
        }
      `}</style>
    </>
  )
}

export default Item1
