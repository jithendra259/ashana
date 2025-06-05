"use client";
import SendIcon from '@mui/icons-material/Send';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Button } from "@/components/ui/button";
import React from "react";
import { Textarea } from "@/components/ui/textarea";
import { GlobeIcon} from "lucide-react";
import ButtonBase from '@mui/material/ButtonBase';
export default function Chat() {
  
  return (    
  <div className="flex flex-col h-full">
    <div className="flex-1"></div>
    <div className="p-4 w-full">
      <div  className="mx-auto w-[clamp(320px,60vw,700px)] min-w-[320px] max-w-[700px]">
        <div>
          
        </div>
        <div className="bg-zinc-800 rounded-2xl ">
        <Textarea placeholder="Do you have doubt?" className="w-full" />
        <div className="flex mt-2 ml-2 grid-cols-1 md:grid-cols-2 gap-3">
          <div>
          <Button className="border-none rounded-full h-8 w-8" variant="outline">
            <AddCircleOutlineIcon className=" "/>
          </Button>
          </div>
          <div>
          <Button className="rounded-3xl" variant="outline">
            <GlobeIcon className="" /><a>web</a>
          </Button>
          </div>
          <div className='ml-auto mr-2'>
            <ButtonBase className=' text-white ' title="Send">
              <SendIcon className="" />
            </ButtonBase>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
);
}