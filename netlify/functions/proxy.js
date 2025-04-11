export async function handler(event) {
  const { path, queryStringParameters, httpMethod, headers, body } = event;

  const targetUrl =
    "https://torrentio.strem.fun/torbox=5aff16a1-016c-4e38-abf5-8944cc76b5b7/stream/series/tt2085059%3A7%3A2.json";
  // const targetUrl = `https://your-api-domain.com${event.rawUrl.replace(
  //   /^.*\/api/,
  //   ""
  // )}`;

  const res = await fetch(targetUrl, {
    method: httpMethod,
    headers: {
      ...headers,
      // host: "your-api-domain.com", // Optional: overwrite host header
    },
    body: ["GET", "HEAD"].includes(httpMethod) ? undefined : body,
  });

  const responseBody = await res.text();

  return {
    statusCode: res.status,
    headers: res.headers.raw(), // raw headers
    body: responseBody,
  };
}
