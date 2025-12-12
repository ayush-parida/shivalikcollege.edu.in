import path from "path";
import { promises as fs } from "fs";

const dataDirectory = path.join(process.cwd(), "data");

async function readJsonFile<T>(fileName: string): Promise<T> {
  const filePath = path.join(dataDirectory, fileName);
  const raw = await fs.readFile(filePath, "utf-8");
  return JSON.parse(raw) as T;
}

export async function getJsonData<T>(fileName: string): Promise<T> {
  try {
    return await readJsonFile<T>(fileName);
  } catch (error) {
    console.error(`Failed to load data file: ${fileName}`, error);
    throw error;
  }
}
