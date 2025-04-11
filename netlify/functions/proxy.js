export async function handler(event) {
  const { path, queryStringParameters, httpMethod, headers, body } = event;

  const targetUrl = "https://torrentio.strem.fun" + path.replace(/\/api/, "");

  console.log(event);

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
    // headers: res.headers.raw(), // raw headers
    body: responseBody,
  };
}
