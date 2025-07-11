"use client";
import { signIn, signOut, useSession } from "next-auth/react";

type AuthButtonProps = {
    className?: string;
};

export default function AuthButton({ className }: AuthButtonProps) {
    const { data: session } = useSession();

    if (session) {
        return (
            <>
                <span className={className}>{session.user?.name}님 환영합니다!</span>
                <button className={className} onClick={() => signOut()}>로그아웃</button>
            </>
        );
    }
    return (
        <button className={className} onClick={() => signIn("google")}>구글로 로그인</button>
    );
}
