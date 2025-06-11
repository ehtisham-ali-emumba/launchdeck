import { http } from "msw";

export const debugHandler = http.all("*", () => {
  // console.log("⭐ MSW INTERCEPTED REQUEST:", {
  //   method: request.method,
  //   url: request.url,
  //   path: new URL(request.url).pathname,
  // });

  // Let the request pass through to other handlers
  return undefined;
});
