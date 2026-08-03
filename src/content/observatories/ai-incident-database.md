---
id: ai-incident-database
title: AI Incident Database
aliases:
  - AIID
entry_type: observatory
status: needs-verification
content_status: outline
summary: >-
  A public, downloadable database of reported AI incidents and near-harms
  across domains, maintained as a resource for learning from failures.
definition: >-
  The AI Incident Database collects reports of alleged harms and near-harms
  involving AI systems, drawn from news coverage, reports, and submissions,
  and organizes them for search and analysis. The working reports attribute
  its operation to the Responsible AI Collaborative, with origins connected
  to Partnership on AI support.
why_it_matters: >-
  Almost everything else in evaluation happens before deployment; incident
  databases are one of the few public records of what actually goes wrong
  afterward. Read carefully, they anchor risk taxonomies in documented
  failures — read carelessly, they become a fake harm statistic.
claimed_constructs:
  - social-impact
  - safety
evaluation_levels:
  - societal-impact
  - application
lifecycle_stages:
  - monitoring
  - incident-response
purposes:
  - post-deployment-oversight
  - public-accountability
  - risk-discovery
evaluator_types:
  - independent-researcher
evaluator_filters:
  - human
environments:
  - continuous-monitoring
scoring_mechanisms:
  - observed-outcome
evidence_class: emerging
maturity: emerging
organization: Responsible AI Collaborative
access_model: fully-open
strengths:
  - Grounds the field's understanding of failure in reported real-world
    harms rather than hypothetical scenarios.
  - Open and downloadable, enabling independent longitudinal analysis.
  - Supports taxonomy-building and post-deployment learning across domains.
limitations:
  - Records allege harm; inclusion is not adjudication, and the reports
    note duplicate and selection bias.
  - No denominator — incident counts cannot be converted to rates without
    exposure data that the database does not have.
  - Coverage tracks media visibility and reporting effort as much as
    underlying harm.
appropriate_claims:
  - Documented incident reports of a given type exist, with traceable
    sources.
  - Reported incidents have risen or fallen over time, as a claim about
    reporting.
inappropriate_claims:
  - That incident counts measure harm rates — deployment growth and
    reporting effort drive the numbers as much as underlying harm.
  - That absence of incidents for a system or category is evidence of
    safety.
  - That aggregation of reports constitutes evaluation evidence about any
    particular system.
evidence_produced: >-
  A public, traceable record of reported incidents and near-harms —
  evidence that specific failures were reported and documented, with
  counts reflecting reporting effort and visibility as much as underlying
  harm.
combine_with:
  - Exposure or deployment data before any rate or trend-in-harm claim —
    counts alone have no denominator.
  - Root-cause analysis of individual incidents, which the database
    records but does not perform.
  - System-level evaluation for claims about any particular system.
misconceptions:
  - misconception: Incident counts measure how much harm AI is causing.
    reality: >-
      Counts measure reports. They rise with deployment, media attention,
      and reporting effort; without a denominator they cannot be converted
      into rates or risk.
  - misconception: No recorded incidents means a system or category is safe.
    reality: >-
      Absence of reports is not absence of harm — many harms are
      invisible, unattributed, or unreported, and coverage tracks media
      visibility.
questions_to_ask:
  - What would the denominator have to be for this count to become a rate?
  - How were duplicates and disputed reports handled?
  - Who reports incidents of this type, and who never would?
  - Would the harm you care about even be visible to this database?
related_entries:
  - oecd-ai
  - continuous-evaluation
  - evaluation-drift
related_guides:
  - evaluation-after-deployment
source_status: >-
  Drafted from working research reports; operator details and
  characterizations need verification against the database's own
  documentation.
created: 2026-07-31
last_reviewed: 2026-08-03
reviewer: Monica Kodwani
tags:
  - incidents
  - monitoring
featured: false
---
