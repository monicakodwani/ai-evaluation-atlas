/**
 * Editorial content for the Lifecycle page and homepage lifecycle strip.
 * Stage ids match LIFECYCLE_STAGES in vocabularies.ts.
 */

import type { LifecycleStageKey } from './vocabularies';

export interface LifecycleStageContent {
  id: LifecycleStageKey;
  title: string;
  questions: string[];
  methods: string[];
  records: string[];
  commonFailure: string;
  /** ids of related Atlas entries. */
  related: string[];
  /** 1–2 example methods shown in the homepage strip. */
  strip: string[];
}

export const LIFECYCLE_CONTENT: LifecycleStageContent[] = [
  {
    id: 'design',
    title: 'Design',
    questions: [
      'What is the intended use?',
      'Who may be affected?',
      'What properties matter?',
      'What evidence would justify deployment?',
    ],
    methods: [
      'Construct definition',
      'Stakeholder analysis',
      'Impact assessment',
      'Threat modeling',
      'Risk register development',
    ],
    records: [
      'Intended-use statement',
      'Evaluation plan',
      'Risk register',
      'Affected-population analysis',
    ],
    commonFailure:
      'Deciding what to measure after the system is built, so the evaluation plan inherits whatever the available benchmarks happen to test rather than what the deployment actually requires.',
    related: ['impact-assessment', 'construct-validity'],
    strip: ['Impact assessment', 'Threat modeling'],
  },
  {
    id: 'data-preparation',
    title: 'Data preparation',
    questions: [
      'Is the data fit for the intended use?',
      'Where did it come from, and under what terms?',
      'Does it represent the populations the system will serve?',
      'Does it overlap with the test sets that will be used later?',
    ],
    methods: [
      'Data quality assessment',
      'Provenance review',
      'Contamination checks',
      'Representativeness analysis',
      'Privacy analysis',
      'Data documentation',
    ],
    records: [
      'Data documentation (datasheets, data statements)',
      'Provenance and licensing records',
      'Contamination-check results',
    ],
    commonFailure:
      'Skipping contamination checks, so later benchmark results silently measure memorization of test items rather than the claimed capability.',
    related: ['benchmark-contamination'],
    strip: ['Contamination checks', 'Provenance review'],
  },
  {
    id: 'training',
    title: 'Training',
    questions: [
      'How is behavior changing across checkpoints?',
      'Are earlier capabilities or safety behaviors regressing?',
      'Are new capabilities emerging that change the risk profile?',
    ],
    methods: [
      'Checkpoint evaluation',
      'Regression testing',
      'Privacy testing',
      'Capability monitoring',
      'Fine-tuning comparison',
    ],
    records: [
      'Checkpoint evaluation logs',
      'Regression-test history',
      'Capability-threshold tracking',
    ],
    commonFailure:
      'Tracking a single aggregate score across checkpoints and missing regressions in specific behaviors, subgroups, or safety properties that the aggregate averages away.',
    related: ['benchmark-based-evaluation', 'evaluation-drift'],
    strip: ['Checkpoint evaluation', 'Regression testing'],
  },
  {
    id: 'pre-deployment',
    title: 'Pre-deployment',
    questions: [
      'Does the candidate system meet the evidence bar defined at design time?',
      'How does it fail under realistic and adversarial conditions?',
      'What do independent evaluators find that internal teams did not?',
    ],
    methods: [
      'Held-out benchmark evaluation',
      'Scenario tests',
      'Human and expert evaluation',
      'Red teaming',
      'Security testing',
      'External evaluation',
      'Mitigation testing',
    ],
    records: [
      'Benchmark results with configurations and uncertainty',
      'Red-team findings and severity assessments',
      'External-evaluation reports',
    ],
    commonFailure:
      'Treating strong benchmark results as sufficient evidence of deployment readiness, without adversarial, interaction, or domain-specific testing.',
    related: [
      'benchmark-based-evaluation',
      'red-teaming',
      'human-evaluation',
      'agent-trajectory-evaluation',
    ],
    strip: ['Red teaming', 'Expert evaluation'],
  },
  {
    id: 'release',
    title: 'Release',
    questions: [
      'Does the accumulated evidence justify this release, at this scope?',
      'What limitations must users and integrators be told about?',
      'Who signed off, on what evidence?',
    ],
    methods: [
      'Assurance review',
      'Safety case',
      'Model or system card',
      'Release-scope decision',
      'Known-limitations disclosure',
    ],
    records: [
      'Safety or assurance case',
      'Model or system card',
      'Release decision record with evidence cited',
    ],
    commonFailure:
      'Publishing a system card that lists which evaluations were run and headline scores, but not prompts, settings, uncertainty, or negative results — documentation that communicates selected findings rather than enabling independent scrutiny.',
    related: ['model-cards', 'system-cards', 'assurance-case', 'standards-and-assurance'],
    strip: ['Safety case', 'System card'],
  },
  {
    id: 'deployment',
    title: 'Deployment',
    questions: [
      'Does the system behave in real workflows the way it behaved in testing?',
      'How do users actually rely on it, and where does oversight break down?',
      'What outcomes is it producing for affected people?',
    ],
    methods: [
      'Staged rollout',
      'Workflow evaluation',
      'Field study',
      'User research',
      'Outcome analysis',
      'Human oversight testing',
    ],
    records: [
      'Rollout-stage criteria and results',
      'Field-study findings',
      'Outcome and oversight metrics',
    ],
    commonFailure:
      'Assuming pre-deployment scores transfer to the deployed system, when prompts, retrieval, tools, interfaces, and user behavior can each shift performance substantially.',
    related: ['ecological-validity', 'agent-trajectory-evaluation'],
    strip: ['Staged rollout', 'Field study'],
  },
  {
    id: 'monitoring',
    title: 'Monitoring',
    questions: [
      'Is behavior drifting as models, prompts, data, or usage change?',
      'Are new failure modes appearing at scale?',
      'Would the organization notice degradation before users do?',
    ],
    methods: [
      'Drift testing',
      'Canary evaluations',
      'Sampled human review',
      'AI-assisted triage',
      'Incident monitoring',
      'Version tracking',
    ],
    records: [
      'Monitoring dashboards and alert thresholds',
      'Sampled-review results over time',
      'Version and configuration history',
    ],
    commonFailure:
      'Monitoring only infrastructure health (latency, uptime) while output quality and safety drift unmeasured.',
    related: ['continuous-evaluation', 'evaluation-drift', 'ai-incident-database'],
    strip: ['Drift testing', 'Sampled review'],
  },
  {
    id: 'incident-response',
    title: 'Incident response',
    questions: [
      'What actually happened, and to whom?',
      'Why did existing evaluations and safeguards miss it?',
      'Does the fix work, and what did it displace?',
    ],
    methods: [
      'Forensic analysis',
      'Replay',
      'Root-cause analysis',
      'Counterfactual testing',
      'Corrective-action review',
    ],
    records: [
      'Incident reports and timelines',
      'Root-cause analyses',
      'Corrective-action verification results',
    ],
    commonFailure:
      'Patching the specific reported failure without testing whether the fix generalizes — or whether it displaced the failure elsewhere.',
    related: ['ai-incident-database', 'red-teaming'],
    strip: ['Root-cause analysis', 'Replay'],
  },
  {
    id: 'retirement',
    title: 'Retirement',
    questions: [
      'What still depends on this system?',
      'What residual risks and obligations survive shutdown?',
      'What records must be kept, and for how long?',
    ],
    methods: [
      'Residual-risk review',
      'Dependency analysis',
      'Archival',
      'Migration planning',
      'Data-retention review',
    ],
    records: [
      'Decommissioning plan',
      'Archived evaluation evidence',
      'Data-retention and deletion records',
    ],
    commonFailure:
      'Deleting the evaluation record along with the system, leaving no evidence trail for audits, disputes, or research about what the system did in service.',
    related: ['standards-and-assurance'],
    strip: ['Residual-risk review', 'Archival'],
  },
];
