---
id: iso-iec-42001
title: ISO/IEC 42001
aliases:
  - AI management system standard
entry_type: standard
status: needs-verification
content_status: outline
summary: >-
  A published, voluntary, certifiable international standard specifying
  requirements for an organizational AI management system. Certification
  attests that specified management processes exist and are audited — not
  that any particular model or system is safe, fair, or accurate.
definition: >-
  A management-system standard in the lineage of quality and
  information-security management standards, applied to organizations that
  develop, provide, or use AI. Working reports date publication to
  December 2023 and attribute it to ISO/IEC JTC 1/SC 42. Its requirements
  concern objectives, controls, documentation, and internal audit of an AI
  management system; it is a process standard and sets no model-level
  performance metrics or safety thresholds. Reports also describe a
  companion standard (ISO/IEC 42006, dated 2025 in the reports) specifying
  requirements for the bodies that audit and certify such management
  systems.
claimed_constructs:
  - compliance
evaluation_levels:
  - organization
lifecycle_stages:
  - design
  - deployment
  - monitoring
purposes:
  - certification
  - regulatory-compliance
evaluator_types:
  - auditor
evaluator_filters:
  - auditor
environments:
  - retrospective-audit
scoring_mechanisms:
  - policy-rule-checking
evidence_class: formal-standard
maturity: emerging
organization: ISO/IEC JTC 1/SC 42
strengths:
  - Certifiable, so an external certification body can attest that the
    required processes exist and are audited — a stronger claim than
    self-declared framework alignment.
  - Applies to organizations developing, providing, or using AI, covering
    deployers as well as builders.
  - Management-system structure builds in internal audit and periodic
    review rather than one-off assessment.
  - Formal international status gives procurement and regulation a citable
    reference point.
limitations:
  - A process standard — it requires organizations to evaluate and manage
    AI risk without prescribing metrics, test sets, methods, or
    thresholds.
  - Certification scope is the management system, not any model, product,
    or output.
  - The working reports note certification uptake but contain no
    independent evidence linking certification to better system outcomes.
  - The standard text is paywalled, which limits independent scrutiny of
    what conformance actually requires.
appropriate_claims:
  - The organization operates an AI management system conforming to the
    standard's process requirements, as attested by a certification body
    at a stated time and scope.
  - Specified governance processes — risk assessment, documentation,
    internal audit — exist and were audited.
inappropriate_claims:
  - That certification establishes any particular system is safe, fair,
    accurate, or reliable — the standard sets no model-level performance
    requirements to have been met.
  - That a certified organization's systems outperform an uncertified
    organization's on any measured property.
  - That certification demonstrates compliance with AI regulation — the
    standard is voluntary and distinct from any legal requirement, though
    regulators may reference it.
  - That the certificate covers products; its scope is the management
    system of the organization named on it.
why_it_matters: >-
  Certification against this standard is becoming a procurement signal, and buyers routinely read it as a product-safety attribute — which it is not.
evidence_produced: >-
  A certification attesting that an organization's AI management system
  conformed to the standard's process requirements at audit time, within
  the certified scope.
combine_with:
  - System-level technical evaluation — certification governs processes,
    not the behavior of any particular model or product.
  - Deployment monitoring, since certification is periodic and systems
    change between audits.
  - Scrutiny of the certification's scope and the certifier's access and
    competence.
misconceptions:
  - misconception: An ISO/IEC 42001-certified organization has safe AI.
    reality: >-
      Certification attests that management processes exist and are
      followed within a defined scope. It does not test, and cannot
      establish, that any specific system is safe, fair, or reliable.
  - misconception: Certification covers the organization's products.
    reality: >-
      The unit of certification is the management system. Products built
      under it inherit process discipline, not verified properties.
questions_to_ask:
  - What scope was certified, and does the system you care about fall
    inside it?
  - Who performed the audit, with what access and over what period?
  - What does the certificate demonstrate about processes — and what would
    it miss about performance?
  - Has anything material changed since the last audit?
known_failure_modes:
  - Certification presented as a product-safety or model-quality signal in
    procurement and marketing.
  - Conformant processes coexisting with unevaluated or poorly evaluated
    system behavior.
related_entries:
  - standards-and-assurance
  - nist-ai-rmf
  - nist-generative-ai-profile
  - conformity-assessment
  - assurance-case
related_guides:
  - from-model-scores-to-system-assurance
primary_sources:
  - src-iso-2023-42001
secondary_sources: []
source_status: >-
  Drafted from working research reports. Publication date, committee
  attribution, the ISO/IEC 42006 companion-standard details, and
  certification-uptake claims are unverified against ISO publications.
created: 2026-07-31
last_reviewed: 2026-08-03
reviewer: Monica Kodwani
tags:
  - management-system
  - certification
  - governance
featured: false
---

ISO/IEC 42001 is the clearest current example of what certification does
and does not establish in AI. The analogy in the working reports is to
quality and security management-system certification: an audit confirms
that required processes exist and are followed, not that every output of
those processes is correct. An organization can hold a valid certificate
while shipping systems whose behavior has never been measured against any
defined threshold — because the standard defines none.

### Reading a 42001 certificate

A certificate is evidence with three explicit boundaries — a scope (the
management system, not products), an attesting body (whose own competence
is the subject of a separate standard, per the reports), and a point in
time. Claims that travel beyond those boundaries — "certified safe AI,"
or certification offered as proof of regulatory compliance — are not
supported by the instrument. The open empirical question, unanswered in
the working material, is whether certified management systems produce
measurably better-evaluated systems at all.
