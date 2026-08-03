---
id: evaluation-reproducibility
title: Evaluation reproducibility
entry_type: concept
status: needs-verification
content_status: outline
summary: >-
  Whether an independent party can re-run a reported evaluation and obtain
  the reported result — which requires published prompts, settings, model
  versions, and scoring code that most reports omit.
definition: >-
  An evaluation is reproducible when its inputs are specified precisely
  enough to re-execute it: exact prompts, decoding settings, few-shot
  examples, model version, scoring code, and judge identity where one is
  used. The working reports find this disclosure is the exception; most
  published results communicate findings without enabling independent
  reproduction.
why_it_matters: >-
  Reproducibility is the difference between a claim that can be checked and
  one that must be trusted. API-served models add a distinctive failure
  mode: the provider can change the model behind a stable name, silently
  invalidating past results.
claimed_constructs:
  - reliability
evaluation_levels:
  - model
  - prompt-configuration
lifecycle_stages:
  - pre-deployment
  - monitoring
purposes:
  - scientific-understanding
  - public-accountability
evidence_class: research-convention
maturity: emerging
appropriate_claims:
  - A result accompanied by prompts, settings, versions, and scoring code
    supports independent checking; one without them supports only trust.
  - Differences between reported and re-run results are evidence about
    reporting quality, version drift, or both.
inappropriate_claims:
  - That a result published without configurations is wrong — it is
    unverifiable, which is a different (and repairable) defect.
  - That using a standardized harness by itself makes an evaluation
    reproducible if the configuration is still unreported.
misconceptions:
  - misconception: If a result was produced with a standard harness, it is reproducible.
    reality: >-
      Harnesses standardize execution, not disclosure. Without the exact
      prompts, settings, versions, and scoring configuration, the same
      harness can produce different numbers.
  - misconception: An unreproducible result is a wrong result.
    reality: >-
      It is an unverifiable one — a different, repairable defect. The
      problem is that the claim must be trusted rather than checked, not
      that it has been refuted.
questions_to_ask:
  - Could you re-run this evaluation from what is published — exact prompts,
    few-shot examples, decoding settings, model version, and scoring code?
  - Which model snapshot was tested, and is that snapshot still accessible,
    or has the API name silently moved on?
  - If a judge model scored the outputs, are its identity, version, and
    judging prompt disclosed?
  - Has anyone independently re-run this result — and if their number
    differed, was the gap traced to disclosure, version drift, or both?
  - Is naming a harness standing in for actual configuration disclosure?
known_failure_modes:
  - Silent provider-side model updates behind stable API names.
  - Reported numbers produced with undisclosed prompt engineering.
related_entries:
  - reliability
  - lm-evaluation-harness
  - helm-infrastructure
  - inspect-ai
  - evaluation-drift
related_guides:
  - evaluation-is-measurement
secondary_sources:
  - src-miller-2024-error-bars
source_status: >-
  Drafted from working research reports; disclosure-practice findings need
  verification against the underlying studies.
created: 2026-07-31
last_reviewed: 2026-08-03
reviewer: Monica Kodwani
tags:
  - measurement
  - reproducibility
featured: false
---
