import { useCallback, useState, useEffect, RefObject } from "react";

// 擴展 Document 和 Element 類型以支援跨瀏覽器全螢幕 API
declare global {
  interface Document {
    webkitExitFullscreen?: () => Promise<void>;
    mozCancelFullScreen?: () => Promise<void>;
    msExitFullscreen?: () => Promise<void>;
    webkitFullscreenElement?: Element;
    mozFullScreenElement?: Element;
    msFullscreenElement?: Element;
    webkitFullscreenEnabled?: boolean;
    mozFullScreenEnabled?: boolean;
    msFullscreenEnabled?: boolean;
  }

  interface Element {
    webkitRequestFullscreen?: () => Promise<void>;
    mozRequestFullScreen?: () => Promise<void>;
    msRequestFullscreen?: () => Promise<void>;
  }
}

interface UseFullscreenOptions {
  autoEnter?: boolean; // 自動進入全螢幕
  exitOnEscape?: boolean; // ESC 鍵退出全螢幕
}

export default function useFullscreen(
  targetRef?: RefObject<Element>,
  options: UseFullscreenOptions = {},
) {
  const { autoEnter = false, exitOnEscape = true } = options;
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);

  const request = useCallback(async () => {
    const el = targetRef?.current || document.documentElement;
    try {
      // 檢查是否支援全螢幕 API
      if (
        !document.fullscreenEnabled &&
        !document.webkitFullscreenEnabled &&
        !document.mozFullScreenEnabled &&
        !document.msFullscreenEnabled
      ) {
        console.warn("Fullscreen API is not supported");
        return;
      }

      if (el.requestFullscreen) {
        await el.requestFullscreen();
      } else if (el.webkitRequestFullscreen) {
        await el.webkitRequestFullscreen();
      } else if (el.mozRequestFullScreen) {
        await el.mozRequestFullScreen();
      } else if (el.msRequestFullscreen) {
        await el.msRequestFullscreen();
      }
    } catch (e: any) {
      // 如果是權限錯誤，提示用戶需要手動觸發
      if (e.name === "NotAllowedError") {
        console.warn(
          "Fullscreen request must be triggered by user interaction",
        );
      }
    }
  }, [targetRef]);

  const exit = useCallback(async () => {
    try {
      if (document.exitFullscreen) {
        await document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        await document.webkitExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        await document.mozCancelFullScreen();
      } else if (document.msExitFullscreen) {
        await document.msExitFullscreen();
      }
    } catch (e) {
      console.error("exitFullscreen failed", e);
    }
  }, []);

  const toggle = useCallback(() => {
    if (isFullscreen) {
      exit();
    } else {
      request();
    }
  }, [isFullscreen, exit, request]);

  // 檢查全螢幕狀態
  const checkFullscreenStatus = useCallback(() => {
    const fullscreenElement =
      document.fullscreenElement ||
      document.webkitFullscreenElement ||
      document.mozFullScreenElement ||
      document.msFullscreenElement;

    setIsFullscreen(!!fullscreenElement);
  }, []);

  useEffect(() => {
    // 監聽全螢幕狀態變化
    const events = [
      "fullscreenchange",
      "webkitfullscreenchange",
      "mozfullscreenchange",
      "MSFullscreenChange",
    ];

    events.forEach((event) => {
      document.addEventListener(event, checkFullscreenStatus);
    });

    // ESC 鍵退出全螢幕
    const handleKeyDown = (event: KeyboardEvent) => {
      if (exitOnEscape && event.key === "Escape" && isFullscreen) {
        exit();
      }
    };

    // 監聽用戶互動事件
    const handleUserInteraction = () => {
      setHasUserInteracted(true);
      // 如果設定自動進入全螢幕且用戶已互動，則嘗試進入全螢幕
      if (autoEnter && !isFullscreen) {
        request();
      }
    };

    // 用戶互動事件
    const interactionEvents = ["click", "keydown", "touchstart"];

    if (exitOnEscape) {
      document.addEventListener("keydown", handleKeyDown);
    }

    // 如果需要自動進入全螢幕，監聽用戶互動
    if (autoEnter && !hasUserInteracted) {
      interactionEvents.forEach((event) => {
        document.addEventListener(event, handleUserInteraction, { once: true });
      });
    }

    return () => {
      events.forEach((event) => {
        document.removeEventListener(event, checkFullscreenStatus);
      });
      if (exitOnEscape) {
        document.removeEventListener("keydown", handleKeyDown);
      }
      interactionEvents.forEach((event) => {
        document.removeEventListener(event, handleUserInteraction);
      });
    };
  }, [
    checkFullscreenStatus,
    exitOnEscape,
    isFullscreen,
    autoEnter,
    request,
    exit,
    hasUserInteracted,
  ]);

  return {
    isFullscreen,
    request,
    exit,
    toggle,
  };
}
