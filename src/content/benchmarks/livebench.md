---
id: livebench
title: LiveBench
aliases: []
entry_type: benchmark
status: needs-verification
content_status: stub
summary: >-
  A rotating benchmark that regularly introduces fresh items scored by
  objective rules, designed to limit training-data contamination rather
  than to eliminate it.
definition: >-
  LiveBench releases new test items on a rolling basis and scores them with
  automated, objective grading rather than model or human judgment. The
  working reports describe it as a contamination-limited design — items
  are fresh at release, so scores are less likely to be inflated by direct
  training exposure than scores on long-public static benchmarks.
claimed_constructs:
  - capability
  - accuracy
  - reasoning
evaluation_levels:
  - model
  - output
  - task
lifecycle_stages:
  - pre-deployment
purposes:
  - model-comparison
  - scientific-understanding
evaluator_types:
  - model-developer
  - independent-researcher
evaluator_filters:
  - automated-verifier
environments:
  - public-benchmark
scoring_mechanisms:
  - exact-match
  - execution-based
evidence_class: research-convention
maturity: emerging
human_involvement: none
access_model: fully-open
strengths:
  - Fresh, time-stamped items reduce the chance that scores reflect direct
    training exposure, the main failure of long-public static benchmarks.
  - Objective grading avoids the documented biases of AI-judge scoring for
    open-ended outputs.
limitations:
  - Continuous curation is a standing burden — the design depends on a
    supply of new, quality-controlled items, and item quality and
    auditability are harder to establish for a rotating pool than for a
    fixed public set.
  - Rotation does not prevent targeting — developers can still tune to the
    benchmark's task distribution and style, and released items enter web
    crawls over time.
  - Because the item pool changes between versions, scores are not directly
    comparable across releases; longitudinal readings conflate model change
    with instrument change.
appropriate_claims:
  - Comparative performance of models on freshly introduced items, scored
    by objective rules, at a stated benchmark version and date.
  - Reduced likelihood, relative to long-public static benchmarks, that a
    score is inflated by direct training exposure to the test items.
inappropriate_claims:
  - That rotation makes contamination impossible — items are exposed once
    released, and indirect exposure through discussion and derivatives is
    not addressed by freshness alone.
  - That contamination resistance establishes validity — a fresh item can
    still be a poor measure of the construct it is claimed to test.
  - That scores from different releases of the benchmark can be compared as
    if they came from the same instrument.
known_failure_modes:
  - Item exposure and derivative discussion accumulating after each
    release.
  - Developers optimizing against the benchmark's recurring task
    distribution rather than the underlying capability.
  - Silent instrument drift across versions being read as model progress
    or regression.
related_entries:
  - benchmark-based-evaluation
  - benchmark-contamination
  - benchmark-saturation
  - evaluation-drift
  - mmlu
  - swe-bench
related_guides:
  - benchmarks-and-their-limits
  - evaluation-is-measurement
primary_sources: []
secondary_sources: []
source_status: >-
  Stub drafted from working research reports only. The reports attribute
  the benchmark to White et al. ("LiveBench: A Challenging,
  Contamination-Limited LLM Benchmark", 2024/2025); no source record has
  been created or checked, and the description of scoring and release
  mechanics needs verification against the primary paper.
created: 2026-07-31
last_reviewed: 2026-07-31
reviewer: Monica Kodwani
tags:
  - contamination
  - live-benchmark
  - rotating-items
featured: false
---
