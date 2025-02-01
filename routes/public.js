import express from "express";
import { PrismaClient } from "@prisma/client/extension";

router = express.Router();
prisma = new PrismaClient();

export default function PublicRoutes() {
  router.post("/cadastro", async (req, res) => {
    try {
      const user = req.body;
      await prisma.user.create({
        data: {
          email: user.email,
          name: user.name,
          password: user.password,
          cpf: user.cpf,
        },
      });
      res.status(200);
    } catch (err) {
      res
        .status(500)
        .json({ message: "erro no servidor, tente novamente mais tarde." });
    }
  });
}
