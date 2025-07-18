import svgPaths from "./svg-m8fp62pjld";
import imgImage1 from "figma:asset/eb19581f98142c2be49ac44e7c54dd138ba63362.png";
import imgDepth4Frame2 from "figma:asset/6227e47a4249ab20b85ee22ba444c9c4ab585f07.png";
import imgFrame from "figma:asset/7da30d37acc924265e463f58dac1bde80f945b8d.png";
import imgContainerRight from "figma:asset/7688ccd72fbc3b56141e3c102c865d27bf321d96.png";
import imgEllipse437 from "figma:asset/2b2adbb84b15ad4dbd343294bf4f419addaac852.png";
import imgRectangle16 from "figma:asset/80b50b8ffd20495325c4dcc28ab8bed2a0052e69.png";
import imgEllipse438 from "figma:asset/570a1d3247ae2c6609868a9abf6a649d06622ee7.png";
import imgEllipse439 from "figma:asset/d104bd78c09bd3ab5e7cb0ba9ea7cb7588529fe6.png";
import imgEllipse440 from "figma:asset/09e58989f8ba269de47310d0492adbb05dba0247.png";
import imgEllipse441 from "figma:asset/4ef559c3a30a813e341f119e1b73c75d97f8af78.png";
import imgEllipse442 from "figma:asset/0e242d19f22f7644911d91b91a18e60204244f3d.png";
import { imgThePlatformToGrow } from "./svg-mxxiq";

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
            d={svgPaths.p15b82d00}
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

function Group19() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[45.159px] mt-[64.861px] place-items-start relative">
      <div
        className="[grid-area:1_/_1] font-['ES_Klarheit_Elopage:Medium',_sans-serif] h-[92.658px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-45.1582px_-64.8604px] mask-size-[771px_244px] ml-0 mt-0 not-italic relative text-[#ffffff] text-[30px] text-left w-[413.036px]"
        style={{ maskImage: `url('${imgThePlatformToGrow}')` }}
      >
        <p className="block leading-[30px]">
          The platform to grow your passion into a business
        </p>
      </div>
      <div
        className="[background-size:100%_100%] [grid-area:1_/_1] bg-no-repeat bg-top-left h-[33.273px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-193.852px_-133.84px] mask-size-[771px_244px] ml-[148.693px] mt-[68.979px] w-[33.043px]"
        data-name="Frame"
        style={{
          backgroundImage: `url('${imgFrame}')`,
          maskImage: `url('${imgThePlatformToGrow}')`,
        }}
      />
    </div>
  );
}

function Group289561() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 w-full">
      <div
        className="[grid-area:1_/_1] bg-[#21282e] h-[244px] ml-0 mt-0 rounded-[18px] w-[771px]"
        data-name="Rectangle"
      />
      <div
        className="[background-size:100%_100%] [grid-area:1_/_1] bg-no-repeat bg-top-left h-[211.836px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-537.498px_-12.2002px] mask-size-[771px_244px] ml-[537.497px] mt-[12.2px] w-[210.373px]"
        data-name="Container_right"
        style={{
          backgroundImage: `url('${imgContainerRight}')`,
          maskImage: `url('${imgThePlatformToGrow}')`,
        }}
      />
      <Group19 />
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

function Container11() {
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

function Container12() {
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

function Container13() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Container"
    >
      <Container11 />
      <Container12 />
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

function Container14() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row gap-3 items-start justify-start px-6 py-0 relative w-full">
          <Depth4Frame4 />
          <Container13 />
          <Button5 />
        </div>
      </div>
    </div>
  );
}

function Container15() {
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

function Frame3() {
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
      <Frame3 />
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

function Frame4() {
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
      <Frame4 />
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

function Frame5() {
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
      <Frame5 />
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

function Container16() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start pb-6 pt-0 px-6 relative w-full">
          <Container15 />
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
      <Container14 />
      <Container16 />
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

function Container17() {
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

function Container18() {
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

function Container19() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Container"
    >
      <Container17 />
      <Container18 />
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

function Container20() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row gap-3 items-start justify-start px-6 py-0 relative w-full">
          <Depth4Frame5 />
          <Container19 />
          <Button10 />
        </div>
      </div>
    </div>
  );
}

function Container21() {
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

function Frame6() {
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
      <Frame6 />
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

function Frame7() {
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
      <Frame7 />
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

function Frame8() {
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
      <Frame8 />
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

function Container22() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start pb-6 pt-0 px-6 relative w-full">
          <Container21 />
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
      <Container20 />
      <Container22 />
    </div>
  );
}

function Avatar() {
  return (
    <div className="relative size-12" data-name="Avatar">
      <div className="absolute flex inset-0 items-center justify-center">
        <div className="flex-none rotate-[180deg] size-12">
          <div className="relative size-full">
            <img
              className="block max-w-none size-full"
              height="48"
              loading="lazy"
              src={imgEllipse437}
              width="48"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Heading 3"
    >
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[15.625px] text-gray-900 text-left text-nowrap">
        <p className="block leading-[24px] whitespace-pre">Jenny</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Heading5 />
    </div>
  );
}

function Container24() {
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

function Container25() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Container"
    >
      <Container23 />
      <Container24 />
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

function Container26() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row gap-3 items-start justify-start px-6 py-0 relative w-full">
          <div className="flex items-center justify-center relative shrink-0">
            <div className="flex-none scale-y-[-100%]">
              <Avatar />
            </div>
          </div>
          <Container25 />
          <Button15 />
        </div>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[26px] not-italic relative shrink-0 text-[15.25px] text-gray-700 text-left w-full">
        <p className="block mb-0">{`🚀 What's your current tech project? Share what you're currently working on! Whether it's a side project,`}</p>
        <p className="block mb-0">{`startup idea, or learning journey - we'd love to hear about it and offer support or feedback. Don't forget to`}</p>
        <p className="block">{`include what technologies you're using!`}</p>
      </div>
    </div>
  );
}

function Group289587() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] h-[380px] ml-0 mt-0 relative w-[533.086px]">
        <img
          className="block max-w-none size-full"
          height="380"
          loading="lazy"
          src={imgRectangle16}
          width="533.0859375"
        />
      </div>
      <div
        className="[grid-area:1_/_1] h-[0.543px] ml-[22.829px] mt-[86.857px] relative w-[487.987px]"
        data-name="Line (Stroke)"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 488 1"
        >
          <path
            clipRule="evenodd"
            d="M0 0H487.987V0.542857H0V0Z"
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Line (Stroke)"
            opacity="0.5"
          />
        </svg>
      </div>
      <div
        className="[grid-area:1_/_1] h-[0.543px] ml-[22.829px] mt-[147.115px] relative w-[487.987px]"
        data-name="Line (Stroke)"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 488 1"
        >
          <path
            clipRule="evenodd"
            d="M0 0H487.987V0.542857H0V0Z"
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Line (Stroke)"
            opacity="0.5"
          />
        </svg>
      </div>
      <div
        className="[grid-area:1_/_1] h-[19.391px] ml-[167.861px] mt-[168.177px] relative w-[198.947px]"
        data-name="User Name"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 199 20"
        >
          <g id="User Name">
            <path d={svgPaths.p6362900} fill="var(--fill-0, white)" />
            <path d={svgPaths.p258bcbf0} fill="var(--fill-0, white)" />
            <path d={svgPaths.p2b221300} fill="var(--fill-0, white)" />
            <path d={svgPaths.p721f670} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3f67d070} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3b3198c0} fill="var(--fill-0, white)" />
            <path d={svgPaths.p28096e00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p14dd3500} fill="var(--fill-0, white)" />
            <path d={svgPaths.p891ea80} fill="var(--fill-0, white)" />
            <path d={svgPaths.pfc64000} fill="var(--fill-0, white)" />
            <path d={svgPaths.p68a4f00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3d57f80} fill="var(--fill-0, white)" />
            <path d={svgPaths.pd5b3f30} fill="var(--fill-0, white)" />
            <path d={svgPaths.p387b9b00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p29054600} fill="var(--fill-0, white)" />
            <path d={svgPaths.p25f3f600} fill="var(--fill-0, white)" />
          </g>
        </svg>
      </div>
      <div
        className="[grid-area:1_/_1] h-[7.861px] ml-[178.453px] mt-[56.87px] relative w-[176.962px]"
        data-name="Certificate name"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 177 8"
        >
          <g id="Certificate name">
            <path d={svgPaths.p177f5fc0} fill="var(--fill-0, white)" />
            <path d={svgPaths.p2a347700} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1bff1500} fill="var(--fill-0, white)" />
            <path d={svgPaths.pd92fb00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p30078d80} fill="var(--fill-0, white)" />
            <path d={svgPaths.p31b0fd00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p38e1a400} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1002fa80} fill="var(--fill-0, white)" />
            <path d={svgPaths.p2de20cc0} fill="var(--fill-0, white)" />
            <path d={svgPaths.p24add00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p2c110f80} fill="var(--fill-0, white)" />
            <path d={svgPaths.p31432300} fill="var(--fill-0, white)" />
            <path d={svgPaths.p10bcf100} fill="var(--fill-0, white)" />
            <path d={svgPaths.p25c33500} fill="var(--fill-0, white)" />
            <path d={svgPaths.p22fbb480} fill="var(--fill-0, white)" />
            <path d={svgPaths.p363c3b00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p5fa3500} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3a171180} fill="var(--fill-0, white)" />
            <path d={svgPaths.p2f7df300} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1727b000} fill="var(--fill-0, white)" />
            <path d={svgPaths.p23dffc72} fill="var(--fill-0, white)" />
            <path d={svgPaths.p39a68700} fill="var(--fill-0, white)" />
          </g>
        </svg>
      </div>
      <div
        className="[grid-area:1_/_1] h-[15.721px] ml-[42.238px] mt-[107.767px] relative w-[451.327px]"
        data-name="Lesson name"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 452 16"
        >
          <g id="Lesson name">
            <path d={svgPaths.p19f21f80} fill="var(--fill-0, white)" />
            <path d={svgPaths.pea46f80} fill="var(--fill-0, white)" />
            <path d={svgPaths.p234c15f0} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3a360200} fill="var(--fill-0, white)" />
            <path d={svgPaths.pafe1c80} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1d5c7700} fill="var(--fill-0, white)" />
            <path d={svgPaths.p7946f00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p28068800} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1b859780} fill="var(--fill-0, white)" />
            <path d={svgPaths.p21049c80} fill="var(--fill-0, white)" />
            <path d={svgPaths.p2c55fb00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p36fa8c0} fill="var(--fill-0, white)" />
            <path d={svgPaths.p16141100} fill="var(--fill-0, white)" />
            <path d={svgPaths.pe454c00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p124c1c80} fill="var(--fill-0, white)" />
            <path d={svgPaths.p15755400} fill="var(--fill-0, white)" />
            <path d={svgPaths.p17086400} fill="var(--fill-0, white)" />
            <path d={svgPaths.pb5e32f0} fill="var(--fill-0, white)" />
            <path d={svgPaths.p53acf00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1d367930} fill="var(--fill-0, white)" />
            <path d={svgPaths.p28468200} fill="var(--fill-0, white)" />
            <path d={svgPaths.p13ba4780} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1eabc600} fill="var(--fill-0, white)" />
            <path d={svgPaths.p19aa1600} fill="var(--fill-0, white)" />
            <path d={svgPaths.p34496200} fill="var(--fill-0, white)" />
            <path d={svgPaths.pe06d472} fill="var(--fill-0, white)" />
            <path d={svgPaths.p26ba1231} fill="var(--fill-0, white)" />
          </g>
        </svg>
      </div>
      <div
        className="[grid-area:1_/_1] h-[38.211px] ml-[203.682px] mt-[273.481px] relative w-[127.624px]"
        data-name="User Email Company n"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 128 39"
        >
          <g id="User Email Company n">
            <path d={svgPaths.p2cca7a00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3b2cd600} fill="var(--fill-0, white)" />
            <path d={svgPaths.p41f0a00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3ee2bb00} fill="var(--fill-0, white)" />
            <path d={svgPaths.pd3ce80} fill="var(--fill-0, white)" />
            <path d={svgPaths.p29bae500} fill="var(--fill-0, white)" />
            <path d={svgPaths.p245d0e00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p2290f680} fill="var(--fill-0, white)" />
            <path d={svgPaths.p2b01000} fill="var(--fill-0, white)" />
            <path d={svgPaths.p2aa40800} fill="var(--fill-0, white)" />
            <path d={svgPaths.p38c94480} fill="var(--fill-0, white)" />
            <path d={svgPaths.pda1b100} fill="var(--fill-0, white)" />
            <path d={svgPaths.p265bfdc0} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3c414b80} fill="var(--fill-0, white)" />
            <path d={svgPaths.p214f300} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1a910d80} fill="var(--fill-0, white)" />
            <path d={svgPaths.p232c3100} fill="var(--fill-0, white)" />
            <path d={svgPaths.pbed6000} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3e3b4900} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3bd015f1} fill="var(--fill-0, white)" />
            <path d={svgPaths.p37bde100} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1a40d000} fill="var(--fill-0, white)" />
            <path d={svgPaths.p18a38f00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1b818d70} fill="var(--fill-0, white)" />
            <path d={svgPaths.pa438680} fill="var(--fill-0, white)" />
            <path d={svgPaths.pdcfc600} fill="var(--fill-0, white)" />
            <path d={svgPaths.p4f96380} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1fca3000} fill="var(--fill-0, white)" />
            <path d={svgPaths.p2def9c80} fill="var(--fill-0, white)" />
            <path d={svgPaths.p10050770} fill="var(--fill-0, white)" />
            <path d={svgPaths.p14645f00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3e0e8bf0} fill="var(--fill-0, white)" />
            <path d={svgPaths.pcb8ef00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p36d34d00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1fb68e00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p2032af10} fill="var(--fill-0, white)" />
            <path d={svgPaths.p284ac270} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1a5d6980} fill="var(--fill-0, white)" />
            <path d={svgPaths.p2a56ba70} fill="var(--fill-0, white)" />
            <path d={svgPaths.p36d1fc80} fill="var(--fill-0, white)" />
            <path d={svgPaths.pd60aaf0} fill="var(--fill-0, white)" />
            <path d={svgPaths.p27c5c600} fill="var(--fill-0, white)" />
            <path d={svgPaths.p18ad3a00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p9dcc000} fill="var(--fill-0, white)" />
            <path d={svgPaths.p11697400} fill="var(--fill-0, white)" />
            <path d={svgPaths.pdd98980} fill="var(--fill-0, white)" />
            <path d={svgPaths.p23392cf0} fill="var(--fill-0, white)" />
            <path d={svgPaths.p27731600} fill="var(--fill-0, white)" />
            <path d={svgPaths.p2ad07ff0} fill="var(--fill-0, white)" />
            <path d={svgPaths.p350358c0} fill="var(--fill-0, white)" />
            <path d={svgPaths.p28449a80} fill="var(--fill-0, white)" />
            <path d={svgPaths.p25c2fbf1} fill="var(--fill-0, white)" />
            <path d={svgPaths.p355a7780} fill="var(--fill-0, white)" />
            <path d={svgPaths.p21f35880} fill="var(--fill-0, white)" />
            <path d={svgPaths.p27129870} fill="var(--fill-0, white)" />
            <path d={svgPaths.p28fa8c00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p39c04800} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1aafaf80} fill="var(--fill-0, white)" />
            <path d={svgPaths.p2f3b0600} fill="var(--fill-0, white)" />
            <path d={svgPaths.p9ac1f00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p193aeb00} fill="var(--fill-0, white)" />
            <path d={svgPaths.ped36e00} fill="var(--fill-0, white)" />
            <path d={svgPaths.pa695c00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p20cd0d80} fill="var(--fill-0, white)" />
            <path d={svgPaths.p2d55af00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3d54a962} fill="var(--fill-0, white)" />
          </g>
        </svg>
      </div>
      <div
        className="[grid-area:1_/_1] h-[16.549px] ml-[224.479px] mt-[335.313px] relative w-[84.846px]"
        data-name="Valid from Valid unt"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 85 17"
        >
          <g id="Valid from Valid unt">
            <path d={svgPaths.p1b169000} fill="var(--fill-0, white)" />
            <path d={svgPaths.p27318280} fill="var(--fill-0, white)" />
            <path d={svgPaths.p364bf900} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3315ab80} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3bf0f00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p116add00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p375b200} fill="var(--fill-0, white)" />
            <path d={svgPaths.p7be7c00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p37d33f00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p24481800} fill="var(--fill-0, white)" />
            <path d={svgPaths.p31341a00} fill="var(--fill-0, white)" />
            <path d={svgPaths.pca96700} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3b96cb00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p334dad00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p2b77ef00} fill="var(--fill-0, white)" />
            <path d={svgPaths.pa65e840} fill="var(--fill-0, white)" />
            <path d={svgPaths.p38b82380} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1aeb0a00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p27523080} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3de2a2c0} fill="var(--fill-0, white)" />
            <path d={svgPaths.p2eb9ec70} fill="var(--fill-0, white)" />
            <path d={svgPaths.pbecd800} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1981bd00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p33cb75f0} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3254fe00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p24c10300} fill="var(--fill-0, white)" />
            <path d={svgPaths.p15aef880} fill="var(--fill-0, white)" />
            <path d={svgPaths.p163eee00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p2598b700} fill="var(--fill-0, white)" />
            <path d={svgPaths.p20727380} fill="var(--fill-0, white)" />
            <path d={svgPaths.p339facf0} fill="var(--fill-0, white)" />
          </g>
        </svg>
      </div>
      <div
        className="[grid-area:1_/_1] h-[9.055px] ml-[210.159px] mt-[205.613px] relative w-[114.335px]"
        data-name="status, 450 points"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 115 10"
        >
          <g id="status, 450 points">
            <path d={svgPaths.p23f10dc0} fill="var(--fill-0, white)" />
            <path d={svgPaths.p37cc4700} fill="var(--fill-0, white)" />
            <path d={svgPaths.p23470200} fill="var(--fill-0, white)" />
            <path d={svgPaths.p233d130} fill="var(--fill-0, white)" />
            <path d={svgPaths.p170d1080} fill="var(--fill-0, white)" />
            <path d={svgPaths.pcfcba80} fill="var(--fill-0, white)" />
            <path d={svgPaths.p30035d00} fill="var(--fill-0, white)" />
            <path d={svgPaths.pa086900} fill="var(--fill-0, white)" />
            <path d={svgPaths.p2cf97400} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1de74300} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3b802500} fill="var(--fill-0, white)" />
            <path d={svgPaths.p18886ef0} fill="var(--fill-0, white)" />
            <path d={svgPaths.pec07d00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p764e200} fill="var(--fill-0, white)" />
            <path d={svgPaths.p2fdc2980} fill="var(--fill-0, white)" />
            <path d={svgPaths.pe627180} fill="var(--fill-0, white)" />
          </g>
        </svg>
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
      <Frame9 />
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

function Frame10() {
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
      <Frame10 />
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

function Frame11() {
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
      <Frame11 />
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

function Container28() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start pb-6 pt-0 px-6 relative w-full">
          <Container27 />
          <Group289587 />
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
      <Container26 />
      <Container28 />
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

function Container29() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Heading6 />
      <Background3 />
    </div>
  );
}

function Container30() {
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

function Container31() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Container"
    >
      <Container29 />
      <Container30 />
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

function Container32() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row gap-3 items-start justify-start px-6 py-0 relative w-full">
          <Depth4Frame6 />
          <Container31 />
          <Button20 />
        </div>
      </div>
    </div>
  );
}

function Container33() {
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

function Frame12() {
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
      <Frame12 />
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

function Frame13() {
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
      <Frame13 />
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

function Frame14() {
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
      <Frame14 />
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

function Container34() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start pb-6 pt-0 px-6 relative w-full">
          <Container33 />
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
      <Container32 />
      <Container34 />
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

function Heading7() {
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

function Container35() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Heading7 />
      <Background4 />
    </div>
  );
}

function Container36() {
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

function Container37() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Container"
    >
      <Container35 />
      <Container36 />
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

function Button25() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center p-0 relative rounded-md shrink-0 size-8"
      data-name="Button"
    >
      <Svg22 />
    </div>
  );
}

function Container38() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row gap-3 items-start justify-start px-6 py-0 relative w-full">
          <Depth4Frame7 />
          <Container37 />
          <Button25 />
        </div>
      </div>
    </div>
  );
}

function Container39() {
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

function Frame15() {
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

function Svg23() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-center overflow-clip p-0 relative shrink-0 size-4"
      data-name="SVG"
    >
      <Frame15 />
    </div>
  );
}

function SvgMargin13() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-4 items-start justify-start pl-0 pr-2 py-0 relative shrink-0 w-6"
      data-name="SVG:margin"
    >
      <Svg23 />
    </div>
  );
}

function Button26() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 h-9 items-center justify-center px-3 py-0 relative rounded-xl shrink-0"
      data-name="Button"
    >
      <SvgMargin13 />
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

function Svg24() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-center overflow-clip p-0 relative shrink-0 size-4"
      data-name="SVG"
    >
      <Frame16 />
    </div>
  );
}

function SvgMargin14() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-4 items-start justify-start pl-0 pr-2 py-0 relative shrink-0 w-6"
      data-name="SVG:margin"
    >
      <Svg24 />
    </div>
  );
}

function Button27() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 h-9 items-center justify-center px-3 py-0 relative rounded-xl shrink-0"
      data-name="Button"
    >
      <SvgMargin14 />
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-gray-600 text-nowrap">
        <p className="block leading-[20px] whitespace-pre">0</p>
      </div>
    </div>
  );
}

function Frame17() {
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

function Svg25() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-center overflow-clip p-0 relative shrink-0 size-4"
      data-name="SVG"
    >
      <Frame17 />
    </div>
  );
}

function SvgMargin15() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-4 items-start justify-start pl-0 pr-2 py-0 relative shrink-0 w-6"
      data-name="SVG:margin"
    >
      <Svg25 />
    </div>
  );
}

function Button28() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 h-9 items-center justify-center px-3 py-0 relative rounded-xl shrink-0"
      data-name="Button"
    >
      <SvgMargin15 />
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[13.8906px] text-center text-gray-600 text-nowrap">
        <p className="block leading-[20px] whitespace-pre">Share</p>
      </div>
    </div>
  );
}

function Svg26() {
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

function Button29() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-9 items-center justify-center px-3 py-0 relative rounded-md shrink-0"
      data-name="Button"
    >
      <Svg26 />
    </div>
  );
}

function ButtonMargin4() {
  return (
    <div
      className="basis-0 grow h-9 min-h-px min-w-10 relative shrink-0"
      data-name="Button:margin"
    >
      <div className="flex flex-col items-end min-w-inherit relative size-full">
        <div className="box-border content-stretch flex flex-col h-9 items-end justify-start min-w-inherit pl-[463.938px] pr-0 py-0 relative w-full">
          <Button29 />
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder4() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-6 items-center justify-start pb-0 pt-[9px] px-0 relative shrink-0 w-full"
      data-name="HorizontalBorder"
    >
      <div className="absolute border-[1px_0px_0px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <Button26 />
      <Button27 />
      <Button28 />
      <ButtonMargin4 />
    </div>
  );
}

function Container40() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start pb-6 pt-0 px-6 relative w-full">
          <Container39 />
          <HorizontalBorder4 />
        </div>
      </div>
    </div>
  );
}

function OverlayShadowOverlayBlur4() {
  return (
    <div
      className="backdrop-blur-[2px] backdrop-filter bg-[rgba(255,255,255,0.9)] box-border content-stretch flex flex-col gap-6 items-center justify-start overflow-clip pb-0 pt-6 px-0 relative rounded-lg shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 w-full"
      data-name="Overlay+Shadow+OverlayBlur"
    >
      <Container38 />
      <Container40 />
    </div>
  );
}

function Container41() {
  return (
    <div
      className="max-w-[896px] relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="max-w-inherit relative size-full">
        <div className="box-border content-stretch flex flex-col gap-6 items-start justify-start max-w-inherit p-[24px] relative w-full">
          <Group289561 />
          <Group5 />
          <OverlayShadowOverlayBlur />
          <OverlayShadowOverlayBlur1 />
          <OverlayShadowOverlayBlur2 />
          <OverlayShadowOverlayBlur3 />
          <OverlayShadowOverlayBlur4 />
        </div>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start px-8 py-0 relative w-full">
          <Container41 />
        </div>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Container"
    >
      <Container42 />
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
              d={svgPaths.p994f8f0}
              fill="var(--fill-0, #000004)"
              fillRule="evenodd"
            />
            <path
              clipRule="evenodd"
              d={svgPaths.p33feeb00}
              fill="var(--fill-0, #000004)"
              fillRule="evenodd"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Container44() {
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
      <Container44 />
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
        <div
          className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]"
          style={
            {
              "--stroke-0": "rgba(0, 0, 4.000000236555934, 1)",
            } as React.CSSProperties
          }
        >
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            role="presentation"
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

function Container45() {
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

function Container46() {
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

function Container47() {
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

function Container48() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container46 />
      <Container47 />
    </div>
  );
}

function Container49() {
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

function Container50() {
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

function Container51() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container49 />
      <Container50 />
    </div>
  );
}

function Container52() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container48 />
      <Container51 />
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
          <Container52 />
        </div>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-[16px] relative w-full">
          <Container45 />
          <OverlayShadow />
        </div>
      </div>
    </div>
  );
}

function Svg27() {
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

function Container54() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#020817] text-[13.6719px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">
          Pending members (5)
        </p>
      </div>
    </div>
  );
}

function Frame289599() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0 w-[117px]">
      <Svg27 />
      <Container54 />
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
        <div
          className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]"
          style={
            {
              "--stroke-0": "rgba(0, 0, 4.000000236555934, 1)",
            } as React.CSSProperties
          }
        >
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            role="presentation"
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

function Container55() {
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

function Avatar1() {
  return (
    <div className="relative size-8" data-name="Avatar">
      <div className="absolute flex inset-0 items-center justify-center">
        <div className="flex-none rotate-[180deg] size-8">
          <div className="relative size-full">
            <img
              className="block max-w-none size-full"
              height="32"
              src={imgEllipse438}
              width="32"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#020817] text-[13.7812px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">Wade Warren</p>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-left text-slate-500 w-full">
        <p className="block leading-[16px]">Alias</p>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px order-2 p-0 relative shrink-0"
      data-name="Container"
    >
      <Container56 />
      <Container57 />
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
          role="presentation"
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
    <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start order-1 p-0 relative shrink-0">
      <ButtonDesktop2 />
      <ButtonDesktop3 />
    </div>
  );
}

function Container59() {
  return (
    <div className="relative rounded-lg shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row-reverse gap-3 items-center justify-start p-[8px] relative w-full">
          <div className="flex items-center justify-center order-3 relative shrink-0">
            <div className="flex-none scale-y-[-100%]">
              <Avatar1 />
            </div>
          </div>
          <Container58 />
          <Frame289598 />
        </div>
      </div>
    </div>
  );
}

function Avatar2() {
  return (
    <div className="relative size-8" data-name="Avatar">
      <div className="absolute flex inset-0 items-center justify-center">
        <div className="flex-none rotate-[180deg] size-8">
          <div className="relative size-full">
            <img
              className="block max-w-none size-full"
              height="32"
              src={imgEllipse439}
              width="32"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#020817] text-[13.7812px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">Jenny Wilson</p>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-left text-slate-500 w-full">
        <p className="block leading-[16px]">Jenny</p>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px order-2 p-0 relative shrink-0"
      data-name="Container"
    >
      <Container60 />
      <Container61 />
    </div>
  );
}

function SelectIcon2() {
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

function ButtonDesktop4() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center p-[4px] relative rounded-[30px] shrink-0 size-8"
      data-name="Button - Desktop"
    >
      <SelectIcon2 />
    </div>
  );
}

function SelectIcon3() {
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
          role="presentation"
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

function ButtonDesktop5() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center p-[4px] relative rounded-[30px] shrink-0 size-8"
      data-name="Button - Desktop"
    >
      <SelectIcon3 />
    </div>
  );
}

function Frame289600() {
  return (
    <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start order-1 p-0 relative shrink-0">
      <ButtonDesktop4 />
      <ButtonDesktop5 />
    </div>
  );
}

function Container63() {
  return (
    <div className="relative rounded-lg shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row-reverse gap-3 items-center justify-start p-[8px] relative w-full">
          <div className="flex items-center justify-center order-3 relative shrink-0">
            <div className="flex-none scale-y-[-100%]">
              <Avatar2 />
            </div>
          </div>
          <Container62 />
          <Frame289600 />
        </div>
      </div>
    </div>
  );
}

function Avatar3() {
  return (
    <div className="relative size-8" data-name="Avatar">
      <div className="absolute flex inset-0 items-center justify-center">
        <div className="flex-none rotate-[180deg] size-8">
          <div className="relative size-full">
            <img
              className="block max-w-none size-full"
              height="32"
              src={imgEllipse440}
              width="32"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#020817] text-[13.7812px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">Guy Hawkins</p>
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-left text-slate-500 w-full">
        <p className="block leading-[16px]">GEISN</p>
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px order-2 p-0 relative shrink-0"
      data-name="Container"
    >
      <Container64 />
      <Container65 />
    </div>
  );
}

function SelectIcon4() {
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

function ButtonDesktop6() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center p-[4px] relative rounded-[30px] shrink-0 size-8"
      data-name="Button - Desktop"
    >
      <SelectIcon4 />
    </div>
  );
}

function SelectIcon5() {
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
          role="presentation"
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

function ButtonDesktop7() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center p-[4px] relative rounded-[30px] shrink-0 size-8"
      data-name="Button - Desktop"
    >
      <SelectIcon5 />
    </div>
  );
}

function Frame289601() {
  return (
    <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start order-1 p-0 relative shrink-0">
      <ButtonDesktop6 />
      <ButtonDesktop7 />
    </div>
  );
}

function Container67() {
  return (
    <div className="relative rounded-lg shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row-reverse gap-3 items-center justify-start p-[8px] relative w-full">
          <div className="flex items-center justify-center order-3 relative shrink-0">
            <div className="flex-none scale-y-[-100%]">
              <Avatar3 />
            </div>
          </div>
          <Container66 />
          <Frame289601 />
        </div>
      </div>
    </div>
  );
}

function Avatar4() {
  return (
    <div className="relative size-8" data-name="Avatar">
      <div className="absolute flex inset-0 items-center justify-center">
        <div className="flex-none rotate-[180deg] size-8">
          <div className="relative size-full">
            <img
              className="block max-w-none size-full"
              height="32"
              src={imgEllipse441}
              width="32"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#020817] text-[13.7812px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">Brooklyn Simmons</p>
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-left text-slate-500 w-full">
        <p className="block leading-[16px]">Brooklyn</p>
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px order-2 p-0 relative shrink-0"
      data-name="Container"
    >
      <Container68 />
      <Container69 />
    </div>
  );
}

function SelectIcon6() {
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

function ButtonDesktop8() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center p-[4px] relative rounded-[30px] shrink-0 size-8"
      data-name="Button - Desktop"
    >
      <SelectIcon6 />
    </div>
  );
}

function SelectIcon7() {
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
          role="presentation"
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

function ButtonDesktop9() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center p-[4px] relative rounded-[30px] shrink-0 size-8"
      data-name="Button - Desktop"
    >
      <SelectIcon7 />
    </div>
  );
}

function Frame289602() {
  return (
    <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start order-1 p-0 relative shrink-0">
      <ButtonDesktop8 />
      <ButtonDesktop9 />
    </div>
  );
}

function Container71() {
  return (
    <div className="relative rounded-lg shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row-reverse gap-3 items-center justify-start p-[8px] relative w-full">
          <div className="flex items-center justify-center order-3 relative shrink-0">
            <div className="flex-none scale-y-[-100%]">
              <Avatar4 />
            </div>
          </div>
          <Container70 />
          <Frame289602 />
        </div>
      </div>
    </div>
  );
}

function Avatar5() {
  return (
    <div className="relative size-8" data-name="Avatar">
      <div className="absolute flex inset-0 items-center justify-center">
        <div className="flex-none rotate-[180deg] size-8">
          <div className="relative size-full">
            <img
              className="block max-w-none size-full"
              height="32"
              src={imgEllipse442}
              width="32"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#020817] text-[13.7812px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">
          Cameron Williamson
        </p>
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-left text-slate-500 w-full">
        <p className="block leading-[16px]">eisn</p>
      </div>
    </div>
  );
}

function Container74() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px order-2 p-0 relative shrink-0"
      data-name="Container"
    >
      <Container72 />
      <Container73 />
    </div>
  );
}

function SelectIcon8() {
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

function ButtonDesktop10() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center p-[4px] relative rounded-[30px] shrink-0 size-8"
      data-name="Button - Desktop"
    >
      <SelectIcon8 />
    </div>
  );
}

function SelectIcon9() {
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
          role="presentation"
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

function ButtonDesktop11() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center p-[4px] relative rounded-[30px] shrink-0 size-8"
      data-name="Button - Desktop"
    >
      <SelectIcon9 />
    </div>
  );
}

function Frame289603() {
  return (
    <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start order-1 p-0 relative shrink-0">
      <ButtonDesktop10 />
      <ButtonDesktop11 />
    </div>
  );
}

function Container75() {
  return (
    <div className="relative rounded-lg shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row-reverse gap-3 items-center justify-start p-[8px] relative w-full">
          <div className="flex items-center justify-center order-3 relative shrink-0">
            <div className="flex-none scale-y-[-100%]">
              <Avatar5 />
            </div>
          </div>
          <Container74 />
          <Frame289603 />
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
            <path d={svgPaths.p1d2efe00} fill="var(--fill-0, #000004)" />
            <path
              clipRule="evenodd"
              d={svgPaths.p2f1abf80}
              fill="var(--fill-0, #000004)"
              fillRule="evenodd"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function SvgMargin16() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-4 items-start justify-start pl-0 pr-2 py-0 relative shrink-0 w-6"
      data-name="SVG:margin"
    >
      <EloAddCircleIcon />
    </div>
  );
}

function Button30() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row gap-2 h-10 items-center justify-center px-[25px] py-[9px] relative rounded-xl shrink-0"
      data-name="Button"
    >
      <div className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-xl" />
      <SvgMargin16 />
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#020817] text-[13.8906px] text-center text-nowrap">
        <p className="block leading-[20px] whitespace-pre">Invite member</p>
      </div>
    </div>
  );
}

function HorizontalBorder5() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div className="absolute border-[0px_0px_1px] border-slate-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-3 items-center justify-start pb-[17px] pt-4 px-4 relative w-full">
          <Container55 />
          <Container59 />
          <Container63 />
          <Container67 />
          <Container71 />
          <Container75 />
          <Button30 />
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
      <Container53 />
      <HorizontalBorder5 />
    </div>
  );
}

function Container76() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start min-h-[1991px] p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <BackgroundVerticalBorder />
      <Container43 />
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
      <Container76 />
    </div>
  );
}

function Component1440WDefault() {
  return (
    <div
      className="absolute bg-[#ffffff] box-border content-stretch flex flex-col items-start justify-start left-0 p-0 right-0 top-0"
      data-name="1440w default"
    >
      <Background5 />
    </div>
  );
}

function Frame290228() {
  return (
    <div className="mb-[-7px] relative shrink-0 w-full">
      <div className="flex flex-row justify-end relative size-full">
        <div className="box-border content-stretch flex flex-row items-start justify-end px-4 py-0 relative w-full">
          <div className="flex h-[13.081px] items-center justify-center relative shrink-0 w-[13.081px]">
            <div className="flex-none rotate-[315deg] scale-y-[-100%]">
              <div className="relative size-[9.259px]">
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 10 10"
                >
                  <path
                    clipRule="evenodd"
                    d={svgPaths.p261a0d00}
                    fill="var(--fill-0, white)"
                    fillRule="evenodd"
                    id="Rectangle 20"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame290230() {
  return <div className="h-2 shrink-0 w-full" />;
}

function Frame290227() {
  return <div className="h-0 shrink-0 w-full" />;
}

function Frame290219() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col items-start justify-start px-4 py-2 relative shrink-0 w-[212px]">
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#21282e] text-[14px] text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">Pin post</p>
      </div>
    </div>
  );
}

function Frame290220() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col items-start justify-start px-4 py-2 relative shrink-0 w-[212px]">
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#21282e] text-[14px] text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">Edit post</p>
      </div>
    </div>
  );
}

function Frame290221() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col items-start justify-start px-4 py-2 relative shrink-0 w-[212px]">
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#21282e] text-[14px] text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">Delete post</p>
      </div>
    </div>
  );
}

function Frame290226() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start px-0 py-2 relative shrink-0">
      <Frame290219 />
      <Frame290220 />
      <Frame290221 />
    </div>
  );
}

function Frame290216() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col items-start justify-start mb-[-7px] overflow-clip p-0 relative rounded-lg shrink-0 w-full">
      <Frame290230 />
      <Frame290227 />
      <Frame290226 />
    </div>
  );
}

function Frame290231() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start justify-start left-[838px] pb-[7px] pt-0 px-0 shadow-[0px_2px_5px_0px_rgba(0,0,0,0.15)] top-[793px]">
      <Frame290228 />
      <Frame290216 />
    </div>
  );
}

function Frame290232() {
  return (
    <div className="mb-[-7px] relative shrink-0 w-full">
      <div className="flex flex-row justify-end relative size-full">
        <div className="box-border content-stretch flex flex-row items-start justify-end px-4 py-0 relative w-full">
          <div className="flex h-[13.081px] items-center justify-center relative shrink-0 w-[13.081px]">
            <div className="flex-none rotate-[315deg] scale-y-[-100%]">
              <div className="relative size-[9.259px]">
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 10 10"
                >
                  <path
                    clipRule="evenodd"
                    d={svgPaths.p261a0d00}
                    fill="var(--fill-0, white)"
                    fillRule="evenodd"
                    id="Rectangle 20"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame290233() {
  return (
    <div className="h-2 relative shrink-0 w-full">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 212 8"
      >
        <g id="Frame 290230">
          <g id="Vector 15"></g>
        </g>
      </svg>
    </div>
  );
}

function Frame290224() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col items-start justify-start px-4 py-2 relative shrink-0 w-[212px]">
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#21282e] text-[14px] text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">Pin post</p>
      </div>
    </div>
  );
}

function Frame290234() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col items-start justify-start px-4 py-2 relative shrink-0 w-[212px]">
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#21282e] text-[14px] text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">Delete post</p>
      </div>
    </div>
  );
}

function Frame290235() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start px-0 py-2 relative shrink-0">
      <Frame290224 />
      <Frame290234 />
    </div>
  );
}

function Frame290223() {
  return (
    <div className="h-2 relative shrink-0 w-full">
      <div className="absolute bottom-0 left-0 right-0 top-[-6.25%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 212 9"
        >
          <g id="Frame 290223">
            <path
              d="M0 1H212"
              id="Vector 15"
              stroke="var(--stroke-0, #D7DADF)"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame290218() {
  return (
    <div className="bg-[#ffffff] relative shrink-0 w-full">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start px-4 py-2 relative w-full">
          <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#21282e] text-[14px] text-left text-nowrap">
            <p className="block leading-[22px] whitespace-pre">View profile</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame290222() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col items-start justify-start px-4 py-2 relative shrink-0 w-[212px]">
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#21282e] text-[14px] text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">Delete member</p>
      </div>
    </div>
  );
}

function Frame290225() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start px-0 py-2 relative shrink-0 w-full">
      <Frame290218 />
      <Frame290222 />
    </div>
  );
}

function Frame290236() {
  return (
    <div className="h-0 relative shrink-0 w-full">
      <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 212 2"
        >
          <g id="Frame 290227">
            <path
              d="M0 1H212"
              id="Vector 15"
              stroke="var(--stroke-0, #D7DADF)"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame290217() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col items-start justify-start mb-[-7px] overflow-clip p-0 relative rounded-lg shrink-0 w-full">
      <Frame290233 />
      <Frame290235 />
      <Frame290223 />
      <Frame290225 />
      <Frame290236 />
    </div>
  );
}

function Frame290229() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start justify-start left-[838px] pb-[7px] pt-0 px-0 shadow-[0px_2px_5px_0px_rgba(0,0,0,0.15)] top-[1354px]">
      <Frame290232 />
      <Frame290217 />
    </div>
  );
}

export default function Frame289605() {
  return (
    <div className="relative size-full">
      <Component1440WDefault />
      <Frame290231 />
      <Frame290229 />
    </div>
  );
}