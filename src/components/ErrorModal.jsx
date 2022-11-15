import { Children } from "react"

function ErrorModal({children}) {
  return (
    <div className='py-2 w-full bg-red-600 font-bold text-center text-white rounded-md my-4'>{children}</div>

  )
}

export default ErrorModal