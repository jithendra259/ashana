import { AppWindowIcon, CodeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ButtonBase from "@mui/material/ButtonBase";
import {Command,CommandEmpty,CommandGroup,CommandInput,CommandItem,CommandList,CommandSeparator,CommandShortcut,
} from "@/components/ui/command"
export default function Bots(){
    return (
        <div className="p-8">
            <Tabs className="" defaultValue="Explore">
                <h1 className="text-4xl font-semibold">Bots</h1>
               <TabsList className="bg-gray-500 mt-3">
                <TabsTrigger value="Explore" >Explore</TabsTrigger>
                <TabsTrigger value="Bot" >My Bot</TabsTrigger>
               </TabsList>
               <Command className="bg-transparent text-amber-50 ">
                <CommandInput placeholder="Type a command or search..." className="text-amber-50 border-none focus:outline-none focus:ring-0 focus-visible:ring-0 mt-3"/>
                <div className="flex gap-2 mt-2 justy-content-center items-center flex-wrap">
                    <Button>Tops</Button>
                    <Button>Education</Button>
                    <Button>Develper</Button>
                    <Button>vision</Button>
                    <Button>Marketing</Button>
                    <Button>Coding</Button>
                    <Button>Assistance</Button>
                </div>
                    <TabsContent value="Explore">
                        
                    </TabsContent>
                    <TabsContent value="Bot">
                        
                    </TabsContent>
               </Command>

                        

               


            </Tabs>

        </div>
    )
}