---
id: continuous-evaluation
title: Continuous evaluation
entry_type: concept
status: needs-verification
content_status: outline
summary: >-
  Ongoing measurement of a deployed system — canary tests, drift checks,
  sampled human review, incident tracking — in contrast to point-in-time
  certification.
definition: >-
  Continuous evaluation treats measurement as an operating function rather
  than a release gate: scheduled or streaming checks on output quality and
  safety, sampled human review of live traffic, canary evaluations run
  against each model or prompt change, and incident monitoring feeding back
  into re-evaluation. Established in machine-learning operations for
  predictive models; the working reports describe it as young for
  generative systems, where output quality is harder to score
  automatically.
why_it_matters: >-
  Pre-deployment evidence decays with drift, and many failure modes only
  appear at deployment scale. Continuous evaluation is the mechanism by
  which an organization notices degradation before its users — or
  regulators — do.
claimed_constructs:
  - reliability
  - safety
evaluation_levels:
  - application
  - workflow
lifecycle_stages:
  - monitoring
  - deployment
purposes:
  - post-deployment-oversight
evaluator_types:
  - application-developer
evaluator_filters:
  - mixed-human-ai
environments:
  - continuous-monitoring
scoring_mechanisms:
  - observed-outcome
  - human-rating
  - ai-judge
evidence_class: emerging
maturity: emerging
appropriate_claims:
  - The system's monitored behavior has or has not shifted against defined
    baselines since release.
  - Regressions introduced by a model or prompt change were caught by
    canary evaluation before full rollout.
inappropriate_claims:
  - That monitoring infrastructure health (latency, uptime) constitutes
    evaluating output quality or safety.
  - That continuous metrics validate themselves — automated monitors,
    especially AI-judge-based ones, inherit the validity problems of their
    scoring mechanisms.
known_failure_modes:
  - Quality drift invisible to infrastructure dashboards.
  - Sampled review too sparse or unrepresentative to catch subgroup-specific
    failures.
related_entries:
  - evaluation-drift
  - ai-incident-database
  - ai-as-a-judge
  - human-evaluation
related_guides:
  - evaluation-after-deployment
source_status: >-
  Drafted from working research reports; maturity characterization per the
  reports, not independently verified.
created: 2026-07-31
last_reviewed: 2026-07-31
reviewer: Monica Kodwani
tags:
  - monitoring
featured: false
---
