import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { products } from "./data/products";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes
  app.get("/api/products", (req, res) => {
    res.json(products);
  });

  app.get("/api/products/:slug", (req, res) => {
    const product = products.find(p => p.slug === req.params.slug);
    
    if (!product) {
      return res.status(404).json({ message: "Produto não encontrado" });
    }
    
    res.json(product);
  });

  const httpServer = createServer(app);

  return httpServer;
}
