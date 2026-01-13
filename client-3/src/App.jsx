
import './App.css'

function App() {

  return (
    <>
    <div className="w-full h-screen bg-blue-800">
      <fieldset className='border-8 border-blue-950 rounded-2xl w-fit mx-auto'>
        <legend className='text-3xl text-center font-semibold text-white'>Login</legend>
      <form className='bg-cyan-400 flex flex-col gap-2 p-4 rounded-xl items-center'>
        <label className='w-full self-center' htmlFor="email">Email</label>
        <input type="email" name="email" id="email" className='bg-white p-2 rounded-xl' placeholder='Your email address'/>

        <label className='w-full self-center' htmlFor="password">Password</label>
        <input type="password" name="password" id="password" className='bg-white p-2 rounded-xl ' placeholder='Your password'/>

        <button className='border-2 w-fit p-1 rounded-xl cursor-pointer mt-2'>Log In</button>
      </form>
      </fieldset>
    </div>
    </>
  )
}

export default App
