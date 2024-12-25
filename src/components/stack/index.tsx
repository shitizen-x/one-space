import { MonotonFont } from "@/common/font"
import { TagCloud, TagCloudOptions } from "@frank-mayer/react-tag-cloud"
import classNames from "classnames"
import { useEffect } from "react"
import { SECTION_TYPE } from "../tabs/constants"

const stackList = [
  "SEO",
  "SEM",
  "Google",
  "Facebook",
  "Wordpress",
  "微信公众号",
  "电商运营",
  "兴趣电商",
  "传统电商",
  "跨境电商",
  "新媒体运营",
  "数据分析",
  "Prompt Engineering",
  "Ai",
  "私域运营",
  "独立站运营",
  "信息流优化",
  "淘宝",
  "拼多多",
  "京东",
  "抖音",
  "小红书",
  "视频号",
  "快手",
  "TikTok",
  "Teum",
  "速卖通",
  "亚马逊"
]

const Stack = () => {
  useEffect(() => {
    const elList = document.getElementsByClassName("tagcloud--item")
    if (elList.length) {
      Array.from(elList).forEach((el) => {
        ;(el as HTMLSpanElement).style.fontSize = "25px"
        ;(el as HTMLSpanElement).style.fontFamily = "'__Bree_Serif_22a902', '__Bree_Serif_Fallback_22a902'"
      })
    }
  }, [])

  return (
    <div id={SECTION_TYPE.STACK} className="mt-32 pt-40 w-[90%] max-w-[1040px] mx-auto">
      <div className={classNames("w-full text-center text-6xl", MonotonFont.className)}>
        My Skills
      </div>

      <div
        className="w-full aspect-square mx-auto flex justify-center items-center mt-24 relative rounded-3xl"
        style={{
          boxShadow: "rgba(0, 0, 0, 0.2) 0px 12px 15px 0px"
        }}
      >
        <TagCloud
          options={(w: Window & typeof globalThis): TagCloudOptions => ({
            radius: (w.innerWidth * 0.9  > 920 ? 920 : w.innerWidth * 0.9) * 0.5,
            maxSpeed: "normal",
          })}
          onClickOptions={{ passive: true }}
        >
          {stackList}
        </TagCloud>
        <div className="w-full h-full bg-repeat bg-[url('/background.png')] bg-[length:100px_100px] opacity-15 absolute top-0 left-0 z-[0] rounded-3xl">
        </div>
      </div>
    </div>
  )
}

export default Stack
