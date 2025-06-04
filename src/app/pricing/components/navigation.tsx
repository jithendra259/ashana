import { SignInButton,SignOutButton, UserButton,SignUpButton,SignedOut,SignedIn} from "@clerk/nextjs"
import * as React from 'react';


export const Navigation =()=>{
    return (
        <nav className="bg-[var(--baground)] border-b border-[var(--foreground)]/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex-shrink-0">
                        <h1 className ="bg-white/10 border border-white/20 backdrop-blur-md shadow-lg rounded-full px-6 py-2 flex items-center space-x-6" >
                            ashna ai
                        </h1>
                    </div>

                    <div className="flex items-center gap-4">
                        <SignedOut>
                            <SignInButton mode="modal" >
                                <button  className="text-white text-sm font-medium px-4 py-2 rounded-full bg-[#3b3b3b] transition-all duration-300 hover:bg-purple-500 hover:scale-102 hover:brightness-110 font-inter">
                                    Sign In
                                </button>
                              
                            </SignInButton>
                            <SignUpButton mode="modal" >
                               
                               <button className="text-white bg-gradient-to-r from-[#6a11cb] to-[#2575fc]  px-4 py-2 rounded-full shadow-lg flex items-center transition-transform duration-300 hover:scale-105 hover:brightness-110 font-inter">Signup</button>
                            </SignUpButton>
                        </SignedOut>
                       <SignedIn>
                            <SignOutButton>
                                    <button className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                                        Sign Out
                                    </button>
                            </SignOutButton>
                            <UserButton/>
                               
                        </SignedIn>
                       
                    </div>
                </div>
            </div>

        </nav>
    )
}