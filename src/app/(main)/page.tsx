"use client";
import { BoxReveal } from "@/components/magicui/box-reveal";
import '../globals.css';
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { IconCloud } from "@/components/magicui/icon-cloud";
import { Marquee } from "@/components/magicui/marquee";
import { OrbitingCircles } from "@/components/magicui/orbiting-circles";
import Image from "next/image";

import { useRouter } from 'next/navigation';
const images = [
    { src: "/android-chrome-512x512.webp", alt: "ashna ai" },
    { src: "/chatgpt.png", alt: "chatgpt ai" },
    { src: "/claude-ai-icon-65aa.png", alt: "claude ai" },
    { src: "/meta.png", alt: "meta ai" },
    { src: "/mistral.png", alt: "mistral ai" }
];

 

export default function Home(){
    const router = useRouter();
    return(
        <div>
            <main className="flex flex-col mt-0 justify-between p-10">
                <div>
                    <div>
                        <div className="relative w-full  bg-[#f1e1e1e] overflow-hidden flex flex-col md:flex-row items-center justify-center text-white px-6 sm:px-8 md:px-12 lg:px-24 xl:px-40 md:gap-4 lg:gap-16 xl:gap-62 ">
                            <div className=" max-w-lg items-center justify-center overflow-hidden pt-3">
                                <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                                    <p className="text-[3rem] w-1.5xl font-semibold">
                                    Experience NextGen AI With Ashna AI<span className="text-[#5046e6]">.</span>
                                    </p>
                                </BoxReveal>
                            
                                <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                                    <h2 className="mt-[.5rem] text-[1rem]">
                                    Ashna AI enhances your chat, search, writing & coding using leading ashna-x1 models.
                                    </h2>
                                </BoxReveal>      
                                <BoxReveal boxColor={"#5046e6"} duration={0.5}>                                    <InteractiveHoverButton 
                                        onClick={() => router.push('/chat')} 
                                        className="bg-gradient-to-r from-[#6a11cb] to-[#2575fc] mt-4 text-white hover:bg-[#3a36b6]"
                                    >
                                        Try ashna
                                    </InteractiveHoverButton>
                                </BoxReveal>
                            </div>                            <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg border bg-background-transparent border-none">
                                    <IconCloud
                                        images={[
                                            "/android-chrome-512x512.webp",
                                            "/chatgpt.png",
                                            "/claude-ai-icon-65aa.png",
                                            "/meta.png",
                                            "/mistral.png",
                                            "/android-chrome-512x512.webp",
                                            "/chatgpt.png",
                                            "/claude-ai-icon-65aa.png",
                                            "/meta.png",
                                            "/mistral.png",
                                            "/android-chrome-512x512.webp",
                                            "/chatgpt.png",
                                            "/claude-ai-icon-65aa.png",
                                            "/meta.png",
                                            "/mistral.png"
                                        ]}
                                    />
                                </div>
                        </div>
                        <div className="flex flex-row md:flex-row w-full text-center items-center justify-center mt-8 gap-4">
                         
                        <div className="w-1/2 ">
                        <h1 className="text-3xl text-5xl font-bold mt-5">Our Partners & Platforms</h1>
                            <Marquee className="mt-4">
                              {images.map((image, index) => (
                                        <img
                                            key={`orbit1-${index}`}
                                            src={image.src}
                                            alt={image.alt}
                                            className="w-[60px] h-[60px] object-contain rounded-full ml-8"
                                        />
                                    ))}
                            </Marquee>
                        </div>
                        </div>

                        <div className="items-center justyfy-center text-center mt-5">
                            <h1 className="text-4xl font-serif text-amber-50 font-bold" >Explore Our AI Platform</h1>
                            <h3>Discover the innovative capabilities behind our advanced AI models.</h3>                            <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
                                <OrbitingCircles iconSize={40}>
                                    {images.map((image, index) => (
                                        <img 
                                            key={`orbit1-${index}`}
                                            src={image.src}
                                            alt={image.alt}
                                            className="w-[50px] h-[50px] object-contain rounded-full"
                                        />
                                    ))}
                                </OrbitingCircles>
                                <OrbitingCircles iconSize={30} radius={100} reverse speed={2}>
                                    {images.slice(0, 4).map((image, index) => (
                                        <img 
                                            key={`orbit2-${index}`}
                                            src={image.src}
                                            alt={image.alt}
                                            className="w-[30px] h-[30px] object-contain rounded-full"
                                        />
                                    ))}
                                </OrbitingCircles>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}