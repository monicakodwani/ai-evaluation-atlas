/**
 * Editorial content for the three Taxonomy views.
 */

import type { EvaluationLevelKey, EvidenceClassKey } from './vocabularies';

/* ---------- View A: evaluation object stack ---------- */

export interface LevelDetail {
  id: EvaluationLevelKey;
  questions: string[];
  methods: string[];
  examples: string[];
  validityMistake: string;
}

export const LEVEL_DETAILS: LevelDetail[] = [
  {
    id: 'data',
    questions: [
      'Is the data accurate, current, and fit for the intended use?',
      'Does it represent the populations the system will serve?',
      'Does training data overlap with evaluation data?',
    ],
    methods: ['Data quality assessment', 'Provenance review', 'Contamination checks', 'Documentation (datasheets)'],
    examples: ['Auditing a fine-tuning corpus for licensing and consent', 'Measuring benchmark overlap with a crawl corpus'],
    validityMistake:
      'Treating a clean aggregate quality score as evidence that every subgroup is well represented.',
  },
  {
    id: 'model',
    questions: [
      'What can this trained artifact do on defined tasks?',
      'How does it compare with other models under matched conditions?',
      'What behaviors does it show under standardized probing?',
    ],
    methods: ['Benchmark-based evaluation', 'Capability probing', 'Red teaming at the model layer'],
    examples: ['Scoring a base model on a knowledge benchmark', 'Comparing checkpoints during training'],
    validityMistake:
      'Treating model-level benchmark performance as evidence about a deployed workflow.',
  },
  {
    id: 'prompt-configuration',
    questions: [
      'How sensitive is behavior to prompt wording, format, and decoding settings?',
      'Which configuration is actually being measured?',
    ],
    methods: ['Prompt-sensitivity analysis', 'Configuration sweeps', 'Versioned prompt testing'],
    examples: ['Measuring score variance across paraphrased instructions', 'Testing temperature effects on refusal rates'],
    validityMistake:
      'Reporting a single score without recording the prompt and settings, making the number irreproducible and the comparison unstable.',
  },
  {
    id: 'output',
    questions: [
      'Is this response correct, harmful, biased, or appropriately calibrated?',
      'Who or what judges it, and how consistently?',
    ],
    methods: ['Human rating', 'AI-as-a-judge', 'Reference-based metrics', 'Policy-rule checking'],
    examples: ['Grading answers against a rubric', 'Screening outputs with a safety classifier'],
    validityMistake:
      'Averaging output-level judgments into an overall quality score without checking whether raters or judges agree with each other.',
  },
  {
    id: 'interaction',
    questions: [
      'How does quality hold up across a multi-turn conversation?',
      'How do errors, ambiguity, and repair compound over turns?',
    ],
    methods: ['Multi-turn evaluation', 'Simulated users', 'Conversation-level human review'],
    examples: ['Evaluating whether a tutor system corrects its own earlier mistakes', 'Adversarial multi-turn probing'],
    validityMistake:
      'Extrapolating single-turn safety results to conversations, where multi-turn pressure and context-shifting defeat single-turn safeguards.',
  },
  {
    id: 'task',
    questions: [
      'Does the system complete a defined task to a specified criterion?',
      'At what cost, latency, and reliability?',
    ],
    methods: ['Task suites with success criteria', 'Execution-based scoring', 'Expert task review'],
    examples: ['Resolving a software issue against hidden tests', 'Completing a booking scenario'],
    validityMistake:
      'Reporting single-run task success for stochastic systems, when success can drop sharply across repeated runs.',
  },
  {
    id: 'agent-trajectory',
    questions: [
      'How did the agent get to its outcome — were the steps safe, efficient, and authorized?',
      'Did it succeed for the right reasons, or luck into a passing state?',
    ],
    methods: ['Trajectory scoring', 'Process evaluation', 'Sandboxed agent environments'],
    examples: ['Reviewing an agent’s action log for unnecessary or destructive steps', 'Partial-credit scoring of multi-step tasks'],
    validityMistake:
      'Scoring only final outcomes, which rewards agents that game the checker rather than genuinely solving the task.',
  },
  {
    id: 'tool-call',
    questions: [
      'Were tool invocations necessary, well-formed, and within permissions?',
      'Can injected content trigger unsafe calls?',
    ],
    methods: ['Tool-call validation', 'Permission-boundary testing', 'Prompt-injection testing'],
    examples: ['Testing whether an agent leaks data through a web tool', 'Checking that destructive API calls require confirmation'],
    validityMistake:
      'Assuming model-layer refusal training protects the tool layer, where injected instructions and runtime permissions live.',
  },
  {
    id: 'application',
    questions: [
      'Does the assembled product — model, prompts, retrieval, guardrails, interface — behave acceptably end to end?',
      'How do components interact under real inputs?',
    ],
    methods: ['End-to-end scenario testing', 'A/B evaluation', 'Security testing of the full stack'],
    examples: ['Evaluating a customer-support product on real ticket distributions', 'Regression-testing after a prompt change'],
    validityMistake:
      'Quoting the base model’s benchmark scores as evidence about the application, when scaffolding can shift behavior more than a model swap.',
  },
  {
    id: 'workflow',
    questions: [
      'How does the human-plus-AI workflow perform compared with the prior workflow?',
      'Where does human oversight actually catch errors, and where is it rubber-stamping?',
    ],
    methods: ['Field studies', 'Workflow outcome analysis', 'Human-oversight testing'],
    examples: ['Measuring error rates of clinicians with and without AI assistance', 'Auditing how often reviewers override the system'],
    validityMistake:
      'Evaluating the AI component alone and assuming the human safety net works, without ever testing whether people can and do catch its failures.',
  },
  {
    id: 'organization',
    questions: [
      'Does the organization have working processes for risk management, evaluation, and response?',
      'Are its published claims about testing supported by records?',
    ],
    methods: ['Management-system audits', 'Governance assessment', 'Documentation review'],
    examples: ['Certification against an AI management-system standard', 'Reviewing an organization’s evaluation records'],
    validityMistake:
      'Treating a process certification as evidence that any particular system is safe — process standards mostly verify that processes exist.',
  },
  {
    id: 'societal-impact',
    questions: [
      'What effects is the technology having on labor, information, equity, and institutions?',
      'Who bears the costs, and are they visible in the data collected?',
    ],
    methods: ['Impact assessment', 'Incident aggregation', 'Longitudinal observatory analysis', 'Participatory evaluation'],
    examples: ['Tracking documented incidents over time', 'Studying deployment effects on a labor market'],
    validityMistake:
      'Reading incident counts as harm rates, when reporting effort and deployment growth drive the numbers as much as underlying harm.',
  },
];

/* ---------- View B: method matrix ---------- */

export interface MethodRow {
  method: string;
  /** id of the corresponding Atlas entry, when one exists. */
  entryId?: string;
  target: string;
  evaluator: string;
  output: string;
  strength: string;
  limitation: string;
  maturity: string;
  commonUse: string;
}

export const METHOD_MATRIX: MethodRow[] = [
  {
    method: 'Static benchmark',
    entryId: 'benchmark-based-evaluation',
    target: 'Model / output',
    evaluator: 'Automated scoring',
    output: 'Scores, rankings',
    strength: 'Cheap, repeatable, comparable across models',
    limitation: 'Contamination, saturation, weak transfer to deployment',
    maturity: 'Established',
    commonUse: 'Model comparison and reporting',
  },
  {
    method: 'Dynamic benchmark',
    entryId: 'benchmark-based-evaluation',
    target: 'Model / task',
    evaluator: 'Automated scoring, rotating items',
    output: 'Scores on fresh items',
    strength: 'Contamination-resistant by design',
    limitation: 'Continuous curation burden; comparability across versions',
    maturity: 'Emerging',
    commonUse: 'Frontier capability tracking',
  },
  {
    method: 'Human evaluation',
    entryId: 'human-evaluation',
    target: 'Output / interaction',
    evaluator: 'Crowd workers, experts, users',
    output: 'Ratings, preferences, annotations',
    strength: 'Reference standard for contested and subjective qualities',
    limitation: 'Costly; inter-rater reliability often unmeasured or low',
    maturity: 'Established, weakly standardized',
    commonUse: 'Quality and preference measurement',
  },
  {
    method: 'AI-as-a-judge',
    entryId: 'ai-as-a-judge',
    target: 'Output / interaction',
    evaluator: 'LLM judge',
    output: 'Scores, pairwise preferences',
    strength: 'Scales to volumes humans cannot review',
    limitation: 'Position, verbosity, and self-preference biases; weak in expert domains',
    maturity: 'Common but contested',
    commonUse: 'Development iteration, large-scale triage',
  },
  {
    method: 'Automated verifier',
    target: 'Output / task',
    evaluator: 'Execution, tests, rule checks',
    output: 'Pass/fail, error traces',
    strength: 'Objective where correctness is checkable',
    limitation: 'Only applies where a checkable criterion exists; checkers can be gamed',
    maturity: 'Established for code and math',
    commonUse: 'Code, math, structured tasks',
  },
  {
    method: 'Red teaming',
    entryId: 'red-teaming',
    target: 'Model / application',
    evaluator: 'Adversarial humans and/or AI',
    output: 'Failure demonstrations, vulnerability reports',
    strength: 'Finds failures fixed test sets miss',
    limitation: 'Existence proofs only; coverage and risk rates unquantified',
    maturity: 'Widely adopted, methodologically young',
    commonUse: 'Pre-release safety and security testing',
  },
  {
    method: 'Agent sandbox',
    entryId: 'agent-trajectory-evaluation',
    target: 'Agent trajectory / tool call',
    evaluator: 'Environment + automated checks',
    output: 'Task success, trajectories, logs',
    strength: 'Tests multi-step autonomy under controlled conditions',
    limitation: 'Outcome-only scoring gameable; high run-to-run variance',
    maturity: 'Emerging',
    commonUse: 'Agent capability and safety testing',
  },
  {
    method: 'Audit',
    entryId: 'standards-and-assurance',
    target: 'Application / organization',
    evaluator: 'Independent auditor',
    output: 'Findings against a reference standard',
    strength: 'Independence; ties evidence to stated criteria',
    limitation: 'Access constraints; few accredited criteria for AI specifics',
    maturity: 'Established in adjacent fields; emerging for AI',
    commonUse: 'Compliance, procurement, accountability',
  },
  {
    method: 'Impact assessment',
    entryId: 'impact-assessment',
    target: 'Application / societal impact',
    evaluator: 'Assessors + stakeholders',
    output: 'Structured prospective analysis',
    strength: 'Forces consideration of affected populations before deployment',
    limitation: 'Quality varies widely; often unverified self-assessment',
    maturity: 'Formalized in some jurisdictions',
    commonUse: 'Governance and regulatory processes',
  },
  {
    method: 'Continuous monitoring',
    entryId: 'continuous-evaluation',
    target: 'Deployed application / workflow',
    evaluator: 'Automated + sampled human review',
    output: 'Time series, alerts, drift reports',
    strength: 'Catches drift and failures tests cannot anticipate',
    limitation: 'Metric design hard; quality drift often invisible to infra metrics',
    maturity: 'Established in ML ops; young for generative AI',
    commonUse: 'Post-deployment oversight',
  },
  {
    method: 'Incident analysis',
    target: 'Deployment / societal impact',
    evaluator: 'Analysts, databases',
    output: 'Incident records, root causes',
    strength: 'Grounded in real harms, not hypothetical ones',
    limitation: 'Reporting bias; counts are not rates',
    maturity: 'Emerging institutional practice',
    commonUse: 'Learning from failures; trend detection',
  },
  {
    method: 'Formal verification',
    target: 'Model / component properties',
    evaluator: 'Mathematical proof, constraint checking',
    output: 'Proven guarantees within assumptions',
    strength: 'Strongest possible evidence where it applies',
    limitation: 'Applies to narrow properties and small components, not open-ended LLM behavior',
    maturity: 'Established in adjacent fields; experimental for frontier AI',
    commonUse: 'Safety-critical components, robustness certificates',
  },
];

/* ---------- View C: evidence and adoption map ---------- */

export interface EvidenceMapExample {
  label: string;
  entryId?: string;
  classes: EvidenceClassKey[];
  note: string;
}

export const EVIDENCE_MAP_EXAMPLES: EvidenceMapExample[] = [
  {
    label: 'AI management-system certification (ISO/IEC 42001)',
    entryId: 'iso-iec-42001',
    classes: ['formal-standard'],
    note: 'A formal, certifiable standard — yet process-oriented: it requires organizations to evaluate without prescribing metrics or thresholds.',
  },
  {
    label: 'Bias audits for automated employment tools (NYC Local Law 144)',
    classes: ['formal-standard'],
    note: 'One of the few binding, domain-specific evaluation requirements in force.',
  },
  {
    label: 'System cards',
    entryId: 'system-cards',
    classes: ['industry-practice'],
    note: 'Widely published by frontier developers; content and rigor vary and are not standardized.',
  },
  {
    label: 'Internal and external red teaming',
    entryId: 'red-teaming',
    classes: ['industry-practice', 'emerging'],
    note: 'Standard practice at frontier labs, while methods for converting findings into risk estimates remain experimental.',
  },
  {
    label: 'Held-out test sets and execution-based code scoring',
    entryId: 'benchmark-based-evaluation',
    classes: ['research-convention'],
    note: 'The default of the research literature — a convention, not a standard, and known to be fragile to contamination.',
  },
  {
    label: 'LLM-as-a-judge scoring',
    entryId: 'ai-as-a-judge',
    classes: ['research-convention', 'industry-practice'],
    note: 'Adopted for its scalability across research and industry despite documented, partially unmitigated biases.',
  },
  {
    label: 'Agent trajectory and process scoring',
    entryId: 'agent-trajectory-evaluation',
    classes: ['emerging'],
    note: 'Actively developed in response to outcome-only scoring being gamed; no settled methodology yet.',
  },
  {
    label: 'Safety and assurance cases for frontier models',
    entryId: 'assurance-case',
    classes: ['emerging'],
    note: 'Imported from safety-critical industries; evidentiary requirements for AI are not yet standardized.',
  },
  {
    label: 'Standardized evaluation reporting with uncertainty ("evaluation cards")',
    classes: ['proposed'],
    note: 'Repeatedly proposed in the measurement literature; adoption remains rare.',
  },
  {
    label: 'Participatory evaluation by affected communities at scale',
    classes: ['proposed'],
    note: 'Argued for in the sociotechnical literature; little validated large-scale practice exists.',
  },
];
