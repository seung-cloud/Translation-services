// components/ChargeButton.tsx
"use client";
import { useState } from "react";

declare global {
    interface Window {
        IMP?: any;
    }
}

interface ChargeButtonProps {
    amount: number;
    label: string;
    onSuccess?: () => void;
}

export default function ChargeButton({ amount, label, onSuccess }: ChargeButtonProps) {
    const [isPaying, setIsPaying] = useState(false);

    const handleCharge = () => {
        if (!window.IMP) {
            alert("아임포트 결제 라이브러리가 로드되지 않았습니다.");
            return;
        }
        setIsPaying(true);

        window.IMP.init("imp17211771"); // 예: imp12345678

        window.IMP.request_pay(
            {
                pg: "tosspayments",
                pay_method: "card",
                merchant_uid: "mid_" + new Date().getTime(),
                name: label,
                amount: amount,
                buyer_email: "email@sample.com",
                buyer_name: "홍길동",
                buyer_tel: "010-1234-5678",
            },
            function (rsp: any) {
                setIsPaying(false);
                if (rsp.success) {
                    alert("결제 성공! 결제번호: " + rsp.imp_uid);
                    if (onSuccess) onSuccess();
                } else {
                    alert("결제 실패: " + rsp.error_msg);
                }
            }
        );
    };

    return (
        <button
            className="w-full my-2 py-3 rounded-lg text-lg font-bold bg-green-400 hover:bg-green-500 text-white transition disabled:opacity-60"
            onClick={handleCharge}
            disabled={isPaying}
        >
            {isPaying ? "결제 진행 중..." : label}
        </button>
    );
}
