"use client";
import { useState } from "react";
import { FiPlus, FiX } from "react-icons/fi";

const PRIVACY_LIST = [
    {
        q: "어떤 정보를 수집하나요?",
        a: "회원 가입 시 이메일, 이름 등 서비스 제공에 최소한의 정보만 수집합니다. 수집된 정보는 서비스 제공 및 관리 이외의 목적으로 사용되지 않습니다.",
    },
    {
        q: "내 정보는 안전하게 관리되나요?",
        a: "모든 개인정보는 암호화되어 안전하게 저장되며, 외부 유출이나 무단 접근을 방지하기 위한 기술적·관리적 보호조치를 적용하고 있습니다.",
    },
    {
        q: "탈퇴하면 정보는 바로 삭제되나요?",
        a: "회원 탈퇴 시 즉시 모든 개인정보가 안전하게 삭제됩니다. 단, 관계 법령에 따라 일정 기간 보관해야 하는 정보는 별도 보관 후 파기됩니다.",
    },
    {
        q: "더 궁금한 점이 있으면?",
        a: "support@ai-reactor.com 으로 문의주시면 빠르게 답변드리겠습니다.",
    },
];

export default function PrivacyPage() {
    const [open, setOpen] = useState<number | null>(null);

    return (
        <div className="min-h-screen bg-[#f7f8fa] flex flex-col items-center pt-16 px-2">
            <div className="w-full max-w-2xl">
                <h1 className="text-3xl font-extrabold text-[#172655] mb-10 text-center tracking-tight">
                    개인정보 처리방침
                </h1>
                <ul className="bg-white rounded-2xl shadow-md border border-gray-100 divide-y divide-gray-200 mb-8">
                    {PRIVACY_LIST.map((item, idx) => (
                        <li key={idx} className="transition">
                            <button
                                onClick={() => setOpen(open === idx ? null : idx)}
                                className="flex w-full items-center justify-between px-8 py-6 text-left focus:outline-none hover:bg-gray-50 transition"
                                aria-expanded={open === idx}
                                aria-controls={`privacy-answer-${idx}`}
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
                                    id={`privacy-answer-${idx}`}
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
