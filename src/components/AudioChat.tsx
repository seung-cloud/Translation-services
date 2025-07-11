"use client"; // <-- 반드시 맨 위에 추가

import { useAudioStore } from "@/store/audioStore";
import { useEffect, useRef } from "react";

const AudioChat = () => {
    const {
        setConnected,
        debugMessages,
        addDebugMessage,
        currentVolume,

        voiceDetected,

        sttResult,
        setSttResult,
    } = useAudioStore();

    const wsRef = useRef<WebSocket | null>(null);

    useEffect(() => {
        wsRef.current = new WebSocket(
            "wss://gagell.ngrok.io/realtime_stream_webrtc"
        );

        wsRef.current.onopen = () => {
            setConnected(true);
            addDebugMessage("✅ WebSocket 연결 성공");
        };

        wsRef.current.onmessage = (event) => {
            const data = JSON.parse(event.data);
            if (data.event === "stt_result") {
                setSttResult(data.stt_text);
            }
        };

        wsRef.current.onclose = () => {
            setConnected(false);
            addDebugMessage("🔴 연결 종료");
        };

        wsRef.current.onerror = () => {
            addDebugMessage("❌ WebSocket 오류 발생");
        };

        return () => wsRef.current?.close();
    }, [setConnected, addDebugMessage, setSttResult]);

    return (
        <div className="p-4 border rounded-lg">
            <h2 className="text-xl font-bold mb-4">AI 음성 채팅</h2>
            <div>
                {debugMessages.map((msg, index) => (
                    <p key={index}>{msg}</p>
                ))}
            </div>
            <div>
                <p>볼륨: {currentVolume}</p>
                <p>음성 감지: {voiceDetected ? "예" : "아니오"}</p>
                <p>STT 결과: {sttResult}</p>
            </div>
        </div>
    );
};

export default AudioChat;
