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
  developers, and releases evaluation infrastructure for public use. The
  working reports state it was established as the UK AI Safety Institute and
  later renamed the AI Security Institute (reported as February 2025; needs
  verification).
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
  - Pre-deployment access arrangements with developers, per the reports.
limitations:
  - Access is voluntary — the reports emphasize the institute cannot compel
    testing access or block a deployment, so coverage depends on developer
    cooperation.
  - Evaluation methods and results are only partially public.
  - Government evaluation capacity is new and evolving; its authority and
    publication practices differ across jurisdictions.
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
related_guides:
  - red-teaming-versus-risk-estimation
primary_sources:
  - src-uk-aisi-inspect
source_status: >-
  Drafted from working research reports; institutional history and program
  details need verification against official publications.
created: 2026-07-31
last_reviewed: 2026-08-03
reviewer: Monica Kodwani
tags:
  - government
  - safety-institute
featured: false
---
