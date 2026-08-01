---
id: harmbench
title: HarmBench
aliases: []
entry_type: benchmark
status: needs-verification
content_status: stub
summary: >-
  A standardized evaluation framework for automated red teaming and robust
  refusal. It measures whether standardized attack methods elicit
  designated harmful behaviors from a model, reported as attack success
  rates.
definition: >-
  HarmBench pairs a set of designated harmful behaviors with standardized
  attack methods and scores outcomes as attack success rates using a
  standardized automated judge. The working reports describe its
  contribution as reproducibility — a common taxonomy and attack protocol
  that makes red-teaming results comparable across models and attack
  pipelines — rather than coverage of all possible attacks.
claimed_constructs:
  - safety
  - harmful-content
  - misuse
  - robustness
evaluation_levels:
  - model
  - output
lifecycle_stages:
  - pre-deployment
  - release
purposes:
  - risk-discovery
  - mitigation-testing
  - model-comparison
evaluator_types:
  - model-developer
  - independent-researcher
  - external-evaluator
evaluator_filters:
  - ai-judge
  - automated-verifier
environments:
  - public-benchmark
scoring_mechanisms:
  - ai-judge
evidence_class: research-convention
maturity: emerging
human_involvement: none
access_model: fully-open
strengths:
  - A shared behavior taxonomy and attack protocol make attack success
    rates comparable across models and across attack methods, which ad hoc
    red-teaming reports are not.
  - Standardization supports before/after comparison when testing refusal
    training or guardrails against the included attack set.
limitations:
  - The attack suite is finite and bounded — a low attack success rate
    against the included methods cannot establish absence of
    vulnerabilities, particularly against adaptive attackers.
  - Headline metrics inherit the errors of the standardized automated
    judge that classifies outputs as harmful or not.
  - Attack success under test conditions is not an estimate of real-world
    misuse frequency, harm severity, or residual risk.
appropriate_claims:
  - Attack success rates for the included behaviors and attack methods,
    comparable across models evaluated under the shared protocol.
  - Relative change in measured refusal robustness after a mitigation,
    against this attack set, at a stated time.
inappropriate_claims:
  - That a low attack success rate demonstrates the model is safe or
    jailbreak-resistant in general — no finite attack suite establishes
    absence of vulnerabilities.
  - That the automated judge's harm classifications are equivalent to
    expert human judgment — judge errors propagate directly into the
    headline metric.
  - That attack success rates estimate the frequency or severity of
    real-world misuse — the instrument measures elicitation under test
    conditions, not prevalence or consequence.
  - That a guardrail passing this static suite will hold under adaptive
    attack — the working reports document guardrails that pass static
    suites and fail adaptive ones.
known_failure_modes:
  - Mitigations overfitting to the included attack methods while remaining
    bypassable by unlisted or adaptive attacks.
  - Judge misclassification shifting attack-success numbers without any
    change in model behavior.
related_entries:
  - red-teaming
  - ai-as-a-judge
  - ai-judge-bias
  - wmdp
  - benchmark-based-evaluation
related_guides:
  - red-teaming-versus-risk-estimation
  - ai-as-a-judge
  - benchmarks-and-their-limits
primary_sources: []
secondary_sources: []
source_status: >-
  Minimal stub — support in the working reports is thin beyond the framing
  above. The reports attribute the benchmark to Mazeika et al.
  ("HarmBench: A Standardized Evaluation Framework for Automated Red
  Teaming and Robust Refusal", 2024); no source record has been created or
  checked. The behavior taxonomy, attack methods, and judge design need
  verification against the primary paper before this entry is expanded.
created: 2026-07-31
last_reviewed: 2026-07-31
reviewer: Monica Kodwani
tags:
  - red-teaming
  - refusal
  - jailbreak
  - safety
featured: false
---
