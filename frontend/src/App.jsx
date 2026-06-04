import { Show, SignInButton, SignOutButton, SignUpButton, UserButton } from '@clerk/react'
import './App.css'

function App() {

  return (
    <>
      <header>
        <Show when="signed-out">
          <SignInButton mode="modal">
            <button className=''>Login</button>
          </SignInButton>
          <SignUpButton />
        </Show>
        <Show when="signed-in">
          <SignOutButton/>
          <UserButton />
        </Show>
      </header>
    </>
  )
}

export default App
