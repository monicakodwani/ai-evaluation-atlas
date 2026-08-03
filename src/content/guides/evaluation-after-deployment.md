---
id: evaluation-after-deployment
title: Evaluation After Deployment
order: 11
summary: >-
  Release-time evidence decays. On monitoring, drift, sampled review,
  incidents, and observatories — the evaluation that starts when the
  system ships.
status: draft
content_status: outline
key_terms:
  - monitoring
  - drift
  - incidents
  - observatory
related_entries:
  - continuous-evaluation
  - evaluation-drift
  - ai-incident-database
  - oecd-ai
  - foundation-model-transparency-index
created: 2026-07-31
last_reviewed: 2026-07-31
reviewer: Monica Kodwani
---

*This guide is a structured outline. Each section states what it will argue
and the evidence it needs; full prose is in progress.*

## Why pre-deployment evidence decays

Models are updated, prompts are tuned, usage shifts, adversaries adapt,
and the world the system describes changes. This section will argue that
every release-time result carries an implicit expiration and that
"evaluated" is a state a system leaves without anyone acting.

## Monitoring and drift

What continuous evaluation actually consists of: baselines worth alerting
on, canary evaluations run against every model or prompt change, and the
uncomfortable fact that infrastructure dashboards do not see output
quality. Needed: documented practice from production generative-AI
deployments.

## Sampled human review at scale

Automated monitors inherit the validity problems of their scoring
mechanisms, so credible monitoring keeps humans in the sample path. This
section will cover sampling design — how much, from where, reviewed by
whom — as a measurement question.

## Incidents as evidence

Incident reports ground evaluation in real harm, and incident counts are
not harm rates: no denominator, reporting bias, duplicate records. This
section will lay out what incident data can support (existence, patterns,
trends in reporting) and what it cannot (rates, absences, safety claims).

## Observatories

Incident databases, policy observatories, and transparency indices
aggregate the field's record. This section will argue for their real value
— longitudinal accountability — while drawing the boundary the working
reports draw: aggregation is not system evaluation.

## Closing the loop

The closing section will connect monitoring back to the lifecycle:
findings from deployment feed re-evaluation, updated assurance arguments,
and — when warranted — the decision to restrict or retire. Evaluation
after deployment is what makes the rest of the lifecycle honest.
