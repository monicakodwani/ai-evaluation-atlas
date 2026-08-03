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
why_it_matters: >-
  Standardized harm suites are how "safety" most often gets a number;
  reading that number as safety itself — rather than refusal behavior
  against known attacks — is one of the field’s most consequential
  shortcuts.
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
evidence_produced: >-
  Attack success rates: the fraction of designated harmful behaviors that
  each standardized attack method elicited from a model, as classified by
  an automated judge, comparable across models run under the shared
  protocol.
combine_with:
  - >-
    Adaptive, human-expert red teaming, since a finite standardized
    attack suite cannot find novel attacks and the working reports
    document guardrails that pass static suites and fail adaptive ones.
  - >-
    Judge validation — auditing a sample of the automated judge's harm
    classifications against human labels for the model under test.
  - >-
    System-level evaluation of the deployed configuration, because
    model-level attack results do not include the guardrails, filters,
    and monitoring that shape what users can actually elicit.
misconceptions:
  - misconception: A low attack success rate means the model is safe.
    reality: >-
      It means the included attack methods mostly failed. No finite
      attack suite establishes absence of vulnerabilities, and adaptive
      attackers are not limited to the methods in the suite.
  - misconception: The reported harm numbers are ground truth.
    reality: >-
      An automated judge classifies each output as harmful or not, and
      its errors propagate directly into the headline metric — attack
      success rates can move without any change in model behavior.
  - misconception: Attack success rates estimate real-world misuse risk.
    reality: >-
      They measure elicitation under test conditions. Frequency of
      real-world misuse, severity of harm, and residual risk after
      deployment safeguards are all outside the instrument.
questions_to_ask:
  - Which attack methods and behavior categories were included, and were
    any adaptive or novel attacks run beyond the standard suite?
  - Was the automated judge's accuracy checked against human labels for
    this particular model's outputs?
  - Was the mitigation being reported trained or tuned on the same attack
    set used to evaluate it?
  - Is the claim about the bare model or the deployed system with its
    guardrails — and which one was actually tested?
  - How large a change in attack success rate is within the judge's error
    noise?
debates:
  - question: Can automated red teaming substitute for human red teaming?
    positions:
      - label: Automate it
        view: >-
          Standardized automated attacks are reproducible, comparable,
          and cheap enough to run on every model and every mitigation.
          Human red teaming is expensive, hard to repeat, and covers a
          small, idiosyncratic slice of the attack space.
      - label: Humans remain essential
        view: >-
          Real attackers adapt, and a fixed attack suite is exactly what
          mitigations silently overfit to. Only adaptive human or
          human-directed attack finds the failures that matter, and
          static suites give a false floor on robustness.
    note: >-
      Careful practice treats these as complements — standardized suites
      for regression tracking and comparison, adaptive attack for
      discovering what the suites miss.
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
last_reviewed: 2026-08-03
reviewer: Monica Kodwani
tags:
  - red-teaming
  - refusal
  - jailbreak
  - safety
featured: false
---
