export default function PrivacyPage() {
    return (
        <div className="p-8 max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">개인정보 처리방침 (Privacy Policy)</h1>
            <p className="mb-4 text-gray-700">
                저희 AI 번역 서비스는 이용자의 개인정보를 소중하게 생각하며, 아래와 같이 안전하게 관리합니다.
            </p>
            <ul className="list-disc ml-6 mb-4 text-gray-700 space-y-2">
                <li>회원 가입 시 수집되는 최소한의 정보(이메일, 이름)만 사용합니다.</li>
                <li>수집된 정보는 서비스 제공 및 회원 관리, 문의 대응 외의 용도로 사용하지 않습니다.</li>
                <li>모든 데이터는 암호화되어 안전하게 저장됩니다.</li>
                <li>탈퇴 요청 시 즉시 개인정보를 삭제합니다.</li>
            </ul>
            <p className="text-sm text-gray-500">
                보다 자세한 내용이 궁금하시면 언제든 <a href="mailto:support@ai-reactor.com" className="text-blue-700 underline">support@ai-reactor.com</a> 으로 문의해 주세요.
            </p>
        </div>
    );
}
