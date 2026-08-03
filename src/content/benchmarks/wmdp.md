---
id: wmdp
title: WMDP
aliases:
  - Weapons of Mass Destruction Proxy
  - The WMDP Benchmark
entry_type: benchmark
status: needs-verification
content_status: outline
summary: >-
  A multiple-choice benchmark of hazardous knowledge in biosecurity,
  cybersecurity, and chemistry, used as a proxy for misuse-relevant
  capability and as a target for unlearning methods.
definition: >-
  WMDP presents multiple-choice questions probing knowledge in hazardous
  domains. It is designed as a measurable proxy: performance indicates
  hazardous-domain knowledge, which is related to but distinct from the
  ability, intent, access, and resources needed to cause real-world harm.
  The published set is filtered to limit direct operational value.
why_it_matters: >-
  Dangerous-capability claims in release decisions and policy documents
  increasingly rest on proxy benchmarks like WMDP. Misreading a knowledge
  proxy as a risk estimate cuts both ways — it can overstate safety after
  an unlearning intervention, or overstate danger from a high score that
  measured recallable facts, not uplift.
claimed_constructs:
  - misuse
  - safety
  - capability
evaluation_levels:
  - model
lifecycle_stages:
  - pre-deployment
  - training
purposes:
  - risk-discovery
  - mitigation-testing
  - release-decision
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
maturity: emerging
access_model: fully-open
strengths:
  - Gives a repeatable, quantifiable proxy where direct misuse testing would
    be unsafe or impossible.
  - Usable as a target for mitigation research, particularly unlearning —
    the benchmark was designed with capability-removal measurement in mind.
  - Public and cheap to run compared with expert red-team studies.
limitations:
  - Knowledge is not operational capability — the instrument does not
    measure execution skill, access to materials, intent, or the marginal
    uplift a model provides over existing resources.
  - Multiple-choice filtering means the most operationally dangerous
    content is deliberately absent, so the proxy's relationship to real
    hazard is indirect by design.
  - Construct underrepresentation is documented in the working reports —
    hazardous knowledge sampled by the item set covers only part of what
    misuse risk depends on.
appropriate_claims:
  - Model A retains more hazardous-domain knowledge than model B on this
    item set, under stated settings.
  - An unlearning or filtering intervention reduced scores on this proxy
    while retaining performance elsewhere (with those measurements shown).
inappropriate_claims:
  - That a low WMDP score establishes a model cannot provide meaningful
    uplift to a malicious actor — the instrument does not measure uplift.
  - That a WMDP score, high or low, is a risk estimate; real risk depends on
    user skill, access, detection, and the model's incremental contribution.
  - That passing this benchmark constitutes a completed dangerous-capability
    evaluation.
evidence_produced: >-
  Multiple-choice accuracy on a filtered set of hazardous-domain knowledge
  items — a proxy measurement of retained knowledge, deliberately distant
  from operational misuse capability.
combine_with:
  - Expert red teaming and uplift studies before any claim about actual
    misuse risk — knowledge proxies cannot carry those claims.
  - Recovery testing after unlearning interventions, since removed
    performance can return under fine-tuning or prompting.
misconceptions:
  - misconception: A low WMDP score means the model is safe from misuse.
    reality: >-
      It means reduced performance on a filtered knowledge proxy. It does
      not show the capability is unrecoverable, nor does it measure uplift,
      execution skill, or the many misuse pathways the items do not cover.
  - misconception: A high WMDP score means the model is dangerous.
    reality: >-
      Hazardous-domain knowledge is not operational capability, intent, or
      access. The instrument was designed as a measurable proxy precisely
      because direct misuse testing is unsafe — the distance is by design.
questions_to_ask:
  - Is the claim about knowledge (which this measures) or misuse risk
    (which it does not)?
  - After an unlearning intervention, was recovery under fine-tuning or
    prompting tested?
  - Which domains drive the score, and does the aggregate hide them?
  - What did the deliberate filtering of items leave outside the
    measurement?
  - Would the decision at stake need an uplift study rather than a proxy?
known_failure_modes:
  - Treating proxy-knowledge reduction as proof of misuse prevention while
    the underlying capability is recoverable through fine-tuning or
    prompting (needs verification for specific recovery findings).
related_entries:
  - red-teaming
  - harmbench
  - benchmark-based-evaluation
  - construct-validity
related_guides:
  - red-teaming-versus-risk-estimation
primary_sources:
  - src-li-2024-wmdp
source_status: >-
  Drafted from working research reports, which cite Li et al., 2024, "The
  WMDP Benchmark: Measuring and Reducing Malicious Use with Unlearning."
  Details not yet independently verified.
created: 2026-07-31
last_reviewed: 2026-08-03
reviewer: Monica Kodwani
tags:
  - safety
  - misuse
  - unlearning
featured: false
---
