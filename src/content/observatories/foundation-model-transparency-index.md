---
id: foundation-model-transparency-index
title: Foundation Model Transparency Index
aliases:
  - FMTI
entry_type: observatory
status: needs-verification
content_status: outline
summary: >-
  A scored assessment by Stanford CRFM of how much foundation-model
  developers publicly disclose across the model lifecycle.
definition: >-
  The index scores major foundation-model developers against a rubric of
  disclosure indicators — covering data, compute, model properties, and
  downstream use — based on public documentation. Unlike most observatories
  it applies an explicit scoring framework, but what it scores is
  disclosure: what developers say, not whether what they say is true or
  whether the underlying practice is adequate.
claimed_constructs:
  - transparency
evaluation_levels:
  - organization
lifecycle_stages:
  - monitoring
  - release
purposes:
  - public-accountability
evaluator_types:
  - independent-researcher
evaluator_filters:
  - expert
environments:
  - retrospective-audit
scoring_mechanisms:
  - policy-rule-checking
evidence_class: emerging
maturity: emerging
organization: Stanford Center for Research on Foundation Models
access_model: fully-open
strengths:
  - An explicit, published rubric makes the assessment itself inspectable
    and repeatable across editions.
  - Creates comparative pressure on developers by making disclosure gaps
    visible and citable.
  - Annual editions support trend claims about disclosure; the reports
    describe the most recent edition finding average transparency declining,
    especially around training data, compute, and post-deployment impact
    (figures need verification).
limitations:
  - Measures disclosure, not truth or substantive safety — a developer can
    score well by documenting practices the index cannot verify.
  - Depends on public documentation and, in part, developer-provided
    inputs, per the reports.
  - Rubric choices embed judgments about what transparency means that are
    themselves contestable.
appropriate_claims:
  - Developer A publicly discloses more of the indexed items than developer
    B in a given edition.
  - Disclosure across the industry rose or fell between editions on the
    indexed dimensions.
inappropriate_claims:
  - That a high transparency score establishes the disclosed practices are
    adequate, safe, or truthfully described.
  - That transparency scores rank the safety of developers' models.
why_it_matters: >-
  Transparency scores get cited as proxies for responsible practice; keeping "what developers disclose" separate from "what they do" is the entire point of reading the index well.
evidence_produced: >-
  Rubric-based scores of developers' public disclosure across lifecycle
  dimensions — a measurement of what is disclosed, not of whether
  disclosed practices are adequate or truthful.
combine_with:
  - Independent verification of specific disclosed practices before
    treating them as facts.
  - Critical reading of the underlying system cards and documentation the
    scores summarize.
  - Regulatory and incident records, which capture behavior disclosure
    does not.
misconceptions:
  - misconception: A high transparency score means responsible practice.
    reality: >-
      The index scores disclosure. A developer can document questionable
      practices thoroughly and score well; another can behave well and
      disclose little.
  - misconception: Falling index scores mean the industry is behaving worse.
    reality: >-
      Falling scores mean less is being disclosed — a retreat in
      transparency, which may or may not track a change in practice.
questions_to_ask:
  - Which indicators drive the score being cited, and which are near zero?
  - How much of the input is self-reported by developers?
  - What value judgments does the rubric embed about what transparency
    means?
  - What would verification — rather than disclosure scoring — require?
related_entries:
  - system-cards
  - model-cards
  - oecd-ai
related_guides:
  - from-model-scores-to-system-assurance
source_status: >-
  Drafted from working research reports; rubric details and edition
  findings need verification against the index's publications.
created: 2026-07-31
last_reviewed: 2026-08-03
reviewer: Monica Kodwani
tags:
  - transparency
  - disclosure
featured: false
---
