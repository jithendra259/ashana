"use client";
import { AppWindowIcon, CodeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ButtonBase from "@mui/material/ButtonBase";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList
} from "@/components/ui/command";

const images = [
    { src: "/android-chrome-512x512.webp", alt: "ashna ai" },
    { src: "/chatgpt.png", alt: "chatgpt ai" },
    { src: "/claude-ai-icon-65aa.png", alt: "claude ai" },
    { src: "/meta.png", alt: "meta ai" },
    { src: "/mistral.png", alt: "mistral ai" }
];

const aimodels = [
    {
        name: "Ashna AI",
        description: "An AI assistant for your daily tasks.",
        image: "meta ai"
    },
    {
        name: "ChatGPT",
        description: "OpenAI's powerful language model.",
        image: "meta ai"
    },
    {
        name: "Claude",
        description: "Anthropic's advanced AI assistant.",
        image: "meta ai"
    },
    {
        name: "Meta AI",
        description: "Meta's conversational AI.",
        image: "meta ai"
    },
    {
        name: "Mistral AI",
        description: "Open source AI assistant.",
        image: "meta ai"
    }
];

export default function Bots() {
    return (
        <div className="p-8">
            <Tabs defaultValue="Explore">
                <h1 className="text-4xl font-semibold">Bots</h1>
                <TabsList className="bg-gray-500 mt-3">
                    <TabsTrigger value="Explore">Explore</TabsTrigger>
                    <TabsTrigger value="Bot">My Bot</TabsTrigger>
                </TabsList>
                <Command className="bg-transparent text-amber-50">
                    <CommandInput 
                        placeholder="Type a command or search..." 
                        className="text-amber-50 border-none focus:outline-none focus:ring-0 focus-visible:ring-0 mt-3"
                    />
                    <div className="flex gap-2 mt-2 flex-wrap">
                        <Button variant="outline">Tops</Button>
                        <Button variant="outline">Education</Button>
                        <Button variant="outline">Developer</Button>
                        <Button variant="outline">Vision</Button>
                        <Button variant="outline">Marketing</Button>
                        <Button variant="outline">Coding</Button>
                        <Button variant="outline">Assistance</Button>
                    </div>
                    <TabsContent value="Explore" className="mt-4 w-full">
                        <CommandList className="mt-4 w-full ">
                            <CommandEmpty>No results found</CommandEmpty>
                            
                            {aimodels.map((model, idx) => (
                                
                                <CommandItem 
                                    key={idx} 
                                    className="h-[200px] gap-2 w-50 bg-zinc-800 rounded-lg  justify-between"
                                >
                                    <div className="flex flex-col items-center gap-4">
                                        <img
                                            src={images[idx]?.src}
                                            alt={images[idx]?.alt}
                                            className="w-16 h-16 rounded-full object-cover"
                                        />
                                        <div className="text-center space-y-2">
                                            <CardTitle className="text-lg">{model.name}</CardTitle>
                                            <CardDescription className="text-sm">{model.description}</CardDescription>
                                        </div>
                                    </div>
                                </CommandItem>
                            ))}
                            
                        </CommandList>
                    </TabsContent>
                    <TabsContent value="Bot">
                        bots
                    </TabsContent>
                </Command>
            </Tabs>
        </div>
    );
}