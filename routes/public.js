import express from "express";
import { PrismaClient } from "@prisma/client";

const router = express.Router();
const prisma = new PrismaClient();

router.post("/cadastro", async (req, res) => {
  try {
    const { email, name, password, cpf } = req.body;

    // Validação dos campos obrigatórios
    if (!email || !name || !password || !cpf) {
      return res
        .status(400)
        .json({ message: "Todos os campos são obrigatórios." });
    }

    // Cria o usuário no banco de dados
    const newUser = await prisma.user.create({
      data: {
        email,
        name,
        password,
        cpf,
      },
    });

    // Resposta de sucesso
    return res
      .status(201)
      .json({ message: "Usuário criado com sucesso!", user: newUser });
  } catch (err) {
    console.error("Erro ao criar usuário:", err);

    // Resposta de erro
    return res
      .status(500)
      .json({ message: "Erro no servidor, tente novamente mais tarde." });
  } finally {
    // Fecha a conexão com o Prisma
    await prisma.$disconnect();
  }
});

export default router;
