// app/charge/page.tsx
"use client";
import ChargeButton from "@/components/ChargeButton";

export default function ChargePage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-lg p-10 w-full max-w-sm flex flex-col items-center">
        <div className="font-bold text-2xl mb-6 text-gray-800">포인트 충전</div>
        <ChargeButton amount={5000} label="500P 충전 (₩5,000)" />
        <ChargeButton amount={9500} label="1,000P 충전 (₩9,500)" />
        <ChargeButton amount={18000} label="2,000P 충전 (₩18,000)" />
        <div className="text-xs text-gray-400 mt-4 text-center">
          충전 금액은 부가세 포함<br />
          문의: support@ai-reactor.com
        </div>
      </div>
    </div>
  );
}
