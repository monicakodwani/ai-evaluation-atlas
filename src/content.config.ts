import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import {
  ACCESS_MODELS,
  CONSTRUCTS,
  CONTENT_STATUSES,
  ENTRY_STATUSES,
  ENTRY_TYPES,
  ENVIRONMENTS,
  EVALUATION_LEVELS,
  EVALUATOR_FILTERS,
  EVALUATOR_TYPES,
  EVIDENCE_CLASSES,
  HUMAN_INVOLVEMENT,
  LIFECYCLE_STAGES,
  MATURITY_LEVELS,
  PEER_REVIEW_STATUSES,
  PURPOSES,
  SCORING_MECHANISMS,
  SOURCE_TYPES,
  VERIFICATION_STATUSES,
  vocabKeys,
} from './data/vocabularies';

/**
 * Shared frontmatter schema for all Atlas entries. Malformed values —
 * an unknown evidence class, a mistyped lifecycle stage, a missing summary —
 * fail `astro build` with a message naming the file and field.
 */
const entrySchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  aliases: z.array(z.string()).default([]),
  entry_type: z.enum(vocabKeys(ENTRY_TYPES)),
  status: z.enum(vocabKeys(ENTRY_STATUSES)),
  content_status: z.enum(vocabKeys(CONTENT_STATUSES)),
  summary: z.string().min(1),
  definition: z.string().optional(),
  why_it_matters: z.string().optional(),
  claimed_constructs: z.array(z.enum(vocabKeys(CONSTRUCTS))).default([]),
  evaluation_levels: z.array(z.enum(vocabKeys(EVALUATION_LEVELS))).default([]),
  lifecycle_stages: z.array(z.enum(vocabKeys(LIFECYCLE_STAGES))).default([]),
  purposes: z.array(z.enum(vocabKeys(PURPOSES))).default([]),
  evaluator_types: z.array(z.enum(vocabKeys(EVALUATOR_TYPES))).default([]),
  /** Coarse evaluator categories used by the Explore filters. */
  evaluator_filters: z.array(z.enum(vocabKeys(EVALUATOR_FILTERS))).default([]),
  environments: z.array(z.enum(vocabKeys(ENVIRONMENTS))).default([]),
  scoring_mechanisms: z.array(z.enum(vocabKeys(SCORING_MECHANISMS))).default([]),
  evidence_class: z.enum(vocabKeys(EVIDENCE_CLASSES)),
  maturity: z.enum(vocabKeys(MATURITY_LEVELS)),
  human_involvement: z.enum(vocabKeys(HUMAN_INVOLVEMENT)).optional(),
  access_model: z.enum(vocabKeys(ACCESS_MODELS)).optional(),
  organization: z.string().optional(),
  benchmark_family: z.string().optional(),
  strengths: z.array(z.string()).default([]),
  limitations: z.array(z.string()).default([]),
  appropriate_claims: z.array(z.string()).default([]),
  inappropriate_claims: z.array(z.string()).default([]),
  reliability_evidence: z.string().optional(),
  validity_evidence: z.string().optional(),
  reproducibility_notes: z.string().optional(),
  adoption_evidence: z.string().optional(),
  known_failure_modes: z.array(z.string()).default([]),
  /** ids of related entries (any entry collection). */
  related_entries: z.array(z.string()).default([]),
  /** ids (file slugs) of related guides. */
  related_guides: z.array(z.string()).default([]),
  /** ids of records in the sources collection. */
  primary_sources: z.array(z.string()).default([]),
  secondary_sources: z.array(z.string()).default([]),
  source_status: z.string().optional(),
  created: z.coerce.date(),
  last_reviewed: z.coerce.date(),
  reviewer: z.string().optional(),
  tags: z.array(z.string()).default([]),
  featured: z.boolean().default(false),
});

export type AtlasEntryData = z.infer<typeof entrySchema>;

function entryCollection(dir: string) {
  return defineCollection({
    loader: glob({ pattern: '**/*.md', base: `./src/content/${dir}` }),
    schema: entrySchema,
  });
}

const guides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guides' }),
  schema: z.object({
    id: z.string().min(1),
    title: z.string().min(1),
    order: z.number().int(),
    summary: z.string().min(1),
    status: z.enum(vocabKeys(ENTRY_STATUSES)),
    content_status: z.enum(vocabKeys(CONTENT_STATUSES)),
    key_terms: z.array(z.string()).default([]),
    related_entries: z.array(z.string()).default([]),
    source_notes: z.string().optional(),
    created: z.coerce.date(),
    last_reviewed: z.coerce.date(),
    reviewer: z.string().optional(),
  }),
});

const sources = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/sources' }),
  schema: z.object({
    id: z.string().min(1),
    title: z.string().min(1),
    authors: z.array(z.string()).default([]),
    organization: z.string().optional(),
    year: z.number().int().optional(),
    source_type: z.enum(vocabKeys(SOURCE_TYPES)),
    peer_review_status: z.enum(vocabKeys(PEER_REVIEW_STATUSES)).default('unknown'),
    publication: z.string().optional(),
    doi: z.string().optional(),
    url: z.string().url().optional(),
    accessed: z.coerce.date().optional(),
    verification_status: z.enum(vocabKeys(VERIFICATION_STATUSES)),
    notes: z.string().optional(),
    related_entries: z.array(z.string()).default([]),
  }),
});

export const collections = {
  methods: entryCollection('methods'),
  benchmarks: entryCollection('benchmarks'),
  infrastructures: entryCollection('infrastructures'),
  standards: entryCollection('standards'),
  institutions: entryCollection('institutions'),
  observatories: entryCollection('observatories'),
  documentation: entryCollection('documentation'),
  concepts: entryCollection('concepts'),
  guides,
  sources,
};
