
"use client";
import React from "react";
import Link from "next/link";

export type ArticleMeta = {
  title: string;
  summary: string;
  date: string;
  image?: string;
  slug: string;
};

type Props = {
  article: ArticleMeta;
};


const ArticleCard: React.FC<Props> = ({ article }) => {
  return (
    <Link href={`/articles/${article.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
      <div style={{ border: "1px solid #ddd", borderRadius: 8, padding: 16, margin: 8, width: 320, background: "#fff", cursor: "pointer", transition: "box-shadow 0.2s", boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>
        {article.image && (
          <img src={article.image} alt={article.title} style={{ width: "100%", borderRadius: 4, marginBottom: 8 }} />
        )}
        <h2 style={{ fontSize: 20, margin: "8px 0" }}>{article.title}</h2>
        <p style={{ color: "#888", fontSize: 14 }}>{article.date}</p>
        <p>{article.summary}</p>
      </div>
    </Link>
  );
};

export default ArticleCard;
