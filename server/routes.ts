import { Router } from "express";
import type { IStorage } from "./storage";

export function createRouter(storage: IStorage) {
  const router = Router();

  router.get("/api/testimonials", async (req, res) => {
    try {
      const testimonials = await storage.getTestimonials();
      res.json(testimonials);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch testimonials" });
    }
  });

  return router;
}
