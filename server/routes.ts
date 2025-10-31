import type { Express } from "express";
import { createServer, type Server } from "http";

import { insertWaitlistSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Waitlist email submission
  app.post("/api/waitlist", async (req, res) => {
    try {
      const result = insertWaitlistSchema.safeParse(req.body);

      if (!result.success) {
        return res.status(400).json({
          error: fromZodError(result.error).message,
        });
      }

      // Check if email already exists
      // const existing = await storage.getWaitlistEntry(result.data.email);
      // if (existing) {
      //   return res.status(200).json({
      //     message: "You're already on the waitlist!",
      //     alreadyExists: true
      //   });
      // }

      // const entry = await storage.addToWaitlist(result.data);

      res.status(201).json({
        message: "Successfully joined the waitlist!",
        entry: { id: entry.id, email: entry.email },
      });
    } catch (error) {
      console.error("Waitlist error:", error);
      res.status(500).json({ error: "Failed to join waitlist" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
