"use client";
import { Settings,Bot } from "lucide-react";
import { SignInButton,SignOutButton, UserButton,SignUpButton,SignedOut,SignedIn} from "@clerk/nextjs"
import { Button } from "@/components/ui/button";
import ButtonBase from "@mui/material/ButtonBase";
import React, { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
export default function Chat({
  children,
}: {
  children: React.ReactNode;
}) {
  

  return (    
  <div className="flex flex-col h-full">
    <div className="flex-1"></div>
    <div className="p-4 w-full">
      <div className="bg-zinc-800 rounded-2xl mx-auto p-4 w-[clamp(320px,60vw,700px)] min-w-[320px] max-w-[700px]">
        <Textarea placeholder="Do you have doubt?" className="w-full" />
        <div>
          <Button className="mt-2" variant="outline">
            Send
          </Button>
          <Button className="mt-2 ms-2" variant="outline">
            Clear
          </Button>
        </div>
      </div>
    </div>
  </div>
);
}