import { PrismaClient } from "@prisma/client";
import { query } from "express";

export const prisma = new PrismaClient({
  log:['query']
})