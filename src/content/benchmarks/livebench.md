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
why_it_matters: >-
  Rotating item pools are the field's main structural answer to benchmark
  contamination, and LiveBench is the prominent working example. Its
  design shows what freshness buys and what it cannot — freshness
  addresses one threat to a score's meaning, not validity itself.
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
evidence_produced: >-
  Comparative model scores on freshly released, objectively graded items
  at a stated benchmark version — evidence that is dated by design and
  tied to that release's item pool.
combine_with:
  - >-
    Fixed public benchmarks with explicit contamination checks when
    longitudinal comparability matters, since rotating pools break
    cross-release comparison.
  - >-
    Construct-focused scrutiny or human evaluation for the abilities the
    items claim to test — freshness contributes nothing to validity.
  - >-
    Contamination checks of its own once a release has aged, because
    released items enter web crawls like any other public data.
misconceptions:
  - misconception: Contamination-resistant means the scores are valid.
    reality: >-
      Freshness addresses one specific threat — direct training exposure
      to the test items. A fresh item can still be a poor measure of the
      construct, and developers can still tune to the benchmark's
      recurring task distribution.
  - misconception: >-
      LiveBench scores can be tracked over time like a fixed benchmark's.
    reality: >-
      The item pool changes between releases, so cross-release
      comparisons conflate model change with instrument change. Scores
      are comparable within a release, not across them.
questions_to_ask:
  - Which release of the benchmark was used, and were the items still
    fresh relative to the model's training cutoff when it was tested?
  - Are all the models being compared evaluated on the same release and
    item pool?
  - How was item quality controlled, given that a rotating pool is harder
    to audit than a fixed public set?
  - Could the developer have tuned to the benchmark's recurring task
    styles even without seeing the specific items?
  - What is the score being read as evidence of, beyond absence of direct
    contamination?
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
last_reviewed: 2026-08-03
reviewer: Monica Kodwani
tags:
  - contamination
  - live-benchmark
  - rotating-items
featured: false
---
