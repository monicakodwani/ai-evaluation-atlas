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
why_it_matters: >-
  For several years MMLU was the field's default broad-knowledge scoreboard,
  and it still appears in model cards and marketing. How it aged —
  saturation, contamination, label errors — is the clearest available case
  study in why benchmark scores have expiry dates.
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
evidence_produced: >-
  Exact-match accuracy on a fixed set of English multiple-choice items
  spanning many subjects — evidence about answer selection under specific
  prompt settings, not about open-ended knowledge use.
combine_with:
  - Contamination checks before citing scores for any recently trained
    model, since the item set has been public for years.
  - Harder or held-out knowledge instruments when comparing frontier
    models, where MMLU no longer discriminates.
  - Domain-specific evaluation when the claim concerns a particular subject
    or profession, since the aggregate masks wide subject-level variation.
misconceptions:
  - misconception: MMLU measures general knowledge or intelligence.
    reality: >-
      It measures multiple-choice answer selection on a fixed English item
      set. The "massive multitask" in its name describes item coverage, not
      a validated construct.
  - misconception: >-
      Comparing frontier models on MMLU still tells you which one knows
      more.
    reality: >-
      Leading models cluster near the ceiling of a contaminated public set;
      differences there reflect memorization, noise, and prompt artifacts
      more than capability.
  - misconception: The headline score describes performance in each subject.
    reality: >-
      The average hides large subject-to-subject variation — two models
      with the same aggregate can differ sharply in any given domain.
questions_to_ask:
  - Which prompt format, few-shot examples, and answer ordering were used —
    and would the ranking survive changing them?
  - Was contamination checked for the specific model being scored, or is it
    assumed away?
  - Is the model near the instrument's ceiling, where score differences
    stop being informative?
  - Does the claim concern a specific subject or profession, and if so,
    were per-subject results reported?
  - Is the score being read as "knowledge" or "understanding" rather than
    as answer selection on this item set?
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
last_reviewed: 2026-08-03
reviewer: Monica Kodwani
tags:
  - benchmark
  - multiple-choice
  - knowledge
featured: false
---
