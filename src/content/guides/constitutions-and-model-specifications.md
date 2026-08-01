---
id: constitutions-and-model-specifications
title: Constitutions and Model Specifications
order: 6
summary: >-
  Written behavior specifications have become central governance artifacts —
  simultaneously training signal, evaluation target, and public commitment.
  What spec-adherence results can and cannot establish.
status: draft
content_status: outline
key_terms:
  - constitution
  - model specification
  - spec adherence
  - normative evaluation
related_entries:
  - ai-as-a-judge
  - ai-judge-bias
  - standards-and-assurance
created: 2026-07-31
last_reviewed: 2026-07-31
reviewer: Monica Kodwani
---

*This guide is a structured outline. Each section states what it will argue
and the evidence it needs; full prose is in progress.*

## Behavior specs as governance artifacts

Constitutions and model specifications are unusual objects: one document
serving as training method, evaluation criterion, product specification,
and public accountability commitment at once. This section will argue that
this multi-purpose character is the source of both their influence and the
confusion around them.

## Specs as auditable targets

A written spec turns "is the model behaving well?" into "does behavior
match these stated principles?" — a genuine advance in testability. This
section will cover the emerging practice of spec-adherence auditing, in
which specifications are decomposed into testable tenets and models are
scored against them. Needed: the spec-audit literature with verified
findings.

## Who writes the values

A spec encodes choices about whose preferences and which tradeoffs govern.
This section will treat the authorship and revision process as an
evaluation question: adherence to a spec is only as meaningful as the
spec's own legitimacy and clarity, and principle conflicts must be
resolved somewhere — by hierarchy, or by the model itself.

## Measuring adherence — and its circularity

Spec compliance is mostly measured by AI judges, often reading the same
spec, sometimes from the same model family. This section will lay out the
inherited judge-validity problems plus the distinctive circularity: the
evaluator and the evaluated share the norm text and possibly the training
that interprets it.

## Specs versus guarantees

The closing section will draw the claim boundary: high measured adherence
is evidence of consistency with a text under the test distribution — not
evidence of safety, of alignment in any thicker sense, or of behavior
under conditions the test never sampled.
