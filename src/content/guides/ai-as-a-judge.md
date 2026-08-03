---
id: ai-as-a-judge
title: When Is AI-as-a-Judge Appropriate?
order: 6
summary: >-
  AI judges made evaluation scale — and imported a new class of systematic
  bias. Where judge-based scoring is defensible, where it breaks, and how
  to draw an acceptable-use boundary.
status: draft
content_status: outline
key_terms:
  - LLM-as-a-judge
  - position bias
  - verbosity bias
  - circularity
related_entries:
  - ai-as-a-judge
  - ai-judge-bias
  - human-evaluation
  - reliability
created: 2026-07-31
last_reviewed: 2026-07-31
reviewer: Monica Kodwani
---

*This guide is a structured outline. Each section states what it will argue
and the evidence it needs; full prose is in progress.*

## Why AI judges took over

Human evaluation does not scale; AI judging does. This section will trace
the economics honestly — judge-based scoring made previously impossible
evaluation volumes routine — because the method's adoption is explained by
cost, not validity, and the guide's argument depends on keeping those
separate.

## The documented biases

Position bias, verbosity bias, self-preference bias — documented across
judge models, and *shared* across them, which is what makes ensembling a
weaker fix than it looks. This section needs the bias literature with
verified magnitudes.

## Where agreement with humans holds — and breaks

On well-specified extractive tasks, judge–human agreement can be strong;
in expert domains it degrades, and judges can track lay preference over
expert correctness. This section will argue that judge validity is
task-local and must be re-established per domain, not assumed.

## Mitigations and their limits

Order randomization, rubrics, ensembles, length controls, reference
answers, human escalation: this section will sort mitigations by what they
actually fix — variance versus shared systematic error — and argue that
mitigations improve reliability while validity remains to be shown.

## Circularity

When the judge shares a model family or training constitution with the
system being judged, the evaluation partially grades its own homework.
Needed: the emerging evidence on self-preference and family-correlated
error.

## An acceptable-use boundary

The closing section will propose the boundary the evidence supports: AI
judges for iteration, triage, and low-stakes ranking with bias controls
and human spot-checks; not as sole evidence for safety, expert-domain
correctness, or any regulatory claim.
