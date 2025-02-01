import express from "express";
import { PrismaClient } from "@prisma/client";

const router = express.Router();
const prisma = new PrismaClient();

export default function PublicRoutes() {
  router.post("/cadastro", async (req, res) => {
    try {
      const user = req.body;
      await prisma.user.create({
        data: {
            "email": user.email,
            "name": user.name,
            "password": user.password,
            "cpf": user.cpf
        },
      });
      res.status(201);
    } catch (err) {
      res
        .status(500)
        .json({ message: "Erro no Servidor, tente novamente mais tarde." });
    }
  });
}
