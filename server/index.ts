import express from "express";
import { createServer } from "http";
import { MemStorage } from "./storage";
import { createRouter } from "./routes";

const app = express();
const server = createServer(app);
const storage = new MemStorage();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// API routes
app.use(createRouter(storage));

const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV === "production") {
  const { serveStatic } = await import("./vite");
  serveStatic(app);
} else {
  const { setupVite } = await import("./vite");
  await setupVite(app, server);
}

server.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
});
