export async function fetcher(path: string) {
  const url = new URL("https://www.ifixit.com/api/2.0");
  url.pathname = url.pathname + path;
  const res = await fetch(url.toString());
  return await res.json();
}
