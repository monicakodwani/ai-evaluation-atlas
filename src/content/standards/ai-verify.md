---
id: ai-verify
title: AI Verify
aliases:
  - AI Verify Testing Framework
entry_type: standard
status: needs-verification
content_status: outline
summary: >-
  Singapore's voluntary AI governance testing framework from IMDA and the
  AI Verify Foundation: process checks plus technical tests against 11
  governance principles, backed by open-source toolkits (the AI Verify
  Toolkit for traditional AI, Project Moonshot for LLMs), testing starter
  kits, a real-world assurance sandbox, and a tester accreditation
  programme — the most operationally complete voluntary assurance stack
  any government has built.
definition: >-
  AI Verify assesses how responsibly an organisation implements an AI
  system against 11 principles (transparency, explainability,
  reproducibility, safety, security, robustness, fairness, data
  governance, accountability, human agency and oversight, and inclusive
  growth), structured as principles → outcomes → processes → evidence.
  Process checks are validated primarily through documentary evidence;
  technical testing runs through open-source tools — the AI Verify Toolkit
  for traditional AI and Project Moonshot (benchmarking plus red teaming)
  for generative AI. Launched May 2022, open-sourced June 2023, extended
  to generative-AI risks in the 29 May 2025 framework update, and
  officially crosswalked to the NIST AI RMF, its Generative AI Profile,
  the Hiroshima Code of Conduct, and ISO/IEC 42001. Around it sit
  voluntary Starter Kits for testing LLM-based applications (five risk
  areas) and agentic systems (announced October 2026), the Global AI
  Assurance Sandbox pairing deployers with testing firms, and the AI
  Tester Accreditation Programme.
why_it_matters: >-
  Singapore is the clearest worked example of a government building an
  assurance ecosystem instead of a compliance regime: framework, tools,
  test methodology, a deployer–tester marketplace, and tester
  accreditation, all voluntary. The official crosswalks also make it the
  best case study in evaluation-evidence portability — one set of
  artifacts positioned to count under several regimes at once.
claimed_constructs:
  - transparency
  - safety
  - security
  - robustness
  - fairness
  - human-oversight
  - compliance
evaluation_levels:
  - organization
  - application
  - model
lifecycle_stages:
  - design
  - pre-deployment
  - deployment
purposes:
  - safety-assurance
  - public-accountability
  - risk-discovery
evaluator_types:
  - application-developer
  - auditor
  - external-evaluator
evaluator_filters:
  - auditor
  - expert
environments:
  - retrospective-audit
  - laboratory
  - sandbox
scoring_mechanisms:
  - policy-rule-checking
  - reference-based-metric
  - human-rating
evidence_class: industry-practice
maturity: emerging
organization: Infocomm Media Development Authority / AI Verify Foundation (Singapore)
access_model: fully-open
strengths:
  - The full stack is public and open-source — framework, toolkits, and
    starter kits can be inspected and run, unlike most government
    evaluation machinery.
  - Explicitly separates process checks from technical tests, making
    visible which principles are evidenced by documents and which by
    measurements.
  - The assurance sandbox produces published case studies of real
    deployer–tester engagements, generating public evidence about how
    testing goes in practice.
  - Official crosswalks to the NIST AI RMF, the Hiroshima Code of Conduct,
    and ISO/IEC 42001 let one evaluation effort serve multiple regimes.
limitations:
  - Entirely voluntary — nothing requires any organisation to use it, and
    no deployment decision anywhere turns on it.
  - Several of the 11 principles are validated only by documentary process
    checks, so "tested with AI Verify" can mean paperwork review for the
    principles a reader cares most about.
  - Framework and toolkits assess organisational implementation of a
    system; they are not frontier-model capability or safety evaluations.
  - The newest pieces (agentic starter kit, tester accreditation) are
    known mainly through secondary coverage and have little public track
    record.
appropriate_claims:
  - An organisation completed AI Verify process checks and the applicable
    technical tests for a specific system, and the report says which
    principles were covered by which kind of evidence.
  - An LLM application was benchmarked and red-teamed with Project
    Moonshot against stated risk areas.
inappropriate_claims:
  - That AI Verify certifies a system as safe or responsible — it is a
    self-applied testing framework, not a certification, and passing
    process checks is not a measured system property.
  - That completing the framework demonstrates frontier-model safety; its
    scope is organisational implementation and application-level testing.
  - That the 11 principles were all technically tested — several are
    evidenced by documentation alone.
evidence_produced: >-
  A testing report combining documentary process-check evidence (policies,
  records, implementation status per principle) with technical test
  results from the toolkits — organisational and application-level
  assurance evidence, published or not at the organisation's discretion.
combine_with:
  - Independent third-party testing — the sandbox and accreditation
    programme exist precisely because self-applied testing has limited
    evidential weight.
  - Frontier-model evaluations from safety institutes, which cover the
    model-capability questions AI Verify does not.
  - The crosswalked frameworks (NIST AI RMF, ISO/IEC 42001) where the same
    evidence needs to support a compliance claim elsewhere.
misconceptions:
  - misconception: AI Verify is Singapore's AI certification scheme.
    reality: >-
      It is a voluntary testing framework and toolkit. It issues no
      certificate, and its own materials describe testing how responsibly
      an organisation implements a system, not certifying the system.
  - misconception: AI Verify technically tests all 11 principles.
    reality: >-
      Technical tests cover a subset; principles like accountability and
      data governance are validated through documentary process checks, so
      the evidence type varies by principle.
questions_to_ask:
  - Which principles were covered by technical tests and which only by
    process checks, for this specific report?
  - Who ran the testing — the deploying organisation itself, or an
    accredited third-party tester?
  - Which toolkit version and which benchmarks or red-teaming suites were
    used, and are the results reproducible?
  - Is the AI Verify report public, and does anything in procurement or
    regulation actually turn on it?
related_entries:
  - standards-and-assurance
  - nist-ai-rmf
  - iso-iec-42001
  - japan-ai-safety-institute
related_guides:
  - how-governments-evaluate-ai
  - from-model-scores-to-system-assurance
primary_sources:
  - src-imda-2025-ai-verify
secondary_sources: []
source_status: >-
  The framework page (11 principles, structure, dates, crosswalks) was
  fetched directly in November 2026. Starter Kit v1.0's January 2026 date
  comes from search-level reading of the official PDF; the agentic starter
  kit (October 2026), its four-step method, and the five-firm accreditation
  figure rest on a law-firm note — all secondary until checked. Toolkit
  version numbers are not stated on the official pages.
created: 2026-11-11
last_reviewed: 2026-11-11
reviewer: Monica Kodwani
tags:
  - singapore
  - voluntary-framework
  - testing-toolkit
featured: false
---

AI Verify's layering is the thing to study: a governance framework says
what good looks like, a testing framework turns it into checks, open
toolkits make the checks runnable, starter kits say how to test specific
system types, a sandbox pairs deployers with testers in real engagements,
and an accreditation programme professionalises the testers. Each layer
patches a specific failure mode of "voluntary assurance" — vagueness,
unrunnability, methodological improvisation, no market, no quality bar.

### The portability experiment

The official crosswalks are an underappreciated experiment: Singapore is
betting that evaluation evidence can be produced once and recognised under
several regimes (NIST AI RMF, Hiroshima Code of Conduct, ISO/IEC 42001).
Whether crosswalked evidence is actually accepted by auditors and
regulators elsewhere is an open empirical question — and a good indicator
to watch for whether the world's frameworks are converging or merely
cross-referencing.
