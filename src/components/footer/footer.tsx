export default function Footer() {
  return (
    <footer className="w-full min-h-52 bg-black text-white p-4">
      <div className="w-full p-2 flex flex-wrap ">
        <div className="w-2xl font-barlow text-5xl font-stretch-85%">
          <p>ashna ai</p>
        </div>
        
        <div className="flex justify-center gap-12 mt-4 mb-6">
          <div className="text-center">
            <h3 className="text-fuchsia-600 my-1 "> Product</h3>
            <ul className="space-y-2">
              <li className="mt-4 space-y-3">Ashna-X1</li>
              <li className="text-sm my-2">API</li>
            </ul>
          </div>

          <div className="text-center">
            <h3 className="text-fuchsia-600 my-1 ">Service</h3>
            <ul className="mt-4 space-y-3">
              <li className="text-sm  my-2">Pricing</li>
              <li className="text-sm my-2">Blog</li>
              
            </ul>
          </div>

          <div className="text-center">
            <h3 className="text-fuchsia-600  my-1 ">Company</h3>
            <ul className="mt-4 space-y-3">
              <li className="text-sm  my-2">About</li>
              <li className="text-sm my-2">Help</li>
              
            </ul>
          </div>
        </div>
      </div>
      <div>
        <p className="text-center text-sm mt-4">
          © {new Date().getFullYear()} Ashna AI. All rights reserved.
        </p>
      </div>
    </footer>
  );
}