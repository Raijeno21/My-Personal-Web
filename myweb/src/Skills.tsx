import { icons } from "./svg";

const Skills = () => {
  return (
    <div className="h-screen pt-[13%]">
      <div className="flex h-full flex-col items-center justify-between p-5">
        <div>
          <img src="/images/separator.svg" />
        </div>
        <div className="flex min-h-0 w-full flex-1 flex-col justify-between py-5">
          <div className="flex min-h-0 flex-1 flex-col">
            <div className="relative flex">
              <div className="aspect-square h-15">{icons.design}</div>
              <div className="ml-[-25px] flex items-center text-2xl">
                Design
              </div>
            </div>
            <div className="flex overflow-y-auto">
              <p className="text-justify text-xs">
                <span className="pl-5"></span> Lorem Ipsum is simply dummy text
                of the printing and typesetting industry. Lorem Ipsum has been
                the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a
                type specimen book. It has survived not only five centuries, but
                also the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum.
              </p>
            </div>
          </div>
          <div className="flex min-h-0 flex-1 flex-col">
            <div className="flex items-center">
              <div className="aspect-square h-15">{icons.development}</div>
              <div className="ml-[-25px] text-2xl">Development</div>
            </div>
            <div className="flex overflow-y-auto">
              <p className="text-justify text-xs">
                <span className="pl-5"></span> Lorem Ipsum is simply dummy text
                of the printing and typesetting industry. Lorem Ipsum has been
                the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a
                type specimen book. It has survived not only five centuries, but
                also the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum.
              </p>
            </div>
          </div>

          <div className="flex min-h-0 flex-1 flex-col">
            <div className="flex items-center">
              <div className="aspect-square h-15">{icons.maintenance}</div>
              <div className="ml-[-25px] text-2xl">Maintenance</div>
            </div>
            <div className="flex overflow-y-auto">
              <p className="text-justify text-xs">
                <span className="pl-5"></span> Lorem Ipsum is simply dummy text
                of the printing and typesetting industry. Lorem Ipsum has been
                the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a
                type specimen book. It has survived not only five centuries, but
                also the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum.
              </p>
            </div>
          </div>
        </div>
        <div>
          <img src="/images/separator.svg" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
