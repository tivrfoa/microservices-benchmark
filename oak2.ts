import { Application, Router } from "https://deno.land/x/oak/mod.ts";

interface Person {
	Name: string,
	Age: number,
}

const router = new Router();
router
  .get("/", (context) => {
    context.response.body = "Hello world!";
  })
  .post("/personCreate", async (context) => {
	  let person = await context.request.body().value as Person;
	  console.log("Got person: ", person);
	  context.response.body = `${person.Name} is ${person.Age} years old`;
  });

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8080 });
