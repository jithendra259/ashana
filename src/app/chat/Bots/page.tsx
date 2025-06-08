"use client";
import { AppWindowIcon, CodeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ButtonBase from "@mui/material/ButtonBase";
import { SearchIcon } from "lucide-react";
import { useState } from "react";
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
        image: "meta ai",
        category: "assistance"
    },
    {
        name: "ChatGPT",
        description: "OpenAI's powerful language model.",
        image: "meta ai",
        category: "tops"
    },
    {
        name: "Claude",
        description: "Anthropic's advanced AI assistant.",
        image: "meta ai",
        category: "assistance",
    },
    {
        name: "Meta AI",
        description: "Meta's conversational AI.",
        image: "meta ai",
        category: "tops"
    },
    {
        name: "Mistral AI",
        description: "Open source AI assistant.",
        image: "meta ai",
        category: "developer"
    },
    {
        name: "Visionary",
        description: "AI for image and video analysis.",
        image: "meta ai",
        category: "vision"
    },
    {
        name: "EduBot",
        description: "AI tutor for students and teachers.",
        image: "meta ai",
        category: "education"
    },
    {
        name: "CodeGen",
        description: "AI code generator and assistant.",
        image: "meta ai",
        category: "coding"
    },
    {
        name: "MarketGenius",
        description: "AI for marketing and analytics.",
        image: "meta ai",
        category: "marketing"
    }
];

export default function Bots() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const filteredModels = aimodels.filter(model => {
        const matchesSearch = model.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            model.description.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = !selectedCategory || model.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="p-8">
            <Tabs defaultValue="Explore">
                <h1 className="text-4xl font-semibold">Bots</h1>
                <TabsList className="bg-gray-500 mt-3">
                    <TabsTrigger value="Explore">Explore</TabsTrigger>
                    <TabsTrigger value="Bot">My Bot</TabsTrigger>
                </TabsList>

                <div className="mt-3">
                    <div className="relative border-b border-zinc-600 pb-2">
                        <SearchIcon  className="absolute left-2 top-1/2 transform -translate-y-1/2 text-zinc-300" />
                        <Input 
                            placeholder="Search bots..."
                            className="text-amber-50 ml-6 bg-transparent border-none focus:outline-none focus:ring-0 focus-visible:ring-0"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        ></Input>
                    </div>

                    <div className="flex gap-2 mt-2 flex-wrap">
                        {["tops", "education", "developer", "vision", "marketing", "coding", "assistance"].map((category) => (
                            <Button
                                key={category}
                                variant="outline"
                                className={selectedCategory === category ? "bg-zinc-700" : ""}
                                onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
                            >
                                {category.charAt(0).toUpperCase() + category.slice(1)}
                            </Button>
                        ))}
                    </div>

                    <TabsContent value="Explore" className="mt-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {filteredModels.length === 0 ? (
                                <div className="col-span-full text-center text-amber-50">No results found</div>
                            ) : (
                                filteredModels.map((model, idx) => (
                                    <div 
                                        key={idx} 
                                        className="h-[200px] p-4 bg-zinc-800 rounded-lg flex flex-col items-center justify-center gap-4"
                                    >
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
                                ))
                            )}
                        </div>
                    </TabsContent>

                    <TabsContent value="Bot">
                        <div className="text-amber-50">
                            My Bots Content
                        </div>
                    </TabsContent>
                </div>
            </Tabs>
        </div>
    );
}