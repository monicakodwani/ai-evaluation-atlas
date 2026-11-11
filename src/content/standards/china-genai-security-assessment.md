---
id: china-genai-security-assessment
title: China's generative AI security assessment regime
aliases:
  - CAC Interim Measures
  - GB/T 45654-2025
  - TC260 AI Safety Governance Framework
entry_type: standard
status: needs-verification
content_status: outline
summary: >-
  The only mandatory pre-launch evaluation gate among major jurisdictions:
  under the CAC's Interim Measures (effective August 2023), generative AI
  services with public-opinion or social-mobilization attributes must pass
  a security assessment and complete algorithm filing before launch. The
  recommended national standard GB/T 45654-2025 supplies the concrete
  testing methodology, and TC260's AI Safety Governance Framework (v2.0,
  September 2025) the risk-grading architecture above it.
definition: >-
  Three instruments form one regime. The Interim Measures for the
  Management of Generative AI Services (Cyberspace Administration of
  China, effective 15 August 2023) require, per legal summaries of
  Article 17, a security assessment and algorithm filing before services
  with public-opinion attributes or social-mobilization capacity reach the
  public. GB/T 45654-2025 ("Basic Safety Requirements for Generative
  Artificial Intelligence Services", issued 30 June 2025, consulted here
  via CSET's labeled English translation) is formally a recommended —
  voluntary — standard that in practice operationalizes that gate: its
  appendices list training-data and generated-content safety risks and
  give reference assessment methods supporting filing, registration,
  testing, and evaluation, for providers, oversight departments, and
  third-party evaluation institutions. TC260's AI Safety Governance
  Framework 2.0 adds five-level risk grading by application scenario,
  intelligence level, and scale, and lifecycle-based safety guidance that
  individual standards implement.
why_it_matters: >-
  China inverts the institutional logic found everywhere else: evaluation
  evidence exists to satisfy a mandatory pre-launch gate, not as voluntary
  assurance. The same technical activities seen in other regimes — data
  audits, generated-content testing, refusal behavior checks — serve a
  licensing-like function here, which makes this the Atlas's sharpest
  example of why evaluation evidence cannot be read apart from the
  institution that demands it.
claimed_constructs:
  - compliance
  - harmful-content
  - security
  - safety
evaluation_levels:
  - data
  - model
  - application
lifecycle_stages:
  - data-preparation
  - pre-deployment
  - release
purposes:
  - regulatory-compliance
  - release-decision
  - certification
evaluator_types:
  - model-developer
  - auditor
  - regulator
evaluator_filters:
  - regulator
  - auditor
environments:
  - laboratory
  - retrospective-audit
scoring_mechanisms:
  - policy-rule-checking
evidence_class: formal-standard
maturity: emerging
organization: Cyberspace Administration of China; SAMR/SAC; TC260
access_model: regulator-only
strengths:
  - The only regime where a generative AI service in scope cannot legally
    launch without producing assessment evidence — evaluation with real
    gating force.
  - A concrete national test standard (GB/T 45654-2025) with risk lists
    and reference assessment methods, where most jurisdictions still have
    only process obligations.
  - Covers training data as an explicit object of safety testing, not just
    model outputs.
  - The TC260 framework's five-level risk grading by scenario,
    intelligence, and scale parallels risk-tiering logic elsewhere while
    being implemented through standards and filing practice rather than
    statute.
limitations:
  - The risk taxonomy centers content security — including
    political-content categories — so "safety assessment" evidence here is
    not comparable to safety-evaluation evidence produced under other
    regimes' definitions.
  - Assessment and filing evidence flows to the regulator; little of it is
    public, so outside observers cannot examine what was tested or found.
  - Scope turns on "public opinion attributes or social mobilization
    capacity", a trigger whose application is itself a regulatory
    judgment.
  - Nearly every detail reaching non-Chinese readers passes through
    translations and legal summaries, with the attendant loss of
    precision.
appropriate_claims:
  - A generative AI service in scope completed the required security
    assessment and algorithm filing before public launch.
  - A provider tested training data and generated content against the
    standard's risk categories using its reference assessment methods.
inappropriate_claims:
  - That passing the security assessment shows a model is safe in the
    sense used by other evaluation regimes — the assessed constructs
    center content security under Chinese law.
  - That GB/T 45654 is mandatory law; it is a recommended standard that
    operationalizes a mandatory gate.
  - Specific numeric test parameters (refusal-rate targets, question-bank
    sizes, sampling thresholds) circulating in consultancy materials —
    these were not verified against the translated standard and should not
    be cited.
evidence_produced: >-
  Pre-launch assessment evidence — training-data audits, generated-content
  test results against listed risk categories, and filing documentation —
  produced for the regulator as a launch condition, and largely not
  public.
combine_with:
  - Independent capability and safety evaluations, since the regime's
    constructs are content-security-centric.
  - Comparative reading against the EU's Article 55 regime — binding
    evaluation duties with opposite institutional functions (ongoing
    provider duty versus pre-launch gate).
  - Primary-text verification via labeled translations before relying on
    any article-level detail.
misconceptions:
  - misconception: China has no AI evaluation requirements, only
      censorship rules.
    reality: >-
      The regime mandates concrete pre-launch assessment work — data
      audits, content testing, filing — with a published national test
      standard behind it. Its constructs differ from Western safety
      evaluation; the testing machinery is real.
  - misconception: GB/T 45654 is the binding law.
    reality: >-
      The binding gate is the CAC's Interim Measures (and the older
      security-assessment and algorithm-filing regimes they invoke); the
      GB/T standard is formally voluntary and supplies the methodology
      used to satisfy that gate.
questions_to_ask:
  - Was a claim about this regime checked against a labeled translation of
    the primary text, or only against consultancy summaries?
  - Which constructs did the assessment actually test — and how do they
    map, or fail to map, onto what another regime means by safety?
  - Did the service fall in scope via the public-opinion/social-mobilization
    trigger, and who decided that?
  - Is a cited test parameter traceable to the standard's text, or to
    compliance-vendor folklore?
debates:
  - question: Is this regime an AI safety evaluation system or a content
      control system that uses evaluation machinery?
    positions:
      - label: The strictest operational gate
        view: >-
          Whatever its motives, the regime makes real testing a launch
          condition, with a national standard, third-party evaluation
          institutions, and regulator review — operationally ahead of
          jurisdictions whose evaluation duties are voluntary or delayed,
          and covering genuine risks (data quality, harmful outputs)
          alongside political ones.
      - label: Different construct, same word
        view: >-
          The risk taxonomy's core is political content security; calling
          its outputs "safety evaluation" invites false equivalence with
          regimes measuring different constructs. Evidence produced to
          satisfy a censorship-adjacent gate cannot be read as evidence
          about safety in the Atlas's sense.
    note: >-
      Both positions agree on the facts and differ on the construct — a
      live illustration of this Atlas's recurring point that evaluation
      evidence is only interpretable relative to what was actually
      measured and why.
known_failure_modes:
  - Citing consultancy-circulated numeric test parameters as if they were
    the standard's text.
  - Treating "passed security assessment" as cross-regime safety evidence.
related_entries:
  - standards-and-assurance
  - conformity-assessment
  - eu-ai-act
related_guides:
  - how-governments-evaluate-ai
primary_sources:
  - src-cset-2026-gbt-45654
secondary_sources: []
source_status: >-
  Heavily flagged by design. Article-level wording of the Interim Measures
  rests on legal summaries — the main English translations were
  unreachable during research. GB/T 45654's scope comes from CSET's
  labeled translation (the record here); its reported 1 November 2025
  effective date is secondary. TC260 Framework 2.0 details come from a
  SESEC summary of the bilingual official document. Appendix B test
  parameters were deliberately not extracted or cited.
created: 2026-11-11
last_reviewed: 2026-11-11
reviewer: Monica Kodwani
tags:
  - china
  - mandatory-assessment
  - content-security
featured: false
---

This entry bundles three instruments because they only make sense
together: the Interim Measures supply the legal gate, the GB/T standard
supplies the test methodology, and the TC260 framework supplies the risk
architecture. Reading any one alone misleads — the standard looks
voluntary without the gate, and the gate looks methodless without the
standard.

### The comparative lesson

Set against the EU's Article 55, the contrast is exact: both make
evaluation legally consequential, but the EU imposes an ongoing duty on
model providers under regulatory watch, while China imposes a point-in-time
gate on services before launch. Same verb — "evaluate" — and almost no
overlap in what the resulting evidence can support.
