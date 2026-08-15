import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import express, { type Express } from "express";
import type { Server } from "http";
import { createServer as createViteServer, type ViteDevServer } from "vite";

const rootDir = path.dirname(path.dirname(fileURLToPath(import.meta.url)));

export async function setupVite(app: Express, server: Server) {
  const vite = await createViteServer({
    configFile: path.resolve(rootDir, "vite.config.ts"),
    server: {
      middlewareMode: true,
      hmr: { server },
    },
    appType: "custom",
  });

  app.use(vite.middlewares);
  app.use("*", async (req, res, next) => {
    try {
      const url = req.originalUrl;
      let template = fs.readFileSync(
        path.resolve(rootDir, "client", "index.html"),
        "utf-8",
      );
      template = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(template);
    } catch (error) {
      vite.ssrFixStacktrace(error as Error);
      next(error);
    }
  });
}

export function serveStatic(app: Express) {
  const distPath = path.resolve(rootDir, "dist", "public");
  app.use(express.static(distPath));
  app.use("*", (_req, res) => {
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}