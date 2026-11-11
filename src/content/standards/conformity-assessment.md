---
id: conformity-assessment
title: Conformity assessment
entry_type: standard
status: needs-verification
content_status: outline
summary: >-
  The process of demonstrating that a system, process, or organization
  fulfills specified requirements from a standard or regulation, potentially
  culminating in certification or a declaration of conformity.
definition: >-
  Conformity assessment is a practice, not a single document: a structured
  demonstration, against a defined normative reference, that specified
  requirements are met. It may be performed by the provider itself
  (self-assessment), by a customer or contracted party, or by an independent
  third party, and may lead to certification. In AI regulation described in
  the working reports, conformity assessment for most high-risk systems is
  predominantly provider self-assessment.
claimed_constructs:
  - compliance
evaluation_levels:
  - application
  - organization
lifecycle_stages:
  - release
  - pre-deployment
purposes:
  - regulatory-compliance
  - certification
  - procurement
evaluator_types:
  - auditor
  - regulator
  - model-developer
evaluator_filters:
  - auditor
  - regulator
environments:
  - retrospective-audit
scoring_mechanisms:
  - policy-rule-checking
evidence_class: formal-standard
maturity: established
strengths:
  - Ties evaluation to explicit, citable requirements rather than ad hoc
    judgment.
  - Creates legally and commercially meaningful artifacts — declarations,
    certificates — that procurement and regulation can act on.
  - Mature institutional machinery exists in adjacent product-safety
    domains and is being extended to AI.
limitations:
  - Assesses conformity with stated requirements, which for AI are often
    process obligations rather than measured system properties.
  - Self-assessment regimes concentrate discretion in the party with the
    strongest interest in a favorable outcome.
  - The technical standards that would give assessments concrete pass/fail
    content were still maturing as of the working reports' cutoff.
appropriate_claims:
  - The provider or assessor has attested that the system or organization
    meets the named requirements at the assessment date.
  - A named third party examined defined evidence against a defined
    normative reference.
inappropriate_claims:
  - That a declaration of conformity establishes the system is safe,
    fair, or effective in deployment — it establishes that stated
    requirements were attested as met.
  - That self-assessed conformity carries the evidential weight of
    independent assessment.
  - That conformity at release says anything about behavior after model,
    prompt, or usage changes.
why_it_matters: >-
  Regulatory regimes lean on conformity assessment as their enforcement joint; whether it is self-declared or independent decides how much weight the attestation can bear.
evidence_produced: >-
  An attestation — self-declared or third-party — that specified
  requirements from a named normative reference were met at assessment
  time.
combine_with:
  - Independent technical testing where the requirements are process
    obligations rather than measured properties.
  - Post-market monitoring, since conformity is assessed at a point in
    time and systems drift.
  - Publication or retention of the underlying evidence, so the
    attestation can be checked rather than trusted.
misconceptions:
  - misconception: A declaration of conformity means the system is safe.
    reality: >-
      It means stated requirements were attested as met — and for most AI
      requirements today those are documentation and process obligations,
      not measured performance thresholds.
  - misconception: Conformity assessment implies independent scrutiny.
    reality: >-
      In current AI regulation much conformity assessment is provider
      self-assessment; whether a third party was involved is exactly the
      thing to check.
questions_to_ask:
  - Who assessed — the provider itself, or an accredited third party?
  - Against which normative reference, in which version?
  - What evidence was examined, and is it retained and inspectable?
  - Does the attestation survive the updates made since it was issued?
known_failure_modes:
  - Paper compliance — documentation that satisfies the checklist while the
    underlying evaluation work is thin.
adoption_evidence: >-
  The EU AI Act is the leading worked example as of November 2026: most
  standalone high-risk AI systems will be self-assessed by the provider
  against technical-documentation requirements (test procedures, logs,
  reports, accuracy and robustness metrics), with third-party notified-body
  assessment mandatory mainly for biometrics. Exactly one harmonised
  standard had been cited in the Official Journal (EN 18286, on AI quality
  management) — and the testing-critical standards remained drafts, several
  reportedly rejected at public enquiry per an unofficial tracker — which
  is why the high-risk conformity regime was delayed to December 2027 and
  August 2028.
related_entries:
  - standards-and-assurance
  - iso-iec-42001
  - nist-ai-rmf
  - impact-assessment
  - eu-ai-act
related_guides:
  - from-model-scores-to-system-assurance
  - how-governments-evaluate-ai
primary_sources:
  - src-ec-2026-ai-act-faq
source_status: >-
  Drafted from working research reports; regulatory specifics kept generic
  pending verification. The EU adoption evidence was added from November
  2026 research: timeline facts come from the Commission's fetched FAQ,
  while Annex-level wording and standards-pipeline vote outcomes remain
  unverified against primary texts.
created: 2026-07-31
last_reviewed: 2026-11-11
reviewer: Monica Kodwani
tags:
  - certification
  - regulation
featured: false
---
