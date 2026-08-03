---
id: human-judgment-and-disagreement
title: Human Judgment and Disagreement
order: 5
summary: >-
  Human evaluation is the reference standard for contested qualities — yet
  its own reliability is rarely measured. On disagreement as data, rater
  populations, and what adequate reporting looks like.
status: draft
content_status: outline
key_terms:
  - inter-rater reliability
  - annotation
  - crowdsourcing
  - disagreement
related_entries:
  - human-evaluation
  - reliability
  - ai-as-a-judge
  - chatbot-arena
created: 2026-07-31
last_reviewed: 2026-07-31
reviewer: Monica Kodwani
---

*This guide is a structured outline. Each section states what it will argue
and the evidence it needs; full prose is in progress.*

## Why human judgment is the reference standard

For harm, quality, cultural appropriateness, and other contested
constructs, there is no oracle to score against — human judgment is where
ground truth comes from. This section will argue that this makes the
*quality of the human evaluation* the ceiling on everything downstream,
including every AI judge calibrated against it.

## Disagreement: signal or noise?

Raters disagree, and the standard response — average it away — assumes the
disagreement is noise. This section will present the alternative reading:
for value-laden constructs, disagreement is often signal about genuine
divergence in judgment, and collapsing it hides exactly what matters.
Needed: the annotation-disagreement literature, properly sourced.

## Agreement statistics

Raw percent agreement flatters; chance-corrected statistics (Cohen's
kappa, Krippendorff's alpha) are the accepted practice, and reported
agreement also sets an empirical ceiling on model performance measured
against those labels. Needed: verified figures on how often reliability is
actually reported.

## Who the raters are

Crowd workers, experts, users, and affected communities produce different
judgments — and most evaluations report almost nothing about who judged.
This section will cover representativeness, expertise effects, and why
"human evaluation" without demographics is an incomplete method
description.

## Harm exposure and labor conditions

Safety evaluation asks people to read harmful content at volume. This
section will treat rater welfare and compensation as methodological
variables, not just ethical ones — fatigue and trauma change judgments.

## Reporting standards

The closing section will assemble a minimum reporting set: rater counts
and recruitment, per-item overlap, chance-corrected agreement,
compensation, and instructions — the human-evaluation equivalent of
publishing your prompts and settings.
