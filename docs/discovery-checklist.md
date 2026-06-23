# REVIFF discovery & GEO deployment checklist

Tasks that need credentials or live-domain access and therefore can't be
automated in the repo. Do these after the comparison page is deployed.

The site already covers the in-repo parts: crawlable SSR/SSG HTML, JSON-LD,
`robots.txt` (welcomes Googlebot, Bingbot, OAI-SearchBot, PerplexityBot, GPTBot,
ClaudeBot, Applebot), a localized `sitemap.xml`, and `llms.txt`.

---

## 1. Google Search Console

- [ ] Verify the `reviff.com` domain (DNS TXT record, or HTML-tag method).
      If you use the HTML-tag method, add the token to the root layout metadata
      (`app/layout.tsx` → `metadata.verification.google`). Do **not** commit a
      fake token.
- [ ] Submit `https://reviff.com/sitemap.xml`.
- [ ] Inspect `https://reviff.com/compare/bluebeam-revu` → Request indexing.
- [ ] Inspect `https://reviff.com/ja/compare/bluebeam-revu` → Request indexing.
- [ ] Confirm canonical selection matches the self-referencing canonical.
- [ ] Review Page indexing, then Search queries after a few weeks.
- [ ] Review AI/generative-feature visibility reports where available.

## 2. Bing Webmaster Tools

- [ ] Verify or import the site (importing from Search Console is quickest).
      For the meta-tag method, add the token to
      `app/layout.tsx` → `metadata.verification.other['msvalidate.01']`.
- [ ] Submit the sitemap.
- [ ] Inspect the comparison URL; review crawl issues and search performance.
- [ ] Review AI Performance / citation reporting where available.
- [ ] Configure IndexNow (below).

## 3. IndexNow (optional, complements the sitemap)

1. Generate a key (a 8–128 char hex string), e.g. via the Bing Webmaster
   IndexNow page or `openssl rand -hex 16`.
2. Rename `public/REPLACE_WITH_INDEXNOW_KEY.txt` to `public/<key>.txt` and make
   its only contents the key itself (matching the filename).
3. Confirm it serves at `https://reviff.com/<key>.txt`.
4. Submit changed URLs on deploy with a POST to:
   `https://api.indexnow.org/indexnow`
   ```json
   {
     "host": "reviff.com",
     "key": "<key>",
     "keyLocation": "https://reviff.com/<key>.txt",
     "urlList": [
       "https://reviff.com/compare/bluebeam-revu",
       "https://reviff.com/ja/compare/bluebeam-revu"
     ]
   }
   ```
   Wire this into the deploy pipeline; only submit URLs that actually changed.
   Do not resubmit unchanged URLs repeatedly.

## 4. Post-deploy verification

- [ ] `https://reviff.com/compare/bluebeam-revu` returns HTTP 200.
- [ ] Not blocked by `robots.txt`; not `noindex`; single self-canonical.
- [ ] Present in `https://reviff.com/sitemap.xml` (EN + JA).
- [ ] JSON-LD validates: https://validator.schema.org/ and Google Rich Results.
- [ ] View-source confirms the definition, key facts, table, Q&A, methodology,
      and JSON-LD are all in the initial HTML.

## 5. AI-search monitoring (ongoing, no guarantees)

Periodically check whether REVIFF is described accurately by search-connected AI
systems — correct URL, not framed as a complete Bluebeam replacement, not
associated with features it lacks, not confused with unrelated software.

Sample test queries:
- "free Bluebeam Compare Documents alternative"
- "compare architectural PDF drawings without Bluebeam"
- "REVIFF vs Bluebeam Revu"
- "local PDF drawing comparison for Windows"
- "tool for aligning moved details between drawing revisions"

Run these on Google, Bing, ChatGPT search, Perplexity, and Copilot.
Submission and these steps do **not** guarantee ranking, citation, or
recommendation.

---

## Where to update comparison facts

All comparison claims, the verification date, and sources live in
`lib/comparison.ts` and `lib/comparison-content.ts`. Update
`COMPARISON.lastVerifiedDate` only after a human re-checks the claims — it must
not change automatically on each build. See the header comment in
`lib/comparison.ts`.
