import { Level } from "level";

export const db = new Level("./example", { valueEncoding: "json" });
