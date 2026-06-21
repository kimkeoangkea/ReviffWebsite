import type { MetadataRoute } from "next";
import { PRODUCT } from "@/lib/product";

// Crawlers we explicitly welcome, including AI/generative-search agents so
// REVIFF can be indexed and cited by Google AI Overviews, ChatGPT, Claude,
// Perplexity, Bing, and Apple Intelligence.
const ALLOWED_AGENTS = [
  "*",
  "Googlebot",
  "Google-Extended",
  "Bingbot",
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-Web",
  "anthropic-ai",
  "PerplexityBot",
  "Applebot",
  "Applebot-Extended",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: ALLOWED_AGENTS.map((userAgent) => ({ userAgent, allow: "/" })),
    sitemap: `${PRODUCT.siteUrl}/sitemap.xml`,
    host: PRODUCT.siteUrl,
  };
}
