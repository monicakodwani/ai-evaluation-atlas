# US Federal Government AI Evaluation Frameworks and Programs (as of November 2026)

Research date: 2026-11-11. All statuses below are as observed/verified on this date. A September 2026 Executive Order (see final section) has NIST mid-rebrand from "AI" to "SI" ("Super Intelligence") terminology, so several official page titles and program names are in flux; URLs recorded here were live at research time.

## What is the NIST TEVV-Athlon Framework for Evaluating AI Systems?

### Takeaway
TEVV-Athlon (NIST AI 200-2) is NIST's August 2026 draft framework giving organizations a four-stage method for designing customized, multi-event evaluations ("athlons") of AI systems — statistical ML, LLMs, multimodal, and agentic systems — tying benchmarks, red teaming, and field testing together into one assessment design. It is an Initial Public Draft whose comment period closed October 6, 2026; no final version had been published as of November 11, 2026.

### Cited Findings
- Official page: "TEVV-Athlon Framework for Evaluating AI Systems," described as a structured approach for assessing real-world impact and outcomes of AI systems; extensible/adaptable/customizable across many kinds of AI including statistical machine learning models, LLMs, multimodal models, and agentic systems — [NIST TEVV-Athlon page](https://www.nist.gov/artificial-intelligence/ai-research/tevv-athlon-framework-evaluating-ai-systems)
- Document: NIST AI 200-2 ipd (Initial Public Draft), NIST Trustworthy and Responsible AI series, dated August 2026; announced August 7, 2026; DOI https://doi.org/10.6028/NIST.AI.200-2.ipd; PDF https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.200-2.ipd.pdf — [NIST TEVV-Athlon page](https://www.nist.gov/artificial-intelligence/ai-research/tevv-athlon-framework-evaluating-ai-systems)
- Authors (from the draft PDF title page): P. Jonathon Phillips, Theodore Jensen, Patrick Hall (NIST Associate, HallResearch.ai), Razvan Amironesei, Yee-Yin Choong, Craig Greenberg, Kristen K. Greene — mostly NIST ITL Technology Test and Evaluation Division — [NIST AI 200-2 ipd PDF](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.200-2.ipd.pdf)
- The four stages (exact names, from the draft PDF): (1) **Articulate & Organize** — evaluators outline goals and plan the assessment; (2) **Define & Construct** — translate high-level requirements into a concrete assessment, defining "Metrology Blocks"; (3) **Apply & Measure** — determine Events and select Tools, then conduct the events; (4) **Synthesize & Interrogate** — analyze/synthesize collected data and present results — [NIST AI 200-2 ipd PDF](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.200-2.ipd.pdf)
- Core components (definitions from the draft): **Metrology Blocks** = "the key concepts or metrics which the evaluation aims to assess"; **Events** = "the activities which produce evidence for each Block"; **Toolbox** = "set of methods and instruments used to elicit, collect, and analyze information from the Events" — [NIST AI 200-2 ipd PDF](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.200-2.ipd.pdf)
- The "athlon" metaphor is explicit: like a triathlon tests athletes across swimming, biking, and running, a TEVV-Athlon tests AI systems across multiple events to assess overall fitness for an organization's goals; a worked example uses a PII Leakage Block fed by Red Teaming and Accounts-of-Organizational-PII-Leakage Events — [NIST AI 200-2 ipd PDF](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.200-2.ipd.pdf)
- Relationship to the AI RMF: the RMF's Map and Govern functions serve as inputs to Stage 1, and Stage 4 outputs inform the Manage function — [NIST AI 200-2 ipd PDF](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.200-2.ipd.pdf)
- Appendices catalog a "TEVV Toolbox": Appendix A — Selected AI Benchmarks; Appendix B — Selected AI Red Teaming Methods; Appendix C — Selected User and Field Testing Methods — [NIST AI 200-2 ipd PDF](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.200-2.ipd.pdf)
- Public comment period: 60 days, August 7 – October 6, 2026, via TEVV-Athlon@nist.gov with "NIST AI 200-2" in the subject; NIST sought input on TEVV definitions, flexibility/scope, gaps, applicability to emerging AI systems; intended audience includes organizations conducting AI evaluations and users of evaluation reports (business decision-makers, procurement specialists, researchers, technical staff); contact: P. Jonathon Phillips — [NIST TEVV-Athlon page](https://www.nist.gov/artificial-intelligence/ai-research/tevv-athlon-framework-evaluating-ai-systems); confirmed in [NIST AI 200-2 ipd PDF](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.200-2.ipd.pdf)
- The page is now filed under NIST's "SI Research" (Super Intelligence) section following the September 2026 terminology EO — [NIST TEVV-Athlon page](https://www.nist.gov/artificial-intelligence/ai-research/tevv-athlon-framework-evaluating-ai-systems)

### Inferences
- TEVV-Athlon is the closest thing to a general-purpose "how to design an AI evaluation" methodology the US government has published: it is meta-evaluation guidance (how to compose benchmarks + red teaming + field tests into one assessment) rather than a specific test suite, making it highly relevant for an Atlas teaching evaluation practice.
- Its structure operationalizes the measurement layer the AI RMF 1.0 called for but never specified.

### Gaps
- No final (post-draft) version found as of 2026-11-11; whether/when NIST AI 200-2 will be finalized is unknown.
- No pilots or worked deployments of the framework are mentioned on the NIST page; the draft contains an illustrative example TEVV-Athlon, but I did not extract its full details from the PDF.

## What is NIST ARIA (Assessing Risks and Impacts of AI)?

### Takeaway
ARIA is NIST ITL's evaluation program for measuring risks and impacts of LLM-based applications in realistic contexts, using three escalating testing levels (model testing, red teaming, field testing). Its ARIA 0.1 pilot ran December 2024–January 2025 with 5 organizations and 7 applications across three scenarios; the pilot report (NIST AI 700-2) was published November 13, 2025. No post-pilot "ARIA 1.0" iteration was found as of November 2026.

### Cited Findings
- Program page: ARIA is "the latest evaluation in a portfolio" managed by NIST's Information Technology Laboratory; sector- and task-agnostic; focused on risks and impacts of LLMs; aims to measure "technical and contextual robustness" beyond system performance and accuracy — [ARIA program page](https://ai-challenges.nist.gov/aria)
- Methodology: three evaluation levels — model testing, red-teaming, and field testing — [ARIA program page](https://ai-challenges.nist.gov/aria)
- Program schedule as posted: May 2024 kickoff + Evaluation Plan release; August 2024 plan update; November 12, 2024 Workshop 1; December 2024–January 2025 pilot testing; February–May 2025 pilot analysis; Summer 2025 pilot summary report — [ARIA program page](https://ai-challenges.nist.gov/aria)
- Pilot report: "Assessing Risks and Impacts of AI (ARIA): Pilot Evaluation Report," NIST AI 700-2 (Trustworthy and Responsible AI series), published November 13, 2025; authors: Razvan Amironesei, Afzal Godil, Craig Greenberg, Kristen Greene, Johnston Patrick Hall, Theodore Jensen, Jonathan Fiscus, Noah Schulman; DOI https://doi.org/10.6028/NIST.AI.700-2; PDF https://tsapps.nist.gov/publication/get_pdf.cfm?pub_id=960511 — [NIST publication page](https://www.nist.gov/publications/assessing-risks-and-impacts-ai-aria-pilot-evaluation-report)
- ARIA 0.1 pilot design: three scenarios — **TV Spoilers**, **Meal Planner**, **Pathfinder** — across the three testing levels; "Five organizations participated, submitting a total of 7 AI applications to be evaluated"; assessment methods were dialogue annotation and tester questionnaires, plus an approach to measuring application validity using "measurement trees" — [NIST publication page](https://www.nist.gov/publications/assessing-risks-and-impacts-ai-aria-pilot-evaluation-report)
- The pilot "demonstrates the feasibility of a new approach to evaluation of AI systems: combining data from expert annotators and human testers, illustrated by a transparent measurement tool"; ARIA is explicitly "not a certification program" but is meant to inform future standards and best practices — [search summary of NIST publication and ARIA pages](https://www.nist.gov/publications/assessing-risks-and-impacts-ai-aria-pilot-evaluation-report)
- Program outputs are intended to be guidelines, tools, methodologies, and metrics organizations can use to evaluate their own systems and inform deployment decisions; future iterations "may consider" text-to-image models, recommender systems, or decision support tools — [ARIA program page](https://ai-challenges.nist.gov/aria)
- Supporting materials: ARIA document library at https://ai-challenges.nist.gov/aria/library; resources at https://ai-challenges.nist.gov/aria/resources; participant login listed as "Coming soon" — [ARIA program page](https://ai-challenges.nist.gov/aria)

### Inferences
- ARIA's three-level design (model testing → red teaming → field testing with human participants) is pedagogically the clearest US government articulation that benchmark scores alone don't establish real-world safety — a useful contrast case for the Atlas against pure-benchmark programs.
- The ARIA page's latest dated milestone remains the 2025 pilot report; combined with the "coming soon" login, the program appears paused or between iterations as of late 2026.

### Gaps
- No announcement of a full ARIA 1.0 evaluation round after the 0.1 pilot was found; current program status (active/paused) is not stated on the official page.
- Quantitative pilot findings (per-scenario or per-level results) were not extracted; the publication page describes design and methods only — the full NIST AI 700-2 PDF would be needed.
- The ARIA page links a PDF it labels "Evaluation Plan"; the separate standalone ARIA Evaluation Plan document (May 2024, updated August 2024) exists per the schedule, but I could not confirm its own report number — do not cite a number for it.

## Other NIST AI evaluation efforts: Dioptra, GenAI challenge, AI RMF updates, AISIC

### Takeaway
Dioptra (NCCoE's open AI/ML security testbed) remains maintained with 2026 documentation updates and webinars; the NIST GenAI pilot challenge produced the NIST AI 700-1 text-to-text detection results (June 2025); AI RMF 1.0 is still the current version with a revision in progress per the July 2025 AI Action Plan; AISIC now appears as the "NIST AI Consortium" under the SI rebrand.

### Cited Findings
**Dioptra**
- Dioptra is an experimentation testbed from NIST's National Cybersecurity Center of Excellence (NCCoE) "to facilitate security evaluations of ML algorithms"; modular design lets researchers swap datasets, models, attacks, and defenses — [OECD tools catalogue entry](https://oecd.ai/en/catalogue/tools/dioptra); [NCCoE learning-series event](https://www.nccoe.nist.gov/get-involved/attend-events/nccoe-learning-series-overview-nccoes-dioptra-aiml-test-platform)
- NIST re-released Dioptra in 2024 as a testbed to measure the impact of adversarial attacks on AI systems, a deliverable under the 2023 Biden AI executive order — [Yahoo/TechCrunch coverage](https://news.yahoo.com/news/nist-releases-tool-testing-ai-152516909.html)
- 2026 activity: Dioptra documentation updated February 11, 2026; an NCCoE webinar scheduled June 9, 2026 showcased the NIST PETs Testbed and Dioptra for AI cybersecurity/privacy, including a genomics-team collaboration using Dioptra for AI model training and provenance tracking — [NCCoE webinar page](https://www.nccoe.nist.gov/get-involved/attend-events/nist-nccoe-genomic-data-pets-testbed-dioptra-webinar)
- No 2026 announcement of a new major Dioptra release or formal evaluation program was found (status: maintained tool, not an evaluation campaign).

**NIST GenAI challenge**
- The 2024 NIST GenAI pilot study results are published as NIST AI 700-1, "2024 NIST GenAI (Pilot Study): Text-to-Text Evaluation Overview and Results," dated June 2025, covering both text generation and AI-text discrimination (detection) tasks — [NIST AI 700-1 PDF](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.700-1.pdf)
- Headline finding: AI-generated summaries are becoming more like human writing, yet detection models remain reasonably effective at distinguishing them — [NIST AI 700-1 PDF](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.700-1.pdf)
- Scale: 348 valid submissions from 11 teams for the text-to-text generator task (per the March 2025 workshop overview) — [NIST GenAI T2T Workshop Overview](https://ai-challenges.nist.gov/pub/NIST_GenAI_T2T_Workshop_Overview_050525.pdf)
- Program platform: https://ai-challenges.nist.gov/t2t; evaluation rules let participants publish their own results but forbid public cross-participant comparisons without written consent — [T2T page](https://ai-challenges.nist.gov/t2t)

**AI RMF status (brief — Atlas already covers RMF)**
- AI RMF 1.0 (NIST AI 100-1, January 2023) remains the current published version; NIST's resources page says a revised version is "in progress" with no successor ID, public draft, or schedule published (checked via multiple 2026 secondary sources) — [AIRC AI RMF resources](https://airc.nist.gov/airmf-resources/); [NIST AI RMF page](https://www.nist.gov/itl/ai-risk-management-framework)
- The revision stems from the July 2025 America's AI Action Plan, which directs NIST to revise the framework "to eliminate references to misinformation, Diversity, Equity, and Inclusion, and climate change" — [America's AI Action Plan PDF](https://www.whitehouse.gov/wp-content/uploads/2025/07/Americas-AI-Action-Plan.pdf); criticism noted by [CSET](https://cset.georgetown.edu/article/trumps-plan-for-ai-recapping-the-white-houses-ai-action-plan/)
- One low-quality source claims a draft "AI RMF 2.0" with an agentic-AI profile appeared April 8, 2026; this is uncorroborated and contradicted by later checks — treat as unverified — [callsphere.ai claim](https://callsphere.ai/blog/td30-rp-nist-ai-rmf-2-0-update), contradicted by [vorplabs tracker](https://vorplabs.com/security-framework-changes/nist-ai-rmf)

**AISIC / NIST AI Consortium**
- The consortium formerly known as AISIC is now linked from NIST's CAISSI page as the "NIST AI Consortium" at https://www.nist.gov/super-intelligence/nist-ai-consortium (URL observed on the live CAISSI page, November 2026) — [NIST CAISSI page](https://www.nist.gov/caisi)
- America's AI Action Plan recommends NIST "convene the NIST AI Consortium" as part of building an AI evaluations ecosystem — [America's AI Action Plan PDF](https://www.whitehouse.gov/wp-content/uploads/2025/07/Americas-AI-Action-Plan.pdf)
- A related new program: the "SI Agent Standards Initiative" at https://www.nist.gov/super-intelligence/si-agent-standards-initiative — [NIST CAISSI page](https://www.nist.gov/caisi)

### Inferences
- NIST's evaluation portfolio now spans four distinct layers: a design methodology (TEVV-Athlon), a contextual-risk evaluation program (ARIA), capability/detection challenges (GenAI), and an adversarial-security testbed (Dioptra) — a useful taxonomy for the Atlas.

### Gaps
- A publication "NIST AI 800-3" on statistical validity of AI benchmark evaluations (CAISI + ITL) was mentioned only in secondary search summaries; I could not verify its title, date, or URL on nist.gov — treat as unverified until checked.
- AISIC/NIST AI Consortium membership count and current activities were not verified from the primary page.
- Per-team scores from the GenAI challenge were not extracted (full NIST AI 700-1 PDF not read).

## What is CAISI (Center for AI Standards and Innovation) doing on model evaluations?

### Takeaway
CAISI — the renamed US AI Safety Institute, renamed again in late 2026 to "CAISSI" (Center for Advancing Innovation and Standards for Super Intelligence) under the Super Intelligence EO — is the federal government's frontier-model evaluator. As of November 2026 it holds voluntary pre-deployment evaluation agreements with OpenAI, Anthropic, Google DeepMind, Microsoft, and xAI, and has published adversary-model assessments (DeepSeek 2025; Z.ai GLM-5.2/5.3 and Moonshot Kimi K3 in 2026, the latter jointly with UK AISI), plus agent-security research and incident-readiness guidance.

### Cited Findings
**Identity and mission**
- The US AI Safety Institute (housed at NIST, which signed pre-deployment testing MOUs with OpenAI and Anthropic in 2024) was renamed the Center for AI Standards and Innovation (CAISI) in June 2025 — [CDO Magazine](https://www.cdomagazine.tech/us-federal-news-bureau/ai-safety-institute-renamed-as-center-for-ai-standards-and-innovation); legacy page [US AISI](https://www.nist.gov/artificial-intelligence/us-artificial-intelligence-safety-institute)
- As of November 11, 2026, the official page at nist.gov/caisi is titled "Center for Advancing Innovation and Standards for Super Intelligence (CAISSI)" following the September 2026 terminology EO; mission: serve as "industry's primary point of contact within the U.S. government" to facilitate testing and collaborative research on commercial SI systems; establish voluntary agreements with developers and evaluators; lead unclassified evaluations of capabilities that may pose national security risks, focusing on cybersecurity, biosecurity, and chemical weapons; develop security measurement guidelines; represent US interests internationally — [NIST CAISSI page](https://www.nist.gov/caisi)

**Pre-deployment testing agreements**
- On May 5, 2026, CAISI announced voluntary pre-deployment evaluation agreements with Google DeepMind, Microsoft, and xAI, extending the program that already covered OpenAI and Anthropic (2024 agreements, since renegotiated under "updated MOUs") — [Axios](https://www.axios.com/2026/05/05/us-frontier-ai-testing-white-house-pivots-safety); [CIO Dive](https://www.ciodive.com/news/Google-Microsoft-xAI-to-face-security-testing/819375/)
- Scope: the government can evaluate partnered models before public release and continue assessing after deployment ("pre-deployment evaluations and targeted research to better assess frontier AI capabilities and advance the state of AI security") — [CIO Dive](https://www.ciodive.com/news/Google-Microsoft-xAI-to-face-security-testing/819375/)
- Limits: arrangements are voluntary; there is no legal mandate requiring pre-deployment testing and no mechanism compelling public disclosure of results — [CSA research note](https://labs.cloudsecurityalliance.org/research-rb/csa-research-note-nist-caisi-predeployment-evaluations-20260/)

**Published evaluation reports**
- September 2025: "CAISI Evaluation of DeepSeek AI Models Finds Shortcomings and Risks" — technical evaluation of three DeepSeek models against four US reference models, finding the PRC models lag US models — [NIST GovDelivery bulletin](https://content.govdelivery.com/accounts/USNIST/bulletins/3f48ce1); [MeriTalk coverage](https://meritalk.com/articles/caisi-report-finds-american-ai-dominates-deepseek-lags/)
- July 17, 2026: "CAISI Assessment of Z.ai's GLM-5.2" — https://www.nist.gov/news-events/news/2026/07/caisi-assessment-zais-glm-52 — [NIST CAISSI page](https://www.nist.gov/caisi)
- July 23, 2026: "UK AISI / CAISI Preliminary Assessment of Kimi K3's Cyber Capabilities" (joint with the UK AI Security Institute) — https://www.nist.gov/news-events/news/2026/07/uk-aisi-caisi-preliminary-assessment-kimi-k3s-cyber-capabilities — [NIST CAISSI page](https://www.nist.gov/caisi)
- September 17, 2026: "CAISI's Assessment of Z.ai's GLM-5.3 Cyber Capabilities" — https://www.nist.gov/news-events/news/2026/09/caisis-assessment-zais-glm-53-cyber-capabilities — [NIST CAISSI page](https://www.nist.gov/caisi)

**Guidance and research on evaluation methods**
- October 16, 2026: "Key Practices for Incident Readiness and Response in Super Intelligence Training and Evaluation" — https://www.nist.gov/news-events/news/2026/10/key-practices-incident-readiness-and-response-super-intelligence-training — [NIST CAISSI page](https://www.nist.gov/caisi)
- CAISSI research blog posts on evaluation methodology: "Cheating On AI Agent Evaluations" and "Accelerating AI Innovation Through Measurement Science" (both December 2, 2025); "Analyzing Transcripts from AI Agent Evaluations" (February 18, 2026); "Insights into AI Agent Security from a Large-Scale Red-Teaming Competition" (March 23, 2026), all under https://www.nist.gov/blogs/caissi-research-blog/ — [NIST CAISSI page](https://www.nist.gov/caisi)
- March 2026: CAISI signed an MOU with GSA to "test and measure AI systems before federal agencies use them" and to create evaluation guidelines and checklists other agencies can use — [NIST news release](https://www.nist.gov/news-events/news/2026/03/caisi-signs-mou-gsa-boost-ai-evaluation-science-federal-procurement-through); [GSA release](https://www.gsa.gov/about-us/newsroom/news-releases/gsa-and-nist-partner-to-boost-ai-evaluation-science-in-federal-procurement-03182026)
- Per implementation coverage of the AI Action Plan, CAISI received seventeen taskings and has completed more than 40 frontier-model evaluations, including on unreleased state-of-the-art models, with interagency evaluators participating via the CAISI-convened TRAINS Taskforce — reported in search-result coverage of NIST/fedscoop pages; primary NIST document not individually opened, so treat the "40+" and "seventeen taskings" figures as medium-confidence — [FedScoop](https://fedscoop.com/?p=89166); [Partnership on AI analysis](https://partnershiponai.org/understanding-the-us-ai-action-plan-gaps-and-opportunities/)

### Inferences
- CAISI/CAISSI has shifted the emphasis of US government model evaluation from "safety" framing toward national-security capability assessment (cyber/bio/chem) and competitive benchmarking against PRC models — visible in both its mission statement and its 2025–2026 report titles.
- The US now has a de-facto (voluntary, non-transparent) pre-deployment review regime covering all five major US frontier labs — a key milestone for the Atlas's "who evaluates frontier models" narrative.

### Gaps
- A reported April 2026 CAISI evaluation of a newer DeepSeek model ("DeepSeek V4 Pro" per one secondary tracker) could not be verified against a NIST primary source; do not cite without checking.
- The full texts of the pre-deployment MOUs are not public; renegotiated terms with OpenAI/Anthropic were not disclosed.
- CAISSI's "Guidelines" section (https://www.nist.gov/caissi/guidelines) exists but its specific documents were not enumerated.

## What do US federal agency rules require about AI testing/evaluation?

### Takeaway
OMB M-25-21 (April 3, 2025, rescinding M-24-10) is the binding government-wide rule: agencies must apply six minimum risk management practices to "high-impact AI," starting with documented pre-deployment testing and an AI impact assessment with independent review, plus ongoing monitoring; M-25-22 extends testing duties into procurement. America's AI Action Plan (July 2025) directs NIST/CAISI to build a federal "AI evaluations ecosystem." Both memos remained in force as of late 2026, joined by M-26-04 (December 2025) on "Unbiased AI Principles."

### Cited Findings
**OMB M-25-21**
- "Accelerating Federal Use of AI through Innovation, Governance, and Public Trust," issued April 3, 2025; the memo text states it "rescinds and replaces" OMB Memorandum M-24-10 — official PDF: [M-25-21](https://www.whitehouse.gov/wp-content/uploads/2025/02/M-25-21-Accelerating-Federal-Use-of-AI-through-Innovation-Governance-and-Public-Trust.pdf) (quotes below are from this PDF's extracted text)
- Agencies "are directed to implement minimum risk management practices for AI that could have significant impacts when deployed ('high-impact AI')"; AI is high-impact when its output serves "as a principal basis for" certain agency decisions or actions (Section 5 definition); certain categories are presumed high-impact unless an agency official determines otherwise; CAIOs must centrally track determinations — [M-25-21 PDF](https://www.whitehouse.gov/wp-content/uploads/2025/02/M-25-21-Accelerating-Federal-Use-of-AI-through-Innovation-Governance-and-Public-Trust.pdf)
- The six minimum practices (Section 4(b), paraphrased from the memo text): (i) **Conduct Pre-Deployment Testing** — "Agencies must develop pre-deployment testing and prepare risk mitigation plans that reflect expected real-world outcomes"; where the agency lacks access to underlying source code, models, or data, it "must use alternative test methodologies, such as querying the AI service and observing the outputs or providing evaluation data to the vendor and obtaining results"; (ii) **Complete AI Impact Assessment** before deployment, updated through the lifecycle, documenting at minimum: intended purpose/expected benefit with metrics, data quality and fitness (including protected-class information where applicable), potential impacts on privacy/civil rights/civil liberties with mitigations, reassessment schedules, cost analysis, results of an independent review by an agency reviewer not involved in development, and a risk-acceptance signature; (iii) **Ongoing Monitoring** — testing and periodic human review to catch adverse impacts and post-deployment changes; (iv) **Human Training and Assessment** for AI operators; (v) **Human Oversight, Intervention, and Accountability**, including appropriate fail-safes; (vi) **Consistent Remedies or Appeals** — timely human review and appeal for individuals affected by AI-enabled decisions — [M-25-21 PDF](https://www.whitehouse.gov/wp-content/uploads/2025/02/M-25-21-Accelerating-Federal-Use-of-AI-through-Innovation-Governance-and-Public-Trust.pdf)
- Escape valves: pilot programs for a proposed AI use case are exempt from the minimum practices during the pilot; CAIOs may grant waivers from minimum practices, must recertify them annually, may revoke them, must centrally track them, and must report scope/justification/evidence to OMB; determinations and waivers must be publicly reported where consistent with law — [M-25-21 PDF](https://www.whitehouse.gov/wp-content/uploads/2025/02/M-25-21-Accelerating-Federal-Use-of-AI-through-Innovation-Governance-and-Public-Trust.pdf)
- Ongoing data/model duties include "conducting ongoing testing and validation on AI model performance... including by testing in real-world conditions" — [M-25-21 PDF](https://www.whitehouse.gov/wp-content/uploads/2025/02/M-25-21-Accelerating-Federal-Use-of-AI-through-Innovation-Governance-and-Public-Trust.pdf)
- Status: the OMB memoranda index still lists M-25-21 as current, and agencies have published compliance plans under it (e.g., DOT's October 2025 AI Strategy) — [OMB memoranda index](https://www.whitehouse.gov/omb/information-resources/guidance/memoranda/); [White House release, April 2025](https://www.whitehouse.gov/releases/2025/04/white-house-releases-new-policies-on-federal-agency-ai-use-and-procurement/)

**OMB M-25-22 (procurement)**
- "Driving Efficient Acquisition of Artificial Intelligence in Government" (April 3, 2025): agencies must determine up front whether a purchase involves high-impact AI and, if so, apply testing and oversight requirements across the acquisition lifecycle — official PDF: [M-25-22](https://www.whitehouse.gov/wp-content/uploads/2025/02/M-25-22-Driving-Efficient-Acquisition-of-Artificial-Intelligence-in-Government.pdf); analysis: [Ropes & Gray](https://www.ropesgray.com/en/insights/alerts/2025/04/white-house-issues-guidance-on-use-and-procurement-of-artificial-intelligence-technology)

**OMB M-26-04**
- "Increasing Public Trust in Artificial Intelligence Through Unbiased AI Principles" (December 2025) — official PDF found at [M-26-04](https://www.whitehouse.gov/wp-content/uploads/2025/12/M-26-04-Increasing-Public-Trust-in-Artificial-Intelligence-Through-Unbiased-AI-Principles-1.pdf). I did not read its full text; it appears to implement the July 2025 executive order on "Unbiased AI Principles" for federal LLM procurement (which implies agencies assessing LLMs against those principles). Verify contents before citing specifics.

**America's AI Action Plan (July 2025)**
- Official PDF: "Winning the Race: America's AI Action Plan," July 2025, 90+ federal policy actions across three pillars — [Action Plan PDF](https://www.whitehouse.gov/wp-content/uploads/2025/07/Americas-AI-Action-Plan.pdf)
- Evaluations provisions: build an AI evaluations ecosystem — NIST and CAISI to publish guidelines for federal agencies to conduct their own AI evaluations, convene meetings to share evaluation best practices, invest in AI testbeds "for piloting AI systems in secure, real-world settings," support regulatory sandboxes, update national-security-related AI evaluations, and convene the NIST AI Consortium — [Action Plan PDF](https://www.whitehouse.gov/wp-content/uploads/2025/07/Americas-AI-Action-Plan.pdf); summarized by [IAPP](https://iapp.org/news/a/white-house-unveils-ai-action-plan) and [CSET](https://cset.georgetown.edu/article/trumps-plan-for-ai-recapping-the-white-houses-ai-action-plan/)
- Implementation example: the March 2026 CAISI–GSA MOU on evaluation science in federal procurement (see CAISI section) — [NIST news release](https://www.nist.gov/news-events/news/2026/03/caisi-signs-mou-gsa-boost-ai-evaluation-science-federal-procurement-through)

### Inferences
- M-25-21's pre-deployment testing clause is notable for teaching purposes because it addresses the commonest real-world constraint — evaluating black-box vendor AI — by explicitly authorizing query-based (behavioral) testing and vendor-run evaluations on agency-supplied data.
- Continuity: despite the change of administration and rhetoric ("accelerating" vs "advancing governance"), the testing/impact-assessment core of M-24-10 survived into M-25-21, which Brookings characterized as policy continuity — [Brookings](https://www.brookings.edu/articles/new-omb-memos-signal-continuity-in-federal-ai-policy/)

### Gaps
- Whether any successor to M-25-21 is being drafted (e.g., to align with "Super Intelligence" terminology) is unknown; as of the OMB index check it remains current.
- M-26-04's exact evaluation/testing requirements were not read; flagged above.
- Page-level section numbers for the Action Plan's evaluation recommendations were not captured (full plan PDF not read end-to-end).

## Sector-specific: FDA guidance on evaluating AI in medical devices (brief)

### Takeaway
FDA's January 2025 draft guidance on AI-enabled device software functions proposes a Total Product Lifecycle approach to evaluation evidence (premarket performance validation through postmarket monitoring); as of mid/late 2026 the lifecycle draft had not verifiably been finalized, while FDA added a generative-AI devices discussion paper in August 2026.

### Cited Findings
- FDA's draft guidance "Artificial Intelligence-Enabled Device Software Functions: Lifecycle Management and Marketing Submission Recommendations" (January 2025) takes a Total Product Lifecycle (TPLC) approach covering design, development, deployment, and post-market performance monitoring, and works alongside Predetermined Change Control Plans (PCCPs) that let manufacturers pre-authorize certain model updates — [MedDevice Guide explainer](https://meddeviceguide.com/blog/fda-ai-enabled-device-software-functions-tplc-draft-guidance-guide); [BABL AI summary](https://babl.ai/?p=6888)
- Status conflict: one source says the lifecycle draft was not final as of September 30, 2025 with finalization anticipated late 2025/early 2026; a May 2026 explainer still describes it as "distributed for comment... not for implementation"; a Healthcare IT News headline about "finalized" guidance refers to the companion PCCP document, not the lifecycle guidance — [Hogan Lovells](https://insights.hoganlovells.com/report/lshc-horizons-2026/ai-as-health-care-fdas-silicon-valley-speed-era-and-what-comes-next); [MedDevice Guide](https://meddeviceguide.com/blog/fda-ai-enabled-device-software-functions-tplc-draft-guidance-guide); [Healthcare IT News](https://www.healthcareitnews.com/news/fda-finalizes-ai-enabled-medical-device-life-cycle-plan-guidance)
- FDA released a discussion paper on generative AI-enabled devices on August 18, 2026, with comments due October 19, 2026 — [IAM Media](https://www.iam-media.com/article/ai-enabled-medical-devices-require-integrated-fda-and-ip-strategy-following-draft-guidance-pre-market-submissions)
- Evaluation-relevant human-factors expectation in the guidance: AI-enabled device usability framed as users "consistently and correctly understanding, interpreting and applying information from the device" — [Emergo by UL](https://www.emergobyul.com/news/fdas-human-factors-expectations-ai-enabled-software-functions)

### Inferences
- FDA is the clearest US example of lifecycle-based AI evaluation becoming a regulatory submission requirement (validation evidence + monitoring plan + pre-specified change protocol), contrasting with NIST's voluntary frameworks.

### Gaps
- I did not capture the official fda.gov URL for the lifecycle draft guidance or confirm its finalization status from fda.gov directly — verify at fda.gov before publishing; label the lifecycle guidance **draft** unless confirmed otherwise.

## Cross-cutting: September 2026 "Super Intelligence" terminology change

### Takeaway
Executive Order 14434, "Inaugurating the Era of Super Intelligence" (September 29, 2026), directs federal agencies to use "Super Intelligence"/"SI" instead of "Artificial Intelligence"/"AI" in non-statutory materials; NIST has begun renaming its AI evaluation programs and pages accordingly (e.g., CAISI → CAISSI), so Atlas entries should record both names and expect URL churn.

### Cited Findings
- President Trump signed EO 14434, "Inaugurating the Era of Super Intelligence," on September 29, 2026; it directs departments and agencies to use "Super Intelligence" and "SI" in place of "Artificial Intelligence" and "AI" in official correspondence, websites, reports, and policy documents (non-statutory materials); prior regulations, contracts, and historical documents are exempt; it defines the new term as covering the same technologies as the existing statutory AI definition and gives the President's science adviser 60 days to propose a legislative definition — [Wiley law alert](https://www.wiley.law/alert-Executive-Order-Rebrands-AI-as-Super-Intelligence-and-Signals-Potential-Federal-Legislative-Changes); [KATV/Sinclair coverage](https://katv.com/news/nation-world/trumps-executive-order-replaces-artificial-intelligence-with-super-intelligence-china-industrial-revolution-industry-elon-musk-mark-zuckerberg-politics-president-donald-trump)
- Observed effects on NIST evaluation pages (direct observation, November 11, 2026): nist.gov/caisi now reads "Center for Advancing Innovation and Standards for Super Intelligence (CAISSI)"; the TEVV-Athlon page sits under an "SI Research" section; the ARIA page carries a banner saying NIST is updating communications per the September 29, 2026 EO to use "Super Intelligence" — [NIST CAISSI page](https://www.nist.gov/caisi); [NIST TEVV-Athlon page](https://www.nist.gov/artificial-intelligence/ai-research/tevv-athlon-framework-evaluating-ai-systems); [ARIA page](https://ai-challenges.nist.gov/aria)
- A companion voluntary industry pledge, the "White House Accord on Superintelligence," was unveiled the same day — [aiweekly summary](https://aiweekly.co/alerts/inaugurating-the-era-of-super-intelligence)

### Inferences
- For the Atlas, the substantive evaluation frameworks are unchanged by the rebrand (the EO is terminological), but official names, blog URLs (e.g., "caissi-research-blog"), and page paths are shifting; entries should give the pre-rebrand name as primary with the SI-era name noted, and re-verify URLs before publication.

### Gaps
- The official whitehouse.gov text of EO 14434 was not fetched (details above come from a law-firm alert and news coverage); verify the EO number and quoted directives against the Federal Register before citing them in published Atlas text.
- Whether OMB will reissue M-25-21/M-25-22 under SI terminology is unknown.
