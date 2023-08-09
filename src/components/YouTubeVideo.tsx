import React from "react";

export default function YouTubVideo({videoId, alt, className}: { videoId: string, alt: string, className?: string }) {
    const rotation = Math.round(Math.random() * 10) - 5;

    return <div className={"relative bg-gray-100 shadow-lg p-4 " + className}
                style={{
                    transform: `rotate(${rotation}deg)`,
                }}>
        <div
            className={"absolute z-20 top-0 left-0 right-0 bottom-0 photogradient pointer-events-none"}/>

        <iframe
            className={"border-black border-2 w-full aspect-square object-cover object-center"}
            src={`https://www.youtube.com/embed/${videoId}`}
            allowFullScreen
        />

        <h1
            key={"title"}
            className={"mt-3 w-full text-center text-black text-sm font-bold"}
        >
            {alt}
        </h1>
    </div>
}
