---
id: uk-ai-security-institute
title: UK AI Security Institute
aliases:
  - AISI
  - UK AI Safety Institute
entry_type: institution
status: needs-verification
content_status: outline
summary: >-
  A UK government body that runs pre-deployment and safety evaluations of
  frontier AI models and publishes open evaluation tooling, including the
  Inspect framework.
definition: >-
  The institute conducts evaluations of frontier models — including safety,
  security, and agent evaluations — under voluntary arrangements with
  developers, and releases evaluation infrastructure for public use. It was
  established as the UK AI Safety Institute and renamed the AI Security
  Institute in February 2025. Its published record now spans open tooling
  (the Inspect framework, co-developed with Meridian Labs), a methodology
  statement ("Early lessons from evaluating frontier AI systems", October
  2024), joint UK–US pre-deployment evaluations of named models (Claude
  3.5 Sonnet, OpenAI o1), participation in the international joint testing
  exercises, and — since December 2025 — an annual Frontier AI Trends
  Report synthesizing two years of government-led testing.
claimed_constructs:
  - safety
  - security
  - capability
evaluation_levels:
  - model
  - agent-trajectory
lifecycle_stages:
  - pre-deployment
purposes:
  - risk-discovery
  - safety-assurance
  - public-accountability
evaluator_types:
  - external-evaluator
  - regulator
evaluator_filters:
  - expert
environments:
  - laboratory
  - sandbox
scoring_mechanisms:
  - execution-based
  - expert-adjudication
evidence_class: industry-practice
maturity: emerging
organization: UK Government
access_model: confidential-external
strengths:
  - Institutionalizes government evaluation capacity independent of model
    developers' own testing.
  - Releases open tooling (Inspect) that raises reproducibility standards
    beyond its own evaluations.
  - Pre-deployment access arrangements with developers, with published
    joint UK–US evaluations of named models as worked examples.
  - Publishes its methodology — preregistration of methods before model
    access, separation of elicitation tasks from test tasks, Helpful-Only
    model variants, tiered testing — making its practice checkable in a
    way most government evaluation is not.
limitations:
  - Access is voluntary — the institute cannot compel testing access or
    block a deployment, so coverage depends on developer cooperation.
  - Evaluation methods and results are only partially public; no public
    per-model pre-deployment report newer than OpenAI's o1 (December 2024)
    was found, with findings apparently folded into the aggregate Trends
    Report instead.
  - Government evaluation capacity is new and evolving; its authority and
    publication practices differ across jurisdictions.
  - Its own methodology statement is explicit that evaluations are not
    certification and that the science is too nascent to guarantee a
    system is safe.
appropriate_claims:
  - An external government team evaluated a model under its stated protocol
    and reported its findings.
inappropriate_claims:
  - That government evaluation constitutes certification or regulatory
    approval — participation is voluntary and non-binding per the reports.
  - That a model tested by the institute has therefore been comprehensively
    evaluated for all deployment risks.
why_it_matters: >-
  Government evaluation is the main lever for frontier-model scrutiny independent of developers; understanding its access limits calibrates how much assurance it can provide.
evidence_produced: >-
  External evaluation findings on frontier models produced under
  negotiated access, plus open evaluation tooling — government-side
  evidence whose coverage depends on voluntary developer cooperation.
combine_with:
  - Developer-published evaluations, read comparatively — differences
    between internal and external findings are informative.
  - Independent researcher access programs, which cover what government
    programs do not.
  - Binding regulatory mechanisms where they exist, since institute
    testing is non-compulsory.
misconceptions:
  - misconception: Government-tested means certified or approved.
    reality: >-
      Participation is voluntary and findings are non-binding; the
      institute cannot compel access or block a deployment. Testing is
      scrutiny, not certification.
  - misconception: Institute evaluation covers a model's full risk surface.
    reality: >-
      Programs are scoped — particular capabilities, particular access
      levels, particular time windows. Coverage claims need the scope
      stated.
questions_to_ask:
  - What access did the institute have — weights, systems, or API-level?
  - Which findings are public, and at what level of detail?
  - What was in scope, and what explicitly was not?
  - What follows institutionally from an adverse finding?
related_entries:
  - inspect-ai
  - red-teaming
  - standards-and-assurance
  - caisi
  - japan-ai-safety-institute
related_guides:
  - red-teaming-versus-risk-estimation
  - how-governments-evaluate-ai
primary_sources:
  - src-uk-aisi-inspect
  - src-aisi-2024-early-lessons
  - src-aisi-2025-frontier-trends
source_status: >-
  Updated from November 2026 research: Inspect documentation and the
  GOV.UK Frontier AI Trends factsheet were fetched directly; the "Early
  lessons" methodology summary rests on partially JavaScript-blocked page
  retrieval and its source record remains unverified. The widely cited
  "more than 30 systems tested" figure appears only in secondary coverage,
  not the official factsheet, and is deliberately not stated here.
created: 2026-07-31
last_reviewed: 2026-11-11
reviewer: Monica Kodwani
tags:
  - government
  - safety-institute
featured: false
---
