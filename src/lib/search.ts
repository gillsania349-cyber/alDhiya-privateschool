import { searchIndex, type SearchItem } from "@/lib/search-index";

export type SearchResult = SearchItem & { score: number };

function normalize(text: string) {
  return text
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9+\s%/.-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function scoreItem(item: SearchItem, query: string, terms: string[]) {
  const title = normalize(item.title);
  const description = normalize(item.description);
  const section = normalize(item.section);
  const keywords = normalize((item.keywords || []).join(" "));
  const haystack = `${title} ${description} ${section} ${keywords}`;

  let score = 0;

  if (title === query) score += 120;
  else if (title.startsWith(query)) score += 80;
  else if (title.includes(query)) score += 55;

  if (description.includes(query)) score += 24;
  if (section.includes(query)) score += 12;
  if (keywords.includes(query)) score += 30;

  for (const term of terms) {
    if (term.length < 2) continue;
    if (title.includes(term)) score += 18;
    if (keywords.split(" ").some((word) => word.startsWith(term))) score += 14;
    if (description.includes(term)) score += 8;
    if (section.includes(term)) score += 4;
    if (!haystack.includes(term)) score -= 20;
  }

  return score;
}

export function searchSite(rawQuery: string, limit = 8): SearchResult[] {
  const query = normalize(rawQuery);
  if (!query) return [];

  const terms = query.split(" ").filter(Boolean);

  return searchIndex
    .map((item) => ({
      ...item,
      score: scoreItem(item, query, terms),
    }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score || a.title.localeCompare(b.title))
    .slice(0, limit);
}

export function getSearchSuggestions() {
  return [
    "Admissions",
    "School fees",
    "IGCSE",
    "Transport",
    "Contact",
    "Student life",
  ];
}