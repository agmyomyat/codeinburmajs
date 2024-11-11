import { parseEnv } from "znv";
import { z } from "zod";

export const TypeEnv = parseEnv(process.env, {
	TEST_DATABASE_URI:z.string().min(1),
CMS_DATABASE_URL:z.string().min(1),
CMS_DB_TOKEN:z.string().min(1),
PAYLOAD_SECRET:z.string().min(1),
});