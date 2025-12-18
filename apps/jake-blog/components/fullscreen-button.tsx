"use client";
import { Maximize, Minimize } from "lucide-react";
import { Button } from "./ui/button";
import useFullscreen from "@/hooks/useFullscreen";


export function FullscreenButton() {
  const { isFullscreen, toggle } = useFullscreen(undefined, {
    autoEnter: false, // 不自動進入全螢幕，避免權限問題
    exitOnEscape: true, // ESC 鍵可以退出全螢幕
  });

  const handleClick = () => {
    toggle();
  };

  return (
    <>
      <Button
        variant="link"
        size="icon"
        onClick={handleClick}
        className="fixed top-0 right-0 z-50"
        title={isFullscreen ? "退出全螢幕 (ESC)" : "進入全螢幕"}
      >
        {isFullscreen ? (
          <Minimize className="h-4 w-4 text-white" />
        ) : (
          <Maximize className="h-4 w-4 text-white" />
        )}
      </Button>
    </>
  );
}
