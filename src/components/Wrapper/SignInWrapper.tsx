import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import { PropsWithChildren } from "react";

/* 
    This component is used to wrap components that require a user to be signed in.
*/

const SignInWrapper = ({ children }: PropsWithChildren) => {
  return (
    <>
      <SignedIn>{children}</SignedIn>
      <SignedOut>
        <div className="w-full">
          <SignInButton mode="modal" redirectUrl={"/cv"}>
            <button className="btn mx-auto my-auto">Sign in</button>
          </SignInButton>
        </div>
      </SignedOut>
    </>
  );
};

export default SignInWrapper;
