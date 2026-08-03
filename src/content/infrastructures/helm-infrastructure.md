---
id: helm-infrastructure
title: HELM evaluation infrastructure
entry_type: infrastructure
status: needs-verification
content_status: outline
summary: >-
  Stanford CRFM's open evaluation infrastructure behind the HELM suite:
  standardized scenario execution with transparent request-and-response
  logging intended to make results independently inspectable.
definition: >-
  Beyond the HELM benchmark suite itself, HELM's infrastructure runs models
  across scenarios under recorded configurations and publishes the raw
  requests and responses alongside scores. The design goal is transparency
  and reproducibility: a reader can inspect what was actually sent to and
  returned by each model rather than trusting an aggregate number.
why_it_matters: >-
  HELM's request-and-response logging set a transparency bar most
  leaderboards still do not meet — a reader can audit exactly what each
  model was asked and answered rather than trusting an aggregate score. It
  is also a working demonstration that reproducible execution and valid
  measurement are separate layers of evidence.
claimed_constructs:
  - reliability
  - transparency
evaluation_levels:
  - model
  - prompt-configuration
lifecycle_stages:
  - pre-deployment
  - training
purposes:
  - model-comparison
  - scientific-understanding
evaluator_types:
  - independent-researcher
  - model-developer
evaluator_filters:
  - automated-verifier
environments:
  - public-benchmark
scoring_mechanisms:
  - exact-match
  - reference-based-metric
evidence_class: research-convention
maturity: established
organization: Stanford Center for Research on Foundation Models
access_model: fully-open
strengths:
  - Transparent request/response logging lets third parties audit exactly
    what was measured — rare among leaderboards.
  - Standardized execution reduces the configuration variance that makes
    cross-paper comparisons unreliable.
  - The working reports describe continued methodological development,
    including adaptive-testing additions (needs verification).
limitations:
  - Infrastructure guarantees reproducible execution, not valid constructs —
    the scenarios inherit the validity limits of their underlying
    benchmarks.
  - Breadth-first design trades depth in any single capability or risk area.
  - Covering commercial models via API leaves results exposed to silent
    provider-side model changes.
appropriate_claims:
  - These scores were produced under recorded, inspectable configurations
    that others can re-run or audit.
  - Differences between models on a scenario reflect the logged
    configurations rather than undocumented prompt differences.
inappropriate_claims:
  - That reproducible execution makes the measured constructs valid — the
    instrument and the harness are separate layers of the evidence.
  - That coverage in a holistic suite equals coverage of deployment-relevant
    behavior.
evidence_produced: >-
  Auditable evaluation records: scores accompanied by the raw requests and
  responses behind them, produced under recorded configurations. The
  evidence establishes what was measured and how — not that the scenarios
  measure what they claim.
combine_with:
  - Validity and contamination analysis of the underlying scenarios, whose
    problems the infrastructure inherits rather than fixes.
  - Deeper, domain-specific evaluation wherever a breadth-first suite flags
    something worth investigating.
  - Version tracking of provider APIs when comparing over time, since
    silent model updates can change results under an unchanged
    configuration.
misconceptions:
  - misconception: Transparent logging makes HELM results valid.
    reality: >-
      Logging makes results auditable — anyone can see exactly what was
      asked and scored. Whether a scenario measures its claimed construct
      is a separate question the logs cannot answer.
  - misconception: Holistic coverage means the important things were measured.
    reality: >-
      Breadth-first design covers many scenarios shallowly. Holistic
      describes the suite's ambition across dimensions, not completeness
      with respect to any deployment's actual risks.
questions_to_ask:
  - Has anyone in this discussion actually inspected the logged requests
    and responses behind the cited score?
  - Which scenario version and configuration produced the number, and has
    the provider's model changed since the run?
  - Is the cited scenario near saturation or known contamination for these
    models?
  - Does the claim treat breadth of coverage as if it were depth of
    evidence about one specific capability or risk?
  - Would the comparison hold if the models were queried today, given
    silent provider-side updates?
related_entries:
  - helm
  - lm-evaluation-harness
  - inspect-ai
  - benchmark-based-evaluation
  - evaluation-reproducibility
related_guides:
  - benchmarks-and-their-limits
primary_sources:
  - src-liang-2022-helm
source_status: >-
  Drafted from working research reports; infrastructure details drawn from
  the HELM paper record and reports, not yet independently verified.
created: 2026-07-31
last_reviewed: 2026-08-03
reviewer: Monica Kodwani
tags:
  - harness
  - reproducibility
featured: false
---
