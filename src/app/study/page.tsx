"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";

export default function StudyPage() {
    const searchParams = useSearchParams();
    const companyId = searchParams.get("lang") || "en_company"; // 기본값 영어
    const wsRef = useRef<WebSocket | null>(null);

    useEffect(() => {
        wsRef.current = new WebSocket(
            `wss://gagell.ngrok.io/realtime_stream_webrtc`
        );

        wsRef.current.onopen = () => {
            wsRef.current?.send(
                JSON.stringify({
                    event: "start",
                    start: {
                        streamSid: "browser-" + Date.now(),
                        companyId: companyId, // 동적으로 선택된 언어 설정(companyId)
                    },
                })
            );
        };

        wsRef.current.onmessage = (event) => {
            console.log("서버 응답:", event.data);
        };

        return () => wsRef.current?.close();
    }, [companyId]); // 언어가 변경될 때마다 재실행

    return (
        <div className="min-h-screen flex items-center justify-center">
            <p>학습 중 (언어: {companyId.toUpperCase()})</p>
        </div>
    );
}
