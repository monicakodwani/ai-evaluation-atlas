---
id: lm-evaluation-harness
title: lm-evaluation-harness
aliases:
  - lm-eval-harness
  - EleutherAI evaluation harness
entry_type: infrastructure
status: needs-verification
content_status: stub
summary: >-
  EleutherAI's open-source harness for executing language-model benchmarks
  under standardized task definitions — described in working research
  reports as the academic default for reproducible benchmark execution.
definition: >-
  lm-evaluation-harness is software that runs language models against
  benchmark tasks using shared, versioned task configurations, so that a
  reported score can be traced to a specific task definition and execution
  setup rather than to an ad hoc script. Working reports also describe
  decontamination-related tooling among its features.
why_it_matters: >-
  Much of the benchmark literature is not reproducible because prompts,
  task formats, and scoring code go unpublished. A widely shared harness
  reduces this problem where it is adopted — while leaving untouched the
  validity of the benchmarks themselves.
claimed_constructs:
  - capability
  - accuracy
evaluation_levels:
  - model
  - output
  - task
lifecycle_stages:
  - training
  - pre-deployment
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
  - execution-based
  - reference-based-metric
evidence_class: research-convention
maturity: established
human_involvement: none
access_model: fully-open
strengths:
  - Shared, versioned task definitions make published scores traceable to
    a concrete execution setup.
  - Open source, so scoring logic can be independently inspected and
    corrected.
  - Wide adoption in the research community enables like-for-like
    comparison when versions and settings match.
limitations:
  - Scores remain sensitive to harness version, prompt template, few-shot
    choices, tokenizer behavior, and decoding settings; matching the
    harness name is not matching the configuration.
  - Standardized execution does not remove contamination, saturation, or
    construct-validity problems in the underlying benchmarks.
  - Adoption reflects convenience and coordination, not a validation of
    the harness's task formulations as the correct ones.
appropriate_claims:
  - This score was produced under a specific, named task version and
    configuration that others can rerun.
  - Two models run under the same harness version and settings can be
    compared on that instrument.
inappropriate_claims:
  - That a harness-produced score is comparable across papers without
    matching harness version, task revision, prompt template, and model
    configuration.
  - That its status as an academic default implies the task formulations
    are validated measures of the constructs benchmarks claim.
  - That standardized execution certifies a model's capability or safety
    — the harness only controls how instruments are administered.
adoption_evidence: >-
  Working research reports describe lm-evaluation-harness as the academic
  standard or default harness for benchmark execution. This is an adoption
  characterization from working material, not an independently verified
  usage statistic.
related_entries:
  - benchmark-based-evaluation
  - inspect-ai
  - helm-infrastructure
  - benchmark-contamination
  - evaluation-reproducibility
  - mmlu
related_guides:
  - benchmarks-and-their-limits
primary_sources:
  - src-eleutherai-lm-eval-harness
secondary_sources: []
source_status: >-
  Stub drafted from working research reports; the repository and its
  documentation have not yet been checked directly.
created: 2026-07-31
last_reviewed: 2026-07-31
reviewer: Monica Kodwani
tags:
  - harness
  - reproducibility
  - benchmark
featured: false
---
