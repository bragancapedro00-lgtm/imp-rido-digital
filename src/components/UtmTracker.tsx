"use client";

import React, { createContext, useContext, useEffect, useState, useTransition } from "react";
import { useSearchParams } from "next/navigation";
import { captureUtmsFromUrl, getStoredUtms, UtmParams } from "@/lib/utm";

interface UtmContextType {
  utms: UtmParams;
  hasUtms: boolean;
}

const UtmContext = createContext<UtmContextType>({
  utms: {},
  hasUtms: false,
});

export function useUtmContext() {
  return useContext(UtmContext);
}

function UtmListener({ children }: { children: React.ReactNode }) {
  const searchParams = useSearchParams();
  const [utms, setUtms] = useState<UtmParams>({});
  const [, startTransition] = useTransition();

  useEffect(() => {
    startTransition(() => {
      // 1. Extrai da URL se houver parâmetros
      const current = captureUtmsFromUrl(searchParams);
      // 2. Se a URL não tiver, busca do storage persistido
      const finalUtms = Object.keys(current).length > 0 ? current : getStoredUtms();
      setUtms(finalUtms);

      if (Object.keys(finalUtms).length > 0 && process.env.NODE_ENV === "development") {
        console.log("📍 [UTM Tracker] Parâmetros ativos:", finalUtms);
      }
    });
  }, [searchParams]);

  const hasUtms = Object.keys(utms).length > 0;

  return (
    <UtmContext.Provider value={{ utms, hasUtms }}>
      {children}
    </UtmContext.Provider>
  );
}

export default function UtmProvider({ children }: { children: React.ReactNode }) {
  return (
    <React.Suspense fallback={<>{children}</>}>
      <UtmListener>{children}</UtmListener>
    </React.Suspense>
  );
}
