"use client"

import Image from "next/image"
import { useState } from "react"
import { Mail, Camera, Search, Plus, Pencil, Trash2, Check, X } from "lucide-react"

type Link = {
  id: number
  title: string
  url: string
  color: string
}

const COLORS = [
  "bg-[#FF3D00]",
  "bg-[#4CAF50]",
  "bg-[#E1306C]",
  "bg-[#2979FF]",
  "bg-[#FF6F00]",
  "bg-[#7B1FA2]",
]

function getFaviconUrl(url: string) {
  try {
    const domain = new URL(url.startsWith("http") ? url : `https://${url}`).hostname
    return `https://www.google.com/s2/favicons?domain=${domain}&sz=32`
  } catch {
    return null
  }
}

export default function Page() {
  const [links, setLinks] = useState<Link[]>([
    { id: 1, title: "Google", url: "mailto:nsyazyy@gmail.com", color: "bg-[#FF3D00]" },
    { id: 2, title: "Email", url: "mailto:su826@naver.com", color: "bg-[#4CAF50]" },
    { id: 3, title: "Instagram", url: "https://instagram.com/manifl", color: "bg-[#E1306C]" },
  ])

  const [editingId, setEditingId] = useState<number | null>(null)
  const [editTitle, setEditTitle] = useState("")
  const [editUrl, setEditUrl] = useState("")

  const [isAdding, setIsAdding] = useState(false)
  const [newTitle, setNewTitle] = useState("")
  const [newUrl, setNewUrl] = useState("")
  const [newColor, setNewColor] = useState(COLORS[3])

  const handleEditStart = (link: Link) => {
    setEditingId(link.id)
    setEditTitle(link.title)
    setEditUrl(link.url)
  }

  const handleEditSave = (id: number) => {
    setLinks((prev) =>
      prev.map((l) =>
        l.id === id ? { ...l, title: editTitle, url: editUrl } : l
      )
    )
    setEditingId(null)
  }

  const handleEditCancel = () => {
    setEditingId(null)
  }

  const handleDelete = (id: number) => {
    setLinks((prev) => prev.filter((l) => l.id !== id))
  }

  const handleAddSave = () => {
    if (!newTitle.trim()) return
    const newLink: Link = {
      id: Date.now(),
      title: newTitle,
      url: newUrl,
      color: newColor,
    }
    setLinks((prev) => [...prev, newLink])
    setIsAdding(false)
    setNewTitle("")
    setNewUrl("")
    setNewColor(COLORS[3])
  }

  const handleAddCancel = () => {
    setIsAdding(false)
    setNewTitle("")
    setNewUrl("")
    setNewColor(COLORS[3])
  }

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
          {/* 역할 태그 */}
          <div className="flex gap-2 mb-3">
            <span className="bg-black text-white text-xs font-black uppercase px-3 py-1 border-2 border-black shadow-[2px_2px_0px_0px_#F4D03F]">
              student
            </span>
            <span className="bg-[#FF3D00] text-white text-xs font-black uppercase px-3 py-1 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              start creating useful things for ppl
            </span>
          </div>
          <p className="text-lg font-bold text-center leading-tight">
            반갑습니다! 바이브코딩 -마이링크 프로젝트 nsy입니다
          </p>
        </div>

        {/* Links */}
        <div className="space-y-4">
          {links.map((link) =>
            editingId === link.id ? (
              /* 수정 모드 */
              <div
                key={link.id}
                className="bg-white border-4 border-black p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] space-y-2"
              >
                <input
                  className="w-full border-2 border-black px-3 py-1 font-bold text-sm outline-none focus:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
                  placeholder="링크 이름"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                />
                <input
                  className="w-full border-2 border-black px-3 py-1 font-bold text-sm outline-none focus:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
                  placeholder="URL (예: https://example.com)"
                  value={editUrl}
                  onChange={(e) => setEditUrl(e.target.value)}
                />
                <div className="flex gap-2 pt-1">
                  <button
                    onClick={() => handleEditSave(link.id)}
                    className="flex items-center gap-1 bg-[#4CAF50] border-2 border-black px-3 py-1 font-black text-sm shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 transition-transform"
                  >
                    <Check className="w-4 h-4" /> 저장
                  </button>
                  <button
                    onClick={handleEditCancel}
                    className="flex items-center gap-1 bg-white border-2 border-black px-3 py-1 font-black text-sm shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 transition-transform"
                  >
                    <X className="w-4 h-4" /> 취소
                  </button>
                </div>
              </div>
            ) : (
              /* 일반 표시 모드 */
              <div key={link.id} className="flex items-center gap-2">
                <a
                  href={link.url}
                  className={`flex-1 flex items-center gap-4 p-4 ${link.color} border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-transform hover:-translate-y-1 active:translate-y-0.5 active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]`}
                >
                  <div className="bg-white p-1 border-2 border-black flex items-center justify-center w-9 h-9">
                    {getFaviconUrl(link.url) ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={getFaviconUrl(link.url)!}
                        alt={link.title}
                        width={20}
                        height={20}
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = "none"
                        }}
                      />
                    ) : (
                      <Search className="w-5 h-5" />
                    )}
                  </div>
                  <span className="text-xl font-black uppercase italic">
                    {link.title}
                  </span>
                </a>
                {/* 수정 버튼 */}
                <button
                  onClick={() => handleEditStart(link)}
                  className="bg-white border-2 border-black p-2 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 transition-transform"
                  title="수정"
                >
                  <Pencil className="w-4 h-4" />
                </button>
                {/* 삭제 버튼 */}
                <button
                  onClick={() => handleDelete(link.id)}
                  className="bg-[#FF3D00] border-2 border-black p-2 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 transition-transform"
                  title="삭제"
                >
                  <Trash2 className="w-4 h-4 text-white" />
                </button>
              </div>
            )
          )}

          {/* 새 링크 추가 폼 */}
          {isAdding ? (
            <div className="bg-white border-4 border-black p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] space-y-2">
              <input
                className="w-full border-2 border-black px-3 py-1 font-bold text-sm outline-none focus:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
                placeholder="링크 이름 (예: GitHub)"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
              />
              <input
                className="w-full border-2 border-black px-3 py-1 font-bold text-sm outline-none focus:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
                placeholder="URL (예: https://github.com/yourname)"
                value={newUrl}
                onChange={(e) => setNewUrl(e.target.value)}
              />
              {/* 색상 선택 */}
              <div className="flex gap-2 flex-wrap pt-1">
                {COLORS.map((c) => (
                  <button
                    key={c}
                    onClick={() => setNewColor(c)}
                    className={`w-6 h-6 ${c} border-2 ${newColor === c ? "border-black scale-125" : "border-gray-400"} transition-transform`}
                  />
                ))}
                <span className="text-xs font-bold self-center ml-1">색상 선택</span>
              </div>
              <div className="flex gap-2 pt-1">
                <button
                  onClick={handleAddSave}
                  className="flex items-center gap-1 bg-[#4CAF50] border-2 border-black px-3 py-1 font-black text-sm shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 transition-transform"
                >
                  <Check className="w-4 h-4" /> 추가
                </button>
                <button
                  onClick={handleAddCancel}
                  className="flex items-center gap-1 bg-white border-2 border-black px-3 py-1 font-black text-sm shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 transition-transform"
                >
                  <X className="w-4 h-4" /> 취소
                </button>
              </div>
            </div>
          ) : (
            /* 새로운 링크 추가하기 버튼 */
            <button
              onClick={() => setIsAdding(true)}
              className="w-full flex items-center justify-center gap-3 p-4 bg-white border-4 border-black border-dashed shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform font-black text-lg uppercase"
            >
              <Plus className="w-5 h-5" />
              새로운 링크 추가하기
            </button>
          )}
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
