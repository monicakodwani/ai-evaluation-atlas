/**
 * Controlled vocabularies for the AI Evaluation Atlas.
 *
 * This file is the single source of truth for every categorical value used in
 * entry frontmatter, filters, badges, and taxonomy views. Content collection
 * schemas (src/content.config.ts) derive their enums from these keys, so a
 * typo in a content file fails the build with a clear message.
 */

export interface VocabTerm {
  label: string;
  /** Short explanation used for tooltips and legends. */
  description?: string;
}

export type Vocab = Record<string, VocabTerm>;

/** Helper: typed key list of a vocabulary, usable as a zod enum source. */
export function vocabKeys<T extends Vocab>(v: T): [string, ...string[]] {
  const keys = Object.keys(v);
  return [keys[0] as string, ...keys.slice(1)];
}

/* ------------------------------------------------------------------ */
/* Entry types                                                         */
/* ------------------------------------------------------------------ */

export const ENTRY_TYPES = {
  method: { label: 'Evaluation method', description: 'A general approach to producing evaluation evidence, such as benchmarking, human evaluation, or red teaming.' },
  benchmark: { label: 'Benchmark or suite', description: 'A specific instrument: a dataset, task format, and scoring procedure used to compare systems.' },
  infrastructure: { label: 'Infrastructure or harness', description: 'Software that executes, orchestrates, or logs evaluations reproducibly.' },
  standard: { label: 'Standard or framework', description: 'A formal standard, regulatory framework, or structured governance practice.' },
  institution: { label: 'Institution', description: 'An organization whose role is to evaluate, audit, or oversee AI systems.' },
  observatory: { label: 'Observatory or registry', description: 'An institution or platform that aggregates data about AI systems, incidents, or policies over time.' },
  documentation: { label: 'Documentation artifact', description: 'A structured disclosure genre, such as model cards or system cards.' },
  concept: { label: 'Research concept', description: 'An idea from measurement or evaluation science that affects how evaluation results should be interpreted.' },
} as const satisfies Vocab;

export type EntryTypeKey = keyof typeof ENTRY_TYPES;

/* ------------------------------------------------------------------ */
/* Evidence classes (exactly five; not a quality ranking)              */
/* ------------------------------------------------------------------ */

export const EVIDENCE_CLASSES = {
  'formal-standard': {
    label: 'Formal standard or legal requirement',
    description: 'Codified in a published standard, regulation, or binding legal requirement. Formal status does not guarantee that methods or thresholds are fully specified.',
  },
  'industry-practice': {
    label: 'Widely adopted industry practice',
    description: 'Routinely used by major developers or deployers, but not codified as a formal standard. Adoption may reflect convenience as much as validity.',
  },
  'research-convention': {
    label: 'Research-community convention',
    description: 'An accepted default in the research literature, such as held-out test sets or execution-based code scoring. Conventions can persist despite known weaknesses.',
  },
  emerging: {
    label: 'Emerging or experimental method',
    description: 'Actively developed and used in early or exploratory settings. May be technically strong while still lacking broad adoption or validation.',
  },
  proposed: {
    label: 'Proposed but not widely validated',
    description: 'Articulated in the literature or policy discussion but with little adoption or validation evidence to date.',
  },
} as const satisfies Vocab;

export type EvidenceClassKey = keyof typeof EVIDENCE_CLASSES;

/* ------------------------------------------------------------------ */
/* Evaluation levels (the object being evaluated)                      */
/* ------------------------------------------------------------------ */

export const EVALUATION_LEVELS = {
  data: { label: 'Data', description: 'Training, fine-tuning, or evaluation datasets: their quality, provenance, representativeness, and contamination.' },
  model: { label: 'Model', description: 'A trained artifact — weights plus an inference configuration — assessed in isolation from any application.' },
  'prompt-configuration': { label: 'Prompt and configuration', description: 'The prompts, templates, decoding settings, and parameters that shape a model’s behavior.' },
  output: { label: 'Output or response', description: 'A single generated response, judged for qualities such as correctness, harmfulness, or style.' },
  interaction: { label: 'Interaction or conversation', description: 'A multi-turn exchange between a person and a system, including how errors compound across turns.' },
  task: { label: 'Task', description: 'Completion of a defined task with a specified success criterion, possibly spanning many outputs.' },
  'agent-trajectory': { label: 'Agent trajectory', description: 'The full sequence of steps, decisions, and intermediate states an autonomous agent takes toward a goal.' },
  'tool-call': { label: 'Tool call', description: 'Individual invocations of external tools or APIs by a system: their necessity, safety, and correctness.' },
  application: { label: 'Application', description: 'A deployed assembly of model, prompts, retrieval, tools, guardrails, and interface, evaluated as a whole.' },
  workflow: { label: 'Workflow', description: 'A human-plus-AI work process in an organization, including handoffs, oversight, and error recovery.' },
  organization: { label: 'Organization', description: 'An organization’s policies, processes, and governance for developing or deploying AI responsibly.' },
  'societal-impact': { label: 'Societal impact', description: 'Effects on populations, institutions, markets, or the information environment, beyond any single deployment.' },
} as const satisfies Vocab;

export type EvaluationLevelKey = keyof typeof EVALUATION_LEVELS;

/* ------------------------------------------------------------------ */
/* Lifecycle stages                                                    */
/* ------------------------------------------------------------------ */

export const LIFECYCLE_STAGES = {
  design: { label: 'Design', description: 'Defining intended use, affected populations, the properties that matter, and the evidence that would justify deployment.' },
  'data-preparation': { label: 'Data preparation', description: 'Assessing and documenting the data a system is built and evaluated on.' },
  training: { label: 'Training', description: 'Evaluating checkpoints, regressions, and emerging capabilities during model development.' },
  'pre-deployment': { label: 'Pre-deployment', description: 'Testing a candidate system before release: benchmarks, human evaluation, red teaming, external review.' },
  release: { label: 'Release', description: 'Deciding whether and how to release, and documenting the evidence behind that decision.' },
  deployment: { label: 'Deployment', description: 'Evaluating the system in real use: staged rollouts, field studies, workflow and outcome evaluation.' },
  monitoring: { label: 'Monitoring', description: 'Continuous or periodic observation of a deployed system for drift, regressions, and incidents.' },
  'incident-response': { label: 'Incident response', description: 'Investigating failures after they occur and verifying corrective actions.' },
  retirement: { label: 'Retirement', description: 'Winding a system down: residual-risk review, dependency analysis, archival, and migration.' },
} as const satisfies Vocab;

export type LifecycleStageKey = keyof typeof LIFECYCLE_STAGES;

/* ------------------------------------------------------------------ */
/* Evaluation purposes                                                 */
/* ------------------------------------------------------------------ */

export const PURPOSES = {
  'scientific-understanding': { label: 'Scientific understanding' },
  'model-comparison': { label: 'Model comparison' },
  'product-selection': { label: 'Product selection' },
  'release-decision': { label: 'Release decision' },
  'risk-discovery': { label: 'Risk discovery' },
  'safety-assurance': { label: 'Safety assurance' },
  'mitigation-testing': { label: 'Mitigation testing' },
  'regulatory-compliance': { label: 'Regulatory compliance' },
  procurement: { label: 'Procurement' },
  certification: { label: 'Certification' },
  'public-accountability': { label: 'Public accountability' },
  'post-deployment-oversight': { label: 'Post-deployment oversight' },
} as const satisfies Vocab;

export type PurposeKey = keyof typeof PURPOSES;

/* ------------------------------------------------------------------ */
/* Evaluator types                                                     */
/* ------------------------------------------------------------------ */

export const EVALUATOR_TYPES = {
  'model-developer': { label: 'Model developer' },
  'application-developer': { label: 'Application developer' },
  'independent-researcher': { label: 'Independent researcher' },
  'external-evaluator': { label: 'External evaluator' },
  regulator: { label: 'Regulator' },
  auditor: { label: 'Auditor' },
  'domain-expert': { label: 'Domain expert' },
  'affected-stakeholder': { label: 'Affected stakeholder' },
  'end-user': { label: 'End user' },
  'crowd-worker': { label: 'Crowd worker' },
  'ai-judge': { label: 'AI judge' },
  'human-ai-team': { label: 'Human–AI evaluation team' },
} as const satisfies Vocab;

export type EvaluatorTypeKey = keyof typeof EVALUATOR_TYPES;

/* ------------------------------------------------------------------ */
/* Evaluation environments                                             */
/* ------------------------------------------------------------------ */

export const ENVIRONMENTS = {
  'public-benchmark': { label: 'Public benchmark' },
  'private-benchmark': { label: 'Private benchmark' },
  laboratory: { label: 'Laboratory study' },
  sandbox: { label: 'Sandbox' },
  simulation: { label: 'Simulation' },
  'staged-deployment': { label: 'Staged deployment' },
  'real-world-deployment': { label: 'Real-world deployment' },
  'retrospective-audit': { label: 'Retrospective audit' },
  'continuous-monitoring': { label: 'Continuous monitoring environment' },
} as const satisfies Vocab;

export type EnvironmentKey = keyof typeof ENVIRONMENTS;

/* ------------------------------------------------------------------ */
/* Scoring mechanisms                                                  */
/* ------------------------------------------------------------------ */

export const SCORING_MECHANISMS = {
  'exact-match': { label: 'Exact match' },
  'execution-based': { label: 'Execution-based scoring' },
  'reference-based-metric': { label: 'Reference-based metric' },
  'reference-free-metric': { label: 'Reference-free metric' },
  'human-rating': { label: 'Human rating' },
  'expert-adjudication': { label: 'Expert adjudication' },
  'ai-judge': { label: 'AI judge' },
  'reward-model': { label: 'Learned reward model' },
  'policy-rule-checking': { label: 'Policy-rule checking' },
  'formal-constraint-checking': { label: 'Formal constraint checking' },
  'observed-outcome': { label: 'Observed deployment outcome' },
} as const satisfies Vocab;

export type ScoringMechanismKey = keyof typeof SCORING_MECHANISMS;

/* ------------------------------------------------------------------ */
/* Claimed constructs                                                  */
/* ------------------------------------------------------------------ */

export const CONSTRUCTS = {
  capability: { label: 'Capability' },
  accuracy: { label: 'Accuracy' },
  reasoning: { label: 'Reasoning' },
  factuality: { label: 'Factuality' },
  reliability: { label: 'Reliability' },
  calibration: { label: 'Calibration' },
  robustness: { label: 'Robustness' },
  safety: { label: 'Safety' },
  security: { label: 'Security' },
  privacy: { label: 'Privacy' },
  fairness: { label: 'Fairness' },
  'harmful-content': { label: 'Harmful content' },
  misuse: { label: 'Misuse' },
  alignment: { label: 'Alignment' },
  'human-oversight': { label: 'Human oversight' },
  'social-impact': { label: 'Social impact' },
  compliance: { label: 'Compliance' },
  transparency: { label: 'Transparency' },
} as const satisfies Vocab;

export type ConstructKey = keyof typeof CONSTRUCTS;

/* ------------------------------------------------------------------ */
/* Evaluator filter categories (coarser than EVALUATOR_TYPES, used on   */
/* the Explore page)                                                   */
/* ------------------------------------------------------------------ */

export const EVALUATOR_FILTERS = {
  human: { label: 'Human' },
  expert: { label: 'Expert' },
  crowd: { label: 'Crowd' },
  'ai-judge': { label: 'AI judge' },
  'automated-verifier': { label: 'Automated verifier' },
  'mixed-human-ai': { label: 'Mixed human–AI' },
  auditor: { label: 'Auditor' },
  regulator: { label: 'Regulator' },
} as const satisfies Vocab;

export type EvaluatorFilterKey = keyof typeof EVALUATOR_FILTERS;

/* ------------------------------------------------------------------ */
/* Maturity                                                            */
/* ------------------------------------------------------------------ */

export const MATURITY_LEVELS = {
  established: { label: 'Established', description: 'Long-standing and stable in its community of use.' },
  'common-contested': { label: 'Common but contested', description: 'Widely used while its validity or interpretation is actively disputed.' },
  emerging: { label: 'Emerging', description: 'Gaining adoption; methods and norms still forming.' },
  experimental: { label: 'Experimental', description: 'Early-stage; used mainly in research settings.' },
  draft: { label: 'Draft entry', description: 'This Atlas entry itself is still being drafted and reviewed.' },
} as const satisfies Vocab;

export type MaturityKey = keyof typeof MATURITY_LEVELS;

/* ------------------------------------------------------------------ */
/* Entry status (source verification) and content status               */
/* ------------------------------------------------------------------ */

export const ENTRY_STATUSES = {
  verified: { label: 'Verified', description: 'Key claims are supported by checked primary sources.' },
  'partially-verified': { label: 'Partially verified', description: 'Some claims are supported by checked sources; others still need verification.' },
  'needs-verification': { label: 'Needs source verification', description: 'Drafted from working research material; primary sources not yet independently checked.' },
  draft: { label: 'Draft', description: 'An early draft. Structure is in place; content and sources are incomplete.' },
} as const satisfies Vocab;

export type EntryStatusKey = keyof typeof ENTRY_STATUSES;

export const CONTENT_STATUSES = {
  complete: { label: 'Complete' },
  'substantive-draft': { label: 'Substantive draft' },
  outline: { label: 'Outline' },
  stub: { label: 'Stub' },
} as const satisfies Vocab;

export type ContentStatusKey = keyof typeof CONTENT_STATUSES;

/* ------------------------------------------------------------------ */
/* Human involvement and access model                                  */
/* ------------------------------------------------------------------ */

export const HUMAN_INVOLVEMENT = {
  none: { label: 'None (fully automated)' },
  'in-the-loop': { label: 'Human in the loop' },
  'on-the-loop': { label: 'Human on the loop (oversight)' },
  'human-led': { label: 'Human-led' },
} as const satisfies Vocab;

export const ACCESS_MODELS = {
  'fully-open': { label: 'Fully open' },
  'partially-open': { label: 'Partially open' },
  'api-only': { label: 'API-only' },
  'confidential-external': { label: 'Confidential external' },
  'regulator-only': { label: 'Regulator-only' },
  internal: { label: 'Internal' },
  'third-party-controlled': { label: 'Third-party controlled' },
} as const satisfies Vocab;

/* ------------------------------------------------------------------ */
/* Source records                                                      */
/* ------------------------------------------------------------------ */

export const SOURCE_TYPES = {
  'peer-reviewed-article': { label: 'Peer-reviewed article' },
  preprint: { label: 'Preprint' },
  standard: { label: 'Standard' },
  regulation: { label: 'Regulation' },
  'government-report': { label: 'Government report' },
  'technical-report': { label: 'Technical report' },
  'benchmark-paper': { label: 'Benchmark paper' },
  repository: { label: 'Repository' },
  documentation: { label: 'Documentation' },
  'nonprofit-report': { label: 'Nonprofit report' },
  'company-publication': { label: 'Company publication' },
  'secondary-analysis': { label: 'Secondary analysis' },
} as const satisfies Vocab;

export type SourceTypeKey = keyof typeof SOURCE_TYPES;

export const PEER_REVIEW_STATUSES = {
  'peer-reviewed': { label: 'Peer-reviewed' },
  'not-peer-reviewed': { label: 'Not peer-reviewed' },
  unknown: { label: 'Peer-review status unknown' },
} as const satisfies Vocab;

export const VERIFICATION_STATUSES = {
  verified: { label: 'Verified', description: 'Record checked against the original source.' },
  unverified: { label: 'Needs source verification', description: 'Record drawn from working research material; not yet checked against the original.' },
} as const satisfies Vocab;

/* ------------------------------------------------------------------ */
/* URL path segment for each entry collection                          */
/* ------------------------------------------------------------------ */

export const COLLECTION_PATHS = {
  methods: 'methods',
  benchmarks: 'benchmarks',
  infrastructures: 'infrastructures',
  standards: 'standards',
  institutions: 'institutions',
  observatories: 'observatories',
  documentation: 'documentation',
  concepts: 'concepts',
} as const;

export type EntryCollectionKey = keyof typeof COLLECTION_PATHS;

export const COLLECTION_TO_ENTRY_TYPE: Record<EntryCollectionKey, EntryTypeKey> = {
  methods: 'method',
  benchmarks: 'benchmark',
  infrastructures: 'infrastructure',
  standards: 'standard',
  institutions: 'institution',
  observatories: 'observatory',
  documentation: 'documentation',
  concepts: 'concept',
};

/** Look up a term label with a safe fallback (used in Astro templates). */
export function labelOf(vocab: Vocab, key: string): string {
  return vocab[key]?.label ?? key;
}
