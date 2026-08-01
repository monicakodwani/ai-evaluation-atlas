---
id: assurance-case
title: Assurance case
aliases:
  - Safety case
entry_type: concept
status: needs-verification
content_status: outline
summary: >-
  A structured argument, supported by a body of evidence, that a system is
  acceptably safe for a stated use — imported from safety-critical
  engineering and now emerging for frontier AI.
definition: >-
  An assurance case organizes claims, arguments, and evidence into an
  explicit structure: the top-level claim (the system is acceptably safe
  for this use), the argument decomposing it, and the evidence supporting
  each leg. It reframes evaluation from "we ran tests" to "here is why this
  body of evidence justifies this decision." The working reports describe
  assurance cases as an emerging convention for frontier models without
  standardized evidentiary requirements.
why_it_matters: >-
  The assurance-case frame makes the gap between scores and decisions
  explicit: every leg of the argument must say what evidence supports it
  and what would defeat it. It is the form the Atlas's central question
  takes at the release decision — what evidence would justify deployment?
claimed_constructs:
  - safety
  - compliance
evaluation_levels:
  - application
  - organization
lifecycle_stages:
  - release
  - design
purposes:
  - safety-assurance
  - release-decision
evidence_class: emerging
maturity: experimental
appropriate_claims:
  - A structured, inspectable argument connects the cited evidence to the
    release decision, and its weakest legs are identifiable.
  - Gaps in an assurance case locate exactly what further evaluation is
    needed.
inappropriate_claims:
  - That producing an assurance case establishes safety — the case is only
    as strong as its weakest evidence, and AI cases lack the standardized
    evidence requirements of older safety-critical domains.
  - That an argument sound at release remains sound as the system and its
    context drift.
known_failure_modes:
  - Confirmation-oriented cases assembled to justify a decision already
    made.
  - Arguments whose legs cite evaluation evidence with unexamined validity
    problems.
related_entries:
  - standards-and-assurance
  - conformity-assessment
  - continuous-evaluation
  - construct-validity
related_guides:
  - from-model-scores-to-system-assurance
source_status: >-
  Drafted from working research reports; the practice's uptake among
  frontier developers needs verification.
created: 2026-07-31
last_reviewed: 2026-07-31
reviewer: Monica Kodwani
tags:
  - assurance
  - safety-case
featured: false
---
