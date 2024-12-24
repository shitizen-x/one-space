import { BreeSerifFont } from "@/common/font"
import classNames from "classnames"
import FaceSVG from "@/assets/face.svg"

const PageFooter = () => {
  return (
    <div
      className='flex flex-col pt-56 mx-auto items-center justify-center w-[90%] max-w-[840px]'
      style={{
        wordSpacing: "0.25rem"
      }}
    >
      <div className='relative'>
        <FaceSVG className={classNames("w-20 h-20 twinkle-display")} />
        <FaceSVG className={classNames("w-20 h-20 twinkle-style")} />
      </div>
      <span className={classNames("text-2xl mt-6", BreeSerifFont.className)}>
        {
          "非常感谢您访问我的个人网站！我热衷于结交新朋友，非常乐意交流各种行业主题或新兴技术。如果您有任何问题或想讨论任何方向的任何事情，请随时与我联系。谢谢！"
        }
      </span>

      <div className="flex justify-center pt-32 pb-10">
        Designed by <a className="font-bold cursor-pointer ml-2" href="https://github.com/LHRUN" target="_blank" >{"'leo'"}</a>
      </div>
    </div>
  )
}

export default PageFooter
