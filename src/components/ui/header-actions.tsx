"use client";
import { Settings, Bot } from "lucide-react";
import { UserButton, SignedIn } from "@clerk/nextjs";
import ButtonBase from "@mui/material/ButtonBase";
import { useState } from "react";

import { useRouter } from "next/navigation";

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
