import { getCollection, type CollectionEntry } from 'astro:content';
import {
  COLLECTION_PATHS,
  COLLECTION_TO_ENTRY_TYPE,
  type EntryCollectionKey,
} from '../data/vocabularies';

export type AnyEntry = CollectionEntry<EntryCollectionKey>;

export interface AtlasEntryRef {
  collection: EntryCollectionKey;
  entry: AnyEntry;
  /** Site-relative URL including the configured base path. */
  url: string;
}

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

/** URL for an entry detail page. */
export function entryUrl(collection: EntryCollectionKey, id: string): string {
  return `${BASE}/${COLLECTION_PATHS[collection]}/${id}/`;
}

/** URL helper for any Atlas-internal path ('' or 'explore/' etc.). */
export function atlasUrl(path = ''): string {
  return `${BASE}/${path}`;
}

let cache: AtlasEntryRef[] | null = null;

/** Every entry across the eight entry collections (guides and sources excluded). */
export async function getAllEntries(): Promise<AtlasEntryRef[]> {
  if (cache) return cache;
  const keys = Object.keys(COLLECTION_PATHS) as EntryCollectionKey[];
  const groups = await Promise.all(
    keys.map(async (collection) => {
      const items = await getCollection(collection);
      return items.map((entry) => ({
        collection,
        entry,
        url: entryUrl(collection, entry.data.id),
      }));
    }),
  );
  cache = groups
    .flat()
    .sort((a, b) => a.entry.data.title.localeCompare(b.entry.data.title));
  return cache;
}

/** Resolve a list of entry ids (frontmatter `id`) to entry refs, skipping unknown ids. */
export async function resolveEntries(ids: string[]): Promise<AtlasEntryRef[]> {
  const all = await getAllEntries();
  const byId = new Map(all.map((ref) => [ref.entry.data.id, ref]));
  return ids.flatMap((id) => {
    const ref = byId.get(id);
    return ref ? [ref] : [];
  });
}

/** ids referenced anywhere that do not resolve — used by the build-time consistency check. */
export async function unresolvedRelatedIds(): Promise<string[]> {
  const all = await getAllEntries();
  const known = new Set(all.map((ref) => ref.entry.data.id));
  const missing = new Set<string>();
  for (const ref of all) {
    for (const id of ref.entry.data.related_entries) {
      if (!known.has(id)) missing.add(`${ref.entry.data.id} → ${id}`);
    }
  }
  return [...missing];
}

export function entryTypeOf(ref: AtlasEntryRef) {
  return COLLECTION_TO_ENTRY_TYPE[ref.collection];
}

/** Rough reading time from a markdown body. */
export function readingTimeMinutes(body: string | undefined): number {
  if (!body) return 1;
  const words = body.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}

export function formatDate(d: Date): string {
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}
