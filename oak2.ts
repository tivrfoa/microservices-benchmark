import { Application, Router } from "https://deno.land/x/oak/mod.ts";

interface Person {
	Name: string,
	Age: number,
}

const books = new Map<string, any>();
books.set("1", {
  id: "1",
  title: "The Hound of the Baskervilles",
  author: "Conan Doyle, Arthur",
});

const router = new Router();
router
  .get("/", (context) => {
    context.response.body = "Hello world!";
  })
  .get("/books", (context) => {
    context.response.body = Array.from(books.values());
  })
  .post("/personCreate", (context) => {
	  console.log(context);
	  console.log(context.request);
	  let body = context.request.body();
	  console.log(body);
	  let value = body.value;
	  console.log(value, typeof value);
	  value.then(r => console.log("req: " + r));
    context.response.body = "todo";
  });

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8080 });
