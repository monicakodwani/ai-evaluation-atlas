---
id: canada-algorithmic-impact-assessment
title: Canadian Algorithmic Impact Assessment
aliases:
  - AIA
  - Directive on Automated Decision-Making
entry_type: standard
status: needs-verification
content_status: outline
summary: >-
  Canada's mandatory, published, scored impact assessment for federal
  automated decision systems: 65 risk questions and 41 mitigation
  questions produce a score mapped to four impact levels, which gate
  escalating duties — making it the archetype of impact-level-gated
  evaluation requirements, and one of the longest-running such regimes in
  operation.
definition: >-
  The Algorithmic Impact Assessment is the questionnaire instrument of the
  Treasury Board's Directive on Automated Decision-Making, which applies
  to Canadian federal institutions' automated decision systems. The 65
  risk questions yield a raw impact score (maximum 169); the 41 mitigation
  questions yield a mitigation score (maximum 77), and reaching 80% of the
  mitigation maximum deducts 15% from the raw score. The resulting
  percentage maps to four impact levels — from little-to-no impact to very
  high — which determine the directive's required measures, including peer
  review by qualified experts and human-oversight and monitoring duties.
  The assessment must be completed before production and updated when
  functionality or scope changes, and final results must be published on
  the Open Government Portal. Canada's proposed private-sector AI law
  (AIDA) died with Bill C-27 and will not be revived in its old form, so
  this directive remains Canada's binding evaluation instrument.
why_it_matters: >-
  Most impact-assessment regimes require a document to exist; this one
  scores it, publishes it, and attaches concrete escalating obligations to
  the score. It is the cleanest operational answer to the question every
  impact-assessment framework faces — "what actually turns on the
  assessment?" — and its published records make the practice studyable in
  a way few regimes allow.
claimed_constructs:
  - social-impact
  - fairness
  - compliance
  - human-oversight
evaluation_levels:
  - application
  - societal-impact
lifecycle_stages:
  - design
  - pre-deployment
  - deployment
purposes:
  - regulatory-compliance
  - public-accountability
  - risk-discovery
evaluator_types:
  - application-developer
  - domain-expert
  - auditor
evaluator_filters:
  - human
  - expert
environments:
  - retrospective-audit
scoring_mechanisms:
  - policy-rule-checking
evidence_class: formal-standard
maturity: established
organization: Treasury Board of Canada Secretariat
access_model: fully-open
human_involvement: human-led
strengths:
  - Obligations scale with the assessed impact level, so the assessment has
    operational consequences rather than being a free-floating document.
  - Mandatory publication on the Open Government Portal creates a public,
    comparable record of federal automated decision systems.
  - Peer review by qualified experts is built into the higher impact
    levels, adding a check beyond self-assessment.
  - A long operational track record — rare among AI governance instruments
    — means its failure modes are documented rather than hypothetical.
limitations:
  - A scored questionnaire completed by the deploying institution is still
    self-assessment; the score inherits the assessor's candor and
    competence.
  - The instrument assesses anticipated impact and planned mitigations; it
    involves no behavioral testing of the system itself.
  - Scope is the federal government's own automated decision systems —
    Canada has no comparable binding instrument for the private sector.
  - The mitigation deduction (15% off for strong mitigation answers) lets
    planned mitigations lower the assessed impact before they are shown to
    work.
appropriate_claims:
  - A federal institution completed and published a scored assessment
    before production, and the system fell into a stated impact level
    triggering that level's obligations.
  - The directive's graduated requirements (peer review, oversight,
    monitoring) applied to a system because of its assessed level.
inappropriate_claims:
  - That an AIA score measures the system's actual impact — it scores
    questionnaire answers about anticipated impact and planned mitigation.
  - That a completed AIA means the system was tested; no technical
    evaluation is part of the instrument.
  - That a low impact level certifies low risk, rather than recording the
    deploying institution's own structured estimate.
evidence_produced: >-
  A published, scored self-assessment — questionnaire answers, an impact
  score and level, and the planned mitigations — plus the obligations
  trail (peer review, oversight, monitoring) the level triggers.
  Documentary evidence of anticipation with unusual public accountability,
  not behavioral evidence about the system.
combine_with:
  - Technical testing of the system, which the AIA does not include.
  - Post-deployment outcome evaluation, to check anticipated impacts
    against realized ones.
  - The published record itself — comparing an institution's AIA against
    its system's later history is exactly what publication makes possible.
misconceptions:
  - misconception: The AIA measures a system's impact.
    reality: >-
      It scores the deploying institution's answers about anticipated
      impact and planned mitigations. The number is an estimate's
      structured encoding, not a measurement of effects.
  - misconception: A completed AIA means the system passed an evaluation.
    reality: >-
      Completion and publication are the requirements. The instrument
      contains no test the system could pass or fail; what it gates is
      which obligations apply.
questions_to_ask:
  - What impact level was assessed, and which of the directive's duties
    did it trigger?
  - Did the peer review happen, who did it, and is it (or its summary)
    public?
  - Has the AIA been updated as the system's functionality or scope
    changed?
  - Do the published answers square with what is otherwise known about the
    system — and has anyone checked anticipated against realized impacts?
related_entries:
  - impact-assessment
  - conformity-assessment
  - standards-and-assurance
related_guides:
  - how-governments-evaluate-ai
  - what-counts-as-ai-evaluation
primary_sources:
  - src-tbs-2026-canada-aia
secondary_sources: []
source_status: >-
  Questionnaire structure, scoring, impact levels, and the publication
  requirement were verified against the official AIA page (fetched
  November 2026). The directive's own text blocked automated fetching, so
  per-level peer-review and testing clauses, the current version's
  effective date, and the status of the fourth-review amendments are
  unverified — check the Treasury Board policy library manually before
  citing section-level detail. AIDA's status rests on reported ministerial
  statements.
created: 2026-11-11
last_reviewed: 2026-11-11
reviewer: Monica Kodwani
tags:
  - canada
  - impact-assessment
  - public-sector
featured: false
---

The Canadian AIA earns an entry of its own, separate from the Atlas's
general impact-assessment page, because it answers the design questions
that page leaves open: it is scored rather than narrative, published
rather than filed, and consequential rather than free-floating — the
impact level decides which duties apply. Whether those design choices
produce better outcomes is exactly what its public record lets researchers
examine.

### What the score is

The scoring arithmetic deserves attention: mitigation answers can deduct
15% from the raw impact score, meaning planned mitigations lower the
assessed impact before any evidence that they work. That is a defensible
incentive design and a real validity concern at once — a compact worked
example of why "scored" is not the same as "measured".
