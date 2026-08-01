import type { APIRoute } from 'astro';
import {
  CONSTRUCTS,
  ENTRY_TYPES,
  EVALUATION_LEVELS,
  EVALUATOR_TYPES,
  EVIDENCE_CLASSES,
  MATURITY_LEVELS,
  SCORING_MECHANISMS,
  ENTRY_STATUSES,
  labelOf,
} from '../data/vocabularies';
import { entryTypeOf, getAllEntries, unresolvedRelatedIds } from '../lib/entries';

/**
 * Small static index used by the Compare page (and available for client-side
 * search). Generated at build time; nothing is fetched from outside the site.
 */
export const GET: APIRoute = async () => {
  const all = await getAllEntries();

  // Surface dangling related_entries ids in the build log so cross-reference
  // rot is visible without failing the build.
  const missing = await unresolvedRelatedIds();
  for (const m of missing) {
    console.warn(`[atlas] unresolved related entry: ${m}`);
  }
  const entries = all.map((ref) => {
    const d = ref.entry.data;
    return {
      id: d.id,
      title: d.title,
      url: ref.url,
      type: labelOf(ENTRY_TYPES, entryTypeOf(ref)),
      summary: d.summary,
      constructs: d.claimed_constructs.map((k) => labelOf(CONSTRUCTS, k)),
      levels: d.evaluation_levels.map((k) => labelOf(EVALUATION_LEVELS, k)),
      evaluators: d.evaluator_types.map((k) => labelOf(EVALUATOR_TYPES, k)),
      scoring: d.scoring_mechanisms.map((k) => labelOf(SCORING_MECHANISMS, k)),
      evidence_class: labelOf(EVIDENCE_CLASSES, d.evidence_class),
      maturity: labelOf(MATURITY_LEVELS, d.maturity),
      status: labelOf(ENTRY_STATUSES, d.status),
      strengths: d.strengths,
      limitations: d.limitations,
      appropriate_claims: d.appropriate_claims,
      inappropriate_claims: d.inappropriate_claims,
      source_status: d.source_status ?? 'Sources not yet reviewed.',
      last_reviewed: d.last_reviewed.toISOString().slice(0, 10),
    };
  });
  return new Response(JSON.stringify({ entries }), {
    headers: { 'Content-Type': 'application/json' },
  });
};
