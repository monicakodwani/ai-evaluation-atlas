---
id: caisi
title: US Center for AI Standards and Innovation
aliases:
  - CAISI
  - CAISSI
  - US AI Safety Institute
  - Center for Advancing Innovation and Standards for Super Intelligence
entry_type: institution
status: needs-verification
content_status: outline
summary: >-
  The US government's frontier-model evaluator, housed at NIST. It holds
  voluntary pre-deployment evaluation agreements reported to cover the
  five major US frontier labs, publishes capability assessments of foreign
  (PRC) models, and researches evaluation methodology — under a mandate
  reframed from "safety" toward security and competitiveness, and a name
  that has changed twice.
definition: >-
  Founded as the US AI Safety Institute (which signed pre-deployment
  testing agreements with OpenAI and Anthropic in 2024), renamed the
  Center for AI Standards and Innovation (CAISI) in June 2025, and
  appearing as CAISSI ("Center for Advancing Innovation and Standards for
  Super Intelligence") after a September 2026 executive order replaced
  "AI" with "Super Intelligence" in federal terminology. Its stated
  mission is to serve as industry's primary federal point of contact for
  testing and collaborative research, lead unclassified evaluations of
  capabilities with national-security relevance (cybersecurity,
  biosecurity, chemical weapons), and develop measurement guidelines. The
  evaluation agreements are voluntary, with no legal mandate and no
  disclosure requirement.
why_it_matters: >-
  Together with the UK institute, this is one of two governments with
  hands-on pre-deployment access to frontier models — and the clearest
  case of how fragile that arrangement is: access rests on voluntary
  memoranda, published output tilts toward assessing rival nations'
  models, and even the institution's name tracks political currents.
  Reading its reports requires knowing what the arrangement can and cannot
  compel.
claimed_constructs:
  - capability
  - security
  - safety
evaluation_levels:
  - model
  - agent-trajectory
lifecycle_stages:
  - pre-deployment
  - deployment
purposes:
  - risk-discovery
  - safety-assurance
  - procurement
evaluator_types:
  - external-evaluator
  - regulator
evaluator_filters:
  - expert
environments:
  - laboratory
scoring_mechanisms:
  - execution-based
  - expert-adjudication
evidence_class: industry-practice
maturity: emerging
organization: US Government (NIST, Department of Commerce)
access_model: confidential-external
strengths:
  - Reported voluntary pre-deployment evaluation agreements across the
    major US frontier labs — the broadest such government access anywhere.
  - Publishes evaluation-methodology research (on agents gaming
    evaluations, transcript analysis, large-scale red-teaming
    competitions) that is useful independent of any one model assessment.
  - A 2026 memorandum with GSA extends evaluation science into federal
    procurement — guidelines and checklists other agencies can reuse.
  - Joint assessments with the UK institute (e.g., of Kimi K3's cyber
    capabilities) demonstrate cross-government methodology sharing.
limitations:
  - Agreements are voluntary memoranda, with no power to compel access, block a
    release, or require publication of findings.
  - Published assessments concentrate on foreign models; evaluation
    results for the US partner labs' models are largely not public.
  - The mandate reframing toward national security and competitiveness
    narrows what gets evaluated and reported, relative to the original
    safety-institute scope.
  - Institutional churn — two renames in eighteen months — makes names,
    URLs, and program continuity unstable.
appropriate_claims:
  - A government team evaluated a specific model under a stated protocol
    and published the stated findings.
  - The institute maintains testing arrangements with named developers
    under voluntary agreements.
inappropriate_claims:
  - That government pre-deployment evaluation constitutes an approval gate
    — the arrangements are voluntary and non-binding, and results need not
    be disclosed.
  - That models from partner labs have therefore been shown safe; partner
    evaluations are largely unpublished, so their coverage and findings
    cannot be assessed.
  - That published PRC-model assessments and unpublished partner-lab
    evaluations are comparable evidence — one is public, the other is not.
evidence_produced: >-
  Published capability and security assessments of selected (mostly
  foreign) frontier models, evaluation-methodology research, and
  procurement-facing guidelines — plus unpublished pre-deployment findings
  shared with partner developers under voluntary agreements.
combine_with:
  - Developer-published evaluations and system cards, read against the
    government's published findings where both exist.
  - The UK institute's publications, which document the shared joint
    methodology more openly.
  - Binding mechanisms (contract terms, regulation) where assurance needs
    to be more than voluntary.
misconceptions:
  - misconception: US frontier models are government-tested before release,
      so release implies approval.
    reality: >-
      Testing happens under voluntary memoranda; the government cannot
      block a release, and no mechanism compels publication of what was
      found.
  - misconception: The renames are cosmetic.
    reality: >-
      The terminology is cosmetic, but the reframing it tracks is not: the
      institute's published output and mission language shifted from
      safety toward national-security capability assessment and
      competitiveness.
questions_to_ask:
  - What access did the institute have to this model — weights, internal
    variants, or API-level — and for how long before release?
  - Which findings are public, and why these — is publication selection
    itself informative?
  - What happens institutionally when an evaluation finds something
    alarming, given there is no power to block deployment?
  - Are its methodology publications (agent evaluation, red-teaming
    analysis) being used by anyone outside the institute?
debates:
  - question: Should government frontier-model evaluation be framed as
      national security or as public safety?
    positions:
      - label: Security focus concentrates capacity
        view: >-
          Scarce government evaluation capacity goes to the gravest,
          least-private risks — cyber offense, biosecurity, chemical
          weapons — where state involvement is least substitutable, and a
          competitiveness frame sustains the political support the program
          needs to exist.
      - label: Safety scope was the point
        view: >-
          Dropping the safety frame narrows what gets evaluated: societal
          harms, reliability, and ordinary-user risks fall out of scope,
          partner-lab findings stay private, and evaluation becomes an
          instrument of strategic competition rather than public
          accountability.
    note: >-
      The renames and mission language are documented; the consequences of
      the reframing for evaluation coverage are contested and hard to
      verify precisely because partner evaluations are unpublished.
related_entries:
  - uk-ai-security-institute
  - tevv-athlon
  - nist-aria
  - nist-ai-rmf
related_guides:
  - how-governments-evaluate-ai
  - red-teaming-versus-risk-estimation
primary_sources:
  - src-nist-2026-caissi
secondary_sources: []
source_status: >-
  Drafted from November 2026 research. The official program page was
  fetched directly; the May 2026 agreements with Google DeepMind,
  Microsoft, and xAI, and the "40+ frontier-model evaluations" figure,
  rest on press coverage and are unverified against NIST primary sources.
  The September 2026 executive order's number and text come from a
  law-firm alert, not the Federal Register. Names and URLs are in flux
  under the terminology rebrand — re-verify before citing.
created: 2026-11-11
last_reviewed: 2026-11-11
reviewer: Monica Kodwani
tags:
  - government
  - safety-institute
  - united-states
featured: false
---

The institute is the Atlas's cleanest case study in how much institutional
framing shapes evaluation evidence. The same organization, with the same
technical staff and largely the same access, has produced three different
public faces in three years — safety institute, standards center, and
super-intelligence center — and what it publishes has tracked that arc:
from joint pre-deployment safety reports on partner models toward
capability assessments of strategic rivals' models.

### Reading its publications

Two reading rules follow. First, treat the published record as a selected
sample: the assessments that appear (largely of PRC models) are not the
assessments that exist (which include unpublished partner-lab
evaluations). Second, separate the methodology research from the verdicts
— work on evaluation-gaming agents or transcript analysis stands on its
own and is checkable, while model verdicts inherit all the access and
selection caveats above.
