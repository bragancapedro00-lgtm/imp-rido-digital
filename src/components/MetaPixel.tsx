"use client";

import { useEffect } from "react";
import Script from "next/script";
import { getMetaPixelId, isPixelConfigured, pageview } from "@/lib/pixel";

export default function MetaPixel() {
  const pixelId = getMetaPixelId();
  const configured = isPixelConfigured();

  useEffect(() => {
    // Dispara PageView no carregamento inicial da página
    if (configured) {
      pageview();
    } else if (process.env.NODE_ENV === "development") {
      console.info(
        "ℹ️ [Meta Pixel]: Variável NEXT_PUBLIC_META_PIXEL_ID vazia. Para ativar o rastreamento real, defina o ID no arquivo .env.local ou nas variáveis da Vercel."
      );
    }
  }, [configured]);

  if (!configured) {
    return null;
  }

  return (
    <>
      <Script
        id="meta-pixel-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${pixelId}');
            fbq('track', 'PageView');
          `,
        }}
      />
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  );
}
