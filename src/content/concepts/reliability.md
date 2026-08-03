---
id: reliability
title: Reliability (of evaluations)
aliases:
  - Evaluation reliability
  - Measurement consistency
entry_type: concept
status: needs-verification
content_status: outline
summary: >-
  The consistency of an evaluation result under repetition — across random
  seeds, prompt variants, item samples, scorers, human raters, and time.
  Rarely quantified in published AI evaluation results.
definition: >-
  Reliability is the degree to which an evaluation yields consistent results
  when repeated under conditions that should not matter to the claim being
  made. A reported score is one realization drawn from several variance
  sources at once — items, prompt and format choices, stochastic decoding,
  judge or rater identity, and the model snapshot at the time of testing.
  Reliability analysis asks how much of an observed score, or an observed
  difference between systems, survives resampling those sources.
why_it_matters: >-
  Most published evaluations report a single point estimate and treat it as
  the system's true ability. When run-to-run and prompt-to-prompt variance
  is unquantified, leaderboard differences smaller than that variance are
  read as meaningful rankings. Reliability is also the ceiling on what human
  labels can support — if raters do not agree beyond chance, a model scored
  against their labels cannot be measured more precisely than they agree.
claimed_constructs: []
evaluation_levels: []
lifecycle_stages:
  - pre-deployment
  - monitoring
purposes:
  - scientific-understanding
  - model-comparison
evaluator_types: []
evaluator_filters: []
environments: []
scoring_mechanisms: []
evidence_class: research-convention
maturity: emerging
strengths:
  - Turns a point score into an estimate with a defensible uncertainty,
    which is what a comparison actually requires.
  - Chance-corrected agreement statistics (Cohen's kappa, Fleiss' kappa,
    Krippendorff's alpha, intraclass correlation) exist and are well
    understood; nothing needs to be invented.
  - Generalizability theory and hierarchical models can partition variance
    across items, prompts, runs, raters, and occasions, showing which source
    dominates.
limitations:
  - Rarely practiced — working reports find multiple seeds, confidence
    intervals, and inter-rater reliability to be the exception in published
    AI evaluation, not the norm.
  - Closed API models complicate repetition, since providers may not expose
    seeds or stable snapshots and the underlying system can change silently.
  - Reliability is a property of a specific design (these items, these
    raters, these settings) and does not transfer automatically to other
    designs.
appropriate_claims:
  - Under stated seeds, prompts, and settings, this score varied by a
    measured amount, so differences smaller than that are not interpretable.
  - These raters agreed beyond chance at a stated level, which bounds how
    precisely systems can be scored against their labels.
  - A measured share of score variance is attributable to prompts or judges
    rather than to differences between models.
inappropriate_claims:
  - That high reliability establishes validity — raters and re-runs can
    agree consistently on a poorly defined or biased criterion.
  - That a single-run benchmark score is the model's true ability, or that a
    single-run difference between two models is a stable ranking.
  - That raw percent agreement demonstrates reliable human measurement,
    especially when label prevalence is skewed.
misconceptions:
  - misconception: A reliable evaluation is a valid one.
    reality: >-
      Consistency is not truth. Raters and re-runs can agree perfectly on a
      criterion that measures the wrong thing — reliability bounds precision,
      not meaning.
  - misconception: A single run is enough if the benchmark is large.
    reality: >-
      Item count addresses only one variance source. Prompt choice, decoding
      randomness, judge identity, and model-version drift survive any number
      of items, and each can move the headline score.
questions_to_ask:
  - How many runs produced this number, and what varied between them?
  - Is the reported difference between systems larger than the run-to-run
    and prompt-to-prompt variance — and was that variance measured at all?
  - For human labels, what chance-corrected agreement did raters reach, and
    does the claimed precision exceed that ceiling?
  - Which variance sources — items, prompts, seeds, judges, model snapshot —
    were actually sampled, and which were silently held fixed?
  - Could the model behind an API name have changed between the measurements
    being compared?
debates:
  - question: Is rater disagreement noise to be resolved or signal to be preserved?
    positions:
      - label: Disagreement is error
        view: >-
          Measurement needs a reference. Disagreement usually reflects
          underspecified guidelines, insufficient training, or inattention,
          and the remedy is better instructions, calibration, and
          adjudication. Scores against labels nobody agrees on mean nothing.
      - label: Disagreement is data
        view: >-
          On subjective or contested criteria — offensiveness, helpfulness,
          harm — disagreement reflects genuine differences in values and
          interpretation. Collapsing it to a majority label erases the
          phenomenon; the honest move is to model the distribution of
          judgments.
    note: >-
      Much current work splits the difference by criterion type — treating
      disagreement on factual questions as error to reduce and disagreement
      on contested ones as structure to report. The working reports treat
      this as an open methodological question, not settled practice.
reliability_evidence: >-
  Meta-research summarized in working reports indicates that uncertainty
  reporting and inter-rater reliability are uncommon in benchmark and
  human-evaluation papers; one review of crowd-sourced annotation reportedly
  found chance-corrected agreement below conventional thresholds in every
  dataset examined. Figures need verification against primary sources.
known_failure_modes:
  - Single-run reporting, where stochastic variance is silently absorbed
    into the headline number.
  - Naive confidence intervals that ignore item sampling, clustering of
    repeated generations, and paired model comparisons.
  - Treating rater disagreement as noise to be averaged away when it may be
    substantive evidence of ambiguity or value conflict.
related_entries:
  - construct-validity
  - evaluation-reproducibility
  - evaluation-drift
  - human-evaluation
  - ai-as-a-judge
  - ai-judge-bias
  - benchmark-based-evaluation
related_guides:
  - evaluation-is-measurement
  - human-judgment-and-disagreement
primary_sources:
  - src-weidinger-2025-evaluation-science
secondary_sources:
  - src-bean-2025-benchmark-review
  - src-miller-2024-error-bars
source_status: >-
  Drafted from working research reports; quantitative claims about how
  rarely reliability is reported, and specific agreement figures, are not
  yet verified against primary sources.
created: 2026-07-31
last_reviewed: 2026-08-03
reviewer: Monica Kodwani
tags:
  - measurement
  - variance
  - inter-rater-agreement
  - psychometrics
featured: false
---

Reliability is the less glamorous half of measurement quality — not whether
an instrument measures the right thing (that is construct validity), but
whether it measures the same thing twice. AI evaluation inherits a full
toolkit here from psychometrics and survey methodology, and by the account
in the working reports has adopted almost none of it.

### Variance sources and their decomposition

A benchmark score depends simultaneously on which items were sampled, how
the task was prompted and formatted, stochastic decoding, which judge or
rater scored the outputs, and which model snapshot answered — plus their
interactions. Generalizability theory, imported from psychometrics, treats
these as crossed variance components and estimates each one's share, which
tells an evaluator whether more items, more prompt variants, or more raters
would tighten the estimate. Working reports describe this as a promising
import with only early adoption, and note cautionary findings: one
independent analysis of agent evaluations reportedly saw success rates fall
from roughly 60 percent on a single run to roughly 25 percent across eight
consecutive runs, and analyses of clustered standard errors suggest naive
intervals can be several times too narrow. These figures are unverified.

### Reliability of human judgment

For human evaluation, the recommended practice in the reports is
chance-corrected agreement — Cohen's kappa for two raters, Fleiss' kappa or
Krippendorff's alpha for more general designs — rather than raw percent
agreement, which is inflated whenever one label dominates. Agreement also
sets an empirical ceiling: a model evaluated against labels that raters
themselves cannot reproduce is being measured against a moving reference.
Reliability remains distinct from validity throughout; consistent agreement
on a badly specified criterion is consistently wrong measurement.
