# European Union frameworks and official guidance for evaluating AI systems (as of November 2026)

Scope: EU-specific instruments requiring or producing AI evaluation/testing/assurance evidence — the AI Act's evaluation obligations, the GPAI Code of Practice, AI Office guidance, CEN-CENELEC JTC21 standards, conformity assessment, and EU evaluation infrastructure. Status labels reflect November 2026. Primary-source URLs verified this session are used wherever possible; anything resting on secondary reporting or pre-cutoff knowledge is flagged.

## What does the EU AI Act require in terms of evaluation and testing, and what is the implementation timeline as of November 2026?

### Takeaway
The AI Act (Regulation (EU) 2024/1689) contains the world's first legally binding model-evaluation mandate: Article 55 requires providers of general-purpose AI (GPAI) models with systemic risk to perform state-of-the-art model evaluations including documented adversarial testing — applicable since 2 August 2025 and Commission-enforceable since 2 August 2026. The high-risk system conformity regime, by contrast, was delayed by the "Digital Omnibus" amendment (in force 27 July 2026): Annex III high-risk obligations now apply from 2 December 2027 and Annex I (AI embedded in regulated products) from 2 August 2028, chiefly because harmonised standards were not ready.

### Cited Findings

**The Act and Article 55 (GPAI models with systemic risk)**
- Official text: Regulation (EU) 2024/1689 ("AI Act"), on EUR-Lex — [EUR-Lex](https://eur-lex.europa.eu/eli/reg/2024/1689/oj)
- Article 55(1)(a) requires providers of GPAI models with systemic risk to "perform model evaluation in accordance with standardised protocols and tools reflecting the state of the art, including conducting and documenting adversarial testing of the model with a view to identifying and mitigating systemic risks" — [AI Act Explorer, Art. 55](https://artificialintelligenceact.eu/article/55/)
- Article 55(1)(b): "assess and mitigate possible systemic risks at Union level, including their sources," arising from development, placing on the market, or use of the model — [AI Act Explorer, Art. 55](https://artificialintelligenceact.eu/article/55/)
- Article 55(1)(c): "keep track of, document, and report, without undue delay, to the AI Office and, as appropriate, to national competent authorities, relevant information about serious incidents and possible corrective measures" — [AI Act Explorer, Art. 55](https://artificialintelligenceact.eu/article/55/)
- Article 55(1)(d): "ensure an adequate level of cybersecurity protection for the general-purpose AI model and the physical infrastructure of the model" — [AI Act Explorer, Art. 55](https://artificialintelligenceact.eu/article/55/)
- Article 55(2): providers may rely on codes of practice (Article 56) to demonstrate compliance "until a harmonised standard" is published; compliance with harmonised standards grants presumption of conformity "to the extent that those standards cover those obligations"; providers following neither must demonstrate "adequate alternative means of compliance" for Commission assessment — [AI Act Explorer, Art. 55](https://artificialintelligenceact.eu/article/55/)
- The AI Office (Commission) also holds a power to itself conduct evaluations of GPAI models to assess compliance and investigate systemic risks, including through independent experts (Article 92, "Power to conduct evaluations") — [EUR-Lex, Regulation (EU) 2024/1689](https://eur-lex.europa.eu/eli/reg/2024/1689/oj) (article number from Act text; not re-fetched this session)

**Timeline and enforcement status (official Commission FAQ, last updated 20 October 2026)**
- 2 February 2025: prohibitions, AI definitions, AI literacy provisions apply — [Commission, Navigating the AI Act](https://digital-strategy.ec.europa.eu/en/faqs/navigating-ai-act)
- 2 August 2025: governance rules and GPAI model obligations apply — [Commission, Navigating the AI Act](https://digital-strategy.ec.europa.eu/en/faqs/navigating-ai-act)
- Commission enforcement of GPAI obligations begins 2 August 2026; GPAI models placed on the market before 2 August 2025 must comply by 2 August 2027 — [AI Act Explorer, Code of Practice overview](https://artificialintelligenceact.eu/code-of-practice-overview/)
- GPAI fines: up to EUR 15 million or 3% of worldwide annual turnover — [Commission, Navigating the AI Act](https://digital-strategy.ec.europa.eu/en/faqs/navigating-ai-act)

**Digital Omnibus changes (adopted 2026)**
- Commission proposed the Digital Omnibus on 19 November 2025; the amendment entered into force on 27 July 2026 — [Commission, Navigating the AI Act](https://digital-strategy.ec.europa.eu/en/faqs/navigating-ai-act)
- New fixed dates: Annex III (standalone high-risk: biometrics, employment, education, credit, critical infrastructure etc.) apply from 2 December 2027 (was 2 August 2026); Annex I (AI in regulated products, e.g. medical devices, machinery, toys, lifts) from 2 August 2028 (was 2 August 2027) — [Commission, Navigating the AI Act](https://digital-strategy.ec.europa.eu/en/faqs/navigating-ai-act); corroborated by [Gibson Dunn](https://www.gibsondunn.com/eu-ai-act-omnibus-agreement-postponed-high-risk-deadlines-and-other-key-changes/)
- The Commission's original proposal tied high-risk application dates to availability of harmonised standards/common specifications/guidelines; the final agreement replaced this conditional trigger with fixed dates — proposal description per [Commission, Navigating the AI Act](https://digital-strategy.ec.europa.eu/en/faqs/navigating-ai-act); fixed-dates outcome per [Gibson Dunn](https://www.gibsondunn.com/eu-ai-act-omnibus-agreement-postponed-high-risk-deadlines-and-other-key-changes/)
- The delay's stated rationale: delayed availability of harmonised standards jeopardised the 2 August 2026 entry into application — search synthesis of multiple sources incl. [Future AGI timeline](https://futureagi.com/blog/eu-ai-act-timeline-digital-omnibus-2027/), [Cooley](https://cdp.cooley.com/digital-ai-omnibus-delays-key-deadlines-introduces-new-rules/)
- Article 50 transparency obligations (disclosing AI interaction, marking AI-generated output, labelling deepfakes) were NOT delayed and apply from 2 August 2026; a grace period to 2 December 2026 applies to Article 50(2) watermarking for systems already on the market before 2 August 2026 — [Commission, Navigating the AI Act](https://digital-strategy.ec.europa.eu/en/faqs/navigating-ai-act); grace-period detail per [Gibson Dunn](https://www.gibsondunn.com/eu-ai-act-omnibus-agreement-postponed-high-risk-deadlines-and-other-key-changes/)
- GPAI obligations dates (Articles 51–56, applicable since 2 August 2025) unchanged by the Omnibus — [Gibson Dunn](https://www.gibsondunn.com/eu-ai-act-omnibus-agreement-postponed-high-risk-deadlines-and-other-key-changes/)
- The Omnibus gives the AI Office exclusive competence over AI systems built on GPAI models where the same provider develops both, and over AI systems integrated into VLOPs/VLOSEs (DSA platforms), plus new tools: investigations, on-site inspections, accepting binding commitments, imposing fines — [Gibson Dunn](https://www.gibsondunn.com/eu-ai-act-omnibus-agreement-postponed-high-risk-deadlines-and-other-key-changes/) (written at provisional-agreement stage; check final text)
- Adoption chronology per secondary reporting: European Parliament 16 June 2026, Council 29 June 2026, signed 8 July 2026, Official Journal publication then entry into force 27 July 2026; one source cites the amending regulation as Regulation (EU) 2026/1744 — search synthesis incl. [Usercentrics](https://usercentrics.com/knowledge-hub/eu-ai-act-high-risk-delay-article-50-transparency-consent/), [Gibson Dunn](https://www.gibsondunn.com/eu-ai-act-omnibus-agreement-postponed-high-risk-deadlines-and-other-key-changes/). **Regulation number is single-source and not verified against EUR-Lex.**

**Post-market monitoring and incident reporting for high-risk systems**
- Article 72 requires providers of high-risk AI systems to establish a post-market monitoring system based on a documented plan (template to be set by Commission implementing act) — [EUR-Lex, Regulation (EU) 2024/1689](https://eur-lex.europa.eu/eli/reg/2024/1689/oj) (Act text; template adoption status not verified — see Gaps)
- Article 73: serious incident reporting for high-risk systems "without undue delay" and in any event within 15 days of awareness; the Commission published draft guidance and a reporting template on 26 September 2025, still draft at that time — [Latham & Watkins](https://www.lw.com/en/insights/european-commission-publishes-draft-guidance-reporting-serious-ai-incidents)

### Inferences
- The EU is, as of November 2026, the only jurisdiction with legally binding, enforceable model-evaluation and adversarial-testing duties on frontier model providers (Article 55), making it the anchor case study for "regulation-mandated evaluation" in the Atlas.
- The Omnibus delay demonstrates that the whole high-risk evaluation regime is bottlenecked on harmonised standards: without testable standards, conformity assessment could not practically begin — a vivid illustration that evaluation infrastructure, not legal text, is the rate-limiting resource.
- Two-track reality for the Atlas: frontier-model evaluation obligations are live now (since Aug 2025/2026), while product-style high-risk testing/conformity obligations are still prospective (Dec 2027/Aug 2028).

### Gaps
- Could not verify the Digital Omnibus amending regulation's official number ((EU) 2026/1744 appears in one secondary source only) or its OJ citation; confirm on EUR-Lex before publishing.
- Could not verify whether the Commission has adopted the Article 72(3) implementing act with the post-market monitoring plan template, or whether the Article 73 draft guidance (Sept 2025) has been finalised.
- One source ([Cooley](https://cdp.cooley.com/digital-ai-omnibus-delays-key-deadlines-introduces-new-rules/)) reports a special extended deadline of 2 August 2030 for high-risk systems used by public authorities; the original Act's Article 111(2) already contained a 2030 date for legacy public-authority systems, so whether the Omnibus changed anything here needs checking against the final text.

## What is the GPAI Code of Practice (especially its Safety and Security chapter) and what evaluation commitments does it contain? Who has signed?

### Takeaway
The General-Purpose AI Code of Practice, published 10 July 2025 and assessed "adequate" by the Commission and AI Board, is a voluntary compliance route for Articles 53/55. Its Safety and Security chapter — applying only to providers of GPAI models with systemic risk — is the most detailed official specification of frontier-model evaluation practice in any jurisdiction: 10 commitments and 32 measures covering state-of-the-art model evaluations, adversarial testing, capability elicitation, independent external evaluators, quantified risk-acceptance tiers, model reports to the AI Office, and tiered incident reporting. 22+ companies have signed, including Amazon, Anthropic, Google, IBM, Microsoft, Mistral AI and OpenAI; xAI signed only the Safety and Security chapter; Meta is absent from the signatory list.

### Cited Findings

**Status and structure**
- Published 10 July 2025; drafted by independent experts in a multi-stakeholder process facilitated by the AI Office; voluntary; the Commission and AI Board confirmed it is an "adequate voluntary tool" for demonstrating AI Act compliance — [Commission, GPAI Code of Practice](https://digital-strategy.ec.europa.eu/en/policies/gpai-code-practice) (page updated 7 October 2026)
- Three chapters: Transparency (Article 53(1)(a)–(b), incl. a Model Documentation Form), Copyright (Article 53(1)(c)), and Safety and Security (only for providers subject to Article 55, i.e. GPAI models with systemic risk) — [Commission, GPAI Code of Practice](https://digital-strategy.ec.europa.eu/en/policies/gpai-code-practice); chapter-to-article mapping per [AI Act Explorer, Code of Practice overview](https://artificialintelligenceact.eu/code-of-practice-overview/)
- Official chapter texts: [Safety and Security chapter (PDF)](https://ec.europa.eu/newsroom/dae/redirection/document/118119); [Transparency chapter (PDF)](https://ec.europa.eu/newsroom/dae/redirection/document/118120); [Copyright chapter (PDF)](https://ec.europa.eu/newsroom/dae/redirection/document/118115); [Commission adequacy assessment](https://digital-strategy.ec.europa.eu/en/library/commission-opinion-assessment-general-purpose-ai-code-practice); [Code contents page](https://digital-strategy.ec.europa.eu/en/policies/contents-code-gpai)

**Safety and Security chapter: evaluation commitments (10 commitments, 32 measures)** — all from [AI Act Explorer, Code of Practice overview](https://artificialintelligenceact.eu/code-of-practice-overview/):
- Commitment 1 — Safety and Security Framework: a "state-of-the-art" framework setting evaluation trigger points, risk tiers, mitigations and governance; confirmed at least 2 weeks before market launch; full unredacted access for the AI Office within 5 business days of confirmation; reviewed at least annually.
- Commitments 2–3 — Systemic risk identification and analysis: risk inventory and scenarios; analysis via model-independent information, model evaluations, risk modelling/estimation, and post-market monitoring. Specified systemic risks (Appendix 1.4): CBRN, loss of control, cyber offence, harmful manipulation.
- Measure 3.2 — "cutting-edge" model evaluations across all relevant modalities: open-ended testing for emergent properties, standardised benchmarks, adversarial testing, human uplift studies, simulations, and proxy evaluations for restricted content.
- Appendix 3.1 — evaluations must meet internal validity, external validity and reproducibility requirements; Appendix 3.2 — full capability elicitation and prevention of evaluation deception such as sandbagging, with evaluators matching the capabilities of potential misuse actors; Appendix 3.3 — testing mitigations for circumvention (jailbreaking) and degradation over time using state-of-the-art adversarial techniques; Appendix 3.4 — evaluation-team qualification floors (e.g. relevant PhD, 3 years' experience, or peer-reviewed work) and at least 20 business days for most evaluation tasks.
- Measure 3.5 / Appendix 3.5 — independent external evaluators required before deployment unless the model is "similarly safe or safer" than an already-assessed one or none can be found after a good-faith effort (e.g. 20-day public call); evaluators must get access to the most capable model versions including variants with minimal safety mitigations, plus adequate time and resources; they may publish findings after 30 business days; retaliation against good-faith evaluators is prohibited.
- Commitment 4 — risk acceptance: quantified risk tiers (at least one not yet reached) with safety margins; development/deployment proceeds only if risks are acceptable; otherwise corrective actions (usage restrictions, market withdrawal, re-evaluation).
- Commitment 7 — Safety and Security Model Reports: due by market introduction, covering risk analysis, mitigations and external evaluator reports; updates within 5 business days of confirmation; for the most capable models, updated reports at least every 6 months.
- Commitment 9 — serious incident reporting with severity-tiered initial deadlines (2 days for critical-infrastructure disruption, 5 for serious cybersecurity breaches, 10 for death, 15 for serious harm to health/rights/property/environment), 4-weekly updates for unresolved incidents, final report within 60 days of resolution, 5-year record retention.
- Commitment 10 — core records retained at least 10 years; public (redacted) summaries of the Framework and Model Reports where necessary to mitigate risk.

**Signatories**
- Signatories listed on the Commission page (updated as signatures are confirmed): AI Studio Delta, Aleph Alpha, Almawave, Amazon, Anthropic, Black Forest Labs, Bria AI, Cohere, Domyn, Dweve, Fastweb, Google, IBM, LINAGORA, Microsoft, Mistral AI, Open Hippo, OpenAI, Pleias, Reflection AI, ServiceNow, WRITER — [Commission, GPAI Code of Practice](https://digital-strategy.ec.europa.eu/en/policies/gpai-code-practice)
- xAI signed only the Safety and Security chapter and must demonstrate transparency and copyright compliance by alternative means — [Commission, GPAI Code of Practice](https://digital-strategy.ec.europa.eu/en/policies/gpai-code-practice)
- A Signatory Taskforce chaired by the AI Office coordinates coherent application of the Code — [Commission, GPAI Code of Practice](https://digital-strategy.ec.europa.eu/en/policies/gpai-code-practice); [Signatory Taskforce page](https://digital-strategy.ec.europa.eu/en/pages/signatory-taskforce-gpai-code-practice)

### Inferences
- The Safety and Security chapter effectively codifies "frontier safety framework" practice (capability thresholds, elicitation, external red-teaming, safety cases) into a quasi-regulatory instrument — for the Atlas, it is the best single document mapping evaluation science concepts (validity, elicitation, sandbagging, human uplift studies) to compliance obligations.
- Because Article 55(2) makes the Code the compliance route "until a harmonised standard is published," and no GPAI harmonised standard exists yet, the Code is in practice the operative evaluation rulebook for frontier models in the EU.

### Gaps
- Meta's non-signature is an absence from the official list rather than a positively sourced statement; I found no official page stating who declined to sign.
- Signatory list may have grown after the Commission page's 7 October 2026 update; re-check before publication.
- I did not fetch the Safety and Security chapter PDF itself; commitment details are from the AI Act Explorer's detailed summary (a reliable secondary source) and should spot-checked against the [official PDF](https://ec.europa.eu/newsroom/dae/redirection/document/118119) for exact wording if quoted.

## What guidance has the EU AI Office published on model evaluation, systemic risk, or the scientific panel?

### Takeaway
The AI Office's main published instruments are: Guidelines on the scope of GPAI provider obligations (July 2025), the mandatory training-data summary template (24 July 2025), serious-incident reporting templates/guidance (GPAI template tied to Code Commitment 9; separate draft Article 73 guidance of 26 September 2025), and — most significant for evaluation — the Scientific Panel of Independent Experts (Article 68 + Implementing Regulation (EU) 2025/454), whose 60 members were announced in June 2026 and whose remit explicitly includes advising on GPAI evaluation methodologies and alerting the AI Office to systemic risks.

### Cited Findings

**Guidelines and templates**
- Guidelines on the scope of obligations for providers of general-purpose AI models under the AI Act (clarifying key concepts such as what counts as a GPAI model and provider) — official page: [Commission library](https://digital-strategy.ec.europa.eu/en/library/guidelines-scope-obligations-providers-general-purpose-ai-models-under-ai-act); published July 2025 alongside the training-data template per [Paul, Weiss](https://www.paulweiss.com/insights/client-memos/eu-commission-publishes-guidelines-on-general-purpose-ai-obligations-as-well-as-training-data-disclosure-template-further-clarity-as-the-countdown-to-enforcement-begins)
- Mandatory template for the public summary of training content (Article 53(1)(d)), published 24 July 2025; applies to all GPAI models including open-source; requires disclosure by source category (publicly available datasets, licensed data, crawled/scraped data, user data, synthetic data, other) — [WilmerHale](https://www.wilmerhale.com/en/insights/blogs/wilmerhale-privacy-and-cybersecurity-law/european-commission-releases-mandatory-template-for-public-disclosure-of-ai-training-data); official factpage: [GPAI obligations under the AI Act](https://digital-strategy.ec.europa.eu/en/factpages/general-purpose-ai-obligations-under-ai-act)
- GPAI serious-incident reporting template supporting Article 55(1)(c) and Code of Practice Commitment 9 — [StreamLex](https://streamlex.eu/law-resources/ai-act-reporting-template-serious-incidents/)
- Draft guidance and template for Article 73 serious-incident reporting by high-risk AI system providers, published 26 September 2025 (draft at that date) — [Latham & Watkins](https://www.lw.com/en/insights/european-commission-publishes-draft-guidance-reporting-serious-ai-incidents)
- A code of practice on transparency/marking of AI-generated content (supporting Article 50) was in drafting as of the FAQ's October 2026 update — [Commission, Navigating the AI Act](https://digital-strategy.ec.europa.eu/en/faqs/navigating-ai-act)
- Central resources hub: the AI Act Service Desk — [ai-act-service-desk.ec.europa.eu/en/resources](https://ai-act-service-desk.ec.europa.eu/en/resources)

**Scientific Panel of Independent Experts**
- Legal basis: Article 68 AI Act plus Commission Implementing Regulation (EU) 2025/454 (OJ L, 2025/454, 10.3.2025) — [Commission, AI Scientific Panel](https://digital-strategy.ec.europa.eu/en/policies/ai-scientific-panel); OJ citation per [SpringLex](https://www.springlex.eu/en/packages/ai-act/spie-regulation/article-2/)
- 60 independent experts recruited; at most 3 nationals per country; mostly academics; 24-month renewable terms served in a personal capacity; each signed declarations of confidentiality and commitment — [Commission, AI Scientific Panel](https://digital-strategy.ec.europa.eu/en/policies/ai-scientific-panel) (page updated 5 November 2026)
- Membership announced ~1 June 2026 per secondary reporting — [CADE project](https://cadeproject.org/updates/european-commission-appoints-expert-bodies-to-support-ai-act-enforcement/) (exact date not confirmed on the Commission page)
- Chair: Seán Ó hÉigeartaigh (Ireland); vice-chair: Nicolas Moës (Belgium) — [Commission, AI Scientific Panel](https://digital-strategy.ec.europa.eu/en/policies/ai-scientific-panel)
- Core tasks: alerting the AI Office to systemic risks, advising on GPAI classification and on evaluation methodologies, and supporting market surveillance; listed expertise areas include GPAI capability evaluation, risk assessment, technical risk mitigation, cyber offence risks, emergent systemic risks, and compute measurement — [Commission, AI Scientific Panel](https://digital-strategy.ec.europa.eu/en/policies/ai-scientific-panel)
- A special panel meeting on 9 October 2026 discussed loss-of-control incidents, model monitorability, and recursive self-improvement — [Commission, AI Scientific Panel](https://digital-strategy.ec.europa.eu/en/policies/ai-scientific-panel); [meeting news item](https://digital-strategy.ec.europa.eu/en/news/special-meeting-ai-scientific-panel)

### Inferences
- The scientific panel is the EU's institutional answer to "who checks the evaluators": an independent technical body that can trigger regulatory scrutiny (alerts on systemic risk) and shape evaluation methodology — structurally comparable to an advisory peer-review layer over AI Office enforcement.
- The AI Office has not published a standalone technical "how to evaluate models" methodology document; the operative methodological detail lives in the Code of Practice's Safety and Security chapter, with the panel advising on methods.

### Gaps
- No official AI Office guidance document dedicated specifically to model-evaluation methodology was found; if one exists, it was not surfaced by these searches.
- The "qualified alerts" mechanism (the panel alerting the AI Office under the Act) is described on the official page only as "alerting the AI Office to systemic risks"; the exact procedural article (Art. 90) and its use to date were not verified.
- Finalisation status of the Article 73 draft guidance (Sept 2025) as of November 2026 is unverified.

## What harmonized standards work is CEN-CENELEC JTC21 doing on AI testing/evaluation?

### Takeaway
As of November 2026, exactly one harmonised standard has been cited in the Official Journal under the AI Act: EN 18286 (Quality management system for AI, supporting Article 17), published 22 July 2026 and cited 14 October 2026 via Commission Implementing Decision (EU) 2026/2274 — the first presumption-of-conformity instrument. The evaluation-critical standards (risk management, accuracy/robustness, bias, conformity assessment framework) remain in the pipeline, several having been rejected at public enquiry; the amended standardisation request (M/613) expires 28 February 2027.

### Cited Findings
- CEN-CENELEC JTC 21 (established 2021) is the body drafting European AI standards: 5 working groups, 30+ active work items, 34 national standardisation bodies — [jtc21.eu](https://jtc21.eu/)
- EN 18286 "became the first harmonised standard under the EU AI Act," per a 14 October 2026 JTC21 post citing Commission Implementing Decision (EU) 2026/2274; it covers quality management systems for AI Act purposes and was published 22 July 2026 — [jtc21.eu](https://jtc21.eu/); dates corroborated by [KLA Digital JTC 21 tracker](https://kla.digital/blog/jtc-21-standards-tracker)
- Pipeline status at 15 October 2026 per the (unofficial) KLA tracker — [KLA Digital JTC 21 tracker](https://kla.digital/blog/jtc-21-standards-tracker):
  - prEN 18228 (AI risk management, supports Art. 9): enquiry closed 30 July 2026, reportedly rejected by a majority of national bodies; comment resolution early November 2026, then Formal Vote.
  - prEN 18229-1 (trustworthiness — logging, Art. 12): enquiry closed 20 August 2026 with 443 comments, reportedly failed weighted vote.
  - prEN 18229-2 (transparency, Art. 13): with the Commission for pre-enquiry assessment.
  - prEN 18229-3 (human oversight, Art. 14): public enquiry closing 22 October 2026.
  - prEN 18229-4 and -5 (accuracy and robustness, Art. 15): still drafting — the closest things to dedicated "testing" standards.
  - prEN 18282 (cybersecurity specifications, Art. 15): enquiry reportedly rejected; revised scope balloted to 16 September 2026.
  - prEN 18283 (bias management) and prEN 18284 (dataset quality and governance, Art. 10): Commission pre-enquiry review, enquiry targeted autumn 2026.
  - prEN 18285 (conformity assessment framework, Art. 43 / Annex VII): mature draft going to Commission review.
- Standardisation request: M/613 Amendment 1 (Commission Implementing Decision C(2025)3871, adopted 23 June 2025) repealed and replaced the original request (C(2023)3215) and extends the timeline; the amended request expires 28 February 2027 with quarterly progress reports — [KLA Digital JTC 21 tracker](https://kla.digital/blog/jtc-21-standards-tracker)
- prEN 18228 (risk management) was under public enquiry and prEN 18283 (bias) in development per a CEN-CENELEC newsletter — [CEN-CENELEC news](https://www.cencenelec.eu/news-events/news/2026/newsletter/ots-73-etuc/)
- Context: the Commission's official FAQ on AI Act standardisation — [Commission, Understanding the standardisation of the AI Act](https://digital-strategy.ec.europa.eu/en/faqs/understanding-standardisation-ai-act)

### Inferences
- The standards that would actually operationalise AI *testing* (accuracy, robustness, bias measurement, conformity assessment procedure) are the furthest behind — the first standard through the gate (QMS) is process/management-shaped, mirroring the ISO/IEC 42001 pattern the Atlas already covers.
- Repeated enquiry rejections (18228, 18229-1, 18282) suggest genuine technical contention over how to standardise AI risk and trustworthiness evaluation, not mere scheduling slippage — useful editorial point about the immaturity of evaluation standardisation.
- The 2 December 2027 high-risk date gives the harmonised-standards pipeline roughly one year of headroom after the M/613 expiry, implying continued time pressure.

### Gaps
- Enquiry vote outcomes (rejections) come from an unofficial tracker citing "AI Standardisation Watch"; CEN-CENELEC does not publish enquiry results, so these cannot be fully verified against primary sources.
- The Official Journal citation of Implementing Decision (EU) 2026/2274 was not fetched from EUR-Lex directly; verify the exact OJ reference before citing in the Atlas.
- Current status of each prEN after mid-October 2026 is unknown; statuses move monthly.

## What are notified bodies / conformity assessment procedures under the AI Act, and what testing documentation do they require?

### Takeaway
The AI Act uses the EU's product-safety "New Legislative Framework" model: most Annex III high-risk AI systems are self-assessed by the provider against the Act's requirements via internal control (Annex VI), while third-party assessment by notified bodies (Annex VII: quality-management-system audit plus technical-documentation examination) is mandatory mainly for biometric systems where harmonised standards are not (fully) applied, and for AI embedded in products already subject to sectoral third-party regimes (Annex I). The evaluation evidence is the Annex IV technical documentation — including testing and validation procedures, test reports and logs, and metrics for accuracy, robustness and cybersecurity under Article 15 — all now due from 2 December 2027 (Annex III) / 2 August 2028 (Annex I) after the Omnibus delay.

### Cited Findings
- Article 43 sets the conformity assessment routes: for Annex III point 1 (biometrics), providers choose internal control (Annex VI) or notified-body assessment (Annex VII) when harmonised standards exist, and must use Annex VII where they do not apply such standards; for Annex III points 2–8, internal control applies; for Annex I products, AI Act requirements are assessed within the existing sectoral conformity procedures — [AI Act Explorer, Art. 43](https://artificialintelligenceact.eu/article/43/) and [EUR-Lex, Regulation (EU) 2024/1689](https://eur-lex.europa.eu/eli/reg/2024/1689/oj) (route structure from Act text; Art. 43 page not fetched this session — verify wording before quoting)
- Article 40: harmonised standards cited in the OJ confer presumption of conformity; Article 41 lets the Commission adopt common specifications as a fallback — [EUR-Lex, Regulation (EU) 2024/1689](https://eur-lex.europa.eu/eli/reg/2024/1689/oj); the first such citation is EN 18286 via Implementing Decision (EU) 2026/2274 — [jtc21.eu](https://jtc21.eu/)
- The dedicated conformity assessment standard, prEN 18285 ("conformity assessment framework," mapped to Art. 43/Annex VII), was still a draft under Commission review in October 2026 — [KLA Digital JTC 21 tracker](https://kla.digital/blog/jtc-21-standards-tracker)
- Technical documentation (Annex IV) must describe, among other things, development processes, validation and testing procedures used, test logs and reports, and the metrics used to measure accuracy, robustness and compliance with Article 15 — [EUR-Lex, Regulation (EU) 2024/1689](https://eur-lex.europa.eu/eli/reg/2024/1689/oj) (from Act text; not re-fetched this session)
- Post-market monitoring (Article 72) and serious-incident reporting within 15 days (Article 73, with draft Commission guidance of 26 September 2025) complete the lifecycle evidence chain — [Latham & Watkins](https://www.lw.com/en/insights/european-commission-publishes-draft-guidance-reporting-serious-ai-incidents)
- Real-world testing of high-risk systems outside sandboxes: permitted for up to 6 months, extendable by 6 more; a testing plan must be submitted to the market surveillance authority, with tacit approval after 30 days of silence — [Commission, Navigating the AI Act](https://digital-strategy.ec.europa.eu/en/faqs/navigating-ai-act)
- The Omnibus narrowed the "safety component" definition (so fewer embedded AI systems are high-risk), largely exempted Machinery Regulation products, and extended the bias-detection legal basis for processing special-category data to all AI systems and GPAI models under a strict-necessity standard — [Gibson Dunn](https://www.gibsondunn.com/eu-ai-act-omnibus-agreement-postponed-high-risk-deadlines-and-other-key-changes/) (provisional-agreement stage)

### Inferences
- In practice, almost no standalone high-risk AI system will see third-party testing by a notified body — the AI Act's "conformity assessment" is predominantly self-assessment documented in Annex IV files, which matters for the Atlas's framing of what EU "conformity assessment" actually produces as evaluation evidence.
- Since the Atlas already covers conformity assessment generically, the EU-specific points worth emphasising are: the biometrics carve-out for notified bodies, the Annex IV test-report evidence package, EN 18286 as the first presumption-of-conformity instrument, and the Omnibus-delayed timeline.

### Gaps
- I did not find (or search for) the current count of notified bodies designated under the AI Act as of November 2026; given the Annex III delay to December 2027, designations may still be sparse — unverified.
- Annex VI/VII procedural detail and Annex IV contents are stated from the Act text in training knowledge, cited to EUR-Lex but not re-fetched this session; verify exact annex wording before quoting in the Atlas.

## What EU-funded evaluation infrastructure exists (testing facilities, regulatory sandboxes)?

### Takeaway
Article 57 originally required every Member State to establish at least one AI regulatory sandbox by 2 August 2026; the Digital Omnibus pushed this to 2 August 2027, and rollout has been slow (as of the August 2025 EPRS assessment only Spain had a working AI sandbox). Separately, the EU co-funds four sectoral Testing and Experimentation Facilities (TEFs) under the Digital Europe Programme that provide supervised real-world testing environments for AI in cooperation with national authorities.

### Cited Findings
- The AI Act enables regulatory sandboxes and real-world testing; real-world testing of high-risk systems runs up to 6 months, extendable by 6, with a plan submitted to a market surveillance authority and 30-day tacit approval — [Commission, Navigating the AI Act](https://digital-strategy.ec.europa.eu/en/faqs/navigating-ai-act)
- The Omnibus postponed the Member State sandbox-establishment obligation from 2 August 2026 to 2 August 2027 — [Gibson Dunn](https://www.gibsondunn.com/eu-ai-act-omnibus-agreement-postponed-high-risk-deadlines-and-other-key-changes/) (provisional-agreement stage); also reported by [CASRAI](https://casrai.org/news/uk-ai-regulatory-framework) — **confirm against the final adopted text**
- The Omnibus agreement "aims at" expanding real-world testing outside sandboxes to Annex I high-risk systems (presented as an aim, not a settled change, in the provisional agreement) — [Gibson Dunn](https://www.gibsondunn.com/eu-ai-act-omnibus-agreement-postponed-high-risk-deadlines-and-other-key-changes/)
- Member-state status: as of an EPRS-cited assessment (August 2025), only Spain among the 27 had established a working AI sandbox (launched early 2024) — [Dr. Datenschutz, citing EPRS](https://www.dr-datenschutz.de/regulatory-sandboxes-der-ki-verordnung-stand-huerden/); EPRS published a state-of-play briefing in April 2026 — [EPRS blog](https://epthinktank.eu/2026/04/01/ai-regulatory-sandboxes-state-of-play-and-implementation-challenges/); a July 2026 analysis titled "The Empty Sandbox" describes the rollout as stalling — [Shaping Tomorrow scan](https://decision-intel.shapingtomorrow.com/scans/regulation-standards-policy-change/2026-07-13-ai-sandbox-delivery-gap/scan.html) (title/summary only; not fully read)
- Member-state sandbox approaches overview — [AI Act Explorer](https://artificialintelligenceact.eu/ai-regulatory-sandbox-approaches-eu-member-state-overview/)
- Four sector-specific TEFs (Testing and Experimentation Facilities) have been established, supporting supervised testing and experimentation in cooperation with national authorities — reported via [AI Act overview sources in search](https://artificialintelligenceact.eu/code-of-practice/) (the TEF count surfaced in search synthesis; see Gaps)

### Inferences
- The sandbox regime is the EU's main mechanism for generating *pre-market* real-world evaluation evidence for high-risk systems, but as of November 2026 it exists far more on paper than in practice — an important honesty point for the Atlas (label: largely prospective).
- The sandbox delay to August 2027 aligns the infrastructure deadline with the new December 2027 high-risk application date, suggesting the Omnibus treated sandboxes as part of the same unready ecosystem as standards.

### Gaps
- TEF specifics were not verified this session: the four TEFs' names (health, agri-food, manufacturing, smart cities — i.e. TEF-Health, agrifoodTEF, AI-MATTERS, Citcom.ai per pre-cutoff knowledge) and their current operational status need confirmation against the Commission's TEF page on digital-strategy.ec.europa.eu before use; I did not fetch an official TEF page this session.
- Which Member States have operational sandboxes as of November 2026 could not be established from the sources found; the April 2026 EPRS briefing is the best primary-adjacent source to consult.
- Whether the final Omnibus text retains the sandbox delay exactly as in the provisional agreement is unverified against the Official Journal.
