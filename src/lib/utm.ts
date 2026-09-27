/**
 * Gerenciador de Parâmetros UTM e Rastreamento de Tráfego
 * Suporta: utm_source, utm_medium, utm_campaign, utm_content, utm_term, src, sck.
 */

export const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "src",
  "sck"
] as const;

export type UtmKey = typeof UTM_KEYS[number];
export type UtmParams = Partial<Record<UtmKey, string>>;

const STORAGE_KEY = "imperio_digital_utm_params";

/**
 * Obtém os UTMs salvos no sessionStorage / localStorage
 */
export function getStoredUtms(): UtmParams {
  if (typeof window === "undefined") return {};

  try {
    const sessionData = sessionStorage.getItem(STORAGE_KEY);
    if (sessionData) {
      return JSON.parse(sessionData);
    }

    const localData = localStorage.getItem(STORAGE_KEY);
    if (localData) {
      return JSON.parse(localData);
    }
  } catch (err) {
    console.error("Erro ao ler UTMs do storage:", err);
  }

  return {};
}

/**
 * Salva os parâmetros UTM no sessionStorage e localStorage
 */
export function saveUtms(params: UtmParams): void {
  if (typeof window === "undefined") return;

  const validEntries = Object.entries(params).filter(([_, val]) => Boolean(val && val.trim()));
  if (validEntries.length === 0) return;

  const existing = getStoredUtms();
  const merged = { ...existing, ...Object.fromEntries(validEntries) };

  try {
    const serialized = JSON.stringify(merged);
    sessionStorage.setItem(STORAGE_KEY, serialized);
    localStorage.setItem(STORAGE_KEY, serialized);
  } catch (err) {
    console.error("Erro ao salvar UTMs no storage:", err);
  }
}

/**
 * Extrai parâmetros UTM da URL e atualiza o armazenamento
 */
export function captureUtmsFromUrl(searchParams: URLSearchParams): UtmParams {
  const captured: UtmParams = {};

  UTM_KEYS.forEach((key) => {
    const val = searchParams.get(key);
    if (val) {
      captured[key] = val;
    }
  });

  if (Object.keys(captured).length > 0) {
    saveUtms(captured);
  }

  return getStoredUtms();
}
