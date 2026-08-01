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
last_reviewed: 2026-07-31
reviewer: Monica Kodwani
tags:
  - harness
  - reproducibility
featured: false
---
