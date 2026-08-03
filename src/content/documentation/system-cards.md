---
id: system-cards
title: System cards
entry_type: documentation
status: needs-verification
content_status: outline
summary: >-
  A documentation genre in which developers disclose a deployed system's
  capabilities, evaluations, mitigations, and known limitations — now common
  among frontier developers and increasingly treated as a compliance
  artifact.
definition: >-
  A system card documents an AI system as released — not just the underlying
  model — describing intended use, evaluation results, red-team findings,
  mitigations, and limitations. The genre spread with frontier model
  releases in the last several years (the working reports associate its
  popularization with major 2023-era releases) and has become the default
  vehicle for public safety disclosure.
claimed_constructs:
  - transparency
evaluation_levels:
  - application
  - model
lifecycle_stages:
  - release
  - deployment
purposes:
  - public-accountability
  - regulatory-compliance
  - release-decision
evaluator_types:
  - model-developer
evaluator_filters:
  - human
environments:
  - real-world-deployment
scoring_mechanisms:
  - policy-rule-checking
evidence_class: industry-practice
maturity: emerging
strengths:
  - Puts capability, safety, and limitation claims on the public record,
    where they can be scrutinized, compared, and cited.
  - The strongest examples described in the reports update after release,
    disclose limitations honestly, and describe mitigations specifically.
  - Becoming a de facto compliance artifact, which raises the cost of
    omitting safety-relevant information entirely.
limitations:
  - Selective disclosure — the reports find cards typically omit exact
    prompts, decoding settings, judge identities, scoring code, uncertainty,
    failed evaluations, and subgroup results, so readers cannot reproduce or
    audit the claims.
  - Written by the party with the strongest interest in the system's
    reception; no independent verification is implied.
  - No standardized content requirements, so rigor varies widely across
    developers and releases.
appropriate_claims:
  - The developer publicly stated these evaluations were run and reported
    these results and limitations at release.
  - Two systems' cards can be compared for what their developers chose to
    disclose.
inappropriate_claims:
  - That a published system card is evidence the evaluations described in it
    were sound, sufficient, or independently checked.
  - That disclosure of a mitigation establishes the mitigation works under
    adaptive conditions.
  - That the absence of a risk from a card means the risk was assessed and
    ruled out.
why_it_matters: >-
  System cards are becoming de facto compliance artifacts; the difference between disclosure and verification determines what they can actually prove.
evidence_produced: >-
  Public disclosure of a deployed system's evaluations, mitigations, and
  known limitations, as selected and framed by its developer.
combine_with:
  - Independent testing of the deployed system, since cards cannot verify
    themselves.
  - Monitoring over time against the card's claims, especially after
    updates.
  - Cross-reading with regulatory disclosures and incident reports.
misconceptions:
  - misconception: A published system card proves the system was rigorously evaluated.
    reality: >-
      It proves the developer disclosed selected evaluations and results.
      Rigor, sufficiency, and independence of those evaluations are
      separate questions the card cannot settle.
  - misconception: If a risk is not in the card, it was assessed and ruled out.
    reality: >-
      Absence from a card is not evidence of absence — it may mean the
      risk was not tested, not found, or not disclosed.
questions_to_ask:
  - Are prompts, settings, judge identities, and uncertainty disclosed —
    or only headline results?
  - Has the card been updated post-release as issues emerged?
  - Which limitations are named specifically, and which are generic
    boilerplate?
  - What would an independent tester check first that the card does not
    address?
known_failure_modes:
  - Cards communicating selected favorable findings while the evidentiary
    details needed for scrutiny remain internal.
related_entries:
  - model-cards
  - standards-and-assurance
  - foundation-model-transparency-index
  - red-teaming
related_guides:
  - from-model-scores-to-system-assurance
source_status: >-
  Drafted from working research reports. Genre history and disclosure-gap
  findings not yet verified against primary sources.
created: 2026-07-31
last_reviewed: 2026-08-03
reviewer: Monica Kodwani
tags:
  - documentation
  - transparency
featured: false
---
