import { create } from "zustand";

interface AudioStore {
    isConnected: boolean;
    setConnected: (state: boolean) => void;
    isRecording: boolean;
    setRecording: (state: boolean) => void;
    isSpeaking: boolean;
    setSpeaking: (state: boolean) => void;
    debugMessages: string[];
    addDebugMessage: (msg: string) => void;
    currentVolume: number;
    setCurrentVolume: (volume: number) => void;
    voiceDetected: boolean;
    setVoiceDetected: (state: boolean) => void;
    sttResult: string;
    setSttResult: (result: string) => void;
}

export const useAudioStore = create<AudioStore>((set) => ({
    isConnected: false,
    setConnected: (isConnected) => set({ isConnected }),
    isRecording: false,
    setRecording: (isRecording) => set({ isRecording }),
    isSpeaking: false,
    setSpeaking: (isSpeaking) => set({ isSpeaking }),
    debugMessages: [],
    addDebugMessage: (msg) =>
        set((state) => ({
            debugMessages: [...state.debugMessages, msg].slice(-5),
        })),
    currentVolume: 0,
    setCurrentVolume: (volume) => set({ currentVolume: volume }),
    voiceDetected: false,
    setVoiceDetected: (voiceDetected) => set({ voiceDetected }),
    sttResult: "",
    setSttResult: (sttResult) => set({ sttResult }),
}));
