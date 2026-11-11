---
id: how-governments-evaluate-ai
title: How Governments Evaluate AI
order: 12
summary: >-
  Governments everywhere now run AI evaluation machinery — but the same
  technical activities serve four different institutional functions:
  binding mandates, pre-launch gates, published methodology, and forced
  transparency. This guide maps the patterns and what each one's evidence
  can support.
status: needs-verification
content_status: substantive-draft
key_terms:
  - conformity assessment
  - systemic risk
  - pre-deployment testing
  - impact assessment
  - joint testing
  - assurance
related_entries:
  - eu-ai-act
  - gpai-code-of-practice
  - china-genai-security-assessment
  - tevv-athlon
  - nist-aria
  - caisi
  - uk-ai-security-institute
  - japan-ai-safety-institute
  - ai-verify
  - canada-algorithmic-impact-assessment
  - conformity-assessment
  - impact-assessment
  - nist-ai-rmf
  - iso-iec-42001
source_notes: >-
  Drafted from a five-track research sweep (US, EU, UK, Asia-Pacific,
  international) conducted on 11 November 2026, with primary pages fetched
  directly where possible. Statuses are as of that date and several claims
  rest on secondary, translation, or single-source material — these are
  flagged in the text and in the linked entries' source notes. Korean
  statutory detail is available only through law-firm summaries; the
  International AI Safety Report's evaluation-science findings are cited
  from secondary summaries pending a read of the official PDF.
created: 2026-11-11
last_reviewed: 2026-11-11
reviewer: Monica Kodwani
---

By late 2026, every major AI jurisdiction has built government machinery
for evaluating AI systems. Read quickly, the landscape looks like
convergence: everyone benchmarks, everyone red-teams, everyone talks about
pre-deployment testing and incident reporting. Read carefully, it is the
opposite. The same technical activities serve radically different
institutional functions depending on who demands the evidence, who gets to
see it, and what happens when a system fails. This guide maps four
patterns — the mandate, the gate, the methodology publishers, and the
transparency enforcers — and a measurement-science layer underneath them
all.

One honesty note before the map: many of the flagship documents below are
drafts, pilots, or betas, and some of the most-cited details about them
rest on secondary sources or translations. That is not a defect of this
guide's research; it is the state of the field. The linked entries carry
the specific flags.

## One toolkit, four institutional functions

Strip away the institutional context and governments use the same
evaluation toolkit as everyone else: benchmarks, adversarial testing and
red teaming, human studies, field tests, impact questionnaires, incident
logs. What differs is the function the evidence serves. In the European
Union, evaluation is a **legal duty** of frontier-model providers. In
China, it is a **launch condition** for generative AI services. In the
United States, Japan, and Singapore, government mostly **publishes
methodology** and tests voluntarily. In Canada and the UK public sector —
and internationally through the G7 — governments **force evidence into
the open** without mandating any particular test. A claim like
"government-evaluated" means something different in each column, and the
first question to ask of any such claim is which function the evaluation
served.

## The mandate: Europe writes evaluation into law

The EU AI Act contains the world's first binding
model-evaluation requirement: providers of general-purpose AI models with
systemic risk must perform state-of-the-art model evaluations, including
documented adversarial testing, with the obligations applicable since
August 2025 and Commission-enforceable since August 2026. Because no
harmonised standard yet covers these duties, the operative rulebook is the
GPAI Code of Practice, whose Safety
and Security chapter is the most detailed official specification of
frontier evaluation anywhere — capability elicitation with anti-sandbagging
provisions, evaluator qualification floors, mandatory independent external
evaluation before deployment with publication rights, quantified
risk-acceptance tiers, and tiered incident reporting.

The other half of the Act teaches the opposite lesson. Its high-risk
regime — conformity assessment of systems in employment, credit,
biometrics, and similar domains — was delayed to December 2027 and August
2028, largely because the harmonised testing standards it depends on were
not finished; several drafts were reportedly rejected at public enquiry.
A legal duty to test is inert until testable standards exist. Evaluation
infrastructure, not legal text, turned out to be the rate-limiting
resource.

## The gate: China makes evaluation a launch condition

China's generative AI security assessment regime is the only mandatory
pre-launch evaluation gate among major jurisdictions: generative AI
services with public-opinion or social-mobilization attributes must pass a
security assessment and complete algorithm filing before reaching the
public, with a national standard (GB/T 45654-2025) supplying training-data
and generated-content test methodology and a TC260 framework supplying
five-level risk grading.

The comparative point is precise. Both the EU and China make evaluation
legally consequential, but the EU imposes an ongoing duty on providers
under regulatory watch, while China imposes a point-in-time gate on
services before launch — and the constructs differ too, with China's risk
taxonomy centered on content security. Same verb, "evaluate"; almost no
overlap in what the resulting evidence supports. Whether that regime is
best described as safety evaluation or as content control using evaluation
machinery is a genuine debate, taken up in the entry.

## The methodology publishers

The United States runs a two-track system: NIST writes evaluation
methodology while its renamed institute tests models. The methodology
track produced TEVV-Athlon, a draft four-stage
method for composing benchmarks, red teaming, and field testing into one
assessment design, and ARIA, an evaluation program
whose three escalating levels — model testing, red teaming, field testing
with human participants — are the clearest official statement that
benchmark scores alone do not establish real-world safety. Both are
instructive, and neither is finished: TEVV-Athlon is an Initial Public
Draft, and ARIA has run exactly one pilot. Binding federal rules exist
only for the government's own use of AI — OMB's M-25-21 requires
documented pre-deployment testing and impact assessments for high-impact
federal AI, notably authorizing black-box query testing where agencies
lack model access.

The Japan AI Safety Institute
is the purest methodology publisher: versioned guides on evaluation
perspectives and red-teaming structure, sector guides for healthcare and
robotics — all within penalty-free soft law. Singapore's AI
Verify stack goes furthest operationally:
framework, open-source toolkits, testing starter kits, a deployer–tester
sandbox, and tester accreditation, every layer voluntary, with official
crosswalks positioning the same evidence to count under NIST, G7, and ISO
regimes at once.

## The hands-on evaluators

Two governments actually test frontier models under negotiated access. The
UK AI Security Institute
published its evaluation methodology ("Early lessons from evaluating
frontier AI systems" — preregistration of methods before model access,
separating elicitation tasks from test tasks, Helpful-Only model
variants), released the open-source Inspect framework, ran joint
pre-deployment evaluations with the US, and now synthesizes findings in an
annual Frontier AI Trends Report. The US
institute — AI Safety Institute, then CAISI, then
CAISSI — holds reported voluntary pre-deployment agreements with the five
major US frontier labs, while its published output tilts toward capability
assessments of Chinese models.

Both arrangements are voluntary: neither government can compel access,
block a release, or force publication. That is the central caveat for
reading any "government-tested" claim about a frontier model — testing is
scrutiny, not certification, and the published record is a selected sample
of the evaluations that exist.

Internationally, the network of these institutes (renamed in late 2025 the
International Network for Advanced AI Measurement, Evaluation and Science,
dropping "safety") has run three joint testing exercises — general
capabilities, multilingual evaluation, agentic behavior. Their consistent,
publishable lesson is methodological: small differences in evaluation
implementation noticeably change results across labs and languages. These
exercises are the closest thing AI evaluation has to an intergovernmental
reproducibility program.

## The transparency enforcers

A fourth pattern mandates no tests but forces evidence into the open. The
Canadian Algorithmic Impact Assessment requires
federal institutions to complete, score, and publish a structured impact
assessment whose level gates escalating duties — the archetype of
impact-level-gated obligations. The UK's Algorithmic Transparency
Recording Standard makes departments publish records about their
algorithmic tools. The G7's Hiroshima-process reporting framework (hosted
by the OECD) collects voluntary public self-reports from AI developers on
their risk assessment and red-teaming practice, 25 in its first round. And
the OECD's incidents monitor logs post-deployment failures from news
reporting at scale.

None of this produces behavioral evidence about systems. What it produces
is accountability surface: documents that can be compared, over time,
against what systems actually do — which is exactly the comparison
unpublished evaluations can never face.

## Why so much of this is still draft

The most instructive documents in this landscape are the least settled.
TEVV-Athlon is a draft; ARIA stopped at a pilot; the EU's testing
standards keep failing enquiry votes and forced a two-year delay of the
high-risk regime; Korea's binding AI Basic Act is readable in English only
through law-firm summaries; the OECD's capability indicators are a beta.
The International AI Safety Report — the most institutionally backed
consensus document in the field — concludes, per secondary summaries of
its 2026 edition, that pre-deployment testing does not reliably predict
real-world behavior and that no internationally agreed evaluation
methodology exists, while models increasingly detect when they are being
evaluated.

This is the honesty lesson the Atlas keeps returning to: the visible draft
status of government evaluation frameworks is not administrative lag. It
mirrors the actual epistemic state of evaluation science, which the people
writing these frameworks mostly acknowledge plainly. Documents that claim
more settledness than their sources warrant should be read with
proportionate suspicion.

## Questions to ask of any government framework

- **Which function does it serve?** Mandate, gate, methodology, or
  transparency — what can its evidence therefore support?
- **Who sees the evidence?** Regulator-only evidence (EU model reports,
  Chinese filings) supports different public claims than published
  evidence (Canadian AIAs, UK transparency records).
- **Can it compel anything?** Voluntary arrangements (US and UK frontier
  testing, Singapore's stack, Japan's guides) depend on continued
  cooperation; mandates and gates do not — but mandates without finished
  standards may compel only documentation.
- **What construct does it actually measure?** "Safety assessment" under
  China's content-security taxonomy, EU systemic-risk evaluation, and a
  Canadian impact score are not the same quantity under different names.
- **What is its real status?** Draft, pilot, beta, consultation outcome,
  delayed, in force — the label changes what citing it can honestly claim.
