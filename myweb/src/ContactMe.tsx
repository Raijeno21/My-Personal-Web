const ContactMe = () => {
    return (  
        <div className="h-screen pt-[13%]">
            <div className="h-full flex flex-col">
                <div className=" mt-10 flex justify-center">
                    <div className="border-5 px-5 py-2 border-black">
                        C O N T A C T 
                    </div>
                </div>
                <div className="flex-1 flex flex-col">
                    <p className="text-justify py-2 px-10 mt-2"><span className="pl-5">My</span> name is Jeno Carisma. I'm an aspring software developer.
                     I studied Bachelor of Science in Business Admininstration major in Financial Management. I'm a self taught developer</p>
                     <div className="w-full flex justify-center"><img src="/images/separator.svg"/></div>
                    <div className=" justify-center flex-1 flex flex-col px-5 gap-5">
                        <input type="text" placeholder="Enter your name*" className="border-l-2 border-b-2 pl-2 h-15" />
                         <input type="text" placeholder="Enter your email*" className="border-l-2 border-b-2 pl-2 h-15" />
                          <input type="text" placeholder="Phone Number" className="border-l-2 border-b-2 pl-2 h-15" />
                          <textarea className="border-l-2 border-b-2 min-h-30 max-h-30 pl-2 pt-2" placeholder="YOUR MESSAGE*"></textarea>
                          <div className="w-full flex justify-center">
                        <button className="border-x-5 px-10">S U B M I T</button>
                          </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default ContactMe;