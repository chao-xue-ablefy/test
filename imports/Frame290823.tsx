import svgPaths from "./svg-q7l07nvofw";
import imgDepth4Frame2 from "figma:asset/6227e47a4249ab20b85ee22ba444c9c4ab585f07.png";

function Depth4Frame2() {
  return (
    <div
      className="bg-center bg-cover bg-no-repeat rounded-3xl shrink-0 size-12"
      data-name="Depth 4, Frame 2"
      style={{ backgroundImage: `url('${imgDepth4Frame2}')` }}
    />
  );
}

function Heading3() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Heading 3"
    >
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[15.625px] text-gray-900 text-left text-nowrap">
        <p className="block leading-[24px] whitespace-pre">Sarah Chen</p>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div
      className="bg-slate-100 box-border content-stretch flex flex-row items-center justify-start px-[9px] py-[3px] relative rounded-[9999px] shrink-0"
      data-name="Background"
    >
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[11.25px] text-left text-nowrap text-slate-900">
        <p className="block leading-[16px] whitespace-pre">admin</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Heading3 />
      <Background />
    </div>
  );
}

function Container1() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.3438px] text-gray-500 text-left w-full">
        <p className="block leading-[20px]">7/11/2025</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Container"
    >
      <Container />
      <Container1 />
    </div>
  );
}

function Svg() {
  return (
    <div className="relative shrink-0 size-4" data-name="SVG">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="SVG">
          <path
            d={svgPaths.p36e45a00}
            id="Vector"
            stroke="var(--stroke-0, #020817)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.33333"
          />
          <path
            d={svgPaths.p1a14b300}
            id="Vector_2"
            stroke="var(--stroke-0, #020817)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.33333"
          />
          <path
            d={svgPaths.p2295f880}
            id="Vector_3"
            stroke="var(--stroke-0, #020817)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.33333"
          />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center p-0 relative rounded-md shrink-0 size-8"
      data-name="Button"
    >
      <Svg />
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row gap-3 items-start justify-start px-6 py-0 relative w-full">
          <Depth4Frame2 />
          <Container2 />
          <Button />
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[26px] not-italic relative shrink-0 text-[15.25px] text-gray-700 text-left w-full">
        <p className="block mb-0">
          Community Guidelines 📋 1. **Be Respectful** 🤝 Treat all members with
          kindness and respect. No
        </p>
        <p className="block mb-0">
          harassment, discrimination, or offensive language. 2. **Stay On
          Topic** 🎯 Keep discussions relevant to
        </p>
        <p className="block mb-0">
          technology, development, and innovation. 3. **No Spam** 🚫 Avoid
          excessive self-promotion, repeated posts,
        </p>
        <p className="block mb-0">
          or irrelevant content. 4. **Share Knowledge** 📚 Help others learn and
          grow. Share resources, answer
        </p>
        <p className="block mb-0">
          questions, and collaborate. 5. **Use Appropriate Channels** 📂 Post in
          the right channels to keep discussions
        </p>
        <p className="block mb-0">{`organized. 6. **Respect Privacy** 🔒 Don't share personal information of others without consent. 7. **Report`}</p>
        <p className="block mb-0">
          Issues** 🚨 If you see something that violates these guidelines,
          please report it to moderators. Remember:
        </p>
        <p className="block">
          This community thrives on mutual respect and shared passion for
          technology! 🌟
        </p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0 w-4"
      data-name="Frame"
    >
      <div
        className="absolute bottom-[12.5%] left-[8.333%] right-[8.333%] top-[12.5%]"
        data-name="Vector"
      >
        <div className="absolute bottom-[-5.556%] left-[-5%] right-[-5%] top-[-5.556%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 15 14"
          >
            <path
              d={svgPaths.p3bd2f700}
              id="Vector"
              stroke="var(--stroke-0, #4B5563)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.33333"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg1() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-center overflow-clip p-0 relative shrink-0 size-4"
      data-name="SVG"
    >
      <Frame />
    </div>
  );
}

function SvgMargin() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-4 items-start justify-start pl-0 pr-2 py-0 relative shrink-0 w-6"
      data-name="SVG:margin"
    >
      <Svg1 />
    </div>
  );
}

function Button1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 h-9 items-center justify-center px-3 py-0 relative rounded-xl shrink-0"
      data-name="Button"
    >
      <SvgMargin />
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-gray-600 text-nowrap">
        <p className="block leading-[20px] whitespace-pre">0</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0 w-4"
      data-name="Frame"
    >
      <div
        className="absolute bottom-[8.333%] left-[8.333%] right-[12.467%] top-[12.467%]"
        data-name="Vector"
      >
        <div className="absolute bottom-[-5.261%] left-[-5.261%] right-[-5.261%] top-[-5.261%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 15 15"
          >
            <path
              d={svgPaths.p16637f70}
              id="Vector"
              stroke="var(--stroke-0, #4B5563)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.33333"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg2() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-center overflow-clip p-0 relative shrink-0 size-4"
      data-name="SVG"
    >
      <Frame1 />
    </div>
  );
}

function SvgMargin1() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-4 items-start justify-start pl-0 pr-2 py-0 relative shrink-0 w-6"
      data-name="SVG:margin"
    >
      <Svg2 />
    </div>
  );
}

function Button2() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 h-9 items-center justify-center px-3 py-0 relative rounded-xl shrink-0"
      data-name="Button"
    >
      <SvgMargin1 />
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-gray-600 text-nowrap">
        <p className="block leading-[20px] whitespace-pre">0</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0 w-4"
      data-name="Frame"
    >
      <div
        className="absolute bottom-[66.667%] left-[62.5%] right-[12.5%] top-[8.333%]"
        data-name="Vector"
      >
        <div className="absolute inset-[-16.667%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 6 6"
          >
            <path
              d={svgPaths.pafef4f0}
              id="Vector"
              stroke="var(--stroke-0, #4B5563)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.33333"
            />
          </svg>
        </div>
      </div>
      <div
        className="absolute bottom-[37.5%] left-[12.5%] right-[62.5%] top-[37.5%]"
        data-name="Vector"
      >
        <div className="absolute inset-[-16.667%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 6 6"
          >
            <path
              d={svgPaths.pafef4f0}
              id="Vector"
              stroke="var(--stroke-0, #4B5563)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.33333"
            />
          </svg>
        </div>
      </div>
      <div
        className="absolute bottom-[8.333%] left-[62.5%] right-[12.5%] top-[66.667%]"
        data-name="Vector"
      >
        <div className="absolute inset-[-16.667%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 6 6"
          >
            <path
              d={svgPaths.pafef4f0}
              id="Vector"
              stroke="var(--stroke-0, #4B5563)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.33333"
            />
          </svg>
        </div>
      </div>
      <div
        className="absolute bottom-[27.125%] left-[35.792%] right-[35.75%] top-[56.292%]"
        data-name="Vector"
      >
        <div className="absolute bottom-[-25.13%] left-[-14.644%] right-[-14.644%] top-[-25.13%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 7 5"
          >
            <path
              d="M1 1L5.55333 3.65333"
              id="Vector"
              stroke="var(--stroke-0, #4B5563)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.33333"
            />
          </svg>
        </div>
      </div>
      <div
        className="absolute bottom-[56.292%] left-[35.792%] right-[35.792%] top-[27.125%]"
        data-name="Vector"
      >
        <div className="absolute bottom-[-25.13%] left-[-14.665%] right-[-14.665%] top-[-25.13%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 7 5"
          >
            <path
              d="M5.54667 1L1 3.65333"
              id="Vector"
              stroke="var(--stroke-0, #4B5563)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.33333"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg3() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-center overflow-clip p-0 relative shrink-0 size-4"
      data-name="SVG"
    >
      <Frame2 />
    </div>
  );
}

function SvgMargin2() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-4 items-start justify-start pl-0 pr-2 py-0 relative shrink-0 w-6"
      data-name="SVG:margin"
    >
      <Svg3 />
    </div>
  );
}

function Button3() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 h-9 items-center justify-center px-3 py-0 relative rounded-xl shrink-0"
      data-name="Button"
    >
      <SvgMargin2 />
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[13.8906px] text-center text-gray-600 text-nowrap">
        <p className="block leading-[20px] whitespace-pre">Share</p>
      </div>
    </div>
  );
}

function Svg4() {
  return (
    <div className="relative shrink-0 size-4" data-name="SVG">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="SVG">
          <path
            d="M4 6L8 10L12 6"
            id="Vector"
            stroke="var(--stroke-0, #6B7280)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.33333"
          />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-9 items-center justify-center px-3 py-0 relative rounded-md shrink-0"
      data-name="Button"
    >
      <Svg4 />
    </div>
  );
}

function ButtonMargin() {
  return (
    <div
      className="basis-0 grow h-9 min-h-px min-w-10 relative shrink-0"
      data-name="Button:margin"
    >
      <div className="flex flex-col items-end min-w-inherit relative size-full">
        <div className="box-border content-stretch flex flex-col h-9 items-end justify-start min-w-inherit pl-[463.938px] pr-0 py-0 relative w-full">
          <Button4 />
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-6 items-center justify-start pb-0 pt-[9px] px-0 relative shrink-0 w-full"
      data-name="HorizontalBorder"
    >
      <div className="absolute border-[1px_0px_0px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <Button1 />
      <Button2 />
      <Button3 />
      <ButtonMargin />
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start pb-6 pt-0 px-6 relative w-full">
          <Container4 />
          <HorizontalBorder />
        </div>
      </div>
    </div>
  );
}

function OverlayShadowOverlayBlur() {
  return (
    <div
      className="absolute backdrop-blur-[2px] backdrop-filter bg-[rgba(255,255,255,0.9)] box-border content-stretch flex flex-col gap-6 items-center justify-start left-28 overflow-clip pb-0 pt-6 px-0 right-[1905px] rounded-lg shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[122px]"
      data-name="Overlay+Shadow+OverlayBlur"
    >
      <Container3 />
      <Container5 />
    </div>
  );
}

function Svg5() {
  return (
    <div className="relative shrink-0 size-5" data-name="SVG">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="SVG">
          <path
            d={svgPaths.p24941500}
            id="Vector"
            stroke="var(--stroke-0, #A855F7)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.66667"
          />
          <path
            d="M16.6667 2.5V5.83333"
            id="Vector_2"
            stroke="var(--stroke-0, #A855F7)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.66667"
          />
          <path
            d="M18.3333 4.16667H15"
            id="Vector_3"
            stroke="var(--stroke-0, #A855F7)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.66667"
          />
          <path
            d="M3.33333 14.1667V15.8333"
            id="Vector_4"
            stroke="var(--stroke-0, #A855F7)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.66667"
          />
          <path
            d="M4.16667 15H2.5"
            id="Vector_5"
            stroke="var(--stroke-0, #A855F7)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.66667"
          />
        </g>
      </svg>
    </div>
  );
}

function Heading4() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0 w-[800px]"
      data-name="Heading 3"
    >
      <Svg5 />
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#020817] text-[17.2969px] text-left text-nowrap tracking-[-0.45px]">
        <p className="adjustLetterSpacing block leading-[28px] whitespace-pre">
          Share something amazing
        </p>
      </div>
    </div>
  );
}

function Depth4Frame3() {
  return (
    <div
      className="bg-center bg-cover bg-no-repeat rounded-3xl shrink-0 size-12"
      data-name="Depth 4, Frame 2"
      style={{ backgroundImage: `url('${imgDepth4Frame2}')` }}
    />
  );
}

function Heading5() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Heading 3"
    >
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[15.625px] text-gray-900 text-left text-nowrap">
        <p className="block leading-[24px] whitespace-pre">Sarah Chen</p>
      </div>
    </div>
  );
}

function Frame289592() {
  return (
    <div className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-0 relative shrink-0">
      <Depth4Frame3 />
      <Heading5 />
    </div>
  );
}

function Container6() {
  return (
    <div
      className="absolute bottom-[72px] box-border content-stretch flex flex-col items-start justify-start left-3 pl-0 pr-[293.97px] py-0 top-2"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.6719px] text-left text-nowrap text-slate-500">
        <p className="block leading-[20px] whitespace-pre">{`What's on your mind? Share insights, ask questions, or start a discussion...`}</p>
      </div>
    </div>
  );
}

function Textarea() {
  return (
    <div
      className="bg-gray-50 box-border content-stretch flex flex-row gap-2.5 h-40 items-start justify-start min-h-[100px] overflow-auto px-3 py-2 relative rounded-xl shrink-0 w-[800px]"
      data-name="Textarea"
    >
      <div className="h-5 shrink-0 w-[776px]" data-name="Rectangle" />
      <Container6 />
    </div>
  );
}

function Frame289591() {
  return (
    <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative shrink-0 w-full">
      <Frame289592 />
      <Textarea />
    </div>
  );
}

function Frame3() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0 w-4"
      data-name="Frame"
    >
      <div className="absolute inset-[12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.556%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 14 14"
          >
            <path
              d={svgPaths.p3c2f47f0}
              id="Vector"
              stroke="var(--stroke-0, #020817)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.33333"
            />
          </svg>
        </div>
      </div>
      <div
        className="absolute bottom-[54.167%] left-[29.167%] right-[54.167%] top-[29.167%]"
        data-name="Vector"
      >
        <div className="absolute inset-[-25%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 5 5"
          >
            <path
              d={svgPaths.p24e3ba80}
              id="Vector"
              stroke="var(--stroke-0, #020817)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.33333"
            />
          </svg>
        </div>
      </div>
      <div
        className="absolute bottom-[12.5%] left-1/4 right-[12.5%] top-[47.202%]"
        data-name="Vector"
      >
        <div className="absolute bottom-[-10.34%] left-[-6.667%] right-[-6.667%] top-[-10.34%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 12 9"
          >
            <path
              d={svgPaths.p2eb22d00}
              id="Vector"
              stroke="var(--stroke-0, #020817)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.33333"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg6() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-center overflow-clip p-0 relative shrink-0 size-4"
      data-name="SVG"
    >
      <Frame3 />
    </div>
  );
}

function SvgMargin3() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-4 items-start justify-start pl-0 pr-2 py-0 relative shrink-0 w-6"
      data-name="SVG:margin"
    >
      <Svg6 />
    </div>
  );
}

function Button5() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 h-9 items-center justify-center px-3 py-0 relative rounded-xl shrink-0"
      data-name="Button"
    >
      <SvgMargin3 />
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#020817] text-[13.7812px] text-center text-nowrap">
        <p className="block leading-[20px] whitespace-pre">Photo</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0 w-4"
      data-name="Frame"
    >
      <div
        className="absolute bottom-[30.976%] left-[66.667%] right-[8.333%] top-[30.708%]"
        data-name="Vector"
      >
        <div className="absolute bottom-[-10.874%] left-[-16.669%] right-[-16.667%] top-[-10.874%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 6 8"
          >
            <path
              d={svgPaths.p2ca9e00}
              id="Vector"
              stroke="var(--stroke-0, #020817)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.33333"
            />
          </svg>
        </div>
      </div>
      <div
        className="absolute bottom-1/4 left-[8.333%] right-[33.333%] top-1/4"
        data-name="Vector"
      >
        <div className="absolute bottom-[-8.333%] left-[-7.143%] right-[-7.143%] top-[-8.333%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 11 10"
          >
            <path
              d={svgPaths.p134667c0}
              id="Vector"
              stroke="var(--stroke-0, #020817)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.33333"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg7() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-center overflow-clip p-0 relative shrink-0 size-4"
      data-name="SVG"
    >
      <Frame4 />
    </div>
  );
}

function SvgMargin4() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-4 items-start justify-start pl-0 pr-2 py-0 relative shrink-0 w-6"
      data-name="SVG:margin"
    >
      <Svg7 />
    </div>
  );
}

function Button6() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 h-9 items-center justify-center px-3 py-0 relative rounded-xl shrink-0"
      data-name="Button"
    >
      <SvgMargin4 />
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#020817] text-[13.6719px] text-center text-nowrap">
        <p className="block leading-[20px] whitespace-pre">Video</p>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0 w-4"
      data-name="Frame"
    >
      <div
        className="absolute bottom-[8.333%] left-[16.667%] right-[16.667%] top-[8.333%]"
        data-name="Vector"
      >
        <div className="absolute bottom-[-5%] left-[-6.25%] right-[-6.25%] top-[-5%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 13 15"
          >
            <path
              d={svgPaths.p2ddad400}
              id="Vector"
              stroke="var(--stroke-0, #020817)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.33333"
            />
          </svg>
        </div>
      </div>
      <div
        className="absolute bottom-[66.667%] left-[58.333%] right-[16.667%] top-[8.333%]"
        data-name="Vector"
      >
        <div className="absolute inset-[-16.667%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 6 6"
          >
            <path
              d={svgPaths.p3132d200}
              id="Vector"
              stroke="var(--stroke-0, #020817)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.33333"
            />
          </svg>
        </div>
      </div>
      <div
        className="absolute bottom-[62.5%] left-[33.333%] right-[58.333%] top-[37.5%]"
        data-name="Vector"
      >
        <div className="absolute bottom-[-0.667px] left-[-50%] right-[-50%] top-[-0.667px]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 3 2"
          >
            <path
              d="M2.33333 1H1"
              id="Vector"
              stroke="var(--stroke-0, #020817)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.33333"
            />
          </svg>
        </div>
      </div>
      <div
        className="absolute bottom-[45.833%] left-[33.333%] right-[33.333%] top-[54.167%]"
        data-name="Vector"
      >
        <div className="absolute bottom-[-0.667px] left-[-12.5%] right-[-12.5%] top-[-0.667px]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 7 2"
          >
            <path
              d="M6.33333 1H1"
              id="Vector"
              stroke="var(--stroke-0, #020817)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.33333"
            />
          </svg>
        </div>
      </div>
      <div
        className="absolute bottom-[29.167%] left-[33.333%] right-[33.333%] top-[70.833%]"
        data-name="Vector"
      >
        <div className="absolute bottom-[-0.667px] left-[-12.5%] right-[-12.5%] top-[-0.667px]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 7 2"
          >
            <path
              d="M6.33333 1H1"
              id="Vector"
              stroke="var(--stroke-0, #020817)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.33333"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg8() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-center overflow-clip p-0 relative shrink-0 size-4"
      data-name="SVG"
    >
      <Frame5 />
    </div>
  );
}

function SvgMargin5() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-4 items-start justify-start pl-0 pr-2 py-0 relative shrink-0 w-6"
      data-name="SVG:margin"
    >
      <Svg8 />
    </div>
  );
}

function Button7() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 h-9 items-center justify-center px-3 py-0 relative rounded-xl shrink-0"
      data-name="Button"
    >
      <SvgMargin5 />
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#020817] text-[13.7812px] text-center text-nowrap">
        <p className="block leading-[20px] whitespace-pre">Document</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <Button5 />
      <Button6 />
      <Button7 />
    </div>
  );
}

function Button8() {
  return (
    <div
      className="basis-0 bg-gradient-to-r from-[#3b82f6] grow h-10 min-h-px min-w-px opacity-50 relative rounded-xl shrink-0 to-[#9333ea]"
      data-name="Button"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-10 items-center justify-center px-4 py-2 relative w-full">
          <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[13.7812px] text-center text-nowrap text-slate-50">
            <p className="block leading-[20px] whitespace-pre">Post</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative shrink-0 w-24"
      data-name="Container"
    >
      <Button8 />
    </div>
  );
}

function Container9() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container7 />
      <Container8 />
    </div>
  );
}

function Container10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start pb-6 pt-0 px-6 relative w-full">
          <Frame289591 />
          <Container9 />
        </div>
      </div>
    </div>
  );
}

function OverlayShadowOverlayBlur1() {
  return (
    <div
      className="absolute backdrop-blur-[2px] backdrop-filter bg-[rgba(255,255,255,0.9)] box-border content-stretch flex flex-col gap-6 items-center justify-start overflow-clip pb-0 pt-[23.75px] px-0 rounded-lg shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[789px] translate-x-[-50%] w-[848px]"
      data-name="Overlay+Shadow+OverlayBlur"
      style={{ left: "calc(50% - 858px)" }}
    >
      <Heading4 />
      <Container10 />
    </div>
  );
}

export default function Frame290823() {
  return (
    <div className="bg-[#c9c8c8] relative size-full">
      <OverlayShadowOverlayBlur />
      <OverlayShadowOverlayBlur1 />
    </div>
  );
}