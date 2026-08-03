---
id: standards-and-assurance
title: Standards and assurance
aliases:
  - AI auditing
  - Management-system certification
  - Safety cases
entry_type: method
status: needs-verification
content_status: substantive-draft
summary: >-
  Evaluating AI through process standards, audits, conformity assessment,
  and structured assurance arguments — evidence that an organization runs
  the required processes, which is not the same as evidence that any
  particular system behaves well.
definition: >-
  Standards and assurance is a family of practices that assess AI through
  organizational and documentary evidence rather than direct testing.
  It includes management-system standards and risk-management frameworks
  that require organizations to evaluate, document, and monitor their
  systems; first-, second-, and third-party audits against defined
  criteria; conformity assessment and certification; and structured
  assurance or safety cases that assemble evidence behind an explicit
  claim about a system.
why_it_matters: >-
  These practices are the channel through which evaluation results become
  governance decisions — certificates, declarations of conformity, release
  approvals, procurement choices. They also host the field's most
  consequential category confusion, because process conformity and
  documentation completeness are routinely read as evidence about system
  behavior, which they are not.
claimed_constructs:
  - compliance
  - safety
  - transparency
  - human-oversight
evaluation_levels:
  - organization
  - application
lifecycle_stages:
  - design
  - release
  - deployment
purposes:
  - regulatory-compliance
  - certification
  - safety-assurance
  - release-decision
  - procurement
  - public-accountability
evaluator_types:
  - auditor
  - external-evaluator
  - regulator
  - model-developer
  - application-developer
evaluator_filters:
  - auditor
  - regulator
environments:
  - retrospective-audit
  - real-world-deployment
scoring_mechanisms:
  - policy-rule-checking
  - expert-adjudication
evidence_class: formal-standard
maturity: emerging
human_involvement: human-led
strengths:
  - Turns evaluation into an organizational obligation with named owners,
    records, and repeat cycles, rather than a one-off technical exercise.
  - Audit structure — defined criteria, independence rules, evidence
    rights, findings classification, remediation, follow-up — is well
    developed in other industries and importable.
  - Assurance cases force an explicit claim, stated assumptions, and
    enumerated evidence, exposing gaps that a list of benchmark scores
    hides.
  - Certifiable management-system standards create commitments a third
    party can check, where previously there was only self-description.
limitations:
  - Process-oriented by design — major frameworks require testing, risk
    assessment, and monitoring but rarely specify metrics, methods, or
    thresholds, leaving organizations to choose their own.
  - Audit depth is bounded by access; API-level (black-box) access can
    observe behavior but cannot verify data governance, training
    practices, or internal controls.
  - Independence is compromised in practice — deeper access, where it
    exists, tends to arrive through bespoke confidential contracts with
    the audited developer.
  - Assurance cases for frontier AI lack standardized evidentiary
    requirements, so the quality of the argument varies with the
    incentives of its author.
  - Commercial audit and assurance offerings vary widely; a checklist and
    a badge do not make an established scheme.
appropriate_claims:
  - The organization operated the processes a named standard requires,
    within a defined scope and period, as examined by an identified
    auditor.
  - A system's documentation and controls were checked against stated
    criteria, with findings and remediation recorded.
  - An assurance case makes this claim, on this evidence, with these
    assumptions and this stated residual uncertainty.
inappropriate_claims:
  - That certification of an organization's processes (for example, a
    management-system certificate) is evidence that any specific system it
    ships is safe, fair, or reliable.
  - That a completed audit conducted with shallow access — API-only or
    documentation-only — provides deep assurance about model behavior,
    training data, or internal controls.
  - That documentation compliance — cards published, registers filed,
    policies in place — is a measure of system performance.
  - That the word "audited" or "certified," without scope, criteria,
    access level, and period attached, tells a reader anything
    decision-relevant.
evidence_produced: >-
  Organizational and documentary evidence — records that required
  processes exist and were followed, audit findings against stated
  criteria, and structured arguments assembling evidence behind a claim.
  Evidence about organizations and documents, not direct evidence of
  system behavior.
combine_with:
  - Direct technical evaluation — benchmarks, red teaming, trajectory
    analysis — since process conformity is not behavioral evidence, and
    an assurance case is only as strong as the measurements inside it.
  - Deployment monitoring and incident reporting, which test whether the
    processes an audit certified actually catch failures in operation.
  - Independent challenge of the assurance argument itself — explicit
    defeaters and external review — when a case supports a release
    decision.
misconceptions:
  - misconception: A certificate means the system is safe.
    reality: >-
      A management-system certificate attests that required processes
      exist and were audited. It says nothing about the behavior of any
      system the organization ships.
  - misconception: "\"Audited\" means independently and deeply examined."
    reality: >-
      An audit is defined by its scope, criteria, access, and
      independence. Without those attached the word is marketing — and
      many AI audits run on API access and documentation alone.
  - misconception: An assurance case is a proof of safety.
    reality: >-
      It is an argument, as strong as its evidence and its author's
      candor. A polished case built from developer-selected evidence is
      assurance theater.
questions_to_ask:
  - What exactly was certified or audited — the organization's processes,
    or a system's behavior?
  - Who conducted the assessment, under what independence rules, and who
    paid for it?
  - What access did the assessor have — documents, API queries, or
    training data and internals?
  - What criteria and thresholds were applied, and who decided they were
    adequate?
  - What were the scope and period, and does the claim being made stay
    inside them?
  - For an assurance case — what counterevidence was considered, and what
    was withheld?
debates:
  - question: Should trustworthiness be measured?
    positions:
      - label: Quantify it
        view: >-
          Regulation, procurement, and progress-tracking all need
          comparable measures. Without quantified trustworthiness,
          decisions default to vendor narrative and brand — and imperfect
          metrics that improve under scrutiny beat no metrics at all.
      - label: Scoring it is a category error
        view: >-
          Trustworthiness is plural — safety, fairness, robustness,
          accountability — and contested. Collapsing it into scores
          rewards gaming the metric, hides the value judgments in the
          weighting, and lends false precision to what remains a
          judgment.
    note: >-
      Both positions accept that current instruments are weak; they
      disagree about whether the remedy is better measurement or
      restraint about what measurement is asked to carry.
reliability_evidence: >-
  Largely uncharacterized for AI. Whether two independent auditors applying
  the same process standard to the same organization would reach the same
  findings has not been systematically studied; the working research behind
  this Atlas flags audit-quality measurement itself as an open research
  gap.
validity_evidence: >-
  The validity question is structural rather than statistical. These
  instruments measure processes and documents, and the research reports
  emphasize that no major framework establishes a validated link from
  process conformity to system-level safety or performance. Requiring
  evaluation without specifying methods, metrics, or thresholds is the
  central documented gap between regulation and technical practice.
reproducibility_notes: >-
  Audit findings are reproducible only to the extent that criteria, scope,
  access, and evidence are disclosed. Most third-party AI assessments
  publish summaries rather than working papers, so independent
  re-examination is usually impossible.
adoption_evidence: >-
  Formal process standards are published and some are certifiable; binding
  audit requirements exist in specific jurisdictions and sectors (the
  research reports cite employment-tool bias audits and large-platform
  audits as examples). Safety and assurance cases for frontier AI are an
  emerging convention among a small number of developers, not a general
  practice. Specific standard identifiers, dates, and adoption figures in
  this entry are drawn from working reports and need verification.
known_failure_modes:
  - Assurance theater — a polished structured argument assembled from
    weak, developer-selected evidence.
  - Scope confusion — a management-system certificate read as a
    product-safety certificate.
  - Shallow-access audits cited to rule out failures they could not have
    detected.
  - Compliance displacement — teams optimizing for documentation
    completeness instead of measured behavior.
related_entries:
  - iso-iec-42001
  - nist-ai-rmf
  - conformity-assessment
  - impact-assessment
  - assurance-case
  - model-cards
  - system-cards
related_guides:
  - from-model-scores-to-system-assurance
primary_sources:
  - src-casper-2024-black-box-audits
secondary_sources: []
source_status: >-
  Drafted from working research reports. Standard identifiers, jurisdictional
  requirements, and the black-box-audit citation have not yet been checked
  against primary sources.
created: 2026-07-31
last_reviewed: 2026-08-03
reviewer: Monica Kodwani
tags:
  - standards
  - audit
  - assurance
  - certification
  - governance
featured: true
---

Standards and assurance approaches evaluate the *organization around the
system* — its processes, records, and arguments — where the other methods in
this Atlas evaluate the system itself. One clarification about this entry's
evidence class: "formal standard" describes the standards and audit
requirements in this family, some of which are published, certifiable, or
legally binding. It does not describe everything grouped here. Safety and
assurance cases in particular are an emerging practice with no formal
standing; they sit in this entry because they share its logic — structured
evidence assembled behind a governance claim — not its maturity.

### Process obligations without measurement content

Management-system standards and risk-management frameworks (ISO/IEC 42001
and the NIST AI RMF are the canonical examples) require organizations to
evaluate, document, and monitor their AI systems. What they almost never do
is specify which metrics to use, which methods count as adequate, or what
threshold constitutes passing. This is partly deliberate — a universal
threshold spanning medical imaging, hiring tools, and code generation would
be arbitrary — but it leaves the decisive question, whether a provider's
chosen method and threshold are adequate, without an answer anyone is
assigned to give. The research reports treat this as the central gap
between regulation and technical practice: every major framework requires
evaluation; none specifies how. Two boundaries follow. Certification under
a management-system standard establishes that required processes exist and
are internally audited — not that any output of any system is safe or
correct. And conformity assessment can be less external than the term
suggests: the reports note that under the EU AI Act, most high-risk systems
undergo self-assessment rather than third-party examination.

### Audits are defined by independence and access

The audit literature distinguishes first-party (internal), second-party
(contracted), and third-party (independent) audits, and treats two
constraints as binding: independence and access. Casper et al. (2024) argue
that black-box access — querying a model through an API — is insufficient
for rigorous audits, because behavior can be observed but data governance,
training practices, and internal controls cannot be verified; meaningful
assurance requires access to training data, weights, or internals. Most
third-party assessment today operates below that bar, on public information
and API access. Where deeper access exists, it typically arrives through
bespoke confidential contracts, which improves the evidence while removing
it from public scrutiny. A credible audit is identified by its stated
subject, criteria, period, evidence rights, independence rules, and
remediation process. Absent those, "audited" is a marketing word, and
several commercial offerings trade on exactly that ambiguity.

### Assurance cases, imported and not yet standardized

Safety cases — structured arguments that a system is acceptably safe for a
stated context — are imported from safety-critical engineering. Their
skeleton is useful for AI evaluation precisely because it is explicit: a
claim, its assumptions, the supporting evidence, the counterarguments
(defeaters), and the residual uncertainty. Frontier AI developers have
begun adopting the form, but there are no standardized evidentiary
requirements — no shared answer to what evidence suffices for which claim —
so an assurance case is currently only as strong as its author's candor.
The characteristic failure mode is assurance theater, in which a polished
argument packages weak, developer-selected evidence. The reports' proposed
correctives are procedural rather than technical: independent challenge,
explicit counterevidence, and disclosure of what was withheld and who
reviewed it.
