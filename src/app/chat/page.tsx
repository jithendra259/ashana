
"use client";
import { Settings,Bot } from "lucide-react";
import { SignInButton,SignOutButton, UserButton,SignUpButton,SignedOut,SignedIn} from "@clerk/nextjs"
import { Button } from "@/components/ui/button";
import ButtonBase from "@mui/material/ButtonBase";
import React, { useState } from "react";
export default function Chat({
  children,
}: {
  children: React.ReactNode;
}) {
  

  return (    
  <div className="flex h-full w-full flex-col">
      
      

      <div className="flex-1 overflow-y-auto">
        <div className="p-4">
          
          {/* Chat content will go here */}
        </div>
      </div>
    </div>
  );
}