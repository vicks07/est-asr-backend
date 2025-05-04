import { DB as Database } from "https://deno.land/x/sqlite@v3.1.1/mod.ts";

const db = new Database("transcriptions.db");

export default db;