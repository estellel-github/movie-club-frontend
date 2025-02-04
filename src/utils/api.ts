export async function apiFetch(endpoint: string, options: RequestInit = {}) {
  return fetch(endpoint, {
    ...options,
    credentials: "include", // Ensure cookies are sent
  });
}
