"use client";
import { useRouter } from "next/navigation";
import { FaRegCommentDots } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link"; // ← 추가
import { useSession } from "next-auth/react"; // ⭐️ 로그인 세션 임포트

const LANGUAGES = [
    { code: "en", flag: "🇺🇸", label: "영어 번역" },
    { code: "jp", flag: "🇯🇵", label: "일본어 번역" },
    { code: "cn", flag: "🇨🇳", label: "중국어 번역" }, // 언어를 바꾸고싶으면 이 부분 건들면된다.
];

// 샘플 공지, 미션, 학습현황 데이터 (향후 API 연동)
const notices = [
    { id: 1, text: "신규 회원 가입 시 500크레딧 지급 이벤트 진행 중!" },
    { id: 2, text: "AI 음성 평가 업데이트 안내 (v1.2)" },
];

const todayMission = {
    title: "오늘의 미션",
    content: "‘Hello’로 시작하는 3문장 말하기",
    reward: "+50 포인트",
};

const myStats = {
    today: "15분 학습",
    progress: "주간 미션 60% 달성",
    rank: "전체 14위",
};

export default function Home() {
    const router = useRouter();
    const { data: session } = useSession(); // ⭐️ 로그인 세션
    const isLoggedIn = !!session; // 로그인 여부 true/false

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
                {/* 공지사항(항상 표시) */}
                <div className="w-full mb-4">
                    <div className="text-base font-semibold text-blue-600 mb-1">📢 공지사항</div>
                    <ul className="bg-blue-50 rounded-xl px-4 py-2 text-gray-700 text-sm space-y-1">
                        {notices.map((notice) => (
                            <li key={notice.id}>• {notice.text}</li>
                        ))}
                    </ul>
                </div>
                {/* 오늘의 미션(로그인 시에만 표시) */}
                {isLoggedIn && (
                    <div className="w-full mb-4">
                        <div className="text-base font-semibold text-yellow-600 mb-1">🔥 오늘의 미션</div>
                        <div className="bg-yellow-50 rounded-xl px-4 py-2 flex flex-col gap-1">
                            <span className="font-semibold">{todayMission.content}</span>
                            <span className="text-xs text-yellow-500">{todayMission.reward}</span>
                        </div>
                    </div>
                )}
                {/* 나의 학습 현황(로그인 시에만 표시) */}
                {isLoggedIn && (
                    <div className="w-full mb-6">
                        <div className="text-base font-semibold text-green-600 mb-1">📊 나의 학습현황</div>
                        <div className="bg-green-50 rounded-xl px-4 py-2 flex flex-col gap-1 text-gray-800 text-sm">
                            <div>오늘: <span className="font-bold">{myStats.today}</span></div>
                            <div>주간 미션: <span className="font-bold">{myStats.progress}</span></div>
                            <div>랭킹: <span className="font-bold">{myStats.rank}</span></div>
                        </div>
                    </div>
                )}
                {/* 비로그인 안내문구(로그인 안했을 때만 표시) */}
                {!isLoggedIn && (
                    <div className="w-full mb-6 text-gray-400 text-center">
                        <span>로그인하면 오늘의 미션과 학습 현황을 볼 수 있습니다.</span>
                    </div>
                )}
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
