"use client";

import { useState, useEffect } from "react";
import { Maximize, Minimize, Info } from "lucide-react";
import { Button } from "./ui/button";
import useFullscreen from "@/hooks/useFullscreen";

interface FullscreenButtonProps {
  className?: string;
  showWelcomePrompt?: boolean;
}

export function FullscreenButton({
  className = "",
  showWelcomePrompt = true,
}: FullscreenButtonProps) {
  const { isFullscreen, toggle } = useFullscreen(undefined, {
    autoEnter: false, // 不自動進入全螢幕，避免權限問題
    exitOnEscape: true, // ESC 鍵可以退出全螢幕
  });

  const [showPrompt, setShowPrompt] = useState(false);

  // 顯示歡迎提示
  useEffect(() => {
    if (showWelcomePrompt) {
      const timer = setTimeout(() => {
        setShowPrompt(true);
      }, 1000);

      const hideTimer = setTimeout(() => {
        setShowPrompt(false);
      }, 5000);

      return () => {
        clearTimeout(timer);
        clearTimeout(hideTimer);
      };
    }
  }, [showWelcomePrompt]);

  const handleClick = () => {
    setShowPrompt(false);
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
