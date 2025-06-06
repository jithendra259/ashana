"use client";
import { Settings, Bot } from "lucide-react";
import { UserButton, SignedIn } from "@clerk/nextjs";
import ButtonBase from "@mui/material/ButtonBase";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {Search} from "lucide-react";
import {Dialog,DialogClose,DialogContent,DialogDescription,DialogFooter,DialogHeader,DialogTitle,DialogTrigger,} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AppWindow,CodeIcon }  from "lucide-react";
import {Card,CardContent,CardDescription,CardFooter,CardHeader,CardTitle} from "@/components/ui/card";
import {Tabs,TabsContent,TabsList,TabsTrigger} from "@/components/ui/tabs";
import { useRouter } from "next/navigation";
import Bots from "@/app/chat/Bots/page";
export function HeaderActions() {
  const [rotated, setRotated] = useState(false);



  const router = useRouter();

  return (
    <div className="flex gap-6 justify-end w-full">
      <ButtonBase onClick={() => router.push("/chat/Bots")}><Bot /></ButtonBase>
      <ButtonBase onClick={() => setRotated((prev) => !prev)}>
        <a>
          <Settings
            className={rotated ? "transition-transform duration-300 rotate-90" : "transition-transform duration-300"}
          />
        </a>
      </ButtonBase>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
}
