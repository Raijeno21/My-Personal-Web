const ContactMe = () => {
  return (
    <div className="h-screen pt-[13%]">
      <div className="flex h-full flex-col">
        <div className="mt-10 flex justify-center">
          <div className="border-5 border-black px-5 py-2">C O N T A C T</div>
        </div>
        <div className="flex flex-1 flex-col">
          <p className="mt-2 px-10 py-2 text-justify">
            <span className="pl-5">My</span> name is Jeno Carisma. I'm an
            aspring software developer. I studied Bachelor of Science in
            Business Admininstration major in Financial Management. I'm a self
            taught developer
          </p>
          <div className="flex w-full justify-center">
            <img src="/images/separator.svg" />
          </div>
          <div className="flex flex-1 flex-col justify-center gap-5 px-5">
            <input
              type="text"
              placeholder="Enter your name*"
              className="h-15 border-b-2 border-l-2 pl-2"
            />
            <input
              type="text"
              placeholder="Enter your email*"
              className="h-15 border-b-2 border-l-2 pl-2"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="h-15 border-b-2 border-l-2 pl-2"
            />
            <textarea
              className="max-h-30 min-h-30 border-b-2 border-l-2 pt-2 pl-2"
              placeholder="YOUR MESSAGE*"
            ></textarea>
            <div className="flex w-full justify-center">
              <button className="border-x-5 px-10">S U B M I T</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
