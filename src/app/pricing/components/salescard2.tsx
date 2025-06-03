import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';


export default function SalesCard2() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 p-8 gap-8">
      <div className="relative flex flex-wrap flex-col justify-between p-8 sm:p-10 rounded-xl border transition-all duration-300 transform hover:scale-105 bg-black/75 border-gray-700 shadow-lg hover:shadow-2xl">
      <div className="mt-6 ">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-white font-barlow">Team</h2>
        <ul className="space-y-4 mb-8">
            <li className="flex items-start gap-4 text-gray-300 text-sm sm:text-base leading-relaxed">
                <CheckCircleOutlineRoundedIcon className="text-blue-700"/>
                Everything in Plus, including deep research and file uploads
            </li>
            <li className="flex items-start gap-4 text-gray-300 text-sm sm:text-base leading-relaxed">
                <CheckCircleOutlineRoundedIcon className="text-blue-700"/>
                Higher message limits than Plus for Ashna-X1
            </li>
            <li className="flex items-start gap-4  sm:text-1xl font-extrabold text-gray-300  leading-relaxed">
                ₹25 per user / month billed annually
            </li>
            <li className="flex items-start gap-4  sm:text-1xl font-extrabold text-gray-300  leading-relaxed">
                ₹30 per user / month billed monthly
            </li>
        </ul>
      </div>
        <div>
            <button className="w-full bg-gradient-to-r from-[#6a11cb] to-[#2575fc] text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
                Get Team
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
                <CheckCircleOutlineRoundedIcon className="text-blue-700"/>
                Access to O1 model
            </li>
            <li className="flex items-start gap-4 text-gray-300 text-sm sm:text-base leading-relaxed">
                <CheckCircleOutlineRoundedIcon className="text-blue-700"/>
                100 queries/day
            </li>
            <li className="flex items-start gap-4 text-gray-300 text-sm sm:text-base leading-relaxed">
                <CheckCircleOutlineRoundedIcon className="text-blue-700"/>
                AI-assisted drafting, research, and coding
            </li>
            <li className="flex items-start gap-4 text-gray-300 text-sm sm:text-base leading-relaxed">
                <CheckCircleOutlineRoundedIcon className="text-blue-700"/>
                Integration with learning tools
            </li>
            <li className="flex items-start gap-4 text-gray-300 text-sm sm:text-base leading-relaxed">
                <CheckCircleOutlineRoundedIcon className="text-blue-700"/>
                 Special Early Bird Discount
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