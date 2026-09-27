/**
 * Configurações Centrais da Landing Page
 * 
 * Os valores principais são obtidos através de variáveis de ambiente
 * para facilitar substituição no deploy da Vercel ou localmente.
 */

export const siteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME || "Império Digital - Grupo VIP",
  description: "Acesso exclusivo ao grupo fechado de estratégias digitais, networking de alto nível e oportunidades validadas.",
  groupInviteUrl: process.env.NEXT_PUBLIC_GROUP_INVITE_URL || "https://chat.whatsapp.com/exemplo-link-do-grupo",
  metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID || "",
  membersCount: "4.890+",
  satisfactionRate: "99.4%",
  spotsRemaining: 14,
};

/**
 * Anexa parâmetros UTM a qualquer URL (ex: link do WhatsApp ou grupo)
 * preservando parâmetros já existentes de forma segura.
 */
export function appendUtmToUrl(baseUrl: string, utms: Record<string, string>): string {
  try {
    // Caso a URL não tenha protocolo, adiciona https://
    const validUrl = baseUrl.startsWith("http://") || baseUrl.startsWith("https://") 
      ? baseUrl 
      : `https://${baseUrl}`;
      
    const url = new URL(validUrl);

    Object.entries(utms).forEach(([key, value]) => {
      if (value && typeof value === "string" && value.trim() !== "") {
        url.searchParams.set(key, value.trim());
      }
    });

    return url.toString();
  } catch (err) {
    console.warn("Erro ao formatar URL com UTMs, utilizando URL original:", err);
    // Fallback simples se a URL for malformada
    const cleanUtms = Object.entries(utms)
      .filter(([_, v]) => v && v.trim() !== "")
      .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v.trim())}`)
      .join("&");

    if (!cleanUtms) return baseUrl;
    const separator = baseUrl.includes("?") ? "&" : "?";
    return `${baseUrl}${separator}${cleanUtms}`;
  }
}
