import React from 'react'

function Navbar() {
  return (
   <header
         className="sticky top-0 z-50 flex items-center justify-center whitespace-nowrap backdrop-blur-sm"
         style={{
           borderBottom: "1px solid #e2e8f0", // border-light
           backgroundColor: "rgba(255,255,255,0.8)", // card/80
         }}
       >
         <div className="flex items-center justify-between w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
           <div className="flex items-center gap-8">
             <div className="flex items-center gap-3">
               <div
                 className="w-8 h-8"
                 style={{ color: "#0066ff" }} // primary
               >
                 <svg
                   fill="currentColor"
                   viewBox="0 0 48 48"
                   xmlns="http://www.w3.org/2000/svg"
                 >
                   <path d="M44 11.2727C44 14.0109 39.8386 16.3957 33.69 17.6364C39.8386 18.877 44 21.2618 44 24C44 26.7382 39.8386 29.123 33.69 30.3636C39.8386 31.6043 44 33.9891 44 36.7273C44 40.7439 35.0457 44 24 44C12.9543 44 4 40.7439 4 36.7273C4 33.9891 8.16144 31.6043 14.31 30.3636C8.16144 29.123 4 26.7382 4 24C4 21.2618 8.16144 18.877 14.31 17.6364C8.16144 16.3957 4 14.0109 4 11.2727C4 7.25611 12.9543 4 24 4C35.0457 4 44 7.25611 44 11.2727Z" />
                 </svg>
               </div>
               <h2
                 className="text-xl font-bold"
                 style={{ color: "#0F172A" }} // dark
               >
                 SocialX
               </h2>
             </div>
           </div>
 
           {/* Center search */}
           <div className="hidden md:flex flex-1 justify-center max-w-md">
             <label className="flex flex-col w-full">
               <div className="flex w-full flex-1 items-stretch h-10">
                 <div
                   className="flex items-center justify-center pl-3 rounded-l-lg"
                   style={{
                     color: "#64748B", // muted
                     backgroundColor: "#F7FAFC",
                   }}
                 >
                   <span className="material-symbols-outlined text-2xl">
                     search
                   </span>
                 </div>
                 <input
                   className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden h-full px-4 text-base rounded-l-none"
                   placeholder="Search SocialX"
                   style={{
                     borderRadius: "0.5rem",
                     color: "#0F172A",
                     backgroundColor: "#F7FAFC",
                     border: "none",
                     outline: "none",
                   }}
                 />
               </div>
             </label>
           </div>
 
           {/* Right nav + avatar */}
           <div className="flex flex-1 justify-end items-center gap-4">
             <div className="hidden lg:flex items-center gap-6">
               {["Home", "Explore", "Notifications", "Messages"].map((item) => (
                 <a
                   key={item}
                   href="#"
                   className="text-sm font-medium transition-colors"
                   style={{ color: "#0F172A" }}
                 >
                   {item}
                 </a>
               ))}
             </div>
             <button
               className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden h-10 w-10 transition-colors"
               style={{
                 borderRadius: "9999px",
                 backgroundColor: "#F7FAFC",
                 color: "#0F172A",
               }}
             >
               <span className="material-symbols-outlined text-2xl">
                 settings
               </span>
             </button>
             <div
               className="bg-center bg-no-repeat aspect-square bg-cover size-10"
               style={{
                 borderRadius: "9999px",
                 backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBziVjYVqBtMVYmgK_fur_MYcl8f0K4r0StYUOv5FQTVXeD5A28BbaQZ0iOVOxu8dgQ3LOuuoyw2TZra_aQaVj8FQYvPiVLa4Fl1pdmNQXnPDK-DXMz-tfKJbsZrEg-x22FCljcRj3c1p44gTQBJkqo3ZK3oQj4hXXWcDh3aWPeT51Gwd42csHwanxyIO0MI_ioX2oJVYxZg-bC93YRFOnbf-x9gLnqH7_3YkPK8Aj3gtYsfzVjt3AU25WtC1gstObdamwDxPuaVGjI')`
               }}
             ></div>
           </div>
         </div>
       </header>
  )
}

export default Navbar