"use client";
import { useState } from "react";
import { FiPlus, FiX } from "react-icons/fi";

const CONTACT_LIST = [
    {
        q: "어떻게 문의할 수 있나요?",
        a: "서비스 이용 중 궁금한 점이나 건의 사항이 있으시면 support@ai-reactor.com 으로 메일을 보내주세요. 최대한 빠르게 답변드리겠습니다.",
    },
    {
        q: "문의 시 어떤 정보를 적어야 하나요?",
        a: "문의 내용, 성함(또는 닉네임), 연락 가능한 이메일을 함께 남겨주시면 더욱 정확하고 빠르게 안내해 드릴 수 있습니다.",
    },
    {
        q: "운영 시간은 언제인가요?",
        a: "문의는 24시간 접수되며, 평일 오전 9시~오후 6시 내에 최대한 신속하게 답변드리고 있습니다. (주말/공휴일 답변은 지연될 수 있습니다.)",
    },
    {
        q: "기타 제휴/협업 문의도 가능한가요?",
        a: "네! 각종 제휴/협업/사업 제안은 언제든 메일로 환영합니다.",
    },
];

export default function ContactPage() {
    const [open, setOpen] = useState<number | null>(null);

    return (
        <div className="min-h-screen bg-[#f7f8fa] flex flex-col items-center pt-16 px-2">
            <div className="w-full max-w-2xl">
                <h1 className="text-3xl font-extrabold text-[#172655] mb-10 text-center tracking-tight">
                    문의
                </h1>
                <ul className="bg-white rounded-2xl shadow-md border border-gray-100 divide-y divide-gray-200 mb-8">
                    {CONTACT_LIST.map((item, idx) => (
                        <li key={idx} className="transition">
                            <button
                                onClick={() => setOpen(open === idx ? null : idx)}
                                className="flex w-full items-center justify-between px-8 py-6 text-left focus:outline-none hover:bg-gray-50 transition"
                                aria-expanded={open === idx}
                                aria-controls={`contact-answer-${idx}`}
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
                                    id={`contact-answer-${idx}`}
                                    className="px-8 py-6 text-gray-600 text-sm"
                                    style={{ background: "#f5f7fa" }}
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
