---
id: humaneval
title: HumanEval
aliases: []
entry_type: benchmark
status: needs-verification
content_status: outline
summary: >-
  An execution-based benchmark of small, function-level programming
  problems, scored by running generated code against test cases. It
  established execution-based scoring for code generation and is now
  described in the research literature as a legacy baseline, saturated and
  heavily exposed at the frontier.
definition: >-
  HumanEval presents short programming problems that ask a model to complete
  a function; generated code is executed against held test cases and scored
  by whether the tests pass, conventionally reported as pass@k. The working
  reports describe the item set as small and function-level, which bounds
  what the score can say about software engineering more broadly.
claimed_constructs:
  - capability
  - accuracy
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
  - automated-verifier
environments:
  - public-benchmark
scoring_mechanisms:
  - execution-based
evidence_class: research-convention
maturity: common-contested
access_model: fully-open
strengths:
  - Execution-based scoring checks generated code against runnable tests,
    which is more auditable than judgment-based scoring of text.
  - Established a scoring convention (pass@k against test suites) that later
    code benchmarks built on.
  - Cheap and fully automated, enabling matched comparison across many
    models.
limitations:
  - The working reports describe contamination risk as very high; as a
    long-public set it is heavily exposed in training corpora, so frontier
    scores partly reflect memorization.
  - Effectively retired at the frontier per the reports, with leading models
    near the ceiling and the instrument no longer discriminating between
    them.
  - Small, self-contained function-level problems differ substantially from
    repository-level software engineering, which successor benchmarks target
    instead.
  - Test suites are incomplete oracles; passing the provided tests does not
    establish that generated code is correct, secure, or maintainable.
appropriate_claims:
  - Model A passes more of these function-level test suites than model B
    under stated settings, for models below the ceiling.
  - Historical HumanEval results document the trajectory of function-level
    code generation across earlier model generations.
inappropriate_claims:
  - That a high HumanEval score demonstrates competence at real software
    engineering, which involves repositories, dependencies, ambiguity, and
    maintenance that the items do not contain.
  - That differences between current frontier models on HumanEval are
    informative, given saturation and contamination.
  - That passing the benchmark's test cases establishes code correctness or
    security beyond what those specific tests check.
known_failure_modes:
  - Score inflation from solutions memorized during training.
  - Overfitting to the benchmark's problem style rather than general coding
    ability.
related_entries:
  - benchmark-based-evaluation
  - benchmark-contamination
  - benchmark-saturation
  - swe-bench
  - livebench
related_guides:
  - benchmarks-and-their-limits
primary_sources:
  - src-chen-2021-humaneval
secondary_sources: []
source_status: >-
  Drafted from working research reports, which attribute the introducing
  paper to Chen et al. (2021) and describe the item set as roughly 164 small
  problems; the item count, authorship, and saturation and contamination
  claims are unverified against primary sources.
created: 2026-07-31
last_reviewed: 2026-07-31
reviewer: Monica Kodwani
tags:
  - benchmark
  - code
  - execution-based
featured: false
---
