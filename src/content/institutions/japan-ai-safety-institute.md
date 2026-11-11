---
id: japan-ai-safety-institute
title: Japan AI Safety Institute
aliases:
  - J-AISI
  - AISI Japan
entry_type: institution
status: needs-verification
content_status: outline
summary: >-
  Japan's AI Safety Institute (secretariat at the Information-technology
  Promotion Agency since February 2024) is the clearest example of a
  government safety institute acting as a methodology publisher: its
  evaluation-perspectives and red-teaming guides tell businesses how to
  evaluate AI, within a soft-law regime that imposes no testing mandate.
definition: >-
  Launched 14 February 2024 with a mandate to research safety evaluation,
  draft related standards and guidance, build test environments, and
  coordinate internationally. Its flagship outputs are the Guide to
  Evaluation Perspectives on AI Safety (first published September 2024;
  v1.20 in Japanese, July 2026; English confirmed to v1.10) and the Guide
  to Red Teaming Methodology on AI Safety (v1.10, March 2025, with an
  official English PDF), joined in 2026 by sector guides for healthcare
  and AI robotics, a data-quality guidebook, an open-source evaluation
  tool, and official crosswalks between Japan's AI Guidelines for Business
  and the NIST AI RMF. Japan's 2025 AI Act is promotion-oriented soft law
  with no penalties, so the institute's guides are methodology, not
  compliance requirements.
why_it_matters: >-
  AI safety institutes are not one thing, and Japan shows the
  publish-methodology variant: rather than testing frontier models under
  negotiated access, J-AISI writes down how to evaluate — perspectives,
  red-team structure and roles, timing before and after release. For
  anyone learning what red teaming or safety evaluation is supposed to
  involve, its guides are primary teaching sources from a government body
  with no enforcement stake.
claimed_constructs:
  - safety
  - robustness
  - security
  - privacy
evaluation_levels:
  - model
  - application
lifecycle_stages:
  - pre-deployment
  - deployment
purposes:
  - safety-assurance
  - risk-discovery
  - scientific-understanding
evaluator_types:
  - model-developer
  - application-developer
  - domain-expert
evaluator_filters:
  - expert
  - human
environments:
  - laboratory
scoring_mechanisms:
  - expert-adjudication
  - human-rating
evidence_class: industry-practice
maturity: emerging
organization: Government of Japan (Information-technology Promotion Agency)
strengths:
  - Publishes concrete, versioned evaluation methodology — perspectives,
    red-team composition and roles, timing — rather than abstract
    principles.
  - Sector guides (healthcare, AI robotics) extend generic model
    evaluation toward domain-specific evaluation perspectives.
  - Participates in the international joint testing exercises, including
    hosting the multilingual-evaluation methodology report.
  - Official English PDFs exist for key guides, unusual among non-English
    evaluation bodies.
limitations:
  - No mandate attaches to any of it — Japan's AI Act is penalty-free
    promotion law, so uptake of the guides is voluntary and unmeasured.
  - English versions lag the Japanese ones — the evaluation-perspectives
    guide's current v1.20 was confirmed only in Japanese.
  - The institute publishes how-to guidance but, unlike the UK and US
    institutes, no published pre-deployment evaluations of specific
    frontier models were found.
appropriate_claims:
  - A government body published versioned methodological guidance on
    safety evaluation perspectives and red-teaming structure, available
    for any organisation to adopt.
  - Japanese policy expects businesses to evaluate AI along published
    perspectives, as guidance rather than obligation.
inappropriate_claims:
  - That Japanese law requires AI systems to be evaluated or tested — the
    2025 Act imposes no such duty and no penalties.
  - That following the guides has been shown to make systems safe; they
    organize evaluation practice and claim no validated outcomes.
  - That the institute certifies or approves AI systems.
evidence_produced: >-
  Published evaluation methodology — perspective taxonomies, red-teaming
  procedure, sector-specific guides, crosswalks, and an open-source
  evaluation tool — rather than evaluation results about particular
  systems.
combine_with:
  - Actual evaluation programs (safety-institute testing, benchmarks, red
    teams) that put the published methodology to use.
  - The AI Guidelines for Business and their NIST AI RMF crosswalks, which
    situate the evaluation guides in Japan's wider soft-law framework.
  - Binding regimes elsewhere (EU AI Act) when a compliance claim, not a
    methodology, is what is needed.
misconceptions:
  - misconception: An AI safety institute's job is testing frontier models.
    reality: >-
      The institutes differ sharply. Japan's publishes evaluation
      methodology and coordinates internationally; it has published no
      per-model pre-deployment evaluations, unlike its UK and US
      counterparts.
  - misconception: Japan's AI Act created evaluation obligations.
    reality: >-
      The 2025 Act is promotion-oriented soft law — no penalties, with
      cooperation duties only — so evaluation in Japan runs on guidance,
      not mandate.
questions_to_ask:
  - Which version of a guide is being cited, and does an English version
    of that specific version exist?
  - Is there any evidence of adoption — who actually evaluates along the
    published perspectives?
  - What does the institute itself test, if anything, as opposed to
    publish?
  - How do the guides' perspectives map onto the constructs other regimes
    require (EU systemic risks, NIST AI RMF categories)?
related_entries:
  - uk-ai-security-institute
  - caisi
  - red-teaming
  - ai-verify
related_guides:
  - how-governments-evaluate-ai
  - red-teaming-versus-risk-estimation
primary_sources:
  - src-jaisi-2025-red-teaming
secondary_sources: []
source_status: >-
  Institutional dates and guide version history were confirmed by direct
  fetch of the institute's output listing (November 2026). The
  evaluation-perspectives guide's list of ten perspectives comes from a
  third-party summary and is not confirmed against the official PDF; the
  AI Act's effective dates conflict across sources; a reported v1.2 of the
  AI Guidelines for Business rests on a single blog and is not used here.
created: 2026-11-11
last_reviewed: 2026-11-11
reviewer: Monica Kodwani
tags:
  - government
  - safety-institute
  - japan
featured: false
---

Set beside the UK and US institutes, Japan's completes a taxonomy worth
teaching: hands-on evaluator with negotiated access (UK), security-framed
evaluator under voluntary agreements (US), and methodology publisher with
no testing program of record (Japan). All three are called AI safety
institutes; what they produce as evidence barely overlaps.

### Reading the guides

The red-teaming guide is the most immediately usable artifact: structure
and roles of a red team, typical attack methods on LLM systems, and when
to red-team relative to release — written for businesses rather than
frontier labs. Its practical register is a useful corrective to treating
red teaming as either theater or wizardry; the guide's existence also
shows a government concluding that the main barrier to evaluation practice
is not will but know-how.
