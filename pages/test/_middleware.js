export function middleware(req, ev) {
  console.log(req);
  return new Response("Hello, world!");
}
