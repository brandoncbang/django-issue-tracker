import { useState } from 'react';
import AppLayout from '../layouts/AppLayout'

export default function Index() {
  const [count, setCount] = useState(0)

  return (
    <AppLayout>
      <h1 className="text-3xl font-bold">Hello, World!</h1>

      <div className="mt-8">
        <button
          className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={() => setCount((count) => count + 1)}
        >
          Increment
        </button>

        <span className="ml-4">
          Count is {count}.
        </span>
      </div>
    </AppLayout>
  )
}