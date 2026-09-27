/**
 * Utilitários do Meta Pixel (Facebook Ads)
 * 
 * Permite disparar eventos padrão como PageView e Lead,
 * além de repassar os parâmetros UTM para o Meta Pixel.
 */

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
    _fbq?: any;
  }
}

export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || "";

/**
 * Retorna o ID configurado ou vazio se não definido
 */
export function getMetaPixelId(): string {
  return (process.env.NEXT_PUBLIC_META_PIXEL_ID || "").trim();
}

/**
 * Verifica se o Pixel está configurado com um ID válido
 */
export function isPixelConfigured(): boolean {
  const id = getMetaPixelId();
  return Boolean(id && id.length > 3 && id !== "SEU_PIXEL_ID_AQUI");
}

/**
 * Dispara evento 'PageView'
 */
export function pageview(): void {
  if (typeof window === "undefined") return;

  if (window.fbq) {
    window.fbq("track", "PageView");
  } else {
    // Caso fbq ainda não esteja pronto, enfileira quando possível
    if (process.env.NODE_ENV === "development") {
      console.log("[Meta Pixel Dev] Evento disparado: PageView (Pixel ID:", getMetaPixelId() || "não configurado", ")");
    }
  }
}

/**
 * Dispara evento padrão no Meta Pixel
 */
export function trackEvent(name: string, options: Record<string, any> = {}): void {
  if (typeof window === "undefined") return;

  if (window.fbq) {
    window.fbq("track", name, options);
  }

  if (process.env.NODE_ENV === "development" || !isPixelConfigured()) {
    console.log(`[Meta Pixel Log] 'track' -> ${name}:`, options);
  }
}

/**
 * Dispara evento 'Lead' quando o usuário clica para entrar no grupo
 */
export function trackLead(customData: Record<string, any> = {}): void {
  const payload = {
    content_name: "Entrada Grupo VIP",
    content_category: "Comunidade",
    currency: "BRL",
    value: 0,
    timestamp: new Date().toISOString(),
    ...customData,
  };

  trackEvent("Lead", payload);
}
