import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ArticleCard, { ArticleMeta } from "./components/ArticleCard";
// 記事ディレクトリのパス
const articlesDir = path.join(process.cwd(), "src/articles");

function getArticles(): ArticleMeta[] {
  const files = fs.readdirSync(articlesDir);
  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const filePath = path.join(articlesDir, file);
      const content = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(content);
      return {
        title: data.title || "",
        summary: data.summary || "",
        date: data.date || "",
        image: data.image || undefined,
        slug: file.replace(/\.md$/, ""),
      };
    });
}


export default function Home() {
  const articles = getArticles();
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">グッドモーニング、わたしのブログへ</h1>
      <p className="mt-4">これは脇田悠希のブログです。</p>
  <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "flex-start", marginTop: 32, width: "100%", maxWidth: 1200 }}>
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </main>
  );
}
