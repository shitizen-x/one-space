import { useMemo } from "react"
import { useInView } from "react-intersection-observer"
import { SECTION_TYPE } from "../tabs/constants"

import GithubSVG from "@/assets/icon/github.svg"
import TwitterSVG from "@/assets/icon/twitter.svg"
import GmailSVG from "@/assets/icon/gmail.svg"
import TelegramSVG from "@/assets/icon/telegram.svg"
import V2exSVG from "@/assets/icon/v2ex.svg"
import Image from "next/image"

import { BreeSerifFont } from "@/common/font"
import classNames from "classnames"

const contactList = [
  {
    icon: GithubSVG,
    link: "https://github.com/LHRUN"
  },
  {
    icon: TwitterSVG,
    link: "https://twitter.com/Song_LongHao"
  },
  {
    icon: GmailSVG,
    email: "mailto:song.lhlh@gmail.com"
  },
  {
    icon: TelegramSVG,
    link: "https://twitter.com/Song_LongHao"
  },
  {
    icon: V2exSVG,
    link: "https://www.v2ex.com/member/LHRUN"
  },
]

const threshold: number[] = []
for (let i = 0; i < 1; i = i + 0.025) {
  threshold.push(i)
}

const About = () => {
  const { ref, entry } = useInView({
    threshold
  })

  const profileRadius = useMemo(() => {
    if (entry?.intersectionRatio === undefined || entry?.intersectionRatio === 1) {
      return "50%"
    }
    const radius = entry.intersectionRatio * 50
    return `${radius < 10 ? 10 : radius}%`
  }, [entry?.intersectionRatio])

  return (
    <div
      ref={ref}
      id={SECTION_TYPE.ABOUT}
      className="flex flex-col items-center justify-center pt-28 w-[90%] max-w-[840px] mx-auto"
    >
      <div
        className={classNames("relative cursor-pointer w-64 h-64 group")}
      >
        <Image
          src="/profile_cover-pixelicious.png"
          alt="profile"
          width={100}
          height={100}
          className="w-full h-full absolute top-0 left-0 z-[1] transition-all duration-300 group-hover:rotate-y-180"
          style={{
            borderRadius: profileRadius,
            backfaceVisibility: "hidden",
          }}
        />
        <Image
          src="/profile_cover.jpg"
          alt="profile"
          width={100}
          height={100}
          className="w-full h-full absolute top-0 left-0 transition-all duration-300 group-hover:rotate-y-180"
          style={{
            borderRadius: profileRadius
          }}
        />
      </div>

      <div
        className={classNames("text-2xl spacing-word-1", BreeSerifFont.className)}
        style={{
          wordSpacing: "0.25rem"
        }}
      >
        <div className="flex items-center justify-center gap-x-3 mt-16 mb-10">
          {
            contactList.map((item, index) => (
              <a
                href={item.email || item.link}
                target="_blank"
                className="p-1 border-black rounded-lg border-2 cursor-pointer hover:scale-110 transition-all dark:border-white"
                key={index}
              >
                <item.icon className="w-7 h-7" />
              </a>
            ))
          }
        </div>

        你好，我是谢海辉，一名拥有多年经验的互联网从业人员，主要从事电商、SEO、新媒体方面的工作。欢迎来到我的个人空间！

        <div className="mt-6">
       出于对互联网的热爱，我从2009年至今经历了传统电商到跨境电商再到兴趣电商的变革，熟悉电商行业的商业流程的闭环。期间也投入到SEO知识的学习与实操运营过多种类型的独立站，随着如今诸如抖音、小红书等兴趣电商以及AI技术的兴起我又开始寻找新的突破口。互联网时代，加速了几乎所有行业的轮替过程。我喜欢思考钻研，通过不断的学习，接触更多的项目，锻炼自己的能力，努力获得更多的杠杆效应，承担更多责任，学习更多专长，再将这些结合起来，突破原有的局限才能更好的生存下去。
        </div>
        
        <div className="mt-6">
          如果您想进一步了解我，请向下滑动屏幕。
        </div>
      </div>
    </div>
  )
}

export default About
