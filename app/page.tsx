import Image from "next/image"
import { Mail, Camera, Search } from "lucide-react"

export default function Page() {
  const links = [
    {
      title: "Google",
      icon: <Search className="w-6 h-6" />,
      color: "bg-[#FF3D00]",
      url: "mailto:nsyazyy@gmail.com",
    },
    {
      title: "Email",
      icon: <Mail className="w-6 h-6" />,
      color: "bg-[#4CAF50]",
      url: "mailto:su826@naver.com",
    },
    {
      title: "Instagram",
      icon: <Camera className="w-6 h-6" />,
      color: "bg-[#E1306C]",
      url: "https://instagram.com/manifl",
    },
  ]

  return (
    <div className="min-h-screen bg-[#F4D03F] flex flex-col items-center py-12 px-4 font-sans text-black">
      <div className="max-w-md w-full space-y-8">
        {/* Profile Card */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col items-center">
          <div className="relative w-32 h-32 mb-6 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] overflow-hidden rounded-full">
            <Image
              src="/dog_profile.png"
              alt="NSY Profile"
              fill
              className="object-cover"
            />
          </div>
          <h1 className="text-4xl font-black uppercase tracking-tighter mb-2">
            NSY
          </h1>
          <p className="text-lg font-bold text-center leading-tight">
            반갑습니다! 바이브코딩 -마이링크 프로젝트 nsy입니다
          </p>
        </div>

        {/* Links */}
        <div className="space-y-4">
          {links.map((link) => (
            <a
              key={link.title}
              href={link.url}
              className={`flex items-center gap-4 p-4 ${link.color} border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-transform hover:-translate-y-1 active:translate-y-0.5 active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]`}
            >
              <div className="bg-white p-2 border-2 border-black">
                {link.icon}
              </div>
              <span className="text-xl font-black uppercase italic">
                {link.title}
              </span>
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center pt-8">
          <p className="font-bold text-sm bg-black text-white inline-block px-4 py-1 border-2 border-black shadow-[4px_4px_0px_0px_#F4D03F]">
            © 2026 MYLINK. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </div>
  )
}
