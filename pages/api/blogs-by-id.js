import sql from "@/utils/postgres";

export default async function handler(req, res) {
    const id = req.query.id;

    if (id === null || id === undefined) {
        res.status(400).json({ message: "Missing id" });
        return;
    }

    const blogs = await sql`
        select * from blogs
        where id = ${id}
    `;

    if (blogs.length < 1) {
        res.status(404).json({ message: "Blog not found" });
        return;
    }

    const foundBlog = blogs[0];

    res.json({ blog: foundBlog });
}