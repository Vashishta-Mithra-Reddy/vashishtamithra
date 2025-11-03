"use client";

import { useEffect } from "react";
import { toast } from "sonner";

export default function PWA() {
  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;

    const registerSW = async () => {
      try {
        const reg = await navigator.serviceWorker.register("/sw.js", { scope: "/" });
        reg.onupdatefound = () => {
          const newWorker = reg.installing;
          if (!newWorker) return;
          newWorker.onstatechange = () => {
            if (newWorker.state === "installed" && navigator.serviceWorker.controller) {
              toast("New version available", {
                action: { label: "Reload", onClick: () => window.location.reload() },
              });
            }
          };
        };
      } catch (err) {
        console.error("Service Worker registration failed:", err);
      }
    };

    registerSW();
  }, []);

  return null;
}