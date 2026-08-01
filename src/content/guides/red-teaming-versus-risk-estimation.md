---
id: red-teaming-versus-risk-estimation
title: Red Teaming Versus Risk Estimation
order: 7
summary: >-
  Red teaming proves failures exist; risk estimation asks how likely and
  how costly they are. Confusing the two is one of the field's most
  consequential category errors.
status: draft
content_status: outline
key_terms:
  - red teaming
  - risk estimation
  - uplift study
  - adaptive attack
related_entries:
  - red-teaming
  - wmdp
  - harmbench
  - assurance-case
created: 2026-07-31
last_reviewed: 2026-07-31
reviewer: Monica Kodwani
---

*This guide is a structured outline. Each section states what it will argue
and the evidence it needs; full prose is in progress.*

## What red teaming demonstrates

Red teaming is adaptive, open-ended search for failure. When it succeeds,
it proves a failure mode exists and is reachable by an adversary of the
red team's skill. This section will argue that this existence-proof logic
is genuinely valuable — fixed test suites cannot find what nobody thought
to test — and strictly limited in what it licenses.

## Existence proofs versus rates

A found failure is not a frequency; a clean exercise is not a low
frequency. This section will make the statistical argument: converting
findings into risk requires base rates, exposure, attacker populations,
and severity — none of which a red-team exercise measures. Needed:
worked examples of the inference done properly.

## Uplift studies

The sharpest risk question is marginal: how much does the model raise a
user's capability beyond existing tools? This section will cover the
controlled-comparison design of uplift studies, and why a null result
today is a statement about current models and populations, not a durable
safety guarantee. Needed: verified accounts of published uplift studies.

## Adaptive adversaries and mitigation testing

Guardrails that pass a static red-team suite routinely fail under
adaptive attack. This section will argue mitigation evaluation must
include adaptive pressure, utility costs, and failure displacement — the
mitigation-testing standards the working reports find largely absent.

## From findings to a risk argument

The closing section will sketch what red-team evidence can responsibly
feed: a risk argument that combines findings with exposure and severity
estimates inside an assurance case — with the red team's findings as one
input, never the verdict.
