---
id: impact-assessment
title: Impact assessment
aliases:
  - Algorithmic impact assessment
  - Fundamental-rights impact assessment
  - Data-protection impact assessment
entry_type: standard
status: needs-verification
content_status: outline
summary: >-
  A prospective, structured analysis of an AI system's anticipated effects
  on people, rights, organizations, or society, usually produced by the
  deploying organization before deployment and sometimes revisited
  periodically. It is a governance practice that produces a document, not a
  test that produces a measurement.
definition: >-
  Impact assessment is a family of structured self-analysis practices with
  several named variants — algorithmic impact assessment, fundamental-rights
  impact assessment, and data-protection impact assessment — each anchored
  in a different legal or policy tradition. The process is formalized in
  some jurisdictions and in at least one published international standard,
  but the formalization is of the process and its documentation, not of
  methods, metrics, or thresholds. Most regimes require the assessment to
  exist; few require its contents to be independently verified.
why_it_matters: >-
  Impact assessment is the main instrument governments use to force
  consideration of effects before deployment, and it extends evaluation
  beyond technical performance to rights, populations, and institutions. It
  is also the clearest case in the evaluation landscape of a required
  document being mistaken for verified evidence — a completed assessment
  shows that an analysis was performed, not that its conclusions are
  correct.
claimed_constructs:
  - social-impact
  - compliance
  - fairness
  - privacy
evaluation_levels:
  - application
  - societal-impact
lifecycle_stages:
  - design
  - pre-deployment
  - monitoring
purposes:
  - regulatory-compliance
  - risk-discovery
  - public-accountability
evaluator_types:
  - application-developer
  - auditor
  - affected-stakeholder
evaluator_filters:
  - human
  - auditor
scoring_mechanisms:
  - policy-rule-checking
  - expert-adjudication
evidence_class: formal-standard
maturity: common-contested
human_involvement: human-led
strengths:
  - Forces prospective consideration of effects on people and rights before
    deployment, at a stage when design can still change.
  - Extends the object of evaluation beyond model behavior to populations,
    workflows, and institutional context.
  - Formalized variants create an auditable record — a risk register and
    mitigation record that later oversight can examine.
  - Some regimes scale obligations to the assessed impact level, tying the
    document to concrete requirements rather than leaving it free-floating.
limitations:
  - Usually a self-assessment by the deploying organization, with quality
    depending heavily on that organization's candor and competence.
  - Largely qualitative — the working reports describe the practice as
    increasingly formalized as a process while remaining without
    psychometrically validated metrics or universal thresholds.
  - Prospective by design, so it records anticipated effects, which may
    diverge substantially from realized effects after deployment.
  - Variants are not interchangeable — a data-protection impact assessment
    is grounded in data-protection law and does not substitute for a
    safety, fairness, or fundamental-rights analysis.
  - Completed assessments are often unpublished and rarely independently
    verified, so the requirement can be satisfied without external
    scrutiny.
appropriate_claims:
  - The organization performed a structured, documented analysis of
    anticipated effects before deployment.
  - The assessment identified these specific risks and recorded these
    planned mitigations at this point in time.
  - The deployment fell into a defined impact tier under a specific
    jurisdiction's assessment instrument, triggering that tier's
    obligations.
inappropriate_claims:
  - That a completed impact assessment demonstrates the system's impacts
    are acceptable — most regimes require the document to exist, not that
    its contents be independently verified.
  - That the assessment predicts actual deployed effects — it records
    effects the deploying organization anticipated, assessed by that
    organization itself.
  - That a data-protection impact assessment covers safety, fairness, or
    broader rights concerns beyond its legal scope.
  - That an impact-assessment requirement in a jurisdiction implies
    completed assessments there are audited, published, or of consistent
    quality.
  - That the absence of a risk from an assessment means the risk was
    examined and ruled out, rather than not considered.
adoption_evidence: >-
  Impact assessment is mandatory in several jurisdictions. Canada's
  federal directive requires a scored, published algorithmic impact
  assessment (65 risk and 41 mitigation questions, four impact levels
  gating obligations — verified against the official tool page in November
  2026; see the dedicated entry). OMB memorandum M-25-21 requires US
  federal agencies to complete AI impact assessments with independent
  review, alongside pre-deployment testing, for high-impact AI (verified
  against the memorandum PDF). Data-protection impact assessments are
  required under European data-protection law for certain high-risk
  processing, and a published ISO/IEC impact-assessment standard (reported
  as ISO/IEC 42005:2025) structures the process without setting universal
  thresholds — these last two specifics remain unverified against primary
  texts.
evidence_produced: >-
  A structured prospective analysis of a system's potential effects on
  people and society — documentary evidence of anticipation, whose weight
  depends on who conducted it, who was consulted, and whether predictions
  are ever checked.
combine_with:
  - Participation of affected stakeholders, without which foreseeable
    harms are routinely missed.
  - Post-deployment outcome evaluation, to test the assessment's
    predictions against what actually happened.
  - Independent review where the assessment is self-conducted.
misconceptions:
  - misconception: A completed impact assessment means impacts are managed.
    reality: >-
      It means impacts were anticipated on paper. Whether mitigations
      exist, work, and are maintained is separate evidence the assessment
      itself does not provide.
  - misconception: Impact assessments are box-ticking by nature.
    reality: >-
      Quality varies enormously with process: assessments with real
      stakeholder participation and follow-up verification are different
      instruments from compliance forms, even under the same name.
questions_to_ask:
  - Who conducted it, and with what independence from the deployment
    decision?
  - Were affected groups actually consulted, and did their input change
    anything?
  - Are the assessment's predictions revisited after deployment?
  - Is the assessment public, and can its reasoning be examined?
known_failure_modes:
  - Box-ticking, where the questionnaire is completed to satisfy the
    requirement without a substantive analysis behind it.
  - Scope substitution, where a narrower assessment (typically
    data-protection) is treated as covering safety, fairness, or rights.
  - Staleness, where the assessment is never revisited after the system,
    its use, or its population changes.
  - Self-assessment optimism, where the organization assessing its own
    system understates risks it has incentives not to find.
related_entries:
  - standards-and-assurance
  - conformity-assessment
  - model-cards
  - system-cards
  - nist-ai-rmf
  - iso-iec-42001
  - assurance-case
  - canada-algorithmic-impact-assessment
related_guides:
  - what-counts-as-ai-evaluation
  - from-model-scores-to-system-assurance
  - how-governments-evaluate-ai
primary_sources:
  - src-tbs-2026-canada-aia
  - src-omb-2025-m-25-21
secondary_sources: []
source_status: >-
  Updated from November 2026 research: the Canadian questionnaire
  structure and the US federal requirement (OMB M-25-21) are now backed by
  verified source records. European data-protection requirements and the
  ISO/IEC 42005 identifier remain unverified against primary texts.
created: 2026-07-31
last_reviewed: 2026-11-11
reviewer: Monica Kodwani
tags:
  - governance
  - self-assessment
  - rights
featured: false
---

Impact assessment sits at the boundary of this Atlas: it is evaluation in
the sense of structured evidence-gathering about a system, but the evidence
is prospective, largely qualitative, and usually produced by the party with
the strongest interest in a favorable result. The working reports
characterize it as "often qualitative and self-assessed" and increasingly
formalized — a process standardized without its metrics being standardized.

### Variants are not interchangeable

The three named variants come from different traditions and answer
different questions. Algorithmic impact assessments (the public-sector
lineage) ask how an automated decision system will affect the people
subject to it. Fundamental-rights impact assessments ask about effects on
legally protected rights. Data-protection impact assessments ask a
narrower question defined by data-protection law. Treating any one as
covering the others is a common scope error; the reports note explicitly
that a data-protection assessment does not replace a safety, fairness, or
fundamental-rights analysis.

### The verification gap

The recurring structural feature, consistent across the reports' treatment
of standards generally, is that regimes require the assessment to exist
and specify its process, while leaving methods and thresholds to the
assessing organization and rarely requiring independent verification of
the result. A policymaker reading a completed impact assessment should
treat it as a claim by the deploying organization about what it
anticipated and planned — evidence worth having, and a prerequisite for
accountability, but not a finding about the system's actual effects.
