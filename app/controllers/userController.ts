import type { Request, Response } from "express";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

interface TokenData {
  email: string;
  wordCount: number;
  lastReset: Date;
}

const DAILY_WORD_LIMIT = 8000;
const tokenDataStore: Map<string, TokenData> = new Map();

const userController = {
  loginUser: async (req: Request, res: Response) => {
    const { email } = req.body;
    try {
      if (!email) {
        return res.status(400).json({ error: "Email is required" });
      }
      const token = jwt.sign({ email }, process.env.JWT_SECRET, {
        expiresIn: "1d",
      });

      tokenDataStore.set(email, {
        email,
        wordCount: 0,
        lastReset: new Date(),
      });
      res.status(201).json({ token });
    } catch (error) {
      console.error("Error logging in user:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  },
};

export default userController;
