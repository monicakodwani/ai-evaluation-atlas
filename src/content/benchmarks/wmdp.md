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
last_reviewed: 2026-07-31
reviewer: Monica Kodwani
tags:
  - safety
  - misuse
  - unlearning
featured: false
---
