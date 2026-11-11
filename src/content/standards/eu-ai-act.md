---
id: eu-ai-act
title: EU AI Act
aliases:
  - Regulation (EU) 2024/1689
  - Artificial Intelligence Act
entry_type: standard
status: needs-verification
content_status: outline
summary: >-
  The EU's binding AI regulation and the first law anywhere to mandate
  model evaluation: providers of general-purpose AI models with systemic
  risk must perform state-of-the-art model evaluations, including
  documented adversarial testing (Article 55). Its separate high-risk
  conformity-assessment regime was delayed to late 2027/2028 — largely
  because the testing standards it depends on were not ready.
definition: >-
  A regulation with two evaluation regimes on two clocks. The
  frontier-model track is live: general-purpose AI (GPAI) obligations have
  applied since 2 August 2025 and been Commission-enforceable since
  2 August 2026, with fines up to EUR 15 million or 3% of worldwide
  turnover; Article 55 requires providers of GPAI models with systemic
  risk to perform model evaluation reflecting the state of the art
  including adversarial testing, assess and mitigate systemic risks,
  report serious incidents, and ensure cybersecurity. The product-safety
  track is prospective: the "Digital Omnibus" amendment (in force 27 July
  2026) moved Annex III high-risk obligations to 2 December 2027 and
  Annex I embedded-AI obligations to 2 August 2028. Conformity assessment
  for most standalone high-risk systems is provider self-assessment
  against Annex IV technical documentation; third-party notified-body
  assessment is mandatory mainly for biometrics.
why_it_matters: >-
  This is the anchor case of regulation-mandated evaluation: the only
  place where frontier-model evaluation and adversarial testing are
  enforceable legal duties rather than voluntary practice. Its delayed
  high-risk track teaches the complementary lesson — a legal requirement
  to test is inert until testable standards exist, so evaluation
  infrastructure, not legal text, is the rate-limiting resource.
claimed_constructs:
  - compliance
  - safety
  - security
evaluation_levels:
  - model
  - application
  - organization
lifecycle_stages:
  - pre-deployment
  - release
  - deployment
  - monitoring
  - incident-response
purposes:
  - regulatory-compliance
  - release-decision
  - safety-assurance
  - post-deployment-oversight
evaluator_types:
  - model-developer
  - external-evaluator
  - regulator
  - auditor
evaluator_filters:
  - regulator
  - auditor
  - expert
environments:
  - laboratory
  - retrospective-audit
scoring_mechanisms:
  - policy-rule-checking
  - expert-adjudication
evidence_class: formal-standard
maturity: emerging
organization: European Union
access_model: regulator-only
strengths:
  - Makes model evaluation and documented adversarial testing a legal duty
    for systemic-risk GPAI providers, with real fines behind it.
  - Builds a full evidence lifecycle — evaluation, risk assessment,
    serious-incident reporting to the AI Office, post-market monitoring —
    rather than a one-time test.
  - The AI Office holds its own power to evaluate GPAI models, including
    through independent experts, so enforcement is not wholly dependent on
    provider self-reporting.
  - A Scientific Panel of 60 independent experts advises on evaluation
    methodology and can alert the AI Office to systemic risks.
limitations:
  - The required "state of the art" is undefined where the art is immature; until
    harmonised standards exist, the GPAI Code of Practice is the operative
    specification of what compliance looks like.
  - High-risk conformity assessment is mostly self-assessment; third-party
    scrutiny is the exception (chiefly biometrics), so "conformity
    assessed" usually means documented self-evaluation.
  - The testing-critical harmonised standards (accuracy, robustness, bias,
    conformity assessment procedure) remained drafts as of late 2026, with
    several reportedly rejected at public enquiry.
  - Evaluation evidence flows mainly to the regulator; public visibility
    is limited to redacted summaries and enforcement outcomes.
appropriate_claims:
  - A systemic-risk GPAI provider is legally required to perform and
    document state-of-the-art model evaluations including adversarial
    testing, and faces enforcement if it does not.
  - A high-risk system's provider compiled Annex IV technical
    documentation, including test procedures and results, and attested
    conformity under the applicable procedure.
inappropriate_claims:
  - That AI Act compliance shows a model or system is safe — the Act
    mandates processes and evidence, not measured safety outcomes.
  - That "CE-marked" or "conformity-assessed" implies independent testing;
    for most high-risk AI it means provider self-assessment.
  - That the high-risk evaluation regime is in force — its obligations
    apply from December 2027 (Annex III) and August 2028 (Annex I) after
    the Omnibus delay.
evidence_produced: >-
  For frontier models: documented evaluations and adversarial testing,
  systemic-risk assessments, model reports and serious-incident reports to
  the AI Office — regulator-facing evidence. For high-risk systems (once
  in force): Annex IV technical documentation with test procedures, logs,
  reports, and accuracy/robustness metrics behind a conformity
  attestation.
combine_with:
  - The GPAI Code of Practice, which is in practice the operative
    evaluation rulebook until harmonised standards are published.
  - Independent evaluation and red-teaming beyond the legal minimum, since
    the Act fixes duties, not methods.
  - Post-market monitoring and incident data, which the Act itself treats
    as part of the evidence chain.
misconceptions:
  - misconception: The EU AI Act's evaluation requirements are all in force.
    reality: >-
      Only the GPAI track is live (enforceable since August 2026). The
      high-risk conformity regime was delayed to December 2027 and August
      2028, largely because the harmonised testing standards were not
      ready.
  - misconception: Conformity assessment under the Act means a third party
      tested the system.
    reality: >-
      Most standalone high-risk systems are self-assessed by the provider
      against documentation requirements; notified-body assessment is
      mandatory mainly for biometrics.
  - misconception: Article 55 tells providers how to evaluate.
    reality: >-
      It requires evaluation "reflecting the state of the art" and
      documented adversarial testing but fixes no methods or thresholds;
      the Code of Practice and future harmonised standards carry the
      specifics.
questions_to_ask:
  - Which track is a compliance claim about — the live GPAI duties or the
    not-yet-applicable high-risk regime?
  - Was conformity self-assessed or assessed by a notified body, and
    against which standard?
  - What did the documented adversarial testing actually cover, and who
    outside the provider has seen it?
  - Has the AI Office exercised its own evaluation powers on this model,
    or is all evidence provider-generated?
debates:
  - question: Does writing "state of the art" evaluation into binding law
      improve the practice or freeze an immature science?
    positions:
      - label: Law creates the demand signal
        view: >-
          Binding duties with fines force providers to invest in
          evaluation capacity, give external evaluators standing, and
          create a regulator who can check claims — none of which
          voluntary frameworks achieved. The standards will mature
          because compliance requires them to.
      - label: Mandating the unmeasurable invites theater
        view: >-
          The science the Act points to does not yet exist in standardised
          form — the testing standards keep failing enquiry votes, and the
          high-risk regime had to be delayed for exactly that reason.
          Obligations without validated methods are met with
          documentation, and documentation is not safety.
    note: >-
      The Omnibus delay is the strongest evidence on both sides: proof the
      legal timetable outran the measurement science, and proof the regime
      adjusts rather than enforcing the unmeasurable.
known_failure_modes:
  - Compliance evidence produced as documentation exercises while the
    underlying evaluation work is thin — the Act checks that evidence
    exists more than that it is good.
  - Citing "EU AI Act compliance" without distinguishing the live GPAI
    duties from the delayed high-risk regime.
related_entries:
  - gpai-code-of-practice
  - conformity-assessment
  - standards-and-assurance
  - impact-assessment
  - iso-iec-42001
related_guides:
  - how-governments-evaluate-ai
  - from-model-scores-to-system-assurance
primary_sources:
  - src-eu-2024-ai-act
  - src-ec-2026-ai-act-faq
secondary_sources: []
source_status: >-
  Timeline and enforcement facts come from the Commission's official FAQ
  (fetched November 2026); Article 55 wording was checked against the AI
  Act Explorer. Unverified: the Digital Omnibus amending regulation's
  number (reported as (EU) 2026/1744, single-source), Annex IV/VI/VII
  exact wording (not re-fetched from EUR-Lex), standards-pipeline enquiry
  outcomes (unofficial tracker), and notified-body designation counts.
created: 2026-11-11
last_reviewed: 2026-11-11
reviewer: Monica Kodwani
tags:
  - regulation
  - binding-law
  - european-union
featured: false
---

The Act's deepest lesson for this Atlas is structural: it is one law
containing two different theories of evaluation. The frontier track treats
evaluation as an ongoing duty of the model provider under regulatory
watch — run state-of-the-art evaluations, document adversarial testing,
report incidents, update. The product track treats evaluation as
conformity assessment — a point-in-time demonstration against
requirements, inherited from EU product-safety law.

### The delay is data

The high-risk track could not start on time because the standards that
give "testing" concrete content — accuracy, robustness, bias measurement,
the conformity procedure itself — were not finished, and several drafts
were reportedly rejected at public enquiry. A reader who wants to know how
mature AI evaluation really is can read that timetable as evidence: the
world's most demanding AI law, with years of lead time, could not yet buy
a finished set of testing standards.
