"use client";
import { useRouter } from "next/navigation";
import { FaRegCommentDots } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link"; // ← 추가

const LANGUAGES = [
    { code: "en", flag: "🇺🇸", label: "영어 번역" },
    { code: "jp", flag: "🇯🇵", label: "일본어 번역" },
    { code: "cn", flag: "🇨🇳", label: "중국어 번역" }, // 언어를 바꾸고싶으면 이 부분 건들면된다.
];

export default function Home() {
    const router = useRouter();

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-blue-50">
            <div className="bg-white rounded-3xl shadow-2xl p-10 w-full max-w-xl flex flex-col items-center">
                {/* 상단 로고 */}
                <div className="mb-2">
                    <div className="bg-blue-200 text-blue-700 w-12 h-12 rounded-full flex items-center justify-center text-2xl shadow">
                        <FaRegCommentDots />
                    </div>
                </div>
                {/* 제목 */}
                <div className="text-center mb-2">
                    <div className="text-2xl font-bold text-gray-800">AI로</div>
                    <div className="text-3xl font-black text-blue-600 mb-1">음성 및 번역 학습</div>
                    <div className="text-gray-500 text-sm">영어, 일본어 등으로 실제 대화를 빠르게 연습하세요</div>
                </div>
                {/* CTA 버튼 */}
                <div className="flex gap-3 my-6">
                    <button
                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-5 py-2 rounded-xl shadow transition"
                        onClick={() => router.push("/study")}
                    >
                        지금 AI를 사용해 보세요
                    </button>
                    <button
                        className="bg-gray-200 hover:bg-yellow-400 text-gray-800 font-bold px-5 py-2 rounded-xl shadow transition"
                        onClick={() => router.push("/charge")}
                    >
                        충전 크레딧
                    </button>
                </div>
                {/* 언어 카드 */}
                <div className="flex gap-4 mb-6 w-full justify-center">
                    {LANGUAGES.map((lang) => (
                        <div
                            key={lang.code}
                            className="bg-white border-2 border-blue-100 hover:border-blue-400 shadow-md rounded-xl flex flex-col items-center p-4 w-32 transition"
                        >
                            <span className="text-3xl mb-2">{lang.flag}</span>
                            <span className="font-bold text-gray-800 mb-1">{lang.label}</span>
                            <button
                                className="mt-2 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 rounded-lg flex items-center justify-center gap-1 transition"
                                onClick={() => router.push(`/study?lang=${lang.code}`)}
                            >
                                시작 <FaChevronRight className="text-xs" />
                            </button>
                        </div>
                    ))}
                </div>
                {/* 하단 링크 */}
                <div className="flex gap-6 text-gray-400 text-xs justify-center">
                    <Link href="/faq" className="hover:text-blue-500">FAQ</Link>
                    <Link href="/contact" className="hover:text-blue-500">Contact</Link>
                    <Link href="/privacy" className="hover:text-blue-500">Privacy</Link>
                </div>
            </div>
        </div>
    );
}
