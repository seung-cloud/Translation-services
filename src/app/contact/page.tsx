export default function ContactPage() {
    return (
        <div className="p-8 max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">문의하기 (Contact)</h1>
            <p className="mb-4 text-gray-700">
                서비스 이용 중 궁금한 점이나 불편한 점이 있다면 언제든 아래 메일로 문의해 주세요.<br />
                <span className="font-semibold">빠르게 답변드릴 수 있도록 자세히 남겨주시면 감사하겠습니다.</span>
            </p>
            <div className="mb-8">
                <span className="text-blue-600 font-bold">문의 메일: </span>
                <a href="mailto:support@ai-reactor.com" className="text-blue-700 underline">support@ai-reactor.com</a>
            </div>
            <p className="text-sm text-gray-500">
                ※ 개인정보나 결제 관련 문의는 <b>Privacy</b> 페이지를 참고해 주세요.
            </p>
        </div>
    );
}
