---
id: chatbot-arena
title: Chatbot Arena
aliases:
  - LMArena
entry_type: benchmark
status: needs-verification
content_status: outline
summary: >-
  A public platform where people compare two anonymous model responses and
  vote for the one they prefer, with votes aggregated into Elo-style
  rankings. It measures aggregate human preference, which is not the same
  construct as correctness, safety, or quality.
definition: >-
  Chatbot Arena collects pairwise human preference judgments; visitors
  converse with two unidentified models on prompts of their own choosing and
  vote for the preferred response, and the platform aggregates votes into an
  Elo-style rating per model. The instrument is a live crowd-preference
  ranking, not a fixed item set with reference answers.
claimed_constructs:
  - capability
evaluation_levels:
  - model
  - output
lifecycle_stages:
  - release
  - deployment
purposes:
  - model-comparison
  - product-selection
  - public-accountability
evaluator_types:
  - end-user
  - crowd-worker
evaluator_filters:
  - crowd
  - human
environments:
  - public-benchmark
scoring_mechanisms:
  - human-rating
evidence_class: research-convention
maturity: common-contested
access_model: fully-open
strengths:
  - Uses real human judgments on self-chosen prompts rather than a fixed
    item set, making it resistant to classical test-set contamination.
  - Continuously updated, so rankings can reflect current model versions
    rather than a frozen snapshot.
  - Among the few widely cited leaderboards noted in the research reports
    for publishing uncertainty intervals around its ratings.
limitations:
  - Preference is not correctness; per the working reports, crowd preference
    can track style, verbosity, and confidence rather than accuracy or
    safety.
  - The voting population is self-selected, and its prompts and preferences
    are not representative of any particular deployment population.
  - The platform has faced allegations that rankings can be gamed, which its
    operators dispute; the dispute itself is unresolved in the sources
    reviewed.
  - Rankings compress heterogeneous prompts, users, and criteria into one
    ordering, hiding what any given rating difference consists of.
appropriate_claims:
  - Users of this platform, in aggregate, preferred model A's responses to
    model B's over the collection period, within the published uncertainty.
  - A model's preference rating on this platform has risen or fallen
    relative to others over time.
inappropriate_claims:
  - That a higher Arena ranking establishes a model is more accurate,
    truthful, or safe; the platform measures preference, and the reports
    treat preference-for-correctness substitution as a routine overstatement.
  - That Arena rankings predict performance for a specific application,
    domain, or user population that differs from the platform's
    self-selected visitors and prompts.
  - That small rating gaps between models are meaningful without reference
    to the published uncertainty intervals.
  - That the ranking is immune to strategic behavior by model providers;
    gaming allegations exist and are disputed, so the ranking should not be
    treated as adversarially robust.
known_failure_modes:
  - Preference votes rewarding longer or more confident responses over more
    accurate ones.
  - Rankings shifting with changes in the visiting population or prompt mix
    rather than model quality.
related_entries:
  - benchmark-based-evaluation
  - human-evaluation
  - ai-as-a-judge
  - benchmark-contamination
  - construct-validity
related_guides:
  - benchmarks-and-their-limits
primary_sources: []
secondary_sources:
  - src-miller-2024-error-bars
source_status: >-
  Drafted from working research reports, which associate the platform's
  origins with the MT-Bench and Chatbot Arena paper by Zheng et al.; a
  source record for that paper still needs to be created and verified.
  Gaming allegations and the operators' dispute of them are reported
  second-hand and unverified.
created: 2026-07-31
last_reviewed: 2026-07-31
reviewer: Monica Kodwani
tags:
  - leaderboard
  - human-preference
  - pairwise
featured: false
---
