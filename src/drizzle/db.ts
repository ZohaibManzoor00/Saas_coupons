import { env } from "@/data/env/server";
import { neon } from "@neondatabase/serverless";
import { drizzle } from 'drizzle-orm/neon-http';

const sql = neon(env.DATABASE_URL);
export const db = drizzle({ client: sql });
