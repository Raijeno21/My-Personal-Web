import { icons } from "./svg";

const Skills = () => {
    return (
        <div className="h-screen pt-[13%]">
            <div className="flex h-full flex-col justify-between items-center p-5">
                <div>
                    <img src="/images/separator.svg" />
                </div>
                <div className="flex-1 w-full flex-col flex justify-between py-5">
                    <div className="">
                        <div className="h-15 aspect-square relative">
                            {icons.design}
                            <div className="absolute right-[-60px] top-3  text-2xl">Design</div>
                        </div>
                        <p className="text-xs text-justify">
                          <span className="pl-5"></span>  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </div>
                    <div className="">
                        <div className="h-15 aspect-square relative">
                            {icons.development}
                            <div className="absolute right-[-129px] top-3 text-2xl">Development</div>

                        </div>
                         <p className="text-xs text-justify">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </div>
                    <div className="">
                        <div className="h-15 aspect-square relative">
                            {icons.maintenance}
                            <div className="absolute right-[-125px] top-3 text-2xl">Maintenance</div>

                        </div>
                         <p className="text-xs text-justify">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </div>


                </div>
                <div>
                    <img src="/images/separator.svg" />
                </div>
            </div>
        </div>
    );
}

export default Skills;