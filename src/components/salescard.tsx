import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';

import Image from 'next/image';

export default function SalesCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 p-4 gap-8">
      <div className="relative flex flex-wrap flex-col justify-between p-8 sm:p-10 rounded-xl border transition-all duration-300 transform hover:scale-105 bg-black/75 border-gray-700 shadow-lg hover:shadow-2xl">
      <div className="mt-6 ">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-white font-barlow">Basics</h2>
        <p className="text-3xl sm:text-4xl font-extrabold mb-2 text-white font-barlow">₹99 / month</p>
        <p className="text-sm text-gray-400 mb-6 font-outfit">Billed monthly</p>
        <ul className="space-y-4 mb-8">
            <li className="flex items-start gap-4 text-gray-300 text-sm sm:text-base leading-relaxed">
                <CheckCircleOutlineRoundedIcon className="text-emerald-600"/>
                Access to Ashna-Basic model
            </li>
            <li className="flex items-start gap-4 text-gray-300 text-sm sm:text-base leading-relaxed">
                <CheckCircleOutlineRoundedIcon className="text-emerald-600"/>
                Limited AI responses (20 queries/day)
            </li>
            <li className="flex items-start gap-4 text-gray-300 text-sm sm:text-base leading-relaxed">
                <CheckCircleOutlineRoundedIcon className="text-emerald-600"/>
                Standard AI models
            </li>
            <li className="flex items-start gap-4 text-gray-300 text-sm sm:text-base leading-relaxed">
                <CheckCircleOutlineRoundedIcon className="text-emerald-600"/>
                Community support
            </li>
            <li className="flex items-start gap-4 text-gray-300 text-sm sm:text-base leading-relaxed">
                <CheckCircleOutlineRoundedIcon className="text-emerald-600"/>
                Limited file uploads
            </li>
            <li className="flex items-start gap-4 text-gray-300 text-sm sm:text-base leading-relaxed">
               <div className="flex flex-wrap justify-center gap-3 mb-5 max-w-full">
                    <Image src="/android-chrome-512x512.webp" alt="Ashna Logo" width={40} height={40} className="w-10 h-10 mb-4 rounded-full shadow-lg border-2 "/>
                              
                    <Image src="/claude-ai-icon-65aa.png" alt="claude ai Logo" width={40} height={40} className="w-10 h-10 mb-4 rounded-full shadow-lg border-2 "/>
                               
                    <Image src="/OIP.jpg" alt="claude ai Logo" width={40} height={40} className="w-10 h-10 mb-4 rounded-full shadow-lg border-2 "/>
                             
                    <Image src="/mistral.png" alt="claude ai Logo" width={40} height={40} className="w-10 h-10 mb-4  shadow-lg border-2 "/>
                               
                    <Image src="/meta.png" alt="claude ai Logo" width={40} height={40} className="w-10 h-10 mb-4  shadow-lg border-2 "/>

                    <Image src="/chatgpt.svg" alt="gpt ai Logo" width={40} height={40} className="w-10 h-10 mb-4 rounded-full shadow-lg border-2 "/>
                  </div>
            </li>
            
        </ul>
      </div>
        <div>
            <button className="w-full bg-gradient-to-r from-[#6a11cb] to-[#2575fc] text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
                Get Free
            </button>
        </div>

      </div>

      <div className="relative flex flex-wrap flex-col justify-between p-8 sm:p-10 rounded-xl border transition-all duration-300 transform hover:scale-105 bg-black/75 border-gray-700 shadow-lg hover:shadow-2xl">
      <div className="mt-6 ">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-white font-barlow">Student</h2>
        <p className="text-3xl sm:text-4xl font-extrabold mb-2 text-white font-barlow">₹79 / month (early bird)</p>
        <p className="text-sm text-gray-400 mb-6 font-outfit">Billed monthly</p>
        <ul className="space-y-4 mb-8">
            <li className="flex items-start gap-4 text-gray-300 text-sm sm:text-base leading-relaxed">
                <CheckCircleOutlineRoundedIcon className="text-emerald-600"/>
                Access to O1 model
            </li>
            <li className="flex items-start gap-4 text-gray-300 text-sm sm:text-base leading-relaxed">
                <CheckCircleOutlineRoundedIcon className="text-emerald-600"/>
                100 queries/day
            </li>
            <li className="flex items-start gap-4 text-gray-300 text-sm sm:text-base leading-relaxed">
                <CheckCircleOutlineRoundedIcon className="text-emerald-600"/>
                AI-assisted drafting, research, and coding
            </li>
            <li className="flex items-start gap-4 text-gray-300 text-sm sm:text-base leading-relaxed">
                <CheckCircleOutlineRoundedIcon className="text-emerald-600"/>
                Integration with learning tools
            </li>
            <li className="flex items-start gap-4 text-gray-300 text-sm sm:text-base leading-relaxed">
                <CheckCircleOutlineRoundedIcon className="text-emerald-600"/>
                 Special Early Bird Discount
            </li>
            <li className="flex items-start gap-4 text-gray-300 text-sm sm:text-base leading-relaxed">
               <div className="flex flex-wrap justify-center gap-3 mb-5 max-w-full">
                    <Image src="/android-chrome-512x512.webp" alt="Ashna Logo" width={40} height={40} className="w-10 h-10 mb-4 rounded-full shadow-lg border-2 "/>

                    <Image src="/claude-ai-icon-65aa.png" alt="claude ai Logo" width={40} height={40} className="w-10 h-10 mb-4 rounded-full shadow-lg border-2 "/>
                    <Image src="/OIP.jpg" alt="claude ai Logo" width={40} height={40} className="w-10 h-10 mb-4 rounded-full shadow-lg border-2 "/>
                    <Image src="/mistral.png" alt="claude ai Logo" width={40} height={40} className="w-10 h-10 mb-4  shadow-lg border-2 "/>
                    <Image src="/meta.png" alt="claude ai Logo" width={40} height={40} className="w-10 h-10 mb-4  shadow-lg border-2 "/>
                    <Image src="/chatgpt.svg" alt="gpt ai Logo" width={40} height={40} className="w-10 h-10 mb-4 rounded-full shadow-lg border-2 "/>
                  </div>
            </li>
            
        </ul>
      </div>

      <div>
            <button className="w-full bg-gradient-to-r from-[#6a11cb] to-[#2575fc] text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
                Get student plan
            </button>
        </div>
      </div>

      <div className="relative flex flex-col justify-between p-8 sm:p-10 rounded-xl border transition-all duration-300 transform hover:scale-105 bg-black/75 border-purple-500 shadow-[0_0_20px_rgba(106,17,203,0.8)] hover:shadow-[0_0_30px_rgba(106,17,203,1)]">
      <div className="mt-6 ">
        <div className="absolute top-0 left-0 w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white text-center text-xs font-bold uppercase py-2 rounded-t-xl font-barlow">
            Most Popular
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-white font-barlow">Pro</h2>
        <p className="text-3xl sm:text-4xl font-extrabold mb-2 text-white font-barlow">₹499 / month</p>
        <p className="text-sm text-gray-400 mb-6 font-outfit">Billed monthly</p>
        <ul className="space-y-4 mb-8">
            <li className="flex items-start gap-4 text-gray-300 text-sm sm:text-base leading-relaxed">
                <CheckCircleOutlineRoundedIcon className="text-emerald-600"/>
                Access to Ashna-X1 model
            </li>
            <li className="flex items-start gap-4 text-gray-300 text-sm sm:text-base leading-relaxed">
                <CheckCircleOutlineRoundedIcon className="text-emerald-600"/>
                Unlimited queries
            </li>
            <li className="flex items-start gap-4 text-gray-300 text-sm sm:text-base leading-relaxed">
                <CheckCircleOutlineRoundedIcon className="text-emerald-600"/>
                Advanced analytics and insights
            </li>
            <li className="flex items-start gap-4 text-gray-300 text-sm sm:text-base leading-relaxed">
                <CheckCircleOutlineRoundedIcon className="text-emerald-600"/>
                Custom API access (rate-limited)
            </li>
            <li className="flex items-start gap-4 text-gray-300 text-sm sm:text-base leading-relaxed">
                <CheckCircleOutlineRoundedIcon className="text-emerald-600"/>
                Email & chat support
            </li>
            <li className="flex items-start gap-4 text-gray-300 text-sm sm:text-base leading-relaxed">
               <div className="flex flex-wrap justify-center gap-3 mb-5 max-w-full">
                    <Image src="/android-chrome-512x512.webp" alt="Ashna Logo" width={40} height={40} className="w-10 h-10 mb-4 rounded-full shadow-lg border-2 "/>
                              
                    <Image src="/claude-ai-icon-65aa.png" alt="claude ai Logo" width={40} height={40} className="w-10 h-10 mb-4 rounded-full shadow-lg border-2 "/>
                               
                    <Image src="/OIP.jpg" alt="claude ai Logo" width={40} height={40} className="w-10 h-10 mb-4 rounded-full shadow-lg border-2 "/>
                             
                    <Image src="/mistral.png" alt="claude ai Logo" width={40} height={40} className="w-10 h-10 mb-4  shadow-lg border-2 "/>
                               
                    <Image src="/meta.png" alt="claude ai Logo" width={40} height={40} className="w-10 h-10 mb-4  shadow-lg border-2 "/>

                    <Image src="/chatgpt.svg" alt="gpt ai Logo" width={40} height={40} className="w-10 h-10 mb-4 rounded-full shadow-lg border-2 "/>
                  </div>
            </li>
            
        </ul>
      </div>
      <div>
            <button className="w-full bg-gradient-to-r from-[#6a11cb] to-[#2575fc] text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
                Get Pro
            </button>
        </div>
      </div>

      <div className="relative flex flex-wrap flex-col justify-between p-8 sm:p-10 rounded-xl border transition-all duration-300 transform hover:scale-105 bg-black/75 border-gray-700 shadow-lg hover:shadow-2xl">
      <div className="mt-6 ">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-white font-barlow">Business</h2>
        <p className="text-3xl sm:text-4xl font-extrabold mb-2 text-white font-barlow">₹2,999 / month</p>
        <p className="text-sm text-gray-400 mb-6 font-outfit">Billed monthly</p>
        <ul className="space-y-4 mb-8">
            <li className="flex items-start gap-4 text-gray-300 text-sm sm:text-base leading-relaxed">
                <CheckCircleOutlineRoundedIcon className="text-emerald-600"/>
                Access to Ashna-X1 model
            </li>
            <li className="flex items-start gap-4 text-gray-300 text-sm sm:text-base leading-relaxed">
                <CheckCircleOutlineRoundedIcon className="text-emerald-600"/>
                All Pro features plus:
            </li>
            <li className="flex items-start gap-4 text-gray-300 text-sm sm:text-base leading-relaxed">
                <CheckCircleOutlineRoundedIcon className="text-emerald-600"/>
                Team collaboration (5–20 users)
            </li>
            <li className="flex items-start gap-4 text-gray-300 text-sm sm:text-base leading-relaxed">
                <CheckCircleOutlineRoundedIcon className="text-emerald-600"/>
                AI-powered automation
            </li>
            <li className="flex items-start gap-4 text-gray-300 text-sm sm:text-base leading-relaxed">
                <CheckCircleOutlineRoundedIcon className="text-emerald-600"/>
                Higher API limits
            </li>
            <li className="flex items-start gap-4 text-gray-300 text-sm sm:text-base leading-relaxed">
                <CheckCircleOutlineRoundedIcon className="text-emerald-600"/>
                Priority support
            </li>
            <li className="flex items-start gap-4 text-gray-300 text-sm sm:text-base leading-relaxed">
               <div className="flex flex-wrap justify-center gap-3 mb-5 max-w-full">
                    <Image src="/android-chrome-512x512.webp" alt="Ashna Logo" width={40} height={40} className="w-10 h-10 mb-4 rounded-full shadow-lg border-2 "/>
                              
                    <Image src="/claude-ai-icon-65aa.png" alt="claude ai Logo" width={40} height={40} className="w-10 h-10 mb-4 rounded-full shadow-lg border-2 "/>
                               
                    <Image src="/OIP.jpg" alt="claude ai Logo" width={40} height={40} className="w-10 h-10 mb-4 rounded-full shadow-lg border-2 "/>
                             
                    <Image src="/mistral.png" alt="claude ai Logo" width={40} height={40} className="w-10 h-10 mb-4  shadow-lg border-2 "/>
                               
                    <Image src="/meta.png" alt="claude ai Logo" width={40} height={40} className="w-10 h-10 mb-4  shadow-lg border-2 "/>

                    <Image src="/chatgpt.svg" alt="gpt ai Logo" width={40} height={40} className="w-10 h-10 mb-4 rounded-full shadow-lg border-2 "/>
                  </div>
            </li>
            
        </ul>
      </div>
      <div>
            <button className="w-full bg-gradient-to-r from-[#6a11cb] to-[#2575fc] text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
               Get Business
            </button>
        </div>
      </div>

      <div className="relative flex flex-wrap flex-col justify-between p-8 sm:p-10 rounded-xl border transition-all duration-300 transform hover:scale-105 bg-black/75 border-gray-700 shadow-lg hover:shadow-2xl">
      <div className="mt-6 ">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-white font-barlow">Corporate</h2>
        <p className="text-3xl sm:text-4xl font-bold mb-2 text-white font-barlow">Custom Pricing (Starts at ₹50,000 / month)</p>
        <p className="text-sm text-gray-400 mb-6 font-outfit">Billed monthly</p>
        <ul className="space-y-4 mb-8">
            <li className="flex items-start gap-4 text-gray-300 text-sm sm:text-base leading-relaxed">
                <CheckCircleOutlineRoundedIcon className="text-emerald-600"/>
                Access to Ashna-X1 model
            </li>
            <li className="flex items-start gap-4 text-gray-300 text-sm sm:text-base leading-relaxed">
                <CheckCircleOutlineRoundedIcon className="text-emerald-600"/>
                All Business features plus:
            </li>
            <li className="flex items-start gap-4 text-gray-300 text-sm sm:text-base leading-relaxed">
                <CheckCircleOutlineRoundedIcon className="text-emerald-600"/>
                Custom AI model training
            </li>
            <li className="flex items-start gap-4 text-gray-300 text-sm sm:text-base leading-relaxed">
                <CheckCircleOutlineRoundedIcon className="text-emerald-600"/>
                White-labeling options
            </li>
            <li className="flex items-start gap-4 text-gray-300 text-sm sm:text-base leading-relaxed">
                <CheckCircleOutlineRoundedIcon className="text-emerald-600"/>
                Unlimited API requests
            </li>
             <li className="flex items-start gap-4 text-gray-300 text-sm sm:text-base leading-relaxed">
                <CheckCircleOutlineRoundedIcon className="text-emerald-600"/>
                Dedicated account manager
            </li>
            <li className="flex items-start gap-4 text-gray-300 text-sm sm:text-base leading-relaxed">
               <div className="flex flex-wrap justify-center gap-3 mb-5 max-w-full">
                    <Image src="/android-chrome-512x512.webp" alt="Ashna Logo" width={40} height={40} className="w-10 h-10 mb-4 rounded-full shadow-lg border-2 "/>
                              
                    <Image src="/claude-ai-icon-65aa.png" alt="claude ai Logo" width={40} height={40} className="w-10 h-10 mb-4 rounded-full shadow-lg border-2 "/>
                               
                    <Image src="/OIP.jpg" alt="claude ai Logo" width={40} height={40} className="w-10 h-10 mb-4 rounded-full shadow-lg border-2 "/>
                             
                    <Image src="/mistral.png" alt="claude ai Logo" width={40} height={40} className="w-10 h-10 mb-4  shadow-lg border-2 "/>
                               
                    <Image src="/meta.png" alt="claude ai Logo" width={40} height={40} className="w-10 h-10 mb-4  shadow-lg border-2 "/>

                    <Image src="/chatgpt.svg" alt="gpt ai Logo" width={40} height={40} className="w-10 h-10 mb-4 rounded-full shadow-lg border-2 "/>
                  </div>
            </li>
            
        </ul>
      </div>

      <div>
            <button className="w-full bg-gradient-to-r from-[#6a11cb] to-[#2575fc] text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
                Contact Sales
            </button>
        </div>
      </div>
    </div>
  );
}