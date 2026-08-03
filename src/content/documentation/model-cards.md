---
id: model-cards
title: Model cards
aliases:
  - Model card
  - Model reporting
entry_type: documentation
status: needs-verification
content_status: outline
summary: >-
  A structured disclosure genre for trained models — intended use,
  evaluation results, performance across relevant groups, limitations, and
  evaluation context — introduced by Mitchell et al. (2019, per working
  reports). A model card reports evaluations; it is not itself an
  evaluation.
definition: >-
  A model card is a document released alongside a model that states what
  the model is for, how it was evaluated, how it performed for different
  groups and conditions, and what its known limitations are. The genre
  formalized the expectation that a released model should carry a record of
  its testing, without formalizing what that testing must contain or how
  fully it must be reported.
why_it_matters: >-
  Model cards made "what did you test, and for whom" a routine question at
  model release, and they remain the default vehicle through which
  evaluation results reach downstream developers and the public. Their
  limit is equally important — a card is evidence about what a developer
  chose to disclose, not independent evidence that the disclosed results
  are sound or complete.
claimed_constructs:
  - transparency
evaluation_levels:
  - model
lifecycle_stages:
  - release
purposes:
  - public-accountability
  - product-selection
evaluator_types:
  - model-developer
evidence_class: industry-practice
maturity: common-contested
human_involvement: human-led
strengths:
  - Established a shared structure for release-time disclosure — intended
    use, evaluation context, subgroup performance, limitations — where
    none existed before.
  - Makes gaps visible — a card that omits subgroup results or limitations
    is itself informative to a careful reader.
  - Cheap to produce relative to the evaluations it summarizes, so the
    genre spread without requiring new evaluation capacity.
  - Gives downstream developers a starting point for judging whether a
    model was tested for anything resembling their use case.
limitations:
  - Authored by the model developer, with no independent verification of
    the reported results in the typical case.
  - Selective by construction — working reports find documentation
    typically discloses which evaluations were run and headline results,
    but rarely full prompts, decoding settings, judge identities, scoring
    code, statistical uncertainty, excluded results, or subgroup
    breakdowns.
  - Content varies widely between cards, so the presence of a card
    guarantees little about what it contains.
  - Point estimates dominate — reports note many model cards publish
    scores without uncertainty.
  - Static in practice — cards are often not updated as the model, its
    fine-tunes, or its deployment context change.
appropriate_claims:
  - The developer disclosed these evaluations, these results, and these
    limitations for this model at release time.
  - The card states an intended use and known limitations that downstream
    deployers can be held to having been told about.
  - Differences between what a card disclosed and what later surfaced are
    evidence about the developer's disclosure practice.
inappropriate_claims:
  - That the existence of a model card is evidence the model was adequately
    evaluated — a card records what was disclosed, not whether the
    underlying evaluation was sound or sufficient.
  - That results reported in a card are independently reproducible —
    reports find cards rarely disclose the prompts, settings, and scoring
    code reproduction would require.
  - That a card's subgroup or limitation sections are complete — omissions
    are not detectable from the card itself.
  - That comparing scores across two developers' cards compares the models
    — evaluation conditions behind the numbers are usually neither
    disclosed nor matched.
adoption_evidence: >-
  Working reports describe model cards as common among major model
  releases, with content and reproducibility varying widely. Adoption of
  the genre is well supported; consistency of its contents is not.
evidence_produced: >-
  Structured public disclosure about a model — evidence of what its
  developer chose to state about intended use, evaluation, and
  limitations. Disclosure, not verification.
combine_with:
  - Independent evaluation that reproduces at least the card's key claims.
  - Version comparison across releases, since silent changes are
    themselves informative.
  - The primary sources the card summarizes, where they are published.
misconceptions:
  - misconception: A model card is evidence the model was evaluated well.
    reality: >-
      A card is evidence the developer published selected results. The
      evaluations behind it may be strong or weak; the card format itself
      verifies nothing.
  - misconception: A complete-looking card means a transparent model.
    reality: >-
      Cards routinely omit the details reproduction would need — prompts,
      settings, uncertainty, subgroup results, failed evaluations — while
      remaining polished and complete in appearance.
questions_to_ask:
  - What is conspicuously absent — subgroups, uncertainty, failed tests,
    exact configurations?
  - Can any claim in the card be independently reproduced from what is
    published?
  - Has the card been updated since release, and is its version history
    visible?
  - Who is the card's audience, and what incentives shaped the text?
known_failure_modes:
  - Selective disclosure, where favorable results are reported and
    unfavorable or ambiguous ones omitted without any indication.
  - Card drift, where the card describes an earlier model version than the
    one actually served.
  - Marketing capture, where the card is written from communications
    priorities rather than evaluation records.
related_entries:
  - system-cards
  - standards-and-assurance
  - impact-assessment
  - foundation-model-transparency-index
  - evaluation-reproducibility
  - benchmark-based-evaluation
related_guides:
  - what-counts-as-ai-evaluation
  - from-model-scores-to-system-assurance
primary_sources:
  - src-mitchell-2019-model-cards
secondary_sources: []
source_status: >-
  Drafted from working research reports. The attribution to Mitchell et
  al. (2019) and the characterization of typical disclosure gaps are drawn
  from those reports and not yet checked against the original paper or a
  systematic sample of published cards.
created: 2026-07-31
last_reviewed: 2026-08-03
reviewer: Monica Kodwani
tags:
  - documentation
  - transparency
  - disclosure
featured: false
---

Model cards are the founding genre of AI evaluation documentation: the
working reports credit Mitchell et al. (2019) with formalizing the idea
that a released model should carry a structured record of its intended
use, evaluation results, subgroup performance, and limitations. Nearly
every later documentation genre — system cards, data cards, transparency
reports — descends from this template.

### A disclosure genre, not an evaluation

The category error the Atlas most needs to flag here is treating the card
as the evidence. A model card is a developer-authored summary of
evaluations the reader cannot usually inspect. The reports' formulation is
precise: documentation is evidence about what a provider chose to
disclose, not independent proof of the reported property. The card's value
is real — it creates an accountable public record and a baseline for
later comparison — but it sits one step removed from the evaluations it
describes.

### What cards typically omit

Per the working reports, published cards usually name the evaluations run
and give headline results, while omitting most of what independent
reproduction would need — exact prompts, decoding settings, judge-model
identities, scoring code, uncertainty estimates, excluded results, and
subgroup breakdowns. The practical reading rule follows directly. Treat a
model card as a map of what the developer says was tested. Anything the
card is silent on should be assumed untested or undisclosed, and nothing
in the card should be assumed reproducible until the materials to
reproduce it are published.
