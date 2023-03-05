import postgres from "postgres";
import sql from "@/utils/postgres";

export default async function handler(req, res) {
    const blogs = await sql`
    select * from blogs
    `
    res.json({blogs : blogs});
}
