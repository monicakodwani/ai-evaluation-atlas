---
id: gpai-code-of-practice
title: GPAI Code of Practice
aliases:
  - General-Purpose AI Code of Practice
  - EU Code of Practice for general-purpose AI
entry_type: standard
status: needs-verification
content_status: outline
summary: >-
  The voluntary compliance route for the EU AI Act's general-purpose AI
  obligations, published 10 July 2025 and assessed adequate by the
  Commission and AI Board. Its Safety and Security chapter — 10
  commitments and 32 measures for systemic-risk model providers — is the
  most detailed official specification of frontier-model evaluation
  practice in any jurisdiction.
definition: >-
  A code drafted by independent experts in an AI Office–facilitated
  multi-stakeholder process, with three chapters: Transparency (including
  a Model Documentation Form), Copyright, and Safety and Security. The
  Safety and Security chapter applies only to providers of GPAI models
  with systemic risk and specifies, per a reliable secondary summary:
  "cutting-edge" multi-modality model evaluations (open-ended testing,
  benchmarks, adversarial testing, human uplift studies, simulations);
  internal validity, external validity, and reproducibility requirements;
  full capability elicitation with anti-sandbagging provisions; jailbreak
  and mitigation-degradation testing; evaluator qualification floors and
  minimum evaluation time; mandatory independent external evaluation
  before deployment (with narrow exceptions), including evaluator access
  to the most capable model variants with minimal safety mitigations,
  publication rights after 30 business days, and anti-retaliation
  protections; quantified risk-acceptance tiers; model reports to the AI
  Office; and severity-tiered serious-incident reporting. Because no GPAI
  harmonised standard yet exists, Article 55(2) makes the Code the
  operative compliance route in practice.
why_it_matters: >-
  This is the best single document mapping evaluation-science concepts —
  validity, elicitation, sandbagging, uplift studies, external evaluator
  access — onto compliance obligations. Whatever one thinks of the EU
  regime, the chapter codifies what "frontier safety framework" practice
  is supposed to contain, in enough detail to check a provider's claims
  against.
claimed_constructs:
  - compliance
  - safety
  - security
  - capability
evaluation_levels:
  - model
lifecycle_stages:
  - pre-deployment
  - release
  - deployment
  - monitoring
  - incident-response
purposes:
  - regulatory-compliance
  - safety-assurance
  - release-decision
  - risk-discovery
evaluator_types:
  - model-developer
  - external-evaluator
  - regulator
evaluator_filters:
  - expert
  - regulator
environments:
  - laboratory
scoring_mechanisms:
  - expert-adjudication
  - policy-rule-checking
evidence_class: formal-standard
maturity: emerging
organization: European Commission AI Office
access_model: confidential-external
strengths:
  - Translates frontier evaluation practice into checkable commitments —
    elicitation quality, anti-sandbagging, evaluator qualifications,
    minimum time budgets — instead of a bare duty to "evaluate".
  - The external-evaluator provisions give independent evaluators access,
    publication rights after 30 business days, and anti-retaliation
    protection — institutional scaffolding voluntary arrangements lack.
  - Quantified risk-acceptance tiers force providers to state in advance
    what evidence would stop a deployment.
  - Signed by most major frontier developers, making its commitments a
    de facto cross-industry baseline the public can cite.
limitations:
  - Voluntary — signature is a choice, and at least one major developer is
    absent from the signatory list while another signed only one chapter —
    so coverage is uneven exactly where it is most contested.
  - Commitment detail here rests on a secondary summary of the chapter;
    the official PDF should be checked before quoting exact wording.
  - Compliance evidence (framework documents, model reports) goes to the
    AI Office; the public sees redacted summaries at most.
  - Adequacy was assessed by the body that facilitated the drafting — the
    Code has not been tested in enforcement or court.
appropriate_claims:
  - A signatory committed to the chapter's evaluation, external-evaluation,
    risk-tier, and incident-reporting measures as its route to Article 55
    compliance.
  - The Code specifies concrete expectations — e.g., independent external
    evaluation before deployment — against which a provider's public
    claims can be compared.
inappropriate_claims:
  - That signing the Code shows a provider's models were evaluated and
    found safe — signature is a commitment to a process, and the resulting
    evidence is mostly non-public.
  - That the Code is the law; it is a voluntary instrument whose adequacy
    the Commission has recognized, and alternative compliance routes exist.
  - That non-signature proves non-compliance — providers may demonstrate
    compliance by other means, which the Commission then assesses.
evidence_produced: >-
  Provider-side compliance artifacts: a Safety and Security Framework,
  documented evaluations and adversarial testing, external evaluators'
  reports, model reports to the AI Office, and severity-tiered incident
  reports — detailed, mostly regulator-facing evidence with redacted
  public summaries.
combine_with:
  - The EU AI Act itself, whose Article 55 duties the Code operationalizes
    and whose enforcement gives the commitments their teeth.
  - Independent published evaluations, since Code-generated evidence is
    largely confidential.
  - Developer safety frameworks and system cards, to compare what
    companies promise under the Code with what they publish voluntarily.
misconceptions:
  - misconception: The Code of Practice is binding EU law.
    reality: >-
      It is a voluntary compliance route. The underlying Article 55 duties
      are binding; the Code is one recognized way to meet them, available
      "until a harmonised standard is published".
  - misconception: Signing means a company's models passed EU evaluation.
    reality: >-
      Signing commits a provider to run and document evaluations and
      submit reports; it is a promise about process, not a published
      verdict about any model.
questions_to_ask:
  - Is the provider a signatory to the Safety and Security chapter, and if
    not, what alternative compliance means has it declared?
  - Were independent external evaluators used before deployment, and has
    anything they wrote become public after the 30-business-day window?
  - What are the provider's declared risk-acceptance tiers, and has any
    deployment decision visibly turned on them?
  - Do the provider's public claims match the chapter's specific
    commitments — elicitation, anti-sandbagging, evaluator qualifications
    — or only its general spirit?
debates:
  - question: Can a voluntary code carry the weight of binding-law
      compliance for frontier evaluation?
    positions:
      - label: Pragmatic bridge
        view: >-
          With harmonised standards years away, the Code gets detailed,
          expert-drafted evaluation commitments adopted now, with the
          Commission's adequacy assessment and Article 55 enforcement
          behind them — far more specificity than legislation alone could
          have fixed this early.
      - label: Asymmetric and unaccountable
        view: >-
          Voluntariness means uneven coverage (a major developer absent,
          another signing one chapter), commitments interpreted by the
          committed, and evidence flowing privately to a regulator that
          helped draft the instrument it now assesses — adequacy without
          adversarial testing of the regime itself.
    note: >-
      How the Commission treats non-signatories' "alternative means", and
      whether any external evaluator publishes under the 30-day right,
      will be the early evidence on which position holds.
related_entries:
  - eu-ai-act
  - red-teaming
  - standards-and-assurance
related_guides:
  - how-governments-evaluate-ai
  - red-teaming-versus-risk-estimation
primary_sources:
  - src-ec-2025-gpai-code
secondary_sources: []
source_status: >-
  Publication date, adequacy assessment, and the signatory list come from
  the Commission's policy page (fetched November 2026). Commitment-level
  detail of the Safety and Security chapter comes from the AI Act
  Explorer's summary — a reliable secondary source — and must be
  spot-checked against the official chapter PDF before exact wording is
  quoted. Meta's absence is an absence from the official list, not a
  sourced statement of refusal.
created: 2026-11-11
last_reviewed: 2026-11-11
reviewer: Monica Kodwani
tags:
  - frontier-models
  - code-of-practice
  - european-union
featured: false
---

The Safety and Security chapter is worth reading as an evaluation-science
document, independent of EU compliance: it is the only official text
anywhere that writes down qualification floors for evaluators, minimum
time per evaluation task, the separation of capability elicitation from
safety claims, and protections for external evaluators who publish. Those
details exist because each one patches a documented failure mode of
frontier evaluation practice.

### What signature does and does not tell you

A signature tells you which process a provider has committed to and which
regulator receives its evidence. It does not tell you what any evaluation
found: the model reports go to the AI Office, and the public sees redacted
summaries where risk mitigation requires them. The checkable public
surface is thinner — who signed, which chapters, and whether external
evaluators ever publish under their 30-day right.
