/**
 * Glossary of core Atlas terms. Each term gets an anchor on the Glossary page
 * (/glossary/#<id>) and can be linked from taxonomy views via <TermTip>.
 * `related` holds ids of Atlas entries that treat the term in depth.
 */

export interface GlossaryTerm {
  id: string;
  term: string;
  definition: string;
  related: string[];
}

export const GLOSSARY: GlossaryTerm[] = [
  {
    id: 'evaluation',
    term: 'Evaluation',
    definition:
      'Any systematic process of gathering evidence about the capabilities, behaviors, properties, or impacts of an AI system. Evaluation is broader than benchmarking: it includes human judgment, adversarial testing, audits, and post-deployment monitoring.',
    related: ['benchmark-based-evaluation', 'human-evaluation'],
  },
  {
    id: 'benchmark',
    term: 'Benchmark',
    definition:
      'A fixed or evolving dataset plus a scoring procedure intended to measure a construct. A benchmark is an instrument; whether it is a valid instrument for a given claim is a separate question that usually has to be established.',
    related: ['benchmark-based-evaluation', 'construct-validity'],
  },
  {
    id: 'validation',
    term: 'Validation',
    definition:
      'Establishing that a system fulfills its intended real-world purpose — "did we build the right system?" Contrast with verification, which checks conformance to a specification.',
    related: ['construct-validity'],
  },
  {
    id: 'verification',
    term: 'Verification',
    definition:
      'Establishing that a system was built according to its specification — "did we build the system right?" Contrast with validation, which asks whether the specification serves the real-world purpose.',
    related: [],
  },
  {
    id: 'reliability',
    term: 'Reliability',
    definition:
      'The degree to which an evaluation produces consistent results under repetition: across runs, seeds, prompt variations, scorer instances, and time. An unreliable measurement cannot support a strong claim, however valid the instrument design.',
    related: ['reliability', 'evaluation-reproducibility'],
  },
  {
    id: 'validity',
    term: 'Validity',
    definition:
      'The degree to which an evaluation measures what it claims to measure, and supports the inferences drawn from its results. Validity is claim-specific: an instrument can be valid for comparing models and invalid for certifying deployment safety.',
    related: ['construct-validity', 'ecological-validity'],
  },
  {
    id: 'construct',
    term: 'Construct',
    definition:
      'The underlying property an evaluation claims to measure — "reasoning," "safety," "fairness," "helpfulness." Constructs are not directly observable; they must be operationalized into tasks and scores, and the quality of that operationalization is a central question of evaluation science.',
    related: ['construct-validity'],
  },
  {
    id: 'audit',
    term: 'Audit',
    definition:
      'An independent, structured examination of an AI system, process, or organization against a stated reference — a standard, a policy, or a legal requirement. Audit quality depends heavily on the auditor’s independence and level of access.',
    related: ['standards-and-assurance'],
  },
  {
    id: 'assurance',
    term: 'Assurance',
    definition:
      'The accumulation of documented evidence — often organized as a structured safety or assurance case — sufficient to justify confidence that a system meets defined requirements. Assurance is an argument supported by evidence, not a single test result.',
    related: ['standards-and-assurance', 'assurance-case'],
  },
  {
    id: 'red-teaming',
    term: 'Red teaming',
    definition:
      'Adversarial evaluation that deliberately attempts to elicit failures, harmful outputs, or policy violations. Red teaming is open-ended and adaptive; it demonstrates the existence of failure modes but does not by itself estimate how often they occur in deployment.',
    related: ['red-teaming'],
  },
  {
    id: 'monitoring',
    term: 'Monitoring',
    definition:
      'Continuous or periodic observation of a deployed system’s behavior, performance, and impacts, including drift detection, sampled review, and incident tracking.',
    related: ['continuous-evaluation', 'evaluation-drift'],
  },
  {
    id: 'observatory',
    term: 'Observatory',
    definition:
      'An institution or platform that aggregates and analyzes data about AI systems, incidents, policies, or disclosures over time. Observatories mostly produce aggregation and trend evidence rather than direct tests of systems.',
    related: ['ai-incident-database', 'oecd-ai'],
  },
  {
    id: 'conformity-assessment',
    term: 'Conformity assessment',
    definition:
      'The demonstration that a product, process, system, or organization fulfills specified requirements, potentially culminating in certification or a declaration of conformity. In AI regulation, conformity assessment is often performed by the provider itself.',
    related: ['conformity-assessment'],
  },
  {
    id: 'impact-assessment',
    term: 'Impact assessment',
    definition:
      'A prospective, structured analysis of a system’s potential effects on people and society, conducted before or during deployment. Variants include algorithmic, fundamental-rights, and data-protection impact assessments.',
    related: ['impact-assessment'],
  },
  {
    id: 'ai-as-a-judge',
    term: 'AI-as-a-judge',
    definition:
      'Using an AI model to score, rank, or critique the outputs of another (or the same) AI system. Cheap and scalable, with documented systematic biases — position, verbosity, and self-preference among them — that shared-model ensembles do not remove.',
    related: ['ai-as-a-judge', 'ai-judge-bias'],
  },
  {
    id: 'constitutional-evaluation',
    term: 'Constitutional evaluation',
    definition:
      'Assessing a system’s adherence to a written behavioral specification — a constitution, model specification, or usage policy. Compliance is usually measured with AI judges, which inherits their validity problems and adds circularity when the judge shares the specification being tested.',
    related: ['ai-as-a-judge'],
  },
  {
    id: 'sociotechnical-evaluation',
    term: 'Sociotechnical evaluation',
    definition:
      'Evaluation of the system-in-context: the technical artifact together with its users, workflows, organizational policies, and downstream societal effects. Most published AI evaluations still measure capability in isolation rather than human–AI interaction or systemic impact.',
    related: ['ecological-validity'],
  },
];
