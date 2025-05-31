import { SignInButton , SignOutButton,UserButton} from "@clerk/nextjs"

export const Navigation =()=>{
    return (
        <nav className="bg-[var(--baground)] border-b border-[var(--foreground)]/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex-shink-0">
                        <h1 className ="text-xl font-semibold text-[var(--foreground)]">
                            ashna ai
                        </h1>
                    
                    </div>

                    <div className=" flex items-center gao-4">
                       <SignInButton mode="modal" className="text-[var(--foreground)] bg-[var(--primary)] hover:bg-[var(--primary-hover)] px-4 py-2 rounded-md">
                            Sign In 
                        </SignInButton>

                        <UserButton />
                    </div>
                </div>

            </div>

        </nav>
    )
}