---
id: helm
title: HELM
aliases:
  - Holistic Evaluation of Language Models
entry_type: benchmark
status: needs-verification
content_status: outline
summary: >-
  A multi-scenario, multi-metric evaluation suite from Stanford CRFM that
  scores language models on several aspects at once rather than a single
  accuracy number, with an emphasis on transparent, reproducible reporting.
definition: >-
  HELM evaluates models across a collection of scenarios and reports
  multiple metrics per scenario. The working research reports describe its
  aspect set as including accuracy, calibration, robustness, fairness,
  toxicity, and efficiency, with scenario-specific scoring rules and logged
  request-response records intended to support reproduction.
claimed_constructs:
  - capability
  - accuracy
  - calibration
  - robustness
  - fairness
  - harmful-content
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
  - independent-researcher
  - model-developer
evaluator_filters:
  - automated-verifier
environments:
  - public-benchmark
scoring_mechanisms:
  - exact-match
  - reference-based-metric
evidence_class: research-convention
maturity: established
organization: Stanford CRFM
access_model: fully-open
strengths:
  - Reports several aspects per scenario instead of collapsing evaluation to
    one accuracy figure, making trade-offs between properties visible.
  - Makes the scenario-to-metric mapping explicit, which is a step toward
    stating what construct each score is supposed to bear on.
  - Transparent logging of requests and responses supports independent
    inspection and re-running in a way most leaderboards do not.
limitations:
  - Breadth trades against depth; per the working reports, coverage of many
    scenarios does not establish validity for any single deployment context.
  - Component scenarios inherit the contamination and saturation problems of
    the public datasets they are built from.
  - Multi-aspect reporting still measures model behavior on fixed scenarios;
    it does not observe deployed systems, users, or workflows.
appropriate_claims:
  - Model A and model B differ in stated directions across these scenarios
    and metrics, under the recorded prompts and settings.
  - A model that scores well on accuracy scenarios may still score poorly on
    calibration, robustness, or toxicity scenarios, and HELM can exhibit
    such trade-offs on its own instrument.
inappropriate_claims:
  - That coverage of many aspects makes a HELM result a holistic verdict on
    a model; each aspect is measured by particular scenarios with their own
    validity limits.
  - That a strong HELM profile establishes a system is safe or fair in a
    specific application, population, or workflow the scenarios do not
    represent.
  - That HELM fairness or toxicity scores are validated measures of those
    constructs rather than scores on particular operationalizations.
related_entries:
  - benchmark-based-evaluation
  - helm-infrastructure
  - benchmark-contamination
  - construct-validity
  - mmlu
related_guides:
  - benchmarks-and-their-limits
primary_sources:
  - src-liang-2022-helm
secondary_sources: []
source_status: >-
  Drafted from working research reports. The aspect list, logging practices,
  and later methodological additions reported there (including adaptive
  testing based on item response theory) have not been independently
  verified against primary sources.
created: 2026-07-31
last_reviewed: 2026-07-31
reviewer: Monica Kodwani
tags:
  - benchmark
  - suite
  - multi-metric
featured: false
---
