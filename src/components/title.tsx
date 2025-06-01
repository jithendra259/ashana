import Image from 'next/image';

export default function Title() {
  return (
    <div className=" text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20 mt-10">
               <h2 className="text-5xl font-medium mb-6 tracking-tight text-white font-barlow">Ashna - Your AI Companion & Expert</h2>
               <p className="text-xl text-white mb-8 max-w-3xl mx-auto font-outfit">Choose the plan that fits your needs and unlock the full potential of Ashna Platform.</p>
                <div className="animate-pulse">
                  <h1 className="text-4xl font-bold font-white font-barlow backdrop-blur-sm">COMING SOON</h1>
                </div>

                <div className="flex flex-wrap justify-center gap-4 mb-6 max-w-full">
                  <div className="flex flex-col items-center">
                      <Image src="/android-chrome-512x512.webp" alt="Ashna Logo" width={40} height={40} className="w-15 h-15 mb-4 rounded-full shadow-lg border-2 "/>
                    <p className="text-lg text-white font-barlow">Ashna</p>
                  </div>

                  <div className="flex flex-col items-center">
                    <Image src="/claude-ai-icon-65aa.png" alt="claude ai Logo" width={40} height={40} className="w-15 h-15 mb-4 rounded-full shadow-lg border-2 "/>
                    <p className="text-lg text-white font-barlow">Claude ai</p>
                  </div>
      
                  <div className="flex flex-col items-center">
                    <Image src="/OIP.jpg" alt="claude ai Logo" width={40} height={40} className="w-15 h-15 mb-4 rounded-full shadow-lg border-2 "/>
                    <p className="text-lg text-white font-barlow">Gemini ai</p>
                  </div>

                  <div className="flex flex-col items-center">
                    <Image src="/mistral.png" alt="claude ai Logo" width={40} height={40} className="w-15 h-15 mb-4  shadow-lg border-2 "/>
                    <p className="text-lg text-white font-barlow">mistral  ai</p>
                  </div>

                  <div className="flex flex-col items-center">
                      <Image src="/meta.png" alt="claude ai Logo" width={40} height={40} className="w-15 h-15 mb-4  shadow-lg border-2 "/>
                      <p className="text-lg text-white font-barlow">meta ai</p>
                  </div>

                  <div className="flex flex-col items-center">
                      <Image src="/chatgpt.svg" alt="gpt ai Logo" width={40} height={40} className="w-15 h-15 mb-4 rounded-full shadow-lg border-2 "/>
                      <p className="text-lg text-white font-barlow">gpt ai</p>
                  </div>
          
               </div>

            </div>
        </div>
    </div>

  );
}