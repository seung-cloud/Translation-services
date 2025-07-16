export default function FAQPage() {
    return (
        <div className="p-8 max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">자주 묻는 질문 (FAQ)</h1>
            <ul className="space-y-6">
                <li>
                    <span className="font-semibold text-blue-600">Q. 어떻게 AI 번역을 시작하나요?</span><br />
                    <span className="ml-4 text-gray-700">회원가입 후, 메인 화면의 "지금 AI를 사용해 보세요" 버튼을 누르면 바로 시작할 수 있습니다.</span>
                </li>
                <li>
                    <span className="font-semibold text-blue-600">Q. 포인트는 어떻게 충전하나요?</span><br />
                    <span className="ml-4 text-gray-700">상단 메뉴의 "충전 크레딧" 버튼을 통해 간편하게 결제 및 포인트 충전이 가능합니다.</span>
                </li>
                <li>
                    <span className="font-semibold text-blue-600">Q. 문의나 피드백은 어디서 하나요?</span><br />
                    <span className="ml-4 text-gray-700">Contact 페이지에서 언제든 문의 메일을 보내주시면 빠르게 답변드리겠습니다.</span>
                </li>
                <li>
                    <span className="font-semibold text-blue-600">Q. AI는 어떤 언어를 지원하나요?</span><br />
                    <span className="ml-4 text-gray-700">현재 영어, 일본어, 중국어를 지원하며, 앞으로 더 많은 언어를 추가할 예정입니다.</span>
                </li>
            </ul>
        </div>
    );
}
