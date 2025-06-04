
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
  <div>
      <div >
        <div>
          
          <Textarea placeholder="Do you have dought " className=" ">

          </Textarea>
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