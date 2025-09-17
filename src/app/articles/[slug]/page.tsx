
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { remark } from "remark";
import html from "remark-html";


export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const articlesDir = path.join(process.cwd(), "src/articles");
  const files = fs.readdirSync(articlesDir);
  return files.filter(f => f.endsWith(".md")).map(file => ({ slug: file.replace(/\.md$/, "") }));
}

type Props = {
  params: {
    slug: string
  }
}

// Props型を使うように修正
export default async function ArticlePage({ params }: Props) {
  const filePath = path.join(process.cwd(), "src/articles", `${params.slug}.md`);
  if (!fs.existsSync(filePath)) return notFound();
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return (
    <main style={{ maxWidth: 700, margin: "40px auto", padding: 24, background: "#fff", borderRadius: 8 }}>
      <h1>{data.title}</h1>
      <p style={{ color: "#888", fontSize: 14 }}>{data.date}</p>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </main>
  );
}
