---
id: human-evaluation
title: Human evaluation
aliases:
  - Human annotation
  - Human rating
  - Human preference evaluation
entry_type: method
status: needs-verification
content_status: substantive-draft
summary: >-
  Evaluation in which people rate, compare, use, or adjudicate an AI system's
  outputs or behavior. The reference standard for contested constructs, and a
  method whose own measurement quality is routinely under-reported.
definition: >-
  Human evaluation covers any protocol in which human judgment is the scoring
  mechanism, spanning at least six distinct activities that are often pooled
  without explanation — lay preference judgments, trained annotation,
  professional expert adjudication, user testing, affected-community
  assessment, and observation of human–AI task performance. Each recruits
  different evaluators, supports different claims, and carries different
  measurement error.
why_it_matters: >-
  Human evaluation is the court of appeal for constructs that automated
  scoring handles poorly — nuanced quality, harm, cultural appropriateness,
  expert-domain correctness — and it is the reference against which AI judges
  are validated. Yet AI practice lags the measurement disciplines it borrows
  from. Reliability statistics are frequently unreported, rater pools are
  rarely representative, and a mean preference score is routinely treated as
  a measurement of quality rather than as the output of a particular panel
  under a particular protocol.
claimed_constructs:
  - capability
  - factuality
  - safety
  - harmful-content
  - fairness
  - social-impact
evaluation_levels:
  - output
  - interaction
  - task
  - application
lifecycle_stages:
  - pre-deployment
  - release
  - deployment
purposes:
  - scientific-understanding
  - model-comparison
  - release-decision
  - safety-assurance
evaluator_types:
  - domain-expert
  - crowd-worker
  - end-user
  - affected-stakeholder
evaluator_filters:
  - human
  - expert
  - crowd
environments:
  - laboratory
  - staged-deployment
  - real-world-deployment
scoring_mechanisms:
  - human-rating
  - expert-adjudication
evidence_class: research-convention
maturity: common-contested
human_involvement: human-led
strengths:
  - The only available reference standard for contested, contextual, or
    experiential constructs — harm severity, cultural appropriateness,
    dignity, usefulness in a real workflow.
  - Expert adjudication provides the strongest available evidence of
    domain correctness in fields such as medicine and law, where no
    automated verifier exists.
  - Disagreement among raters is itself informative — it can indicate
    genuine ambiguity, cultural variation, or conflicting values rather
    than mere noise.
  - Well-designed protocols — evaluator training, calibrated rubrics,
    blinded and randomized presentation, explicit adjudication — can
    achieve high reliability.
  - Required for validating every automated evaluator, including AI
    judges, whose agreement with humans is their main validity evidence.
appropriate_claims:
  - Under this protocol, with these raters and this reported agreement
    statistic, System A was preferred over System B on this criterion.
  - Experts with stated qualifications, applying a defined rubric, judged
    a stated fraction of outputs correct or harmful.
  - Observed rater disagreement indicates that the construct is ambiguous
    or contested for these items, which is a finding, not a failure.
  - These human labels, with their measured reliability, can serve as a
    reference set for validating an automated evaluator on the same
    construct and domain — with rater agreement as the ceiling on what
    agreement with the labels can show.
inappropriate_claims:
  - That a lay-preference win rate measures correctness, safety, or
    expert-level quality — lay preference and expert judgment have been
    found to diverge, and preference tracks style as well as substance.
  - That results generalize beyond the rater pool used — crowd platforms
    are not representative of end users or affected populations, and
    demographics are rarely reported.
  - That raw percent agreement demonstrates reliability — high raw
    agreement is compatible with near-chance-corrected agreement when
    category prevalence is skewed.
  - That high inter-rater agreement establishes validity — raters can
    agree consistently on a poorly defined or biased criterion.
  - That a single averaged Likert score is a stable measurement of
    quality — averaging conceals disagreement and treats an ordinal
    response as an error-free interval scale.
evidence_produced: >-
  Human judgments under a specified protocol: ratings, preferences, or
  adjudications from a particular rater pool, whose measured agreement
  bounds what the resulting labels can support.
combine_with:
  - Automated or benchmark scoring for scale, reserving human judgment
    for the contested constructs and the samples where it is actually
    needed.
  - AI-as-a-judge for volume, with the human labels serving as the
    validation reference for the judge — never the reverse.
  - Field or deployment evaluation when the question is whether ratings
    collected under a lab protocol predict anything about real use.
misconceptions:
  - misconception: Human evaluation is the gold standard.
    reality: >-
      It is the reference standard only when reliability is measured and
      the raters' expertise matches the construct. An unmeasured panel is
      just another uncalibrated instrument.
  - misconception: Disagreement between raters is noise to average away.
    reality: >-
      Disagreement often carries signal — genuine ambiguity, cultural
      variation, or a contested construct. Averaging it away discards the
      finding and overstates the precision of the result.
  - misconception: If humans preferred it, it is better.
    reality: >-
      A preference win rate is evidence about that rater pool, interface,
      and criterion. Lay preference tracks style and confidence, and has
      been found to diverge from expert judgment.
questions_to_ask:
  - Who were the evaluators — how were they recruited, and what
    population do they actually represent?
  - What expertise did the construct require, and did the raters have it?
  - Were disagreements measured with a chance-corrected statistic, and
    how were they resolved — majority vote, adjudication, or silent
    discard?
  - How were the rubrics designed, and were raters trained and calibrated
    on them before scoring began?
  - Could the study be re-run from what is reported — instructions,
    interface, item sampling, compensation, adjudication rules?
  - If the content was disturbing, how were the raters protected?
debates:
  - question: Should rater disagreement be resolved away or preserved?
    positions:
      - label: Aggregate to a single label
        view: >-
          Most uses of human evaluation need one label per item. With
          trained raters and clear guidelines, much disagreement really
          is error — fatigue, misreading, scale misuse — and majority
          voting or adjudication suppresses it correctly, yielding stable
          labels that downstream decisions can actually use.
      - label: Preserve disagreement as signal
        view: >-
          For contested constructs — harm, offensiveness, quality —
          disagreement reflects genuine human variation, not error.
          Forcing a single label erases minority judgments and
          manufactures an artificially confident ground truth;
          distributions over judgments are the more honest measurement.
    note: >-
      Mainstream practice aggregates; a research line summarized in the
      working reports argues for disagreement-aware designs. Which is
      right depends on whether the construct plausibly has a single true
      label at all.
limitations:
  - Expensive and slow; expert time is scarcest exactly where it is most
    needed, and longitudinal or large-sample designs are rare.
  - Inter-rater reliability is frequently unreported; where agreement is
    reported it is often raw percent agreement rather than
    chance-corrected statistics such as Cohen's kappa or Krippendorff's
    alpha.
  - No accepted field-wide minimum standard exists for sample size, raters
    per item, reliability thresholds, evaluator demographics, or
    compensation disclosure.
  - Rater fatigue, drift, anchoring, central tendency, and scale-use
    differences degrade comparability within and across studies.
  - Crowd pools are non-representative, and cultural and linguistic
    variation in judgments is typically folded into "noise" rather than
    modeled.
  - Rating violent, sexual, hateful, or self-harm content exposes workers
    to psychological harm; exposure protections are inconsistently
    applied and rarely disclosed.
  - How disagreement was handled (majority vote, adjudication, silent
    discard) is often unreported, though it changes the resulting labels.
reliability_evidence: >-
  Frequently unmeasured or unreported. Meta-research summarized in the
  Atlas's working reports has found that only a small minority of relevant
  papers report inter-rater reliability metrics, and one examination of
  crowd-sourced sentiment datasets reportedly found none with
  chance-corrected agreement (Krippendorff's alpha) above 0.8 and some
  below 0.5. Chance-corrected agreement also sets an empirical ceiling on
  any model performance measured against those labels. Specific figures
  need verification against primary sources.
validity_evidence: >-
  Potentially the strongest available for lived, contextual, and
  expert-domain constructs — but only when evaluator qualification matches
  the construct. A physician judging clinical correctness, a crowd worker
  choosing the more fluent response, and a benefits applicant describing
  procedural dignity provide different evidence and should not be pooled.
  Reliability is not validity — consistent agreement on a poorly specified
  criterion establishes nothing about the construct.
reproducibility_notes: >-
  Reproduction requires the instructions, interface, item sampling, rater
  recruitment and demographics, training and calibration materials,
  compensation, and adjudication rules — disclosure that remains the
  exception. Published human evaluations often cannot be re-run even
  approximately, because the protocol is described in a sentence.
adoption_evidence: >-
  Widespread across natural language generation research, preference-based
  training pipelines, and frontier-model release evaluation, but without
  convergence on a minimum protocol or reporting standard; reviews of the
  practice repeatedly find inconsistent terminology and incomplete
  methodological reporting. A workshop community (the ACL HumEval series,
  per the working reports) exists specifically because these norms are
  unsettled. Adoption is broad; standardization is not.
known_failure_modes:
  - Rater fatigue and drift across long sessions, shifting the effective
    scale mid-study.
  - Construct substitution, where raters asked about correctness actually
    score fluency, confidence, or style.
  - Non-representative pools presented as if they were general human
    judgment.
  - Silent disagreement handling — majority votes or discarded items that
    change results without being reported.
  - Worker harm from unmitigated exposure to disturbing content, which is
    both an ethical failure and a data-quality risk.
related_entries:
  - benchmark-based-evaluation
  - ai-as-a-judge
  - reliability
  - construct-validity
  - ecological-validity
  - chatbot-arena
related_guides:
  - human-judgment-and-disagreement
  - evaluation-is-measurement
primary_sources: []
secondary_sources:
  - src-bean-2025-benchmark-review
source_status: >-
  Drafted from working research reports; reliability-reporting figures and
  the specific meta-research studies behind them are not yet verified
  against primary sources, and dedicated primary source records remain to
  be added.
created: 2026-07-31
last_reviewed: 2026-08-03
reviewer: Monica Kodwani
tags:
  - human-evaluation
  - inter-rater-reliability
  - annotation
featured: true
---

Human evaluation occupies a strange position in AI evaluation. It is
simultaneously the method of last resort — invoked whenever automated
scoring is not trusted — and one of the least standardized methods in the
field. Treating "humans rated it" as a validity guarantee ignores that
human evaluation is itself a measurement instrument, with its own error
structure that is usually left unmeasured.

### One name, six activities

"Human evaluation" is used for lay preference collection, trained
annotation, professional expert judgment, user testing, affected-community
assessment, and observation of humans working with a system. These differ
in who is qualified to judge, what evidence the evaluator may consult, and
what decision the result can support. A crowd worker's preference between
two responses is evidence about lay preference under that interface — not
about clinical correctness, and not about how an affected community
experiences the system. Strong protocols state the construct, the
qualification required to judge it, and the decision the result feeds,
before any rating is collected.

### The reporting problem

The recurring finding in meta-research on human evaluation is not that
humans are bad raters but that studies do not report enough to tell.
Inter-rater reliability is frequently omitted; where agreement is
reported, raw percent agreement is common even though it is uninterpretable
under skewed category prevalence — chance-corrected statistics (Cohen's
kappa for two raters, Fleiss' kappa or Krippendorff's alpha for more
general designs, intraclass correlation for continuous ratings) are the
recommended practice. Sample sizes, raters per item, demographics,
compensation, and disagreement handling go similarly undisclosed. There is
no defensible universal minimum number of raters per item; the honest
answer is a precision analysis tied to the decision at stake, which almost
no published evaluation performs.

### What the field could import

Adjacent measurement disciplines solved versions of these problems
decades ago. Psychometrics offers formal construct definition, item
analysis, item response theory, differential item functioning, and
generalizability theory for decomposing variance across raters, items, and
occasions. Survey methodology offers sampling design, scale construction,
and pre-registration. Human factors offers realistic tasks and attention
to fatigue, workload, and automation bias. These are largely absent from
mainstream AI evaluation; the working reports identify only early
exceptions. Importing them is arguably the clearest available upgrade path
for the field's most trusted method.
