-- AlterTable
ALTER TABLE "Diary" ADD COLUMN     "tags" TEXT[] DEFAULT ARRAY[]::TEXT[];
