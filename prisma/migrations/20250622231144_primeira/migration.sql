-- CreateTable
CREATE TABLE "tasks" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT,

    CONSTRAINT "tasks_pkey" PRIMARY KEY ("id")
);
