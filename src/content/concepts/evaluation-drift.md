---
id: evaluation-drift
title: Evaluation drift
entry_type: concept
status: needs-verification
content_status: outline
summary: >-
  The tendency of evaluation results to stop describing a system as models,
  prompts, data, usage, or the benchmark itself change over time.
definition: >-
  Evaluation evidence is time-stamped. Drift arrives from several
  directions: the deployed model is updated (sometimes silently behind an
  API); prompts and scaffolding change; user behavior and input
  distributions shift; and the benchmark itself changes — items leak into
  training data, or the dataset and scoring code are revised while the name
  stays the same.
why_it_matters: >-
  Point-in-time evidence decays. A system evaluated at release and never
  re-evaluated is, after enough change, an unevaluated system with
  paperwork. Drift is the core argument for monitoring and periodic
  re-evaluation rather than one-shot certification.
claimed_constructs:
  - reliability
evaluation_levels:
  - application
  - model
lifecycle_stages:
  - monitoring
  - deployment
purposes:
  - post-deployment-oversight
evidence_class: emerging
maturity: emerging
appropriate_claims:
  - Evaluation results should carry versions and dates, and claims based on
    them should expire with material changes.
  - Observed divergence between monitored behavior and release-time results
    is evidence requiring re-evaluation.
inappropriate_claims:
  - That release-time evaluation results describe the current system after
    model, prompt, or usage changes.
  - That a benchmark's name guarantees its content and scoring are what
    they were when cited results were produced.
misconceptions:
  - misconception: Drift means the model is degrading.
    reality: >-
      The model may be unchanged. Drift is divergence between the evidence
      and the current system-in-context — and it arrives just as often
      through prompts, users, input distributions, or revisions to the
      benchmark itself.
  - misconception: A stable benchmark name means a stable instrument.
    reality: >-
      Datasets and scoring code get revised while the name stays the same.
      Results cited under the same benchmark name can describe different
      instruments.
questions_to_ask:
  - When was this evaluation run, and which exact model version, prompts,
    and benchmark version does it describe?
  - What has changed since then — model updates, scaffolding changes,
    usage shifts, benchmark revisions?
  - Is there a defined trigger for re-evaluation, or does the result stand
    until someone remembers to check?
  - Do longitudinal comparisons use the same instrument version
    throughout, or is measured "progress" partly an artifact?
  - Could a silent model update behind a stable API name have invalidated
    this comparison?
known_failure_modes:
  - Silent model updates behind stable API names invalidating published
    comparisons.
  - Benchmark version changes making longitudinal "progress" partly an
    artifact.
related_entries:
  - continuous-evaluation
  - evaluation-reproducibility
  - benchmark-contamination
related_guides:
  - evaluation-after-deployment
source_status: >-
  Drafted from working research reports; concept-level synthesis with no
  unverified specifics beyond report attributions.
created: 2026-07-31
last_reviewed: 2026-08-03
reviewer: Monica Kodwani
tags:
  - monitoring
  - drift
featured: false
---
