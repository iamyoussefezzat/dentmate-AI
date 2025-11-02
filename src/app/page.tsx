import { Button } from '@/components/ui/button'
import { SignInButton ,SignOutButton,SignedIn,SignedOut,  } from '@clerk/nextjs'

export default function Home() {
  return (
    <>
      <h1>
        Welcome to Dentmate! Your AI-Powered Dental Companion.
      </h1>
      <SignedOut>
      <SignInButton mode='modal'> Sign in </SignInButton>
      </SignedOut>

      <SignedIn>
        <SignOutButton >Log out</SignOutButton>
      </SignedIn>
    </>

  )
}
