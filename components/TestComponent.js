import React from 'react'

export default function TestComponent({name = 'world'}) {
  const [count, setCount] = React.useState(0)

  const increment = () => {
    setCount(c => c + 1)
  }

  const decrement = () => {
    setCount(c => c - 1)
  }

  return (
    <>
      <div>Hello, {name}!</div>

      <button disabled={count === 0} onClick={decrement}>
        -
      </button>
      <button onClick={increment}>+</button>
      <p>Count: {count}</p>

      <style jsx>{`
        button {
          background: green;
          height: 40px;
          width: 40px;
          font-size: 20px;
          background: white;
          border: 1px solid;
          border-radius: 6px;
        }
        p {
          font-size: 20px;
          margin-bottom: 20px;
        }
        div {
          background-color: #555;
          border-radius: 0.5em;
          color: #fff;
          margin-bottom: 1.5em;
          padding: 0.5em 0.75em;
        }
      `}</style>
    </>
  )
}
