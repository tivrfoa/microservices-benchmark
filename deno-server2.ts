import {
  Server,
  Router,
  Socket,
} from "https://deno.land/x/http_wrapper@v0.5.0/mod.ts";

// Create a new route
const router = new Router();

// Add an endpoint to the route
// Deno's default ServerRequest object is used

// This endpoint will be accessible at /
router.get("/index", async (req) => {
  // Respond using default methods
  req.respond({
    status: 200,
    headers: new Headers({
      "content-type": "text/html",
    }),
    body: await Deno.open("./index.html"),
  });
});

router.get("/", async (req) => {
  // Respond using default methods
  req.respond({
    status: 200,
    headers: new Headers({
      "content-type": "text/plain",
    }),
    body: "Hello from Deno",
  });
});

// Create a second endpoint
const bobRouter = new Router("/personCreate");

// This endpoint will be accessible at /bob
bobRouter.post("/", (req) => {
  req.respond({
    status: 200,
    headers: new Headers({
      "content-type": "application/json",
    }),
    body: JSON.stringify({
      test: "This is a test",
    }),
  });
});


// Create the server
const app = new Server();

// Add routes to server
app.use(router.routes);
app.use(bobRouter.routes);

// Start the server
app
  .start({ port: 8080 })
  .then((config) => console.log(`Server running on localhost:${config.port}`));
