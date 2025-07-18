import svgPaths from "./svg-wve0eyd68n";
import imgImage1 from "figma:asset/eb19581f98142c2be49ac44e7c54dd138ba63362.png";
import imgDepth4Frame2 from "figma:asset/6227e47a4249ab20b85ee22ba444c9c4ab585f07.png";

function Heading1() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative shrink-0"
      data-name="Heading 1"
    >
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#020817] text-[22.5px] text-left text-nowrap">
        <p className="block leading-[32px] whitespace-pre">
          Tech Innovators Hub
        </p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0 w-3"
      data-name="Frame"
    >
      <div
        className="absolute bottom-[29.171%] left-[8.344%] right-[8.34%] top-[12.53%]"
        data-name="Vector"
      >
        <div className="absolute bottom-[-7.147%] left-[-5.001%] right-[-5.001%] top-[-7.147%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 12 9"
          >
            <path
              d={svgPaths.p431b800}
              id="Vector"
              stroke="var(--stroke-0, #F8FAFC)"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <div
        className="absolute bottom-[12.5%] left-[20.833%] right-[20.833%] top-[87.5%]"
        data-name="Vector"
      >
        <div className="absolute bottom-[-0.5px] left-[-7.143%] right-[-7.143%] top-[-0.5px]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 9 2"
          >
            <path
              d="M1 1H8"
              id="Vector"
              stroke="var(--stroke-0, #F8FAFC)"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-center overflow-clip p-0 relative shrink-0 size-3"
      data-name="SVG"
    >
      <Frame />
    </div>
  );
}

function SvgMargin() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-3 items-start justify-start pl-0 pr-1 py-0 relative shrink-0 w-4"
      data-name="SVG:margin"
    >
      <Svg />
    </div>
  );
}

function Background() {
  return (
    <div
      className="bg-[#7444ef] box-border content-stretch flex flex-row items-center justify-start px-[11px] py-[3px] relative rounded-[9999px] shrink-0"
      data-name="Background"
    >
      <SvgMargin />
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[11.25px] text-left text-nowrap text-slate-50">
        <p className="block leading-[16px] whitespace-pre">Admin</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Heading1 />
      <Background />
    </div>
  );
}

function Container1() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1 h-8 items-start justify-start p-0 relative shrink-0 w-[313px]"
      data-name="Container"
    >
      <Container />
    </div>
  );
}

function Frame1() {
  return (
    <div className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-0 relative shrink-0">
      <div
        className="bg-center bg-cover bg-no-repeat h-12 shrink-0 w-[91px]"
        data-name="image 1"
        style={{ backgroundImage: `url('${imgImage1}')` }}
      />
      <Container1 />
    </div>
  );
}

function Svg1() {
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
            d={svgPaths.p107a080}
            id="Vector"
            stroke="var(--stroke-0, #020817)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.33333"
          />
          <path
            d="M14 14L11.1333 11.1333"
            id="Vector_2"
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
      className="box-border content-stretch flex flex-row h-9 items-center justify-center px-3 py-0 relative rounded-md shrink-0"
      data-name="Button"
    >
      <Svg1 />
    </div>
  );
}

function Depth6Frame0() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full"
      data-name="Depth 6, Frame 0"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border overflow-clip relative size-full">
        <div className="absolute left-0 size-5 top-0" data-name="Vector - 0">
          <div className="absolute bottom-[9.379%] left-[12.505%] right-[12.508%] top-[9.375%]">
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 16 18"
            >
              <path
                clipRule="evenodd"
                d={svgPaths.p2b76e080}
                fill="var(--fill-0, #0D141C)"
                fillRule="evenodd"
                id="Vector - 0"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Depth5Frame0() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Depth 5, Frame 0"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-center justify-start p-0 relative w-full">
        <Depth6Frame0 />
      </div>
    </div>
  );
}

function Depth4Frame1() {
  return (
    <div
      className="bg-[#e8edf5] box-border content-stretch flex flex-row gap-2 h-10 items-center justify-center max-w-[480px] overflow-clip px-2.5 py-0 relative rounded-lg shrink-0"
      data-name="Depth 4, Frame 1"
    >
      <Depth5Frame0 />
    </div>
  );
}

function Depth4Frame2() {
  return (
    <div
      className="bg-center bg-cover bg-no-repeat rounded-[20px] shrink-0 size-10"
      data-name="Depth 4, Frame 2"
      style={{ backgroundImage: `url('${imgDepth4Frame2}')` }}
    />
  );
}

function Frame2() {
  return (
    <div className="box-border content-stretch flex flex-row gap-6 items-center justify-center p-0 relative shrink-0">
      <Button />
      <Depth4Frame1 />
      <Depth4Frame2 />
    </div>
  );
}

function Container2() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Frame1 />
      <Frame2 />
    </div>
  );
}

function BackgroundHorizontalBorder() {
  return (
    <div
      className="bg-[#ffffff] relative shrink-0 w-full"
      data-name="Background+HorizontalBorder"
    >
      <div className="absolute border-[0px_0px_1px] border-slate-200 border-solid inset-0 pointer-events-none" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start pb-[17px] pt-4 px-6 relative w-full">
          <Container2 />
        </div>
      </div>
    </div>
  );
}

function EloChatsCircleIcon() {
  return (
    <div className="relative shrink-0 size-4" data-name="EloChatsCircleIcon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Master">
          <path
            clipRule="evenodd"
            d={svgPaths.p6c6ed80}
            fill="var(--fill-0, #484F5E)"
            fillRule="evenodd"
            id="Icon"
          />
        </g>
      </svg>
    </div>
  );
}

function Container3() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.5625px] text-left text-slate-500 w-full">
        <p className="block leading-[20px]">All discussions</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="relative rounded shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-2 py-1.5 relative w-full">
          <EloChatsCircleIcon />
          <Container3 />
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-[12px] relative w-full">
          <Button1 />
        </div>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start px-2 py-0 relative w-full">
          <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[11.4375px] text-left text-slate-500 tracking-[0.3px] uppercase w-full">
            <p className="block leading-[16px]">Links</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function EloDropboxIcon() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-4"
      data-name="EloDropboxIcon"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Master">
          <path
            clipRule="evenodd"
            d={svgPaths.p1d1db900}
            fill="var(--fill-0, #64748B)"
            fillRule="evenodd"
            id="Icon"
          />
        </g>
      </svg>
    </div>
  );
}

function Container6() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.5625px] text-left text-slate-500 w-full">
        <p className="block leading-[20px]">Course 1</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="relative rounded shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-2 py-1.5 relative w-full">
          <EloDropboxIcon />
          <Container6 />
        </div>
      </div>
    </div>
  );
}

function EloDropboxIcon1() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-4"
      data-name="EloDropboxIcon"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Master">
          <path
            clipRule="evenodd"
            d={svgPaths.p1d1db900}
            fill="var(--fill-0, #64748B)"
            fillRule="evenodd"
            id="Icon"
          />
        </g>
      </svg>
    </div>
  );
}

function Container7() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.5625px] text-left text-slate-500 w-full">
        <p className="block leading-[20px]">Course 2</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="relative rounded shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-2 py-1.5 relative w-full">
          <EloDropboxIcon1 />
          <Container7 />
        </div>
      </div>
    </div>
  );
}

function EloDropboxIcon2() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-4"
      data-name="EloDropboxIcon"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Master">
          <path
            clipRule="evenodd"
            d={svgPaths.p1d1db900}
            fill="var(--fill-0, #64748B)"
            fillRule="evenodd"
            id="Icon"
          />
        </g>
      </svg>
    </div>
  );
}

function Container8() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.5625px] text-left text-slate-500 w-full">
        <p className="block leading-[20px]">Course 3</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="relative rounded shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-2 py-1.5 relative w-full">
          <EloDropboxIcon2 />
          <Container8 />
        </div>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-[12px] relative w-full">
          <Container5 />
          <Button2 />
          <Button3 />
          <Button4 />
        </div>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px overflow-auto p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container4 />
      <Container9 />
    </div>
  );
}

function BackgroundVerticalBorder() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-col items-start justify-start pl-0 pr-px py-0 relative self-stretch shrink-0 w-60"
      data-name="Background+VerticalBorder"
    >
      <div className="absolute border-[0px_1px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
      <Container10 />
    </div>
  );
}

function Heading2() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative shrink-0"
      data-name="Heading 1"
    >
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#020817] text-[18.9062px] text-left text-nowrap">
        <p className="block leading-[28px] whitespace-pre">All discussions</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <Heading2 />
    </div>
  );
}

function InputSlot() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-[22px] items-center justify-start p-0 relative shrink-0"
      data-name="Input slot"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#141619] text-[14px] text-left text-nowrap">
        <p className="[text-overflow:inherit] block leading-[1.44] overflow-inherit whitespace-pre">
          Latest
        </p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-5" data-name="Icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="Master">
          <path
            d={svgPaths.p3ad04440}
            id="Icon"
            stroke="var(--stroke-0, #000004)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.25"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0">
      <InputSlot />
      <Icon />
    </div>
  );
}

function Frame4() {
  return (
    <div className="box-border content-stretch flex flex-row gap-6 items-center justify-end p-0 relative shrink-0 w-[506px]">
      <Frame3 />
    </div>
  );
}

function BackgroundHorizontalBorder1() {
  return (
    <div
      className="bg-[#ffffff] h-16 relative shrink-0 w-full"
      data-name="Background+HorizontalBorder"
    >
      <div className="absolute border-[0px_0px_1px] border-slate-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-16 items-center justify-between pb-px pt-0 px-6 relative w-full">
          <Container11 />
          <Frame4 />
        </div>
      </div>
    </div>
  );
}

function Depth4Frame3() {
  return (
    <div
      className="absolute bg-center bg-cover bg-no-repeat left-0 rounded-[20px] size-10 top-0"
      data-name="Depth 4, Frame 2"
      style={{ backgroundImage: `url('${imgDepth4Frame2}')` }}
    />
  );
}

function Group5() {
  return (
    <div className="h-[43px] overflow-clip relative shrink-0 w-full">
      <div className="absolute bg-[#ffffff] h-[43px] left-[59px] rounded-[21.5px] top-0 w-[789px]">
        <div className="absolute border border-[#eceef2] border-solid inset-0 pointer-events-none rounded-[21.5px]" />
      </div>
      <div className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[0] left-[82px] not-italic text-[#71747a] text-[13px] text-left text-nowrap top-3">
        <p className="block leading-[normal] whitespace-pre">Post</p>
      </div>
      <Depth4Frame3 />
    </div>
  );
}

function Depth4Frame4() {
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

function Background1() {
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

function Container12() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Heading3 />
      <Background1 />
    </div>
  );
}

function Container13() {
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

function Container14() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Container"
    >
      <Container12 />
      <Container13 />
    </div>
  );
}

function Svg2() {
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

function Button5() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center p-0 relative rounded-md shrink-0 size-8"
      data-name="Button"
    >
      <Svg2 />
    </div>
  );
}

function Container15() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row gap-3 items-start justify-start px-6 py-0 relative w-full">
          <Depth4Frame4 />
          <Container14 />
          <Button5 />
        </div>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[26px] not-italic relative shrink-0 text-[15.25px] text-gray-700 text-left w-full">
        <p className="block mb-0">{`Welcome to Tech Innovators Hub! 🚀 We're thrilled to have you join our vibrant community of technology`}</p>
        <p className="block mb-0">
          enthusiasts, developers, and innovators. This is your space to: ✨
          Share your latest projects and ideas 💡
        </p>
        <p className="block mb-0">
          Collaborate with like-minded individuals 🌟 Stay updated with
          cutting-edge tech trends 🤝 Get support and
        </p>
        <p className="block mb-0">{`feedback from the community 📚 Learn from experienced developers and innovators Don't forget to introduce`}</p>
        <p className="block mb-0">{`yourself in the #general channel and let us know what brings you here. We can't wait to see what amazing`}</p>
        <p className="block">{`things we'll build together! Happy coding! 💻`}</p>
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

function Svg3() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-center overflow-clip p-0 relative shrink-0 size-4"
      data-name="SVG"
    >
      <Frame5 />
    </div>
  );
}

function SvgMargin1() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-4 items-start justify-start pl-0 pr-2 py-0 relative shrink-0 w-6"
      data-name="SVG:margin"
    >
      <Svg3 />
    </div>
  );
}

function Button6() {
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

function Frame6() {
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

function Svg4() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-center overflow-clip p-0 relative shrink-0 size-4"
      data-name="SVG"
    >
      <Frame6 />
    </div>
  );
}

function SvgMargin2() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-4 items-start justify-start pl-0 pr-2 py-0 relative shrink-0 w-6"
      data-name="SVG:margin"
    >
      <Svg4 />
    </div>
  );
}

function Button7() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 h-9 items-center justify-center px-3 py-0 relative rounded-xl shrink-0"
      data-name="Button"
    >
      <SvgMargin2 />
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-gray-600 text-nowrap">
        <p className="block leading-[20px] whitespace-pre">0</p>
      </div>
    </div>
  );
}

function Frame7() {
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

function Svg5() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-center overflow-clip p-0 relative shrink-0 size-4"
      data-name="SVG"
    >
      <Frame7 />
    </div>
  );
}

function SvgMargin3() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-4 items-start justify-start pl-0 pr-2 py-0 relative shrink-0 w-6"
      data-name="SVG:margin"
    >
      <Svg5 />
    </div>
  );
}

function Button8() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 h-9 items-center justify-center px-3 py-0 relative rounded-xl shrink-0"
      data-name="Button"
    >
      <SvgMargin3 />
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[13.8906px] text-center text-gray-600 text-nowrap">
        <p className="block leading-[20px] whitespace-pre">Share</p>
      </div>
    </div>
  );
}

function Svg6() {
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

function Button9() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-9 items-center justify-center px-3 py-0 relative rounded-md shrink-0"
      data-name="Button"
    >
      <Svg6 />
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
          <Button9 />
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
      <Button6 />
      <Button7 />
      <Button8 />
      <ButtonMargin />
    </div>
  );
}

function Container17() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start pb-6 pt-0 px-6 relative w-full">
          <Container16 />
          <HorizontalBorder />
        </div>
      </div>
    </div>
  );
}

function OverlayShadowOverlayBlur() {
  return (
    <div
      className="backdrop-blur-[2px] backdrop-filter bg-[rgba(255,255,255,0.9)] box-border content-stretch flex flex-col gap-6 items-center justify-start overflow-clip pb-0 pt-6 px-0 relative rounded-lg shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 w-full"
      data-name="Overlay+Shadow+OverlayBlur"
    >
      <Container15 />
      <Container17 />
    </div>
  );
}

function Depth4Frame5() {
  return (
    <div
      className="bg-center bg-cover bg-no-repeat rounded-3xl shrink-0 size-12"
      data-name="Depth 4, Frame 2"
      style={{ backgroundImage: `url('${imgDepth4Frame2}')` }}
    />
  );
}

function Heading4() {
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

function Background2() {
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

function Container18() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Heading4 />
      <Background2 />
    </div>
  );
}

function Container19() {
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

function Container20() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Container"
    >
      <Container18 />
      <Container19 />
    </div>
  );
}

function Svg7() {
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

function Button10() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center p-0 relative rounded-md shrink-0 size-8"
      data-name="Button"
    >
      <Svg7 />
    </div>
  );
}

function Container21() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row gap-3 items-start justify-start px-6 py-0 relative w-full">
          <Depth4Frame5 />
          <Container20 />
          <Button10 />
        </div>
      </div>
    </div>
  );
}

function Container22() {
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

function Frame8() {
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

function Svg8() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-center overflow-clip p-0 relative shrink-0 size-4"
      data-name="SVG"
    >
      <Frame8 />
    </div>
  );
}

function SvgMargin4() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-4 items-start justify-start pl-0 pr-2 py-0 relative shrink-0 w-6"
      data-name="SVG:margin"
    >
      <Svg8 />
    </div>
  );
}

function Button11() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 h-9 items-center justify-center px-3 py-0 relative rounded-xl shrink-0"
      data-name="Button"
    >
      <SvgMargin4 />
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-gray-600 text-nowrap">
        <p className="block leading-[20px] whitespace-pre">0</p>
      </div>
    </div>
  );
}

function Frame9() {
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

function Svg9() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-center overflow-clip p-0 relative shrink-0 size-4"
      data-name="SVG"
    >
      <Frame9 />
    </div>
  );
}

function SvgMargin5() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-4 items-start justify-start pl-0 pr-2 py-0 relative shrink-0 w-6"
      data-name="SVG:margin"
    >
      <Svg9 />
    </div>
  );
}

function Button12() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 h-9 items-center justify-center px-3 py-0 relative rounded-xl shrink-0"
      data-name="Button"
    >
      <SvgMargin5 />
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-gray-600 text-nowrap">
        <p className="block leading-[20px] whitespace-pre">0</p>
      </div>
    </div>
  );
}

function Frame10() {
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

function Svg10() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-center overflow-clip p-0 relative shrink-0 size-4"
      data-name="SVG"
    >
      <Frame10 />
    </div>
  );
}

function SvgMargin6() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-4 items-start justify-start pl-0 pr-2 py-0 relative shrink-0 w-6"
      data-name="SVG:margin"
    >
      <Svg10 />
    </div>
  );
}

function Button13() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 h-9 items-center justify-center px-3 py-0 relative rounded-xl shrink-0"
      data-name="Button"
    >
      <SvgMargin6 />
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[13.8906px] text-center text-gray-600 text-nowrap">
        <p className="block leading-[20px] whitespace-pre">Share</p>
      </div>
    </div>
  );
}

function Svg11() {
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

function Button14() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-9 items-center justify-center px-3 py-0 relative rounded-md shrink-0"
      data-name="Button"
    >
      <Svg11 />
    </div>
  );
}

function ButtonMargin1() {
  return (
    <div
      className="basis-0 grow h-9 min-h-px min-w-10 relative shrink-0"
      data-name="Button:margin"
    >
      <div className="flex flex-col items-end min-w-inherit relative size-full">
        <div className="box-border content-stretch flex flex-col h-9 items-end justify-start min-w-inherit pl-[463.938px] pr-0 py-0 relative w-full">
          <Button14 />
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-6 items-center justify-start pb-0 pt-[9px] px-0 relative shrink-0 w-full"
      data-name="HorizontalBorder"
    >
      <div className="absolute border-[1px_0px_0px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <Button11 />
      <Button12 />
      <Button13 />
      <ButtonMargin1 />
    </div>
  );
}

function Container23() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start pb-6 pt-0 px-6 relative w-full">
          <Container22 />
          <HorizontalBorder1 />
        </div>
      </div>
    </div>
  );
}

function OverlayShadowOverlayBlur1() {
  return (
    <div
      className="backdrop-blur-[2px] backdrop-filter bg-[rgba(255,255,255,0.9)] box-border content-stretch flex flex-col gap-6 items-center justify-start overflow-clip pb-0 pt-6 px-0 relative rounded-lg shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 w-full"
      data-name="Overlay+Shadow+OverlayBlur"
    >
      <Container21 />
      <Container23 />
    </div>
  );
}

function Depth4Frame6() {
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

function Background3() {
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

function Container24() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Heading5 />
      <Background3 />
    </div>
  );
}

function Container25() {
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

function Container26() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Container"
    >
      <Container24 />
      <Container25 />
    </div>
  );
}

function Svg12() {
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

function Button15() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center p-0 relative rounded-md shrink-0 size-8"
      data-name="Button"
    >
      <Svg12 />
    </div>
  );
}

function Container27() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row gap-3 items-start justify-start px-6 py-0 relative w-full">
          <Depth4Frame6 />
          <Container26 />
          <Button15 />
        </div>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[26px] not-italic relative shrink-0 text-[15.25px] text-gray-700 text-left w-full">
        <p className="block mb-0">
          💡 Tech Trend Discussion: AI in 2024 AI continues to reshape our
          industry. What are your thoughts on the
        </p>
        <p className="block mb-0">
          latest developments? Are you integrating AI into your projects? Share
          your experiences, concerns, or exciting
        </p>
        <p className="block">discoveries with AI tools and frameworks.</p>
      </div>
    </div>
  );
}

function Frame11() {
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

function Svg13() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-center overflow-clip p-0 relative shrink-0 size-4"
      data-name="SVG"
    >
      <Frame11 />
    </div>
  );
}

function SvgMargin7() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-4 items-start justify-start pl-0 pr-2 py-0 relative shrink-0 w-6"
      data-name="SVG:margin"
    >
      <Svg13 />
    </div>
  );
}

function Button16() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 h-9 items-center justify-center px-3 py-0 relative rounded-xl shrink-0"
      data-name="Button"
    >
      <SvgMargin7 />
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-gray-600 text-nowrap">
        <p className="block leading-[20px] whitespace-pre">0</p>
      </div>
    </div>
  );
}

function Frame12() {
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

function Svg14() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-center overflow-clip p-0 relative shrink-0 size-4"
      data-name="SVG"
    >
      <Frame12 />
    </div>
  );
}

function SvgMargin8() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-4 items-start justify-start pl-0 pr-2 py-0 relative shrink-0 w-6"
      data-name="SVG:margin"
    >
      <Svg14 />
    </div>
  );
}

function Button17() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 h-9 items-center justify-center px-3 py-0 relative rounded-xl shrink-0"
      data-name="Button"
    >
      <SvgMargin8 />
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-gray-600 text-nowrap">
        <p className="block leading-[20px] whitespace-pre">0</p>
      </div>
    </div>
  );
}

function Frame13() {
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

function Svg15() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-center overflow-clip p-0 relative shrink-0 size-4"
      data-name="SVG"
    >
      <Frame13 />
    </div>
  );
}

function SvgMargin9() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-4 items-start justify-start pl-0 pr-2 py-0 relative shrink-0 w-6"
      data-name="SVG:margin"
    >
      <Svg15 />
    </div>
  );
}

function Button18() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 h-9 items-center justify-center px-3 py-0 relative rounded-xl shrink-0"
      data-name="Button"
    >
      <SvgMargin9 />
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[13.8906px] text-center text-gray-600 text-nowrap">
        <p className="block leading-[20px] whitespace-pre">Share</p>
      </div>
    </div>
  );
}

function Svg16() {
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

function Button19() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-9 items-center justify-center px-3 py-0 relative rounded-md shrink-0"
      data-name="Button"
    >
      <Svg16 />
    </div>
  );
}

function ButtonMargin2() {
  return (
    <div
      className="basis-0 grow h-9 min-h-px min-w-10 relative shrink-0"
      data-name="Button:margin"
    >
      <div className="flex flex-col items-end min-w-inherit relative size-full">
        <div className="box-border content-stretch flex flex-col h-9 items-end justify-start min-w-inherit pl-[463.938px] pr-0 py-0 relative w-full">
          <Button19 />
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder2() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-6 items-center justify-start pb-0 pt-[9px] px-0 relative shrink-0 w-full"
      data-name="HorizontalBorder"
    >
      <div className="absolute border-[1px_0px_0px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <Button16 />
      <Button17 />
      <Button18 />
      <ButtonMargin2 />
    </div>
  );
}

function Container29() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start pb-6 pt-0 px-6 relative w-full">
          <Container28 />
          <HorizontalBorder2 />
        </div>
      </div>
    </div>
  );
}

function OverlayShadowOverlayBlur2() {
  return (
    <div
      className="backdrop-blur-[2px] backdrop-filter bg-[rgba(255,255,255,0.9)] box-border content-stretch flex flex-col gap-6 items-center justify-start overflow-clip pb-0 pt-6 px-0 relative rounded-lg shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 w-full"
      data-name="Overlay+Shadow+OverlayBlur"
    >
      <Container27 />
      <Container29 />
    </div>
  );
}

function Depth4Frame7() {
  return (
    <div
      className="bg-center bg-cover bg-no-repeat rounded-3xl shrink-0 size-12"
      data-name="Depth 4, Frame 2"
      style={{ backgroundImage: `url('${imgDepth4Frame2}')` }}
    />
  );
}

function Heading6() {
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

function Background4() {
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

function Container30() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Heading6 />
      <Background4 />
    </div>
  );
}

function Container31() {
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

function Container32() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Container"
    >
      <Container30 />
      <Container31 />
    </div>
  );
}

function Svg17() {
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

function Button20() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center p-0 relative rounded-md shrink-0 size-8"
      data-name="Button"
    >
      <Svg17 />
    </div>
  );
}

function Container33() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row gap-3 items-start justify-start px-6 py-0 relative w-full">
          <Depth4Frame7 />
          <Container32 />
          <Button20 />
        </div>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[26px] not-italic relative shrink-0 text-[15.125px] text-gray-700 text-left w-full">
        <p className="block mb-0">{`🤝 Introduce Yourself & Let's Connect New to the community? Tell us about yourself! What's your background,`}</p>
        <p className="block mb-0">
          what technologies do you love working with, and what brings you to
          Tech Innovators Hub? This is a great place
        </p>
        <p className="block">
          to find collaboration partners and make new connections.
        </p>
      </div>
    </div>
  );
}

function Frame14() {
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

function Svg18() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-center overflow-clip p-0 relative shrink-0 size-4"
      data-name="SVG"
    >
      <Frame14 />
    </div>
  );
}

function SvgMargin10() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-4 items-start justify-start pl-0 pr-2 py-0 relative shrink-0 w-6"
      data-name="SVG:margin"
    >
      <Svg18 />
    </div>
  );
}

function Button21() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 h-9 items-center justify-center px-3 py-0 relative rounded-xl shrink-0"
      data-name="Button"
    >
      <SvgMargin10 />
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-gray-600 text-nowrap">
        <p className="block leading-[20px] whitespace-pre">0</p>
      </div>
    </div>
  );
}

function Frame15() {
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

function Svg19() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-center overflow-clip p-0 relative shrink-0 size-4"
      data-name="SVG"
    >
      <Frame15 />
    </div>
  );
}

function SvgMargin11() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-4 items-start justify-start pl-0 pr-2 py-0 relative shrink-0 w-6"
      data-name="SVG:margin"
    >
      <Svg19 />
    </div>
  );
}

function Button22() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 h-9 items-center justify-center px-3 py-0 relative rounded-xl shrink-0"
      data-name="Button"
    >
      <SvgMargin11 />
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-gray-600 text-nowrap">
        <p className="block leading-[20px] whitespace-pre">0</p>
      </div>
    </div>
  );
}

function Frame16() {
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

function Svg20() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-center overflow-clip p-0 relative shrink-0 size-4"
      data-name="SVG"
    >
      <Frame16 />
    </div>
  );
}

function SvgMargin12() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-4 items-start justify-start pl-0 pr-2 py-0 relative shrink-0 w-6"
      data-name="SVG:margin"
    >
      <Svg20 />
    </div>
  );
}

function Button23() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 h-9 items-center justify-center px-3 py-0 relative rounded-xl shrink-0"
      data-name="Button"
    >
      <SvgMargin12 />
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[13.8906px] text-center text-gray-600 text-nowrap">
        <p className="block leading-[20px] whitespace-pre">Share</p>
      </div>
    </div>
  );
}

function Svg21() {
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

function Button24() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-9 items-center justify-center px-3 py-0 relative rounded-md shrink-0"
      data-name="Button"
    >
      <Svg21 />
    </div>
  );
}

function ButtonMargin3() {
  return (
    <div
      className="basis-0 grow h-9 min-h-px min-w-10 relative shrink-0"
      data-name="Button:margin"
    >
      <div className="flex flex-col items-end min-w-inherit relative size-full">
        <div className="box-border content-stretch flex flex-col h-9 items-end justify-start min-w-inherit pl-[463.938px] pr-0 py-0 relative w-full">
          <Button24 />
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder3() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-6 items-center justify-start pb-0 pt-[9px] px-0 relative shrink-0 w-full"
      data-name="HorizontalBorder"
    >
      <div className="absolute border-[1px_0px_0px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <Button21 />
      <Button22 />
      <Button23 />
      <ButtonMargin3 />
    </div>
  );
}

function Container35() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start pb-6 pt-0 px-6 relative w-full">
          <Container34 />
          <HorizontalBorder3 />
        </div>
      </div>
    </div>
  );
}

function OverlayShadowOverlayBlur3() {
  return (
    <div
      className="backdrop-blur-[2px] backdrop-filter bg-[rgba(255,255,255,0.9)] box-border content-stretch flex flex-col gap-6 items-center justify-start overflow-clip pb-0 pt-6 px-0 relative rounded-lg shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 w-full"
      data-name="Overlay+Shadow+OverlayBlur"
    >
      <Container33 />
      <Container35 />
    </div>
  );
}

function Container36() {
  return (
    <div
      className="max-w-[896px] relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="max-w-inherit relative size-full">
        <div className="box-border content-stretch flex flex-col gap-6 items-start justify-start max-w-inherit p-[24px] relative w-full">
          <Group5 />
          <OverlayShadowOverlayBlur />
          <OverlayShadowOverlayBlur1 />
          <OverlayShadowOverlayBlur2 />
          <OverlayShadowOverlayBlur3 />
        </div>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start px-8 py-0 relative w-full">
          <Container36 />
        </div>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Container"
    >
      <BackgroundHorizontalBorder1 />
      <Container37 />
    </div>
  );
}

function EloGearIcon() {
  return (
    <div className="relative shrink-0 size-5" data-name="EloGearIcon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="Master">
          <g id="Icon">
            <path
              clipRule="evenodd"
              d={svgPaths.p1f24e700}
              fill="var(--fill-0, #000004)"
              fillRule="evenodd"
            />
            <path
              clipRule="evenodd"
              d={svgPaths.p1deeb340}
              fill="var(--fill-0, #000004)"
              fillRule="evenodd"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Container39() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#020817] text-[13.6719px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">Admin panel</p>
      </div>
    </div>
  );
}

function Frame289597() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0 w-[117px]">
      <EloGearIcon />
      <Container39 />
    </div>
  );
}

function TextUnderline() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-center p-0 relative shrink-0"
      data-name="text+underline"
    >
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#000004] text-[14px] text-left text-nowrap">
        <p className="block leading-[1.44] whitespace-pre">Settings</p>
      </div>
      <div className="h-0 relative shrink-0 w-full" data-name="underline">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 56 2"
          >
            <path
              d="M0 1H56"
              id="underline"
              stroke="var(--stroke-0, #000004)"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ButtonDesktop() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 h-8 items-center justify-center p-0 relative rounded-[30px] shrink-0"
      data-name="Button - Desktop"
    >
      <TextUnderline />
    </div>
  );
}

function Container40() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Frame289597 />
      <ButtonDesktop />
    </div>
  );
}

function Container41() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.5625px] text-left text-nowrap text-slate-500">
        <p className="block leading-[20px] whitespace-pre">Total Members</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#020817] text-[16px] text-left text-nowrap">
        <p className="[text-decoration-line:underline] [text-decoration-style:solid] [text-underline-position:from-font] block leading-[24px] whitespace-pre">
          183
        </p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container41 />
      <Container42 />
    </div>
  );
}

function Container44() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.4531px] text-left text-nowrap text-slate-500">
        <p className="block leading-[20px] whitespace-pre">Total Posts</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-left text-nowrap text-slate-900">
        <p className="block leading-[24px] whitespace-pre">59</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container44 />
      <Container45 />
    </div>
  );
}

function Container47() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container43 />
      <Container46 />
    </div>
  );
}

function OverlayShadow() {
  return (
    <div
      className="bg-[rgba(241,245,249,0.5)] relative rounded-lg shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 w-full"
      data-name="Overlay+Shadow"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start p-[16px] relative w-full">
          <Container47 />
        </div>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-[16px] relative w-full">
          <Container40 />
          <OverlayShadow />
        </div>
      </div>
    </div>
  );
}

function Svg22() {
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
            d={svgPaths.p32887f80}
            id="Vector"
            stroke="var(--stroke-0, #64748B)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.33333"
          />
          <path
            d={svgPaths.p3694d280}
            id="Vector_2"
            stroke="var(--stroke-0, #64748B)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.33333"
          />
          <path
            d={svgPaths.p1f197700}
            id="Vector_3"
            stroke="var(--stroke-0, #64748B)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.33333"
          />
          <path
            d={svgPaths.p3bf3e100}
            id="Vector_4"
            stroke="var(--stroke-0, #64748B)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.33333"
          />
        </g>
      </svg>
    </div>
  );
}

function Container49() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#020817] text-[13.6719px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">Recent members</p>
      </div>
    </div>
  );
}

function Frame289599() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0 w-[117px]">
      <Svg22 />
      <Container49 />
    </div>
  );
}

function TextUnderline1() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-center p-0 relative shrink-0"
      data-name="text+underline"
    >
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#000004] text-[14px] text-left text-nowrap">
        <p className="block leading-[1.44] whitespace-pre">View all</p>
      </div>
      <div className="h-0 relative shrink-0 w-full" data-name="underline">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 52 2"
          >
            <path
              d="M0 1H52"
              id="underline"
              stroke="var(--stroke-0, #000004)"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ButtonDesktop1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 h-8 items-center justify-center opacity-0 p-0 relative rounded-[30px] shrink-0"
      data-name="Button - Desktop"
    >
      <TextUnderline1 />
    </div>
  );
}

function Container50() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Frame289599 />
      <ButtonDesktop1 />
    </div>
  );
}

function Depth4Frame8() {
  return (
    <div
      className="bg-center bg-cover bg-no-repeat order-3 rounded-[20px] shrink-0 size-8"
      data-name="Depth 4, Frame 2"
      style={{ backgroundImage: `url('${imgDepth4Frame2}')` }}
    />
  );
}

function Container51() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#020817] text-[13.7812px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">Sarah Chen (You)</p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-left text-slate-500 w-full">
        <p className="block leading-[16px]">Sarah chen</p>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px order-2 p-0 relative shrink-0"
      data-name="Container"
    >
      <Container51 />
      <Container52 />
    </div>
  );
}

function SelectIcon() {
  return (
    <div className="relative shrink-0 size-5" data-name="Select Icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="EloCheckCircleIcon">
          <path
            d={svgPaths.p14c5fd70}
            fill="var(--fill-0, #047443)"
            id="Icon"
          />
        </g>
      </svg>
    </div>
  );
}

function ButtonDesktop2() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center p-[4px] relative rounded-[30px] shrink-0 size-8"
      data-name="Button - Desktop"
    >
      <SelectIcon />
    </div>
  );
}

function SelectIcon1() {
  return (
    <div className="relative shrink-0 size-5" data-name="Select Icon">
      <div
        className="absolute h-[17px] left-[7.5%] right-[7.5%] top-[1.5px]"
        data-name="Icon"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 17 17"
        >
          <g id="Icon">
            <path d={svgPaths.p310cd500} fill="var(--fill-0, #000004)" />
            <path
              clipRule="evenodd"
              d={svgPaths.p33554500}
              fill="var(--fill-0, #000004)"
              fillRule="evenodd"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ButtonDesktop3() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center p-[4px] relative rounded-[30px] shrink-0 size-8"
      data-name="Button - Desktop"
    >
      <SelectIcon1 />
    </div>
  );
}

function Frame289598() {
  return (
    <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start opacity-0 order-1 p-0 relative shrink-0">
      <ButtonDesktop2 />
      <ButtonDesktop3 />
    </div>
  );
}

function Container54() {
  return (
    <div className="relative rounded-lg shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row-reverse gap-3 items-center justify-start p-[8px] relative w-full">
          <Depth4Frame8 />
          <Container53 />
          <Frame289598 />
        </div>
      </div>
    </div>
  );
}

function EloAddCircleIcon() {
  return (
    <div className="relative shrink-0 size-4" data-name="EloAddCircleIcon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Master">
          <g id="Icon">
            <path d={svgPaths.p322a0500} fill="var(--fill-0, #000004)" />
            <path
              clipRule="evenodd"
              d={svgPaths.p35b05700}
              fill="var(--fill-0, #000004)"
              fillRule="evenodd"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function SvgMargin13() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-4 items-start justify-start pl-0 pr-2 py-0 relative shrink-0 w-6"
      data-name="SVG:margin"
    >
      <EloAddCircleIcon />
    </div>
  );
}

function Button25() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row gap-2 h-10 items-center justify-center px-[25px] py-[9px] relative rounded-xl shrink-0"
      data-name="Button"
    >
      <div className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-xl" />
      <SvgMargin13 />
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#020817] text-[13.8906px] text-center text-nowrap">
        <p className="block leading-[20px] whitespace-pre">Invite member</p>
      </div>
    </div>
  );
}

function HorizontalBorder4() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div className="absolute border-[0px_0px_1px] border-slate-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-3 items-center justify-start pb-[17px] pt-4 px-4 relative w-full">
          <Container50 />
          <Container54 />
          <Button25 />
        </div>
      </div>
    </div>
  );
}

function BackgroundVerticalBorder1() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-col items-start justify-start pl-px pr-0 py-0 relative self-stretch shrink-0 w-[317px]"
      data-name="Background+VerticalBorder"
    >
      <div className="absolute border-[0px_0px_0px_1px] border-slate-200 border-solid inset-0 pointer-events-none" />
      <Container48 />
      <HorizontalBorder4 />
    </div>
  );
}

function Container55() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start min-h-[1991px] p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <BackgroundVerticalBorder />
      <Container38 />
      <BackgroundVerticalBorder1 />
    </div>
  );
}

function Background5() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-col items-start justify-start min-h-[900px] p-0 relative shrink-0 w-full"
      data-name="Background"
    >
      <BackgroundHorizontalBorder />
      <Container55 />
    </div>
  );
}

function Component1440WDefault() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[1440px]"
      data-name="1440w default"
    >
      <Background5 />
    </div>
  );
}

export default function Frame289611() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-0 relative size-full">
      <Component1440WDefault />
    </div>
  );
}