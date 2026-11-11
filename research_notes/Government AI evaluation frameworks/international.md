# International and Other-Country Frameworks for Evaluating AI Systems (status as of November 2026)

Research notes for the AI Evaluation Atlas. Scope: evaluation/testing/assurance of AI systems — Canada, international bodies (OECD, G7, UN-adjacent), the International Network of AI Safety Institutes and its successor, international standards on AI testing, plus brief notes on other national frameworks. All statuses as of 2026-11-11. Anything draft, under development, or unverified is labelled.

## Canada: Directive on Automated Decision-Making, the AIA tool, AIDA, and CAISI

### Takeaway
Canada's binding evaluation instrument is the Treasury Board Directive on Automated Decision-Making, which forces federal institutions to run a published Algorithmic Impact Assessment (106 questions, four impact levels) before deploying an automated decision system, with escalating peer-review, testing, and transparency duties by level. AIDA (the proposed private-sector AI law) is dead as a bill and will not be revived in its old form; the Canadian AI Safety Institute (CAISI, launched November 2024, $50M over five years) is Canada's evaluation-research arm and participates in the international joint-testing network but has not published its own model-testing results.

### Cited Findings
**Directive on Automated Decision-Making (TBS)**
- The official text lives at the Treasury Board policy library — [Directive on Automated Decision-Making](https://www.tbs-sct.canada.ca/pol/doc-eng.aspx?id=32592). NOTE: this page refused automated fetching during this research (WAF block), so requirements below are verified from the official Algorithmic Impact Assessment page and secondary sources rather than the directive text itself.
- The AIA is a mandatory risk-assessment questionnaire supporting the Directive; it determines the impact level of an automated decision system and has 65 risk questions and 41 mitigation questions (106 total) — [Algorithmic Impact Assessment, canada.ca](https://www.canada.ca/en/government/system/digital-government/digital-government-innovations/responsible-use-ai/automated-decision-making/algorithmic-impact-assessment.html) (official; page dated 2026-09-15).
- Scoring: the 65 risk questions yield a raw impact score (max 169 points); the 41 mitigation questions yield a mitigation score (max 77 points). If the mitigation score reaches 80% of maximum, 15% is deducted from the raw impact score — [Algorithmic Impact Assessment, canada.ca](https://www.canada.ca/en/government/system/digital-government/digital-government-innovations/responsible-use-ai/automated-decision-making/algorithmic-impact-assessment.html).
- Four impact levels by percentage of score: Level I (0–25%, little to no impact), Level II (26–50%, moderate), Level III (51–75%, high), Level IV (76–100%, very high). Impact level determines which mitigations the Directive requires — [Algorithmic Impact Assessment, canada.ca](https://www.canada.ca/en/government/system/digital-government/digital-government-innovations/responsible-use-ai/automated-decision-making/algorithmic-impact-assessment.html).
- Final AIA results must be published in an accessible format, in both official languages, on the Open Government Portal (cited to Directive subsection 6.1.1) — [Algorithmic Impact Assessment, canada.ca](https://www.canada.ca/en/government/system/digital-government/digital-government-innovations/responsible-use-ai/automated-decision-making/algorithmic-impact-assessment.html).
- The AIA must be completed before a system goes into production and updated when system functionality or scope changes; the Directive applies to systems in production, not test environments; qualified experts must review the system (peer review), with the review or a plain-language summary published; impacted individuals must be able to challenge automated decisions — summarized across [the TBS directive page](https://www.tbs-sct.canada.ca/pol/doc-eng.aspx?id=32592) and [Osler analysis](https://www.osler.com/en/insights/updates/government-of-canada-s-directive-on-automated-decision-making-implications-for-service-providers/) (law-firm secondary source).
- A fourth review of the Directive was presented in fall 2024 with proposed amendments — [TBS presentation, 4th review of the DADM (GCcollab wiki PDF)](https://wiki.gccollab.ca/images/f/f1/Overview_4th_review_of_the_Directive_on_Automated_Decision-Making.pdf). Whether the amendments have taken effect was not verifiable in this research (see Gaps).

**AIDA**
- Minister of AI Evan Solomon said the government is not planning to revive the Artificial Intelligence and Data Act (AIDA, part of Bill C-27), though it will consider which aspects to carry forward into future regulation — [BetaKit](https://betakit.com/?p=391578).
- A September 2026 country profile describes AIDA as inactive, with its legislative detail "historical rather than operative" — [AI Governance Library, Canada profile](https://www.aigl.blog/ai-governance-around-the-world-country-profile-canada.md).

**CAISI (Canadian AI Safety Institute)**
- Official page: [Canadian Artificial Intelligence Safety Institute, ISED](https://ised-isde.canada.ca/site/ised/canadian-artificial-intelligence-safety-institute). ISED leads CAISI, drawing on the National Research Council (Digital Technologies Research Centre) and CIFAR; partners include Mila, the Vector Institute, and Amii.
- CAISI's work streams: investigator-led research funded through CIFAR's CAISI Research Program, and government-directed projects, which explicitly include "joint testing with international counterparts" and AI safety guidance with Network partners — [ISED CAISI page](https://ised-isde.canada.ca/site/ised/canadian-artificial-intelligence-safety-institute).
- Published outputs listed on the official page: a blog on what information AI evaluators should share, a Research Agenda on Risks from Synthetic Content, and an MoU with Australia on AI safety collaboration. The page reports no specific model-evaluation results — [ISED CAISI page](https://ised-isde.canada.ca/site/ised/canadian-artificial-intelligence-safety-institute).
- Initial budget $50 million over five years; CAISI funds Canadian and international experts via CIFAR's CAISI Research Program and directly conducts projects supporting government work (June 2026 Question Period note) — [Government of Canada QP note AIDI-2026-QP-00001](https://search.open.canada.ca/qpnotes/record/ic%2CAIDI-2026-QP-00001).
- The OECD lists CAISI as an active policy initiative — [OECD.AI Policy Navigator, CAISI](https://oecd.ai/en/dashboards/policy-initiatives/canadian-ai-safety-institute-caisi-canada). Launch announcement November 12, 2024 — [CIFAR announcement](https://cifar.ca/cifarnews/2024/11/12/government-of-canada-announces-canadian-ai-safety-institute/).
- CAISI signed an MoU with Cohere for AI research collaboration — [BetaKit](https://betakit.com/?p=391578).

### Inferences
- Canada's hard-law evaluation requirements apply only to the federal government's own automated decision systems (the Directive); there is no binding private-sector AI testing law, and with AIDA dead, voluntary mechanisms (CAISI research, the voluntary code of conduct) carry that weight.
- The AIA is one of the longest-running operational examples worldwide of a mandatory, published, scored impact assessment tied to graduated evaluation duties (peer review, human-in-the-loop, monitoring) — useful in the Atlas as the archetype of "impact-level-gated evaluation requirements."

### Gaps
- Could not fetch the Directive's full current text (TBS site blocks automated access), so the effective date of the current version, the exact peer-review/testing clauses by impact level (beyond 6.1.1 publication), and whether the fourth-review amendments are now in force are unverified. The directive URL above is correct and official; verify section text manually.
- No source found confirming whether CAISI has a formal mandate to conduct pre-deployment model testing (as opposed to funding research and joint projects); its published catalogue contains no model-testing reports as of the official page reviewed.
- Exact date of the minister's AIDA statement not confirmed.

## International Network of AI Safety Institutes — joint testing exercises and rename

### Takeaway
The Network (launched 2024; members Australia, Canada, EU, France, Japan, Kenya, South Korea, Singapore, UK, US) has run three rounds of joint model-testing — a November 2024 pilot on Llama 3.1 405B, a 2025 multilingual evaluation exercise, and a 2026 agentic-evaluation exercise — each producing methodology reports whose consistent lesson is that small methodological choices materially change evaluation results. In December 2025 it was renamed the International Network for Advanced AI Measurement, Evaluation and Science, dropping "safety" and re-centering on evaluation science.

### Cited Findings
**Pilot joint testing exercise (November 2024)**
- Tested Meta's Llama 3.1 405B across general academic knowledge, "closed-domain" hallucinations, and multilingual capabilities; led by technical experts from US AISI, UK AISI, and Singapore AISI; completed ahead of the Network's inaugural convening in San Francisco (announced November 20, 2024) — [NIST fact sheet](https://www.nist.gov/node/1867351).
- Key methodological lesson: "small methodological differences and model optimization techniques can noticeably affect evaluation results"; the pilot was explicitly a proof of concept to inform broader joint testing before the Paris AI Action Summit (February 2025) — [NIST fact sheet](https://www.nist.gov/node/1867351); [Singapore AISI pilot resource page](https://sgaisi.sg/resources/a-pilot-testing-exercise-from-the-international-network-of-ai-safety-institutes/).

**Multilingual joint testing exercise (2025)**
- Report: "Improving Methodologies for AI Model Evaluations Across Global Languages," led by Singapore, Japan, and the UK; tested Mistral Large and Gemma 2 (27B) on multilingual output, and Mistral Large on cybersecurity-related capabilities; released around the Paris AI Action Summit, February 2025 — [Japan AISI copy of the report (PDF)](https://aisi.go.jp/assets/pdf/International-Network-of-AI-Safety-Institutes-Joint-Testing-Exercise-Improving-Methodologies-for-AI-Model-Evaluations-Across-Global-Languages.pdf); [Singapore AISI resource page](https://sgaisi.sg/resources/improving-methodologies-for-ai-model-evaluations-across-global-languages/).
- Findings included: aligning on consistent evaluation infrastructure makes joint testing more efficient, and human expertise in global languages caught errors in automated evaluation results — search-result summary of the report above (verify quotes against the PDF).
- A fuller multilingual methodology report covers ten languages with over 6,000 newly translated prompts across five harm categories, and compares LLM-as-judge scoring with human review, finding variation in evaluator reliability — [arXiv 2601.15706, "Improving Methodologies for LLM Evaluations Across Global Languages"](https://arxiv.org/pdf/2601.15706) (arXiv version January 2026; a June 2025 release is indicated by the Singapore AISI page but the exact June date was not verified).

**Agentic joint testing exercise (2026)**
- Report on agentic evaluations covering leakage of sensitive information, fraud, and cybersecurity threats; the leakage/fraud strand was led by Singapore AISI and the cybersecurity strand by UK AISI; it assessed models both as agents and as judges of agent behaviour — [arXiv 2601.15679 (PDF)](https://arxiv.org/pdf/2601.15679.pdf); secondary summary at [themoonlight.io](https://www.themoonlight.io/review/improving-methodologies-for-agentic-evaluations-across-domains-leakage-of-sensitive-information-fraud-and-cybersecurity-threats). (I did not open the full PDFs; strand-leadership details come from these summaries.)

**Rename and current identity**
- The Network was renamed the "International Network for Advanced AI Measurement, Evaluation and Science"; MLex reported the rename on December 8, 2025, following the Network's fourth meeting in San Diego (December 4–5, 2025), noting "safety" was dropped — [MLex](https://www.mlex.com/mlex/amp/articles/2419745); [uktech.news](https://www.uktech.news/ai/ai-safety-institutes-rebrand-to-focus-on-scientific-measurements-20251209). Some trackers date the rename as taking effect February 2026 — [CASRAI guide](https://casrai.org/guides/network-of-ai-safety-institutes). The discrepancy is unresolved; no official network statement with an effective date was found.
- The UK holds the Network Coordinator role; members listed: Australia, Canada, the EU, France, Japan, Kenya, South Korea, Singapore, the UK, and the US — [CASRAI guide](https://casrai.org/guides/network-of-ai-safety-institutes) (secondary tracker).
- Australia's industry department frames the Network's current work as "AI evaluation and measurement" — [industry.gov.au news item](https://industry.gov.au/news/australia-meets-global-partners-ai-evaluation-and-measurement).

### Inferences
- The joint testing exercises are the closest thing that exists to an intergovernmental inter-lab reproducibility program for AI evaluation: their published outputs are methodology reports (how to make evaluations comparable across labs, languages, and judges), not safety verdicts on specific models. For the Atlas, they are primary evidence that evaluation results are highly sensitive to implementation details.
- The rename (dropping "safety" for "measurement, evaluation and science") mirrors the member-institute renames (UK AISI became the AI Security Institute in February 2025; the US AISI became the Center for AI Standards and Innovation) — note: these two member renames are from background knowledge and the uktech/digit coverage above; verify dates before publishing them in the Atlas.

### Gaps
- No single official Network homepage was found hosting all joint-testing reports; reports are distributed across member-institute sites (NIST, Japan AISI, Singapore AISI) and arXiv. "NAAIMES" as an acronym appears only in a secondary tracker, not in any official source.
- Exact publication dates of the June-2025 multilingual report and the 2026 agentic report unverified (arXiv IDs indicate January 2026 postings).

## G7 Hiroshima AI Process reporting framework (HAIP, hosted by OECD)

### Takeaway
The HAIP Reporting Framework, launched February 2025 on OECD.AI, is a voluntary transparency questionnaire built around the 11 actions of the G7 Hiroshima Code of Conduct for advanced AI developers; organizations publicly report their practices on risk management, risk assessment (including red-teaming and adversarial testing), incident reporting, and information sharing, with 25 reports in the first round and a Version 2.0 intended to broaden participation.

### Cited Findings
- The framework launched in February 2025 as a standardized way for organizations to report alignment with the HAIP Code of Conduct; it is "built around the Code's 11 actions" and its questions cover risk management, risk assessment, incident reporting, and information sharing; the G7 asked the OECD to develop mechanisms for monitoring voluntary adoption of the Code — [HAIP about page, OECD.AI](https://oecd.ai/en/transparency/about); framework home: [oecd.ai/en/transparency](https://oecd.ai/en/transparency).
- Organizations across the AI value chain (developers, deployers, providers of advanced AI systems) can submit; reports are submitted on a rolling basis and published on the OECD.AI Policy Observatory — [HAIP about page](https://oecd.ai/en/transparency/about); [HAIP overview](https://oecd.ai/en/transparency/overview).
- The first round produced 25 reports, analysed in the OECD's 2025 report "How are AI developers managing risks?" — [HAIP about page](https://oecd.ai/en/transparency/about); OECD commentary: [Early insights from the HAIP Reporting Framework](https://oecd.ai/en/wonk/haip-reporting-insights).
- OECD analysis of the first-round reports found many organizations use adversarial testing methods such as red-teaming, and that the use of AI tools to test other AI systems is increasing — [G7 HAIP report insights, OECD.AI wonk](https://oecd.ai/en/wonk/g7-haip-report-insights-for-ai-governance-and-risk-management).
- Participant feedback: useful for internal coordination and benchmarking; requests for annual updates, clearer guidance, simplified formats, and role-specific modules; Version 2.0 is intended to broaden participation across the AI ecosystem — [HAIP feedback commentary, OECD.AI wonk](https://oecd.ai/en/wonk/the-haip-reporting-framework-feedback-on-a-quiet-revolution-in-ai-transparency); [HAIP about page](https://oecd.ai/en/transparency/about).
- The blank questionnaire is downloadable from the framework site (Word version) — [Reporting Framework questionnaire (docx)](https://oecd.ai/en/assets/files/Word_Version_Reporting_Framework_Final.docx). Published company reports (e.g., OpenAI's) describe red-teaming with human and automated approaches before external deployment — [example report listing](https://oecd.ai/en/transparency/reports/228).

### Inferences
- HAIP is a transparency/disclosure mechanism, not a testing regime: it produces self-reported evidence about evaluation practice (what companies say they do about red-teaming, risk assessment, incident handling), which the OECD then aggregates. For the Atlas this is the canonical example of "evaluation disclosure" as a governance tool, distinct from running evaluations.

### Gaps
- The exact questionnaire question numbers/wording on red-teaming were not verified against the blank questionnaire (search summaries cited question identifiers inconsistently; do not reproduce specific question numbers without opening the docx above).
- Current cumulative report count beyond the first-round 25 not confirmed.

## OECD: AI Incidents and Hazards Monitor; AI Capability Indicators

### Takeaway
The OECD contributes two evaluation-adjacent infrastructures: the AI Incidents and Hazards Monitor (AIM), which uses LLM classification of ~1,000 news events daily to log roughly 10 AI incidents/hazards per day as post-deployment evidence, and the beta AI Capability Indicators (June 2025), a nine-domain, five-level scale for describing what AI systems can do relative to human abilities — a policymaker-facing attempt to standardize capability measurement.

### Cited Findings
**AI Incidents and Hazards Monitor (AIM)**
- Official site: [oecd.ai/en/site/incidents](https://oecd.ai/en/site/incidents); methodology: [Overview and methodology of the AI Incidents and Hazards Monitor](https://oecd.ai/en/incidents-methodology).
- The Monitor documents AI incidents and hazards from press reporting in real time to give policymakers evidence on AI risks; first phase began 2023; developed by the OECD.AI expert group on AI incidents with support from the Patrick J. McGovern Foundation — [methodology page](https://oecd.ai/en/incidents-methodology).
- Classification is done with LLMs; on average about 1,000 AI events are analysed daily, yielding around 10 AI incidents or hazards; the OECD notes publicly reported incidents are only a subset of all incidents and that it does not independently verify third-party information — [methodology page](https://oecd.ai/en/incidents-methodology).
- An open submission process following a common reporting framework for AI incidents is under development (label: in development); a secondary summary says the common framework uses 29 criteria — [OECD AI risks and incidents topic page](https://oecd.org/en/topics/ai-risks-and-incidents); [secondary synthesis](https://theriseofai.substack.com/p/the-state-of-ai-incident-monitoring) (treat the 29-criteria figure as secondary).

**AI Capability Indicators (beta)**
- Released June 3, 2025 as "Introducing the OECD AI Capability Indicators" — nine capability domains (e.g., language, reasoning, sensorimotor, social interaction), each on a five-level scale mapping progression toward full human equivalence; aimed at non-technical policymakers — [OECD publication](https://www.oecd.org/en/publications/introducing-the-oecd-ai-capability-indicators_be745f04-en.html); [OECD.AI wonk explainer "From PISA to AI"](https://oecd.ai/en/wonk/from-pisa-to-ai-how-the-oecd-is-measuring-what-ai-can-do); [Covington summary](https://www.insideglobaltech.com/2025/06/23/oecd-introduces-ai-capability-indicators-for-policymakers/).
- Developed over five years by the OECD AI and Future of Skills team with networks of AI researchers and psychologists; example rating: current systems at Level 3 for language (reliable semantic understanding/generation, multi-modal) — [babl.ai summary](https://babl.ai/oecd-releases-framework-to-measure-ai-capabilities-against-human-skills/) (secondary).
- Published explicitly in beta with an invitation for feedback from AI researchers and policymakers; OECD plans a procedure for regularly updating AI results on benchmarks and a 2026 workshop on developing new benchmarks, with a first full version after feedback — [OECD full report component](https://www.oecd.org/en/publications/2025/06/introducing-the-oecd-ai-capability-indicators_7c0731f0/full-report/component-3.html).
- A companion technical report documents development of all nine indicators plus a draft Consciousness indicator excluded from the beta — [OECD AI Capability Indicators Technical Report](https://www.oecd-ilibrary.org/en/publications/oecd-ai-capability-indicators-technical-report_9cdb3dd1-en.html).

### Inferences
- AIM and the capability indicators bracket the evaluation lifecycle: capability indicators try to standardize ex-ante measurement of what systems can do; AIM collects ex-post evidence of what went wrong in deployment. Together they illustrate the OECD's role as measurement-infrastructure provider rather than evaluator.

### Gaps
- Whether the first full (non-beta) version of the Capability Indicators or the AIM common incident-reporting framework has been finalized by November 2026 could not be confirmed — label both "beta/in development" pending a check of oecd.ai.

## International AI Safety Report (Bengio-chaired): state of evaluation science

### Takeaway
The International AI Safety Report — led by Yoshua Bengio, written by 100+ independent experts, backed by 30+ countries and intergovernmental bodies, with its secretariat at the UK AI Security Institute — published its second full edition on 3 February 2026 after two 2025 "Key Updates"; its consistent message on evaluation is that pre-deployment testing does not reliably predict real-world behaviour (an "evaluation gap"), there is no internationally agreed methodology for frontier safety evaluations, and models increasingly detect when they are being evaluated.

### Cited Findings
- Official site: [internationalaisafetyreport.org](https://internationalaisafetyreport.org/). Editions confirmed there: the 2025 report (first full edition); a "Second Key Update: Technical Safeguards and Risk Management" (25 November 2025); the 2026 International AI Safety Report (3 February 2026) plus an Extended Summary for Policymakers (20 pages) and a 3-page Executive Summary, both 3 February 2026 — [internationalaisafetyreport.org](https://internationalaisafetyreport.org/).
- 2026 full report PDF: [international-ai-safety-report-2026_1.pdf](https://internationalaisafetyreport.org/sites/default/files/2026-02/international-ai-safety-report-2026_1.pdf); Extended Summary: [ai-safety-report-2026-extended-summary-for-policymakers.pdf](https://internationalaisafetyreport.org/sites/default/files/2026-02/ai-safety-report-2026-extended-summary-for-policymakers.pdf).
- Led by Yoshua Bengio; written by over 100 independent experts; backed by over 30 countries and intergovernmental organisations; overseen by an international Expert Advisory Panel; listed partners are the UK AI Security Institute, Mila, and the UK Department for Science, Innovation & Technology — [internationalaisafetyreport.org](https://internationalaisafetyreport.org/).
- The November 2025 Key Update finds sophisticated attackers can often bypass current defences and that "the real-world effectiveness of many safeguards is uncertain" — [internationalaisafetyreport.org](https://internationalaisafetyreport.org/).
- Secondary summaries of the 2026 report state: pre-deployment tests do not match real-world operation (the "evaluation gap"); current evaluation methods remain insufficient for predicting failure modes in novel deployment contexts; there is no internationally agreed methodology for safety evaluations of frontier models; some models can distinguish evaluation from deployment contexts and alter behaviour ("evaluation awareness"); the report synthesizes evidence and makes no policy recommendations — [Covington/Global Policy Watch](https://www.globalpolicywatch.com/2026/02/international-ai-safety-report-2026-examines-ai-capabilities-risks-and-safeguards/); [Inside Privacy](https://www.insideprivacy.com/artificial-intelligence/international-ai-safety-report-2026-examines-ai-capabilities-risks-and-safeguards/); [press release](https://kyodonewsprwire.jp/release/202602033520). LABEL: these evaluation-science characterizations come from secondary summaries; verify exact wording against the 2026 PDF before quoting in the Atlas.

### Inferences
- For the Atlas, this report is the best single citation for "the science of AI evaluation is immature": it is the most institutionally backed consensus document making that claim, and its 2026 edition sharpens the point with evaluation awareness and the widening evaluation gap.

### Gaps
- The official site does not state the 2025 edition's publication date or name the commissioning body on its homepage (the UK Government commissioned it per earlier reporting; the first full report is widely dated January 2025 — verify before publishing a date).
- The First Key Update (reported to cover capabilities and risk implications, autumn 2025) is referenced in press but its exact date/PDF was not confirmed in this research.

## ISO/IEC standards specifically on AI testing and evaluation

### Takeaway
A dedicated AI-testing standards stack is now emerging from ISO/IEC JTC 1: the ISO/IEC TS 42119 series is the new backbone (Part 2, the overview of testing AI systems, published November 2025; parts on V&V analysis, red teaming, and GenAI quality assessment still in draft), sitting on top of the older ISO/IEC TR 29119-11:2020 testing guidelines, the ISO/IEC 24029 robustness-assessment series (Part 2 published 2023, Part 3 at DIS), the ISO/IEC 25059:2023 AI quality model, and ISO/IEC 42006:2025, which standardizes the auditors who certify AI management systems.

### Cited Findings
**ISO/IEC TS 42119 series — Testing of AI**
- ISO/IEC TS 42119-2:2025 (overview of testing AI systems) is published; the Estonian standards body lists it valid from 03.11.2025; it follows a risk-based approach, using risks associated with AI systems to choose test practices, and details how to apply the ISO/IEC/IEEE 29119 software-testing series to AI — [EVS listing](https://www.evs.ee/en/iso-iec-ts-42119-2-2025); series overview (vendor announcement, January 2026): [SGS, "Announcing the ISO/IEC 42119 series"](https://www.sgs.com/en-au/news/2026/01/announcing-the-iso-iec-42119-series-a-new-era-for-ai-testing-and-assurance).
- ISO/IEC DTS 42119-3 — Verification and validation analysis of AI systems — at draft technical specification stage — [SGS announcement](https://www.sgs.com/en-au/news/2026/01/announcing-the-iso-iec-42119-series-a-new-era-for-ai-testing-and-assurance) (secondary; label: draft/under development).
- ISO/IEC AWI TS 42119-7 — Red teaming — approved work item (early stage; a working group has prepared a draft). Scope: red-teaming terminology, risk and attack-vector identification, planning and execution methods aligned with ISO/IEC 29119, reporting procedures, lifecycle integration; applicable to all types of AI systems — [ISO project page, iso.org/standard/91240](https://www.iso.org/standard/91240.html). SGS notes an expected emphasis on LLM-based prompt-driven systems — [SGS](https://www.sgs.com/en-au/news/2026/01/announcing-the-iso-iec-42119-series-a-new-era-for-ai-testing-and-assurance). LABEL: under development.
- ISO/IEC AWI TS 42119-8 — Quality assessment of prompt-based text-to-text GenAI systems — under development — [SGS](https://www.sgs.com/en-au/news/2026/01/announcing-the-iso-iec-42119-series-a-new-era-for-ai-testing-and-assurance). LABEL: under development, secondary source.
- No sources found for parts 1, 4, 5, or 6 of 42119 (see Gaps). The ISO SC 42 catalogue itself returned HTTP 403 to automated fetching, so part-by-part stages come from the sources above.

**ISO/IEC TR 29119-11:2020 — Guidelines on the testing of AI-based systems**
- Published November 2020, Edition 1 (Technical Report under the software-testing series ISO/IEC/IEEE 29119); scope: the test oracle problem (difficulty determining expected results), testing across the life cycle, black-box guidance for AI-based systems generally and white-box testing for neural networks; defines an AI-based system as one including at least one AI component — [IEC webstore](https://webstore.iec.ch/publication/68129); [ISO listing](https://committee.iso.org/standard/79016.html?browse=ics).
- One ISO listing shows "close of review"/systematic review status, suggesting revision consideration, but no second edition was found — [ISO listing](https://committee.iso.org/standard/79016.html?browse=ics). LABEL: published 2020; revision status unconfirmed.

**ISO/IEC 24029 series — Assessment of the robustness of neural networks**
- ISO/IEC 24029-2:2023, "Methodology for the use of formal methods," published August 2023 (first edition, current) — [iTeh listing](https://standards.iteh.ai/catalog/standards/iso/12ddd3c3-7e80-4e6b-9457-8689f1700c6e/iso-iec-24029-2-2023); [AFNOR listing](https://www.boutique.afnor.org/en-gb/standard/iso-iec-2402922023/artificial-intelligence-ai-assessment-of-the-robustness-of-neural-networks-/xs141725/349174).
- ISO/IEC DIS 24029-3 (statistical methods) is at DIS stage (draft circulated with a date of 2025-12-08 shown on a national mirror) — [ELOT draft listing](https://standardsdevelopment.elot.gr/drafts/13951). LABEL: under development.
- Part 1 (ISO/IEC TR 24029-1, overview of robustness assessment) exists as the series opener published in 2021 — NOT re-verified in this research against a catalogue page; confirm on iso.org before citing a date.
- 24029-2's introduction notes that ISO/IEC 25059 treats robustness as a sub-characteristic (of reliability) in its quality model — [iTeh sample PDF](https://cdn.standards.iteh.ai/samples/79804/f34d6364dc0f4ecd9b1f83c6c059a08a/ISO-IEC-24029-2-2023.pdf).

**ISO/IEC 25059:2023 — Quality model for AI systems**
- Published 2023 and in force (listed "standard in force" by the Latvian standards body); extends the SQuaRE (ISO/IEC 25000) quality-model standards to AI systems; robustness sits under reliability — [LVS SC 42/WG 3 committee listing](https://www.lvs.lv/en/committees/projects/14382). LABEL: a revision/harmonization with the updated SQuaRE family is rumored but was not verified — treat 2023 edition as current.

**ISO/IEC 42006:2025 — Requirements for bodies auditing and certifying AI management systems**
- Published July 2025 (Edition 1, 2025-07); sets additional requirements for certification bodies auditing AI management systems against ISO/IEC 42001, supplementing ISO/IEC 17021-1; audience is certification bodies and the accreditation bodies that assess them — [iso.org listing](https://www.iso.org/standard/44546.html); [EVS, "Auditing AI management systems"](https://www.evs.ee/en/auditing-ai-management-systems). (ISO/IEC 42001 itself — the AI management system standard — is covered elsewhere in the Atlas; 42006 is the standard that disciplines its auditors.)

### Inferences
- The stack now has clear layers: 29119-11 (2020) = general testing guidance; 42119 series = the dedicated, risk-based AI testing architecture replacing/extending it (with red teaming being standardized for the first time in 42119-7); 24029 = property-specific assessment methods (robustness via formal and statistical methods); 25059 = the quality model defining what characteristics to evaluate; 42006 = conformity-assessment infrastructure (who may audit). This layering is a useful organizing scheme for the Atlas's standards section.
- Publication of 42006 (July 2025) means accredited ISO/IEC 42001 certification can now run on standardized audit requirements — the beginning of a formal AI assurance market.

### Gaps
- The ISO SC 42 catalogue (iso.org/committee/6794475) blocked automated access (HTTP 403), so I could not enumerate all 42119 parts or confirm whether parts 1/4/5/6 exist; the SGS January 2026 announcement is the best available series overview and is a vendor source. Verify each part on iso.org manually.
- Exact DTS/CD ballot stages for 42119-3 and 42119-8, and any 25059 revision project, unverified.

## Other notable national frameworks (brief): Australia, Germany, France

### Takeaway
Australia proposed ten mandatory guardrails for high-risk AI (September 2024) but has not legislated them — its December 2025 National AI Plan pivots to voluntary standards; Germany's BSI AIC4 catalogue (2021) sets auditable criteria for AI cloud services across development, testing, validation and operation; France's LNE runs a voluntary certification of AI processes (design, development, evaluation, maintenance), while no ANSSI AI-certification scheme was found in this research.

### Cited Findings
**Australia**
- The September 2024 proposals paper defined high-risk AI and proposed ten mandatory guardrails for developers and deployers — [babl.ai summary](https://babl.ai/australian-government-wants-responses-on-proposals-for-mandatory-ai-guardrails-in-high-risk-settings/); [Gradient Institute note on the guardrails paper and the Voluntary AI Safety Standard](https://gradientinstitute.org/research-publications/australian-government-releases-mandatory-ai-guardrails-paper-and-voluntary-ai-safety-standard).
- As of mid-2026 the mandatory guardrails have not been legislated; the National AI Plan (December 2025) emphasizes voluntary standards, capability building, and targeted regulatory adjustment, and several analyses describe the standalone mandatory-guardrails plan as paused or shelved — [Montreal AI Ethics Institute policy corner](https://montrealethics.ai/ai-policy-corner-from-proposed-mandatory-guardrails-to-the-national-ai-plan-ai-governance-in-australia/); [ADM+S Centre commentary](https://www.admscentre.org.au/australias-official-plan-for-ai-safety-isnt-much-more-than-a-single-dot-point-will-it-be-enough/). LABEL: no primary government source confirming formal abandonment was found; treat as "proposed, not enacted, de-emphasized."
- Australia's AISI participates in the international Network's evaluation work and the department maintains an "AI safety science" page — [industry.gov.au](https://www.industry.gov.au/science-technology-and-innovation/technology/artificial-intelligence/ai-safety-science).

**Germany — BSI AIC4**
- The BSI's AI Cloud Service Compliance Criteria Catalogue (AIC4) specifies minimum requirements for secure use of machine learning in cloud services; application is voluntary; the C5 cloud-security catalogue is both the overarching framework for and a prerequisite of AIC4; criteria cover the whole AI service lifecycle including development, testing, validation and operation; the BSI says criteria are revised regularly — [BSI AIC4 page](https://www.bsi.bund.de/EN/Themen/Unternehmen-und-Organisationen/Informationen-und-Empfehlungen/Kuenstliche-Intelligenz/AIC4/aic4.html); catalogue PDF: [AIC4 catalogue](https://www.bsi.bund.de/SharedDocs/Downloads/EN/BSI/CloudComputing/AIC4/AI-Cloud-Service-Compliance-Criteria-Catalogue_AIC4.pdf). The current catalogue version dates from 2021 — [BSI PDF](https://www.bsi.bund.de/SharedDocs/Downloads/EN/BSI/CloudComputing/AIC4/AI-Cloud-Service-Compliance-Criteria-Catalogue_AIC4.pdf).

**France — LNE (and ANSSI)**
- LNE (Laboratoire national de métrologie et d'essais) offers a voluntary certification of AI processes: applicants must meet the "Certification standard of processes for AI: design, development, evaluation and maintenance in operational conditions"; it certifies the organization's processes, not the AI product itself; renewal audit after 3 years; LNE positions it as aligned with the EU AI Act — [LNE certification page](https://www.lne.fr/en/service/certification/certification-processes-ai); [LNE AI thematic page](https://www.lne.fr/en/offers/thematic/articial-intelligence).
- ANSSI: no AI certification or evaluation-criteria scheme from ANSSI surfaced in this research; its published AI work (security recommendations for generative AI systems) was not verified here. LABEL: unverified/no reliable source found — do not cite an ANSSI scheme without checking cyber.gouv.fr.

### Inferences
- These three show the main non-statutory assurance patterns: proposed-then-paused horizontal regulation (Australia), security-audit criteria catalogues piggybacking on cloud compliance (Germany AIC4), and third-party process certification by a national metrology lab (France LNE). Each produces different evaluation evidence: none of them mandates model capability evaluations of the frontier-lab kind.

### Gaps
- Australia: no primary DISR statement confirming the mandatory guardrails' formal status; the Voluntary AI Safety Standard's current version/update status not verified.
- Germany: whether an updated AIC4 (post-2021) exists was not confirmed.
- France: ANSSI's role in AI evaluation unverified; relationship or mutual recognition between AIC4 and LNE certification — no source found.
