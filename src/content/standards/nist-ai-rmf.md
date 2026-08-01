---
id: nist-ai-rmf
title: NIST AI Risk Management Framework
aliases:
  - AI RMF
entry_type: standard
status: needs-verification
content_status: outline
summary: >-
  Voluntary risk-management guidance for AI systems from the US National
  Institute of Standards and Technology, organized around four functions
  (Govern, Map, Measure, Manage). It directs organizations to evaluate and
  manage AI risk across the lifecycle but prescribes no metrics, test sets,
  or pass-fail thresholds.
definition: >-
  A process framework, not a measurement standard. The AI RMF (version 1.0
  released in 2023; working reports give the identifier NIST AI 100-1)
  structures how an organization should govern AI risk, map risks in
  context, measure them by methods the organization chooses, and manage
  the results. It names characteristics of trustworthy AI — reported as
  seven, spanning validity and reliability, safety, security and
  resilience, accountability and transparency, explainability, privacy,
  and fairness — but leaves their operationalization to the user of the
  framework. Adoption is voluntary; no conformity or certification
  mechanism is attached to the framework itself.
claimed_constructs:
  - compliance
evaluation_levels:
  - organization
lifecycle_stages:
  - design
  - pre-deployment
  - deployment
  - monitoring
purposes:
  - regulatory-compliance
  - safety-assurance
evaluator_types:
  - model-developer
  - application-developer
  - auditor
evaluator_filters:
  - auditor
environments:
  - retrospective-audit
scoring_mechanisms:
  - policy-rule-checking
evidence_class: formal-standard
maturity: emerging
organization: National Institute of Standards and Technology
strengths:
  - Provides a shared vocabulary and structure for organizational AI risk
    work, usable across very different domains and system types.
  - Frames AI risk as a lifecycle and organizational problem rather than a
    single pre-release test — a corrective to score-centric evaluation.
  - Deliberate non-prescription keeps the framework applicable where a
    universal metric would be inappropriate.
  - Extensible through companion profiles for specific technology classes,
    such as the generative-AI profile.
limitations:
  - Requires evaluation, measurement, and monitoring without specifying
    methods, metrics, or thresholds; the adequacy of a chosen method is
    left entirely to the implementing organization.
  - Voluntary, with no verification or enforcement mechanism attached, so
    claimed alignment cannot be checked against anything.
  - Names trustworthiness characteristics without operationalizing them
    into measurement procedures, so the same characteristic can be
    "addressed" by incommensurable evidence in different organizations.
  - Following the framework produces documentation of process, not
    evidence about the behavior of any system.
appropriate_claims:
  - An organization structured its AI risk-management activities using the
    framework's four functions and documented the results.
  - The framework's categories were used to identify, document, and assign
    responses to risks for a given system.
  - A named risk was measured by an organization-chosen method and given a
    documented management response.
inappropriate_claims:
  - That "following the AI RMF" demonstrates a system is safe, fair,
    reliable, or trustworthy — the framework defines no test that any
    system could pass or fail.
  - That framework alignment constitutes legal compliance; the AI RMF is
    voluntary guidance, not a regulation.
  - That the seven trustworthiness characteristics have been measured
    because the framework names them.
  - That two organizations claiming RMF alignment have comparable risk
    postures — with methods and thresholds unfixed, alignment claims are
    not commensurable.
known_failure_modes:
  - Framework alignment used as a marketing or procurement signal without
    underlying measurement.
  - Process documentation substituting for evaluation evidence about
    system behavior.
related_entries:
  - standards-and-assurance
  - nist-generative-ai-profile
  - iso-iec-42001
  - conformity-assessment
  - impact-assessment
  - assurance-case
related_guides:
  - from-model-scores-to-system-assurance
primary_sources:
  - src-nist-2023-ai-rmf
secondary_sources: []
source_status: >-
  Drafted from working research reports. Identifier (NIST AI 100-1),
  release date, the list of trustworthiness characteristics, and reported
  2026 revision activity are unverified against NIST publications.
created: 2026-07-31
last_reviewed: 2026-07-31
reviewer: Monica Kodwani
tags:
  - risk-management
  - governance
  - voluntary-framework
featured: false
---

The AI RMF matters to evaluation for a structural reason: it is the most
widely referenced articulation of the position that AI risk is a lifecycle
and organizational problem rather than a model-score problem. At the same
time it exemplifies what the working reports identify as the central gap
between governance frameworks and technical practice — every function of
the framework requires measurement, and no part of it specifies how to
measure.

### What the framework does and does not fix

The framework fixes vocabulary, roles, and process steps. It does not fix
constructs, instruments, metrics, sample sizes, or thresholds. This is
partly deliberate — a single metric set would be inappropriate across
medical imaging, hiring, language generation, and infrastructure control —
but it means that "we applied the AI RMF" is a claim about organizational
process, never about measured system properties. A policymaker reading an
RMF-alignment statement learns that risk-management activity occurred, not
what was found. Working reports also note revision activity on the
framework by 2026; the current status of any revision needs verification.
