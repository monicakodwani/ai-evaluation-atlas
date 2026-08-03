---
id: benchmark-contamination
title: Benchmark contamination
aliases:
  - Data contamination
  - Test-set leakage
entry_type: concept
status: needs-verification
content_status: outline
summary: >-
  Benchmark test items, or close variants of them, appearing in a model's
  training corpus — so a score partly measures memorization of the test
  rather than the ability the test was built to measure.
definition: >-
  Contamination is the presence of evaluation material in training data.
  Direct contamination means the test items themselves, or near-duplicates,
  were trained on. Indirect contamination includes published solutions,
  discussions, tutorials, and synthetic derivatives of benchmark items.
  Benchmark-targeted fine-tuning is a related problem that inflates scores
  even when no exact item appears in training data.
why_it_matters: >-
  Contamination breaks the basic logic of held-out testing. A contaminated
  score is evidence of exposure, not capability, and because foundation
  models train on web-scale corpora, any public benchmark is exposed by
  default over time. Working reports treat contamination as a first-order
  problem for interpreting older public benchmarks and a standing reason to
  discount frontier comparisons made on them.
claimed_constructs: []
evaluation_levels:
  - data
  - model
lifecycle_stages:
  - data-preparation
  - pre-deployment
purposes:
  - scientific-understanding
  - model-comparison
evaluator_types: []
evaluator_filters: []
environments: []
scoring_mechanisms: []
evidence_class: research-convention
maturity: common-contested
strengths:
  - Explains score inflation on public benchmarks without requiring any
    claim about a model's abilities.
  - Detection methods exist at two levels — corpus-side search (n-gram
    overlap against training data) and model-side black-box probes
    (membership inference, completion likelihood, perturbation sensitivity,
    canary strings).
  - Has driven concrete design responses, so the concept is actionable, not
    only diagnostic.
limitations:
  - Detection is imperfect and method-dependent; different probes can give
    conflicting signals on the same model-benchmark pair.
  - Corpus-side search is impossible for closed models whose training data
    are undisclosed, which is precisely where the stakes are highest.
  - No standard threshold exists for how much overlap invalidates a score,
    and routine per-benchmark contamination checks remain rare even at the
    frontier.
appropriate_claims:
  - Detected overlap between this benchmark and this training corpus means
    the affected scores should be discounted as capability evidence.
  - This public benchmark's items circulate in web-scale corpora, so scores
    on it carry an exposure risk that grows with time.
  - Frontier comparisons should prefer contamination-resistant instruments
    (rotating, time-stamped, or private item pools) over aged public sets.
inappropriate_claims:
  - That absence of detected overlap proves a benchmark is clean —
    detection methods are partial, and closed corpora cannot be searched.
  - That a contamination finding for one model or corpus transfers to other
    models trained on other data.
  - That a benchmark shown clean at release stays clean — items enter web
    crawls after publication.
misconceptions:
  - misconception: Contamination only matters when exact test items appear in training data.
    reality: >-
      Paraphrases, published solutions, tutorials, and derivative datasets
      also inflate scores — and exact-match detection misses all of them.
  - misconception: A benchmark checked clean at release stays clean.
    reality: >-
      Contamination is time-dependent. Public items enter web crawls after
      publication, so exposure grows with every training-data refresh, and a
      one-time check certifies only the past.
questions_to_ask:
  - How old is this benchmark relative to the model's training cutoff, and
    has anyone checked for overlap since release?
  - Was a contamination check run for this specific model-benchmark pair —
    and with which method, given that methods can disagree?
  - Could indirect leakage — solutions, discussions, derivative sets —
    affect the score even if no exact item was trained on?
  - For a closed model whose training data cannot be searched, what evidence
    could establish cleanliness — and is its absence being read as proof of
    it?
  - Would the comparison survive being re-run on a contamination-resistant
    instrument, such as rotating, time-stamped, or private items?
known_failure_modes:
  - Silent inflation, where memorized items raise scores without any
    observable difference in the reported number.
  - Indirect leakage through solution write-ups and derivative datasets that
    exact-match detection misses.
  - Contamination checks run once at benchmark release and never repeated
    as corpora grow.
related_entries:
  - benchmark-based-evaluation
  - benchmark-saturation
  - construct-validity
  - evaluation-reproducibility
  - mmlu
  - humaneval
  - livebench
related_guides:
  - benchmarks-and-their-limits
primary_sources: []
secondary_sources:
  - src-hendrycks-2021-mmlu
source_status: >-
  Drafted from working research reports. The specific contamination studies
  behind the reported dirty-rate figures are not yet identified or checked;
  all quantitative claims in this entry are hedged and unverified.
created: 2026-07-31
last_reviewed: 2026-08-03
reviewer: Monica Kodwani
tags:
  - contamination
  - data-leakage
  - benchmark
featured: false
---

Contamination is what happens when the instrument becomes part of the
training signal. Held-out testing assumes the test population is unseen;
web-scale pretraining quietly violates that assumption for any benchmark
whose items, solutions, or discussions are public. The result is a score
whose meaning has changed while its name has not.

### Scale of the problem, as reported

Working research reports describe double-digit "dirty" rates for older
public benchmarks. One contamination analysis using exact n-gram search
against a large modern corpus reportedly found roughly a quarter of MMLU
items and roughly a third of ARC-Challenge items affected, and reported
that newer sets begin clean but accumulate contamination as their items
enter web crawls. These figures are drawn from working material and have
not been verified against the underlying studies; the direction of the
finding — pervasive exposure for aged public sets — is consistent across
the reports.

### Detection and design responses

Detection splits by access. With training data in hand, exact and
fuzzy n-gram overlap search is possible. Without it — the closed-model
case — evaluators fall back on black-box evidence such as membership
inference, completion-likelihood probes, perturbation sensitivity, and
canary strings, which the reports characterize as partial signals rather
than definitive diagnoses. Design responses aim at prevention instead:
private or gated test splits, rotating and time-stamped item pools (the
"live benchmark" pattern), delayed item release, and canaried items. These
are research-community conventions; no body mandates contamination checks,
and the reports note that per-benchmark checks remain rare even in frontier
model releases.
