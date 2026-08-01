---
id: mmlu
title: MMLU
aliases:
  - Measuring Massive Multitask Language Understanding
entry_type: benchmark
status: needs-verification
content_status: outline
summary: >-
  A multiple-choice benchmark covering a broad range of academic and
  professional subjects, scored by exact-match accuracy. Long the default
  broad-knowledge instrument, it is now widely regarded as saturated and
  contaminated at the frontier.
definition: >-
  MMLU presents multiple-choice questions drawn from many academic and
  professional subject areas and scores a model by the share of items where
  it selects the correct option. The instrument measures answer selection on
  a fixed English-language item set, not open-ended knowledge use.
claimed_constructs:
  - capability
  - accuracy
evaluation_levels:
  - model
lifecycle_stages:
  - pre-deployment
  - release
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
evidence_class: research-convention
maturity: common-contested
access_model: fully-open
strengths:
  - Broad subject coverage in a single cheap, fast instrument, which made it
    the field's default broad-knowledge comparison for several years.
  - Exact-match scoring against fixed answer keys is simple and repeatable
    when prompts and settings are recorded.
  - A long reporting history enables longitudinal comparison across model
    generations, within the limits set by contamination.
limitations:
  - Contamination analyses summarized in the working research reports flag a
    double-digit share of items as present in large modern training corpora,
    inflating scores through memorization (figures unverified).
  - Frontier models cluster near the ceiling, so the instrument no longer
    discriminates between leading systems; the research reports describe it
    as effectively retired at the frontier.
  - Independent analyses summarized in the reports describe label errors in a
    nontrivial fraction of items (figures unverified).
  - The multiple-choice format rewards option elimination and test-taking
    strategy, and scores are sensitive to answer ordering and prompt format.
  - The item set is English-language with a US-centric framing, and the
    aggregate score masks large variation across subjects.
appropriate_claims:
  - Model A selects more correct options than model B on this item set,
    under stated prompts and settings, for models below the ceiling.
  - Performance on this style of multiple-choice knowledge task has risen
    across model generations, subject to contamination caveats.
inappropriate_claims:
  - That an MMLU score demonstrates general knowledge, understanding, or
    reasoning ability, which are constructs the instrument has not been
    validated to measure.
  - That small differences between frontier models on MMLU are meaningful,
    given saturation, contamination, and reported label errors.
  - That a high MMLU score is evidence a model is safe, reliable, or suited
    to any deployed application.
  - That an aggregate MMLU number characterizes performance in specific
    subjects or professional domains, which vary widely beneath the average.
known_failure_modes:
  - Score inflation from test items memorized during training.
  - Rankings shifting under answer-order or prompt-format changes.
related_entries:
  - benchmark-based-evaluation
  - benchmark-contamination
  - benchmark-saturation
  - construct-validity
  - helm
  - livebench
related_guides:
  - benchmarks-and-their-limits
primary_sources:
  - src-hendrycks-2021-mmlu
secondary_sources:
  - src-bean-2025-benchmark-review
source_status: >-
  Drafted from working research reports. Contamination rates, label-error
  figures, and saturation claims are reported there but have not been
  independently verified against primary sources.
created: 2026-07-31
last_reviewed: 2026-07-31
reviewer: Monica Kodwani
tags:
  - benchmark
  - multiple-choice
  - knowledge
featured: false
---
