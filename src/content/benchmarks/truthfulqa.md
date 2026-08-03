---
id: truthfulqa
title: TruthfulQA
aliases: []
entry_type: benchmark
status: needs-verification
content_status: outline
summary: >-
  A benchmark testing whether models reproduce common human misconceptions
  when answering questions, targeting imitative falsehoods rather than
  general factual accuracy. Widely used and aging, with actively debated
  construct validity.
definition: >-
  TruthfulQA poses questions designed so that a plausible-sounding answer
  drawn from common belief is false, testing whether a model resists
  reproducing misconceptions found in its training data. Per the working
  reports, responses are scored by human raters or by learned graders,
  which makes results dependent on the grading mechanism as well as the
  model under test.
why_it_matters: >-
  TruthfulQA scores are routinely cited as evidence that a model "tells the
  truth" — a leap from resisting one curated misconception set to a broad
  disposition the instrument has never been validated to measure. It is a
  standing example of how a narrow instrument gets read as a broad
  construct.
claimed_constructs:
  - factuality
evaluation_levels:
  - model
  - output
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
  - human
  - ai-judge
environments:
  - public-benchmark
scoring_mechanisms:
  - human-rating
  - ai-judge
evidence_class: research-convention
maturity: common-contested
access_model: fully-open
strengths:
  - Targets a specific, well-motivated failure mode — reproducing common
    misconceptions — rather than treating factuality as an undifferentiated
    aggregate.
  - Distinguishes imitative falsehoods, which arise from mimicking training
    text, from other error sources, a useful conceptual contribution.
limitations:
  - Scores depend on the grader; per the working reports, human or learned
    grading introduces its own error and bias into the measurement.
  - The item set reflects English-language and US-centric cultural framing,
    which limits what the score says about other populations of
    misconceptions.
  - As a long-public set, the reports rate its contamination risk as high,
    and describe it as aging.
  - Whether resisting a curated set of misconceptions measures a broader
    disposition toward truthfulness is contested; the reports list
    truthfulness claims based on a single factuality set among the field's
    routinely overstated claims.
appropriate_claims:
  - Model A produces fewer answers judged to reproduce these particular
    misconceptions than model B, under the stated grading procedure.
  - A model's behavior on this item set has changed across versions, subject
    to grader and contamination caveats.
inappropriate_claims:
  - That a high TruthfulQA score establishes a model is truthful, honest, or
    factually reliable in general, which are broader constructs than
    resistance to this curated misconception set.
  - That TruthfulQA results transfer to factual accuracy on current events,
    specialized domains, or non-English contexts the items do not cover.
  - That score differences reflect model behavior alone, when grader choice
    and grader error are part of the measurement.
evidence_produced: >-
  Scores on a fixed set of questions targeting common misconceptions — how
  often a model reproduces imitative falsehoods under this instrument's
  format and scoring rule.
combine_with:
  - Factuality evaluation on deployment-relevant queries, ideally with
    retrieval in place, before any claim about truthfulness in use.
  - Human or expert adjudication where items are contested — several of
    the benchmark's construct debates concern the answer key itself.
misconceptions:
  - misconception: A high TruthfulQA score means the model tells the truth in use.
    reality: >-
      It means fewer imitative falsehoods on this item set under its format
      and scoring. Truthfulness in deployment depends on the queries users
      actually ask, retrieval, decoding, and context the benchmark does not
      contain.
  - misconception: Truthfulness is a single property one benchmark can capture.
    reality: >-
      The instrument targets one specific failure mode — reproducing common
      misconceptions — not honesty, calibration, or factual coverage in
      general.
questions_to_ask:
  - Which failure mode do the items actually target, and is that the one
    your use case cares about?
  - How old and how public is the item set — could contamination or
    familiarity inflate scores?
  - Was the multiple-choice or generation variant used, and how was
    generation scored?
  - Do contested answer-key items affect the comparison being cited?
  - Would the score survive on fresh, deployment-relevant queries?
related_entries:
  - benchmark-based-evaluation
  - benchmark-contamination
  - construct-validity
  - ai-judge-bias
related_guides:
  - benchmarks-and-their-limits
primary_sources: []
secondary_sources: []
source_status: >-
  Drafted from working research reports, which attribute the introducing
  paper to Lin, Hilton, and Evans; a source record for that paper still
  needs to be created and verified. Contamination and construct-validity
  claims are unverified against primary sources.
created: 2026-07-31
last_reviewed: 2026-08-03
reviewer: Monica Kodwani
tags:
  - benchmark
  - factuality
  - misconceptions
featured: false
---
