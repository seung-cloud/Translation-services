"use client";
import { useState } from "react";
import { FiPlus, FiX } from "react-icons/fi";

const FAQS = [
    {
        q: "어떻게 AI 번역을 시작하나요?",
        a: "회원가입 후, 메인 화면의 '지금 AI를 사용해 보세요' 버튼을 누르면 바로 시작할 수 있습니다.",
    },
    {
        q: "포인트는 어떻게 충전하나요?",
        a: "상단 메뉴의 '충전 크레딧' 버튼을 통해 결제 및 포인트 충전이 가능합니다.",
    },
    {
        q: "문의나 피드백은 어디서 하나요?",
        a: "Contact 페이지에서 언제든 문의 메일을 보내주시면 빠르게 답변드리겠습니다.",
    },
    {
        q: "AI는 어떤 언어를 지원하나요?",
        a: "현재 영어, 일본어, 중국어를 지원하며, 앞으로 더 많은 언어를 추가할 예정입니다.",
    },
];

export default function FAQPage() {
    const [open, setOpen] = useState<number | null>(null);

    return (
        <div className="min-h-screen bg-[#f7f8fa] flex flex-col items-center pt-16 px-2">
            <div className="w-full max-w-2xl">
                <h1 className="text-3xl font-extrabold text-[#172655] mb-10 text-center tracking-tight">
                    자주 묻는 질문들
                </h1>
                <ul className="bg-white rounded-2xl shadow-md border border-gray-100 divide-y divide-gray-200 mb-8">
                    {FAQS.map((item, idx) => (
                        <li key={idx} className="transition">
                            <button
                                onClick={() => setOpen(open === idx ? null : idx)}
                                className="flex w-full items-center justify-between px-8 py-6 text-left focus:outline-none hover:bg-gray-50 transition"
                                aria-expanded={open === idx}
                                aria-controls={`faq-answer-${idx}`}
                            >
                                <span className="text-base font-semibold text-[#172655]">
                                    {item.q}
                                </span>
                                {open === idx ? (
                                    <FiX className="text-2xl text-[#172655]" />
                                ) : (
                                    <FiPlus className="text-2xl text-[#d0d3e2]" />
                                )}
                            </button>
                            {open === idx && (
                                <div
                                    id={`faq-answer-${idx}`}
                                    className="px-8 py-6 text-gray-600 text-sm"
                                    style={{ background: "#f5f7fa" }}  // 더 밝은 회색(스픽 느낌)
                                >
                                    {item.a}
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
