---
id: benchmarks-and-their-limits
title: Benchmarks and Their Limits
order: 3
summary: >-
  What a benchmark actually fixes, the ways its numbers decay —
  contamination, saturation, configuration sensitivity — and when it is
  still exactly the right tool.
status: draft
content_status: outline
key_terms:
  - benchmark
  - contamination
  - saturation
  - leaderboard
related_entries:
  - benchmark-based-evaluation
  - benchmark-contamination
  - benchmark-saturation
  - mmlu
  - livebench
  - swe-bench
created: 2026-07-31
last_reviewed: 2026-07-31
reviewer: Monica Kodwani
---

*This guide is a structured outline. Each section states what it will argue
and the evidence it needs; full prose is in progress.*

## What a benchmark fixes

A benchmark holds three things constant — an item set, a task format, and a
scoring rule — so that everything else can vary and still be compared. This
section will argue that this fixing is both the source of a benchmark's
power (comparability, repeatability, cheapness) and the exact boundary of
what its numbers mean. Needed: a worked example tracing one published score
back to its items, prompt, and scoring rule.

## Contamination

When test items leak into training corpora, the instrument silently starts
measuring memorization. This section will cover leakage routes, detection
approaches (n-gram overlap, membership inference), and the design responses
— private splits, rotating item sets. Needed: verified figures from the
contamination-detection literature.

## Saturation

Once frontier systems cluster near the ceiling, remaining gaps reflect
label errors and chance more than capability. This section will explain why
saturation retires an instrument's comparative value even though the number
is still produced, and why "make it harder" resets the clock without fixing
validity. Needed: verified saturation histories for named benchmarks.

## Sensitivity to configuration

Scores move with prompt phrasing, answer order, few-shot choices, and
decoding settings — often without any of these being reported. This section
will argue that an unreported configuration makes a score unreproducible in
principle. Needed: verified sensitivity studies quantifying these effects.

## What leaderboards optimize

Leaderboards convert instruments into targets. This section will treat
leaderboard overfitting as a predictable institutional effect rather than
misconduct, including judge-based leaderboards inheriting judge biases.
Needed: documented cases with sources.

## When benchmarks are the right tool

The closing section will defend benchmarks against their own mythology:
for model comparison under matched conditions, regression testing, and
tracking field-wide progress, a well-maintained benchmark remains the best
instrument available — provided its results are spent on claims at the
model level, in its construct's territory, away from its ceiling.
