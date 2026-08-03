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
combine_with:
  - Red-teaming and adversarial evaluation, which supply the
    defeater-hunting evidence each leg of the argument needs — a case
    built only from confirming tests is a brief, not an argument.
  - Continuous evaluation after release, so the conditions under which the
    case holds are monitored rather than assumed.
  - Independent or third-party review when the case supports a high-stakes
    decision, since self-assembled cases carry confirmation risk.
misconceptions:
  - misconception: Having a safety case means the system is safe.
    reality: >-
      A case is an argument, not a verdict. It is only as strong as its
      weakest evidence, and an inspectable argument can still be an
      inspectable wrong argument.
  - misconception: An assurance case is documentation of the testing done.
    reality: >-
      It is closer to the reverse — an explicit argument that determines
      what evidence is needed. Tests without an argument connecting them
      to the top-level claim are activity, not assurance.
questions_to_ask:
  - What exactly is the top-level claim — acceptably safe for which use,
    in which environment, by whose threshold of acceptability?
  - Which leg of the argument rests on the weakest evidence, and what
    would defeat it?
  - Was the case built to inform the decision, or assembled afterward to
    justify one already made?
  - Under what conditions does the case expire — model updates, new usage
    patterns, observed drift?
  - Does the cited evaluation evidence have the validity to bear the
    weight the argument places on it?
debates:
  - question: Do safety cases transfer from older safety-critical domains to frontier AI?
    positions:
      - label: Best available frame
        view: >-
          Assurance cases forced aviation and nuclear engineering to make
          their arguments inspectable, and nothing about AI exempts it
          from needing an explicit argument from evidence to decision.
          The realistic alternative is not a better method but implicit,
          unauditable judgment.
      - label: The preconditions are missing
        view: >-
          Safety cases work where failure modes are enumerable and
          evidentiary standards are standardized. Frontier AI has
          neither, so the form risks lending engineering authority to
          arguments the underlying evidence cannot support.
    note: >-
      The working reports describe assurance cases for frontier AI as an
      emerging convention with no standardized evidentiary requirements
      against which a case can be checked; both positions start from that
      same fact.
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
last_reviewed: 2026-08-03
reviewer: Monica Kodwani
tags:
  - assurance
  - safety-case
featured: false
---
