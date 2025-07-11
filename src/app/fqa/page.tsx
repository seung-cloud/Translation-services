export default function FAQPage() {
    return (
        <div className="p-8 max-w-2xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">FAQ</h1>
            <ul className="list-disc ml-6 space-y-2">
                <li>Q. 어떻게 이용하나요?<br />A. 회원가입 후 AI 번역을 시작하세요!</li>
                <li>Q. 포인트 충전은 어디서 하나요?<br />A. 상단 [충전 크레딧] 메뉴를 이용하세요.</li>
                <li>Q. 문의사항이 있어요.<br />A. Contact 페이지를 이용해 주세요.</li>
            </ul>
        </div>
    );
}
