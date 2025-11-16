export type SiteMapNode = {
    label: string;
    href: string;
    children?: SiteMapNode[];
};

const rawPathBlob = `
10-reasons-why-b-tech-in-civil-engineering-is-important
5-reasons-to-choose-pharmacy-as-a-career
5-reasons-why-bba-provides-the-best-start-for-your-management-career
about-us/advisory-board
about-us/affiliation-approvals
about-us/award-recognition
about-us/collaborations
about-us/governing-bodies
about-us/governing-bodies/finance-committee
about-us/governing-bodies/proctoral-board
about-us/organogram-2
about-us/shivalik-college/why-shivalik-college
about-us/shivalik-college/why-shivalik-college/about-shivalik
about-us/shivalik-college/why-shivalik-college/legacy
about-us/strategic-plan/sce
about-us/strategic-plan/sips/academic-celander
about-us/strategic-plan/sips/examinations
academic-calendar
academics
administrative-leader
admission-process
admissions
admissions/apply-online
admissions/fee-calculator
advantages-and-disadvantages-of-hostel-life
ai-and-ml-algorithms-for-a-better-future
antenna-as-a-specialisation
application-form
apply-online
aqar
augmented-reality
author/shadmin
author/shadmin/page/1
author/shadmin/page/10
author/shadmin/page/11
author/shadmin/page/12
author/shadmin/page/13
author/shadmin/page/14
author/shadmin/page/15
author/shadmin/page/2
author/shadmin/page/3
author/shadmin/page/4
author/shadmin/page/5
author/shadmin/page/6
author/shadmin/page/7
author/shadmin/page/8
author/shadmin/page/9
autonomous-cars
b-sc-agriculture-future-scope-and-career-opportunities
blockchain-oracles
blogs
blogs/page/1
blogs/page/10
blogs/page/11
blogs/page/12
blogs/page/13
blogs/page/14
blogs/page/15
blogs/page/2
blogs/page/3
blogs/page/4
blogs/page/5
blogs/page/6
blogs/page/7
blogs/page/8
blogs/page/9
board-of-governance
bom
cadet-himanshu-negi-shines-in-basic-mountaineering-course
career-opportunities
career-options-after-diploma-in-computer-science
careers-form
careers-to-pursue-after-b-tech-electronics-and-communication-engineering
category/mini-blogs
cobots
college
college-tour
college/college-of-pharmacy
college/college-of-pharmacy/programmes
college/shivalik-college-of-engineering
college/shivalik-college-of-engineering/leadership
college/shivalik-college-of-engineering/programmes
college/shivalik-college-of-engineering/quality-policy-objective
college/shivalik-college-of-engineering/vision-mission
college/shivalik-institute-of-professional-studies
college/shivalik-institute-of-professional-studies/programmes-2
college/shivalik-institute-of-professional-studies/quality-policy-objective
college/shivalik-institute-of-professional-studies/vision-mission
collegecommittee
committee-member
computer-science-continues-to-be-the-no-1-choice-in-engineering-due-to-multiple-career-openings
computer-science-engineering/awards-sce
computer-science-engineering/research-sce
conference-sep-2025
contact-us
course/academics/shivalik-college-of-engineering/computer-science-engineering
course/academics/shivalik-college-of-engineering/computer-science-engineering/b-tech-computer-science-engineering
course/academics/shivalik-college-of-engineering/computer-science-engineering/diploma-in-computer-science-engineering
course/academics/shivalik-college-of-pharmacy
course/academics/shivalik-college-of-pharmacy/b-pharm
course/academics/shivalik-college-of-pharmacy/d-pharm
course/academics/shivalik-institute-of-professional-studies/management
course/bachelor-of-business-administration
course/shivalik-college-of-engineering
course/shivalik-college-of-engineering/applied-science
course/shivalik-college-of-engineering/b-sc-agriculture
course/shivalik-college-of-engineering/b-tech-aiml
course/shivalik-college-of-engineering/b-tech-data-science
course/shivalik-college-of-engineering/bba
course/shivalik-college-of-engineering/bba/bachelor-of-business-administration
course/shivalik-college-of-engineering/bca
course/shivalik-college-of-engineering/bca/bca-college-in-dehradun
course/shivalik-college-of-engineering/civil-engineering
course/shivalik-college-of-engineering/civil-engineering/b-tech-civil-engineering
course/shivalik-college-of-engineering/computer-science-engineering
course/shivalik-college-of-engineering/computer-science-engineering/b-tech-computer-science-engineering
course/shivalik-college-of-engineering/computer-science-engineering/diploma-in-computer-science-engineering
course/shivalik-college-of-engineering/electronics-and-communication-engineering
course/shivalik-college-of-engineering/electronics-and-communication-engineering/b-tech-electronics-and-communication-engineering
course/shivalik-college-of-engineering/engineering-college
course/shivalik-college-of-engineering/engineering-college/specialization-digital-manufacturing-ai-cps
course/shivalik-college-of-engineering/engineering-college/specialization-iot
course/shivalik-college-of-engineering/engineering-college/specializations-in-ai-ml
course/shivalik-college-of-engineering/engineering-college/specializations-in-data-science
course/shivalik-college-of-engineering/engineering-college/specializations-in-digital-manufacturing
course/shivalik-college-of-engineering/engineering-college/specializations-in-semiconductor-design
course/shivalik-college-of-engineering/mba
course/shivalik-college-of-engineering/mechanical-engineering
course/shivalik-college-of-engineering/mechanical-engineering/b-tech-mechanical-engineering
course/shivalik-college-of-engineering/mechanical-engineering/diploma-polytechnic-mechanical-engineering-2
course/shivalik-college-of-pharmacy
course/shivalik-college-of-pharmacy/b-pharm
course/shivalik-college-of-pharmacy/d-pharm
cse-it-after-2022
cutting-edge-technology-courses-after-12th-grade
cyber-security
cyber-security-2-0
d-pharm-vs-b-pharm-which-is-the-better-pharmacy-career-option
diploma-vs-degree-which-one-to-choose
disabledfriendlycampus
does-mechanical-engineering-in-india-have-scope-in-near-future
dr-prahlad-singh-honored-amar-ujala-samwad-2025
e-book-lists
examination-committee
examinations
faculty-achieve-patent-grant-for-smart-agriculture-innovation
fee-structure
g-ceip-mou
gender-sensitization-cell
general-grievance-redressal-committee
get-ready-for-the-grandest-fest-of-the-year-shivafest-2025
governing-bodies/finance-committee
governing-bodies/proctoral-board
guestlecture
health-club
health-club-2
hostel-life
how-different-programs-helps-students-in-understanding-the-industry-better
how-engineers-can-be-active-contributors-to-business-decisions
how-to-choose-the-best-bba-college-for-your-career-goals
icedet-2023
icedet-2023/about-departments
icedet-2023/call-for-papers
icedet-2023/conference-committee
icedet-2023/contact-us
icedet-2023/important-dates
icedet-2023/instructions
icedet-2023/publication
icedet-2023/registration
ideathon
ideathon/ideathon-registration
ideathon/school-ideathon-registration
ihub-cbii
iit-mandi-inks-mou-to-drive-innovation
iit-roorkee-ai-deep-learning-mou
iit-ropar-signs-mou-for-future-collaboration
inauguration-of-cbii-and-ihub-shivalik-a-new-era-of-innovation-entrepreneurship
incubation-center-at-shivalik-college-dehradun
index
infra-demands-in-india-for-the-next-3-5-decades-makes-civil-engineering-a-great-career-option
infrared-guided-missile-detection-system
installing-mosquitto-mqtt-broker-on-linux-ubuntu
international-yoga-day-2025
iot-at-shivalik-college-of-engineering
iot-based-smart-agriculture-system
iqac-sce-2/ict-enabled-classroom
iqac-sce-2/stake-holder-feedback-sce/2017-18
iqac-sce-2/stake-holder-feedback-sce/2018-19
is-pursuing-a-degree-in-agriculture-worth-it
job-profiles-for-computer-science-engineers
leaders/director-admission
leaders/message-by-chairman
leaders/message-by-principal
leaders/message-by-vice-chairman
library
machine-vision
management-vibes
management-vibes-nov-2024
mandatory-disclosure
mechanism-of-grc
mechatronics-robotics-drone-technology-is-the-future-of-mechanical-engineering
naac-a-college
news-events-image
nirf
nukkad-natak
pharmaceutical-companies-in-artificial-intelligence
placement
placement-2/about-dotp-overview
placement-2/placement-team
placement-2/trainings-for-students
placement/about-dotp-overview
placement/college-recruiter-partners
placement/industrytieups
private-universities-the-future-drivers-of-higher-education
prospectus
quality-cell
quality-cell/iqac-college-of-pharmacy/about-iqac-pharmacy
quality-cell/iqac-college-of-pharmacy/action-taken-reports-pharmacy
quality-cell/iqac-college-of-pharmacy/annual-report-pharmacy
quality-cell/iqac-college-of-pharmacy/best-practices
quality-cell/iqac-college-of-pharmacy/committees
quality-cell/iqac-college-of-pharmacy/iqac
quality-cell/iqac-college-of-pharmacy/iqac-pharmacy-composition
quality-cell/iqac-college-of-pharmacy/meeting-minutes
quality-cell/iqac-college-of-pharmacy/nirf
quality-cell/iqac-college-of-pharmacy/stake-holder-feedback-pharmacy
quality-cell/iqac-college-of-pharmacy/value-added-courses
quality-cell/iqac-shivalik-college-of-engineering/about-iqac-sce
quality-cell/iqac-shivalik-college-of-engineering/best-practices
quality-cell/iqac-shivalik-college-of-engineering/committees/anti-ragging-committee
quality-cell/iqac-shivalik-college-of-engineering/committees/grievance-redressal-committee-grc
quality-cell/iqac-shivalik-college-of-engineering/committees/icc
quality-cell/iqac-shivalik-college-of-engineering/committees/sc-st-committee
quality-cell/iqac-shivalik-college-of-engineering/committees/sce/anti-ragging-committee
quality-cell/iqac-shivalik-college-of-engineering/committees/sce/grievance-redressal-committee-grc
quality-cell/iqac-shivalik-college-of-engineering/committees/sce/icc
quality-cell/iqac-shivalik-college-of-engineering/committees/sce/sc-st-committee
quality-cell/iqac-shivalik-college-of-engineering/iqac-initiatives/code-of-conduct-staff
quality-cell/iqac-shivalik-college-of-engineering/iqac-initiatives/code-of-conduct-students
quality-cell/iqac-shivalik-college-of-engineering/iqac-initiatives/disabled-friendly-barrier-free-campus
quality-cell/iqac-shivalik-college-of-engineering/iqac-initiatives/environmental-initiative
quality-cell/iqac-shivalik-college-of-engineering/iqac-initiatives/environmental-initiative/e-waste-management
quality-cell/iqac-shivalik-college-of-engineering/iqac-initiatives/environmental-initiative/green-campus-initiative
quality-cell/iqac-shivalik-college-of-engineering/iqac-initiatives/environmental-initiative/solar-initiative
quality-cell/iqac-shivalik-college-of-engineering/iqac-initiatives/environmental-initiative/waste-management
quality-cell/iqac-shivalik-college-of-engineering/iqac-initiatives/environmental-initiative/waste-management-liquid
quality-cell/iqac-shivalik-college-of-engineering/iqac-initiatives/environmental-initiative/waste-recycling-system-initiative
quality-cell/iqac-shivalik-college-of-engineering/iqac-initiatives/institution-performance
quality-cell/iqac-shivalik-college-of-engineering/iqac-initiatives/iqac-initiatives
quality-cell/iqac-shivalik-college-of-engineering/iqac-initiatives/iqac-newsletter
quality-cell/iqac-shivalik-college-of-engineering/iqac-initiatives/quality-calendar-2023-24
quality-cell/iqac-shivalik-college-of-engineering/iqac-sce-composition
quality-cell/iqac-shivalik-college-of-engineering/meeting-minutes
quality-cell/iqac-shivalik-college-of-engineering/meeting-minutes/2018-19
quality-cell/iqac-shivalik-college-of-engineering/meeting-minutes/2019-20
quality-cell/iqac-shivalik-college-of-engineering/meeting-minutes/2020-21
quality-cell/iqac-shivalik-college-of-engineering/meeting-minutes/2021-22
quality-cell/iqac-shivalik-college-of-engineering/meeting-minutes/2022-23
quality-cell/iqac-shivalik-college-of-engineering/naac-a-college
quality-cell/iqac-shivalik-college-of-engineering/nirf
quality-cell/iqac-shivalik-college-of-engineering/policy
quality-cell/iqac-shivalik-college-of-engineering/policy/policy-faculty
quality-cell/iqac-shivalik-college-of-engineering/policy/student-policy
quality-cell/iqac-shivalik-college-of-engineering/stake-holder-feedback-sce
quality-cell/iqac-shivalik-college-of-engineering/stake-holder-feedback-sce/2017-18
quality-cell/iqac-shivalik-college-of-engineering/stake-holder-feedback-sce/2018-19
quality-cell/iqac-shivalik-college-of-engineering/stake-holder-feedback-sce/2019-20
quality-cell/iqac-shivalik-college-of-engineering/stake-holder-feedback-sce/2020-21
quality-cell/iqac-shivalik-college-of-engineering/stake-holder-feedback-sce/2021-22
quality-cell/iqac-shivalik-college-of-engineering/stake-holder-feedback-sce/2022-23
quality-cell/iqac-shivalik-college-of-engineering/stake-holder-feedback-sce/2023-24
quality-cell/iqac-shivalik-college-of-engineering/value-added-courses
quality-cell/iqac-shivalik-institute-of-professional-studies
quality-cell/iqac-shivalik-institute-of-professional-studies/about-iqac-sips
quality-cell/iqac-shivalik-institute-of-professional-studies/action-taken-reports-sips
quality-cell/iqac-shivalik-institute-of-professional-studies/annual-report-sips
quality-cell/iqac-shivalik-institute-of-professional-studies/best-practices
quality-cell/iqac-shivalik-institute-of-professional-studies/committees
quality-cell/iqac-shivalik-institute-of-professional-studies/iqac
quality-cell/iqac-shivalik-institute-of-professional-studies/iqac-sips-composition
quality-cell/iqac-shivalik-institute-of-professional-studies/meeting-minutes
quality-cell/iqac-shivalik-institute-of-professional-studies/nirf
quality-cell/iqac-shivalik-institute-of-professional-studies/stake-holder-feedback-sips
quality-cell/iqac-shivalik-institute-of-professional-studies/value-added-courses
quality-cell/nba-shivalikcollege
quantum-computing
reasons-to-study-bsc-agriculture
research
research/books-book-chapters
research/code-of-ethics-in-research
research/funded-sponsored-research
research/ipr-patents
research/leadership
research/list-of-prominent-research-papers
research/research-committee
research/research-policy
research/seminar-conference-workshops
results
sciencechampionship
scope-of-bsc-agriculture-in-india-what-can-i-do-after-the-b-sc-agriculture-course
screen-reader-access
shaping-the-future-at-shivalik
shivalik-a-game-changer
shivalik-college-of-engineering-hosts-successful-5-day-hands-on-workshop-on-ev-modeling-and-matlab-simulation
shivalik-tribune
shivatech
solar-energy-as-a-way-for-sustainable-energy
sports-life-at-shivalik
student-resources
student-resources/cafeteria
student-resources/culture-activity
student-resources/gymnasium
student-resources/hostel
student-resources/medical
student-resources/mess
student-resources/n-c-c
student-resources/n-s-s
student-resources/sports
student-resources/student-centric-method
student-resources/student-clubs
student-resources/transport
syllabus
tag/best-college-in-dehradun
tag/gate-exam-2026
tag/shivalik-college-of-e
tag/shivalik-college-of-engineering
tag/top-colleges-in-dehradun
technologies-that-may-impact-two-wheelers
the-aim-of-the-management
the-best-career-roles-for-a-computer-science-engineer
the-constant-changing-technology-is-leading-to-an-ever
the-demand-for-engineers-with-managerial-skills
the-past-present-and-future-of-electrical-engineering-education-in-india
the-shivalik-college-dehradun
the-ultimate-guide-for-placement-preparation-strategies-and-tips
the-v12-engine
the-various-specialisations-within-bba
top-5-preparation-tips-for-gate-exam-2026
top-5-projections-in-artificial-intelligence-for-2021
top-b-tech-specializations-how-to-choose-the-right-one
top-colleges-in-dehradun-shivalik-college-of-engineering
top-cse-specializations-in-2025-which-one-should-you-choose
top-job-opportunities-after-a-degree-in-pharmacy
top-mba-specializations-in-2025-for-a-high-paying-career
top-pharmacy-college-in-dehradun
unique-food-habits-of-uttarakhand
vanet-and-its-cloud-based-approaches
virtual-reality
visit-us
why-engineering-is-still-a-top-choice-best-college-in-dehradun
why-should-you-choose-bba-after-the-12th
why-you-should-opt-for-polytechnic-courses
women-grievance-cell-at-shivalik
world-environment-day
wp-content/uploads/2022/11/14-3Appendix.pdf
wp-content/uploads/2022/11/ANNUAL-REPORT-2018-19-1.pdf
wp-content/uploads/2022/11/ANNUAL-REPORT-2019-20-1.pdf
wp-content/uploads/2022/11/Annual-Report-2017-18-1.pdf
wp-content/uploads/2022/11/Annual-Report-2020-21-1.pdf
wp-content/uploads/2022/11/Annual-Report-2021-22-2.pdf
wp-content/uploads/2022/11/Anti-Ragging-Rules-2022.pdf
wp-content/uploads/2022/11/CAD-SKILL-SOLUTION.pdf
wp-content/uploads/2022/11/CE2017.pdf
wp-content/uploads/2022/11/CE2018.pdf
wp-content/uploads/2022/11/CE2019.pdf
wp-content/uploads/2022/11/COP-ORGANOGRAM.png
wp-content/uploads/2022/11/COP-STUDENT-MANUAL-1.pdf
wp-content/uploads/2022/11/CSE2017.pdf
wp-content/uploads/2022/11/CSE2018.pdf
wp-content/uploads/2022/11/CSE2019.pdf
wp-content/uploads/2022/11/CSE2020.pdf
wp-content/uploads/2022/11/CSE2021.pdf
wp-content/uploads/2022/11/CSE2022.pdf
wp-content/uploads/2022/11/Civil2020.pdf
wp-content/uploads/2022/11/Civil2021.pdf
wp-content/uploads/2022/11/Civil2022.pdf
wp-content/uploads/2022/11/Concent-form-and-Indemnity-bond.pdf
wp-content/uploads/2022/11/ECE2017.pdf
wp-content/uploads/2022/11/ECE2018.pdf
wp-content/uploads/2022/11/ECE2019.pdf
wp-content/uploads/2022/11/ECE2020.pdf
wp-content/uploads/2022/11/ECE2021.pdf
wp-content/uploads/2022/11/ECE2022.pdf
wp-content/uploads/2022/11/Employment-News-Rojgar-Samachar-6th-February-2021-to-12th-February-2021.pdf
wp-content/uploads/2022/11/Establishment-Manual-SCE.pdf
wp-content/uploads/2022/11/Exam-Policy.pdf
wp-content/uploads/2022/11/Feedbac-Action-Taken-2019-20-2.pdf
wp-content/uploads/2022/11/Feedbac-Action-Taken-2020-21-3.pdf
wp-content/uploads/2022/11/Feedback-Action-Taken-Report-2019-2020.pdf
wp-content/uploads/2022/11/Feedback-Action-Taken-Report-2020-2021.pdf
wp-content/uploads/2022/11/Feedback-Action-Taken-Report-2021-2022.pdf
wp-content/uploads/2022/11/Feedback_Action-Taken-2021-22-2.pdf
wp-content/uploads/2022/11/Final-SIF-Report-2019-20.pdf
wp-content/uploads/2022/11/Final-SIF-Report-2020-21.pdf
wp-content/uploads/2022/11/Final-SIF-Report-2021-22.pdf
wp-content/uploads/2022/11/Final-SIF-Report-2022-23.pdf
wp-content/uploads/2022/11/GOVT-LETTER-2022-23.pdf
wp-content/uploads/2022/11/ME2017.pdf
wp-content/uploads/2022/11/ME2018.pdf
wp-content/uploads/2022/11/ME2019.pdf
wp-content/uploads/2022/11/ME2020.pdf
wp-content/uploads/2022/11/ME2021.pdf
wp-content/uploads/2022/11/ME2022.pdf
wp-content/uploads/2022/11/MOM-IQAC-SCE-1.pdf
wp-content/uploads/2022/11/MOM-IQAC-SCE-2.pdf
wp-content/uploads/2022/11/MOM-IQAC-SCE-3.pdf
wp-content/uploads/2022/11/MOM-IQAC-SCE-4.pdf
wp-content/uploads/2022/11/MOM-IQAC-SCE-5.pdf
wp-content/uploads/2022/11/MOM-IQAC-SCE-6.pdf
wp-content/uploads/2022/11/MOM-IQAC-SCE-7.pdf
wp-content/uploads/2022/11/MOM-IQAC-SCE-8.pdf
wp-content/uploads/2022/11/MOM-IQAC-SCE-9.pdf
wp-content/uploads/2022/11/MOU-12-BETWEEN-SCE-ENSINO-RESEARCH-AND-DEVELOPMENT-PVT-LTD.pdf
wp-content/uploads/2022/11/MOU-2-BETWEEN-SCE-SLOG-SOLUTIONS-PVT.-LTD.pdf
wp-content/uploads/2022/11/MOU-4-BETWEEN-SCE-PRIMECAD-TRAINING-INSTITUTE.pdf
wp-content/uploads/2022/11/MOU-5-BETWEEN-SCE-NAYA-SAVERA-SOCIETY.pdf
wp-content/uploads/2022/11/SCE-Organogram.png
wp-content/uploads/2022/11/SIPS-STUDENT-MANUAL-1.pdf
wp-content/uploads/2022/11/SSS2017-18-1.pdf
wp-content/uploads/2022/11/SSS2018-19-1.pdf
wp-content/uploads/2022/11/SSS2019-20-1.pdf
wp-content/uploads/2022/11/SSS2020-21-1.pdf
wp-content/uploads/2022/11/StudentManual-SCE-1.pdf
wp-content/uploads/2022/11/Undertaking.pdf
wp-content/uploads/2022/11/affiliation-letter-increase-intake.pdf
wp-content/uploads/2022/11/anti-discremination-converted-converted.pdf
wp-content/uploads/2022/11/gender-sesitization-converted-converted.pdf
wp-content/uploads/2022/11/pharma-fee.pdf
wp-content/uploads/2022/11/placement-cell-1-converted-converted.pdf
wp-content/uploads/2022/11/revised_finalugcregulationfinal10.pdf
wp-content/uploads/2022/12/Even-Sem-2018.pdf
wp-content/uploads/2022/12/Even-Sem-2019.pdf
wp-content/uploads/2022/12/Even-Sem-2020.pdf
wp-content/uploads/2022/12/Even-Sem-2021.pdf
wp-content/uploads/2022/12/Even-Sem-2022.pdf
wp-content/uploads/2022/12/Exam-Manual-SIPS.pdf
wp-content/uploads/2022/12/Odd-Sem-2017.pdf
wp-content/uploads/2022/12/Odd-Sem-2018.pdf
wp-content/uploads/2022/12/Odd-Sem-2019.pdf
wp-content/uploads/2022/12/Odd-Sem-2020.pdf
wp-content/uploads/2022/12/Odd-Sem-2021.pdf
wp-content/uploads/2023/02/3.5.1_Report_MOU.pdf
wp-content/uploads/2023/02/VALUE-ADDED-COURSE-COMBINE-COURSES-session-2017-18-1.pdf
wp-content/uploads/2023/02/VALUE-ADDED-COURSE-COMBINE-COURSES-session-2018-19-2.pdf
wp-content/uploads/2023/02/VALUE-ADDED-COURSE-COMBINE-COURSES-session-2019-20-1.pdf
wp-content/uploads/2023/02/VALUE-ADDED-COURSE-COMBINE-COURSES-session-2020-21-1.pdf
wp-content/uploads/2023/02/VALUE-ADDED-COURSE-COMBINE-COURSES-session-2021-22-2.pdf
wp-content/uploads/2023/07/IQAC-ACTIVITY-CELANDER-2023-24.jpeg
wp-content/uploads/2023/07/IQAC-News-Letter-2021-22.pdf
wp-content/uploads/2023/07/MOM-IQAC-SCE-10.pdf
wp-content/uploads/2023/07/MOM-IQAC-SCE-11.pdf
wp-content/uploads/2023/10/New-Arrival.pdf
wp-content/uploads/2023/10/SIPS-NEW-ARRI-ARRIVAL-BOOKS.pdf
wp-content/uploads/2023/12/AdmissionForm-2023.pdf
wp-content/uploads/2024/01/IMG-20230415-WA0005-1.jpg
wp-content/uploads/2024/01/IMG-20230415-WA0005.jpg
wp-content/uploads/2024/01/IMG-20230415-WA0006.jpg
wp-content/uploads/2024/01/Shivalik-Fee-1.pdf
wp-content/uploads/2024/01/WhatsApp-Image-2024-01-03-at-14.57.25-1.jpeg
wp-content/uploads/2024/01/WhatsApp-Image-2024-01-03-at-14.57.26.jpeg
wp-content/uploads/2024/01/WhatsApp-Image-2024-01-03-at-14.57.27-1.jpeg
wp-content/uploads/2024/01/WhatsApp-Image-2024-01-03-at-14.59.49.jpeg
wp-content/uploads/2024/01/WhatsApp-Image-2024-01-03-at-14.59.59-2.jpeg
wp-content/uploads/2024/02/Academic-Calander-Even-Sem-2023-24.pdf
wp-content/uploads/2024/03/Shivalik-College-of-Engg.-NIRF.pdf
wp-content/uploads/2024/03/Shivalik-News-Letter-Final-PDF.pdf
wp-content/uploads/2024/04/E-BOOK-SHIVALIK-LIBRARY.xlsx
wp-content/uploads/2024/04/Feedback-22-23.pdf
wp-content/uploads/2024/04/mandatory_disclosure-sce-UPDATED-Feb.-2024.pdf
wp-content/uploads/2024/07/Academic-Calendar-2024-25-Odd-Sem-COP.pdf
wp-content/uploads/2024/10/Academic-Calander-Even-Sem-2023-24.pdf
wp-content/uploads/2024/10/Academic-Calendar-for-Odd-Semester-2023-24.pdf
wp-content/uploads/2024/10/Annexures_Research-Policy.pdf
wp-content/uploads/2024/10/Research-Policy_COP_30_Sept_2024.pdf
wp-content/uploads/2024/10/Research-Policy_SCE_SIPS_30_Sept_2024.pdf
wp-content/uploads/2024/10/Revised-Academic-Calendar-Odd-Sem-2024-25_-Revision-2.pdf
wp-content/uploads/2024/11/ManagementVibes.pdf
wp-content/uploads/2024/11/NAAC-AQAR-22-23.pdf
wp-content/uploads/2024/11/NAAC-cerificate.pdf
wp-content/uploads/2024/11/SHIVALIK_COLLEGE_OF_ENGINEERING_iiqa.pdf
wp-content/uploads/2024/11/Science-Championship-3.0-Date-Update.pdf
wp-content/uploads/2024/11/Shivatech-.pdf
wp-content/uploads/2024/11/Speaker-Profile.pdf
wp-content/uploads/2024/11/UKCOGN108012-SSR-SHIVALIK.pdf
wp-content/uploads/2025/01/FEEDBACK-2022-23.pdf
wp-content/uploads/2025/01/Feedbac-Action-Taken-2019-20.pdf
wp-content/uploads/2025/01/Feedbac-Action-Taken-2020-21.pdf
wp-content/uploads/2025/01/Feedback-REPORT-2023-24.pdf
wp-content/uploads/2025/01/Feedback_Action-Taken-2021-22.pdf
wp-content/uploads/2025/01/Gender-audit-report-2023-24.pdf
wp-content/uploads/2025/01/ICT-enabledclassroom.pdf
wp-content/uploads/2025/01/annual-gender.pdf
wp-content/uploads/2025/01/report-2022-2023.pdf
wp-content/uploads/2025/02/1654477_Fee-Refund-Policy-2024-25.pdf
wp-content/uploads/2025/02/NIRF2025-ENGINEERING-1.pdf
wp-content/uploads/2025/02/NIRF2025-OVERALL.pdf
wp-content/uploads/2025/02/NIRF2025-SDG-INSTITUTION.pdf
wp-content/uploads/2025/02/Ordinances-for-B.PHARM-Programmes.pdf
wp-content/uploads/2025/02/Ordinances-for-Bachelor-of-Technology-Programmes.pdf
wp-content/uploads/2025/02/UGC_letter_for_2f.pdf
wp-content/uploads/2025/04/BSc-Honours-Agriculture-5th-dean-syllabus.pdf
wp-content/uploads/2025/04/MANGEMENT-1.pdf
wp-content/uploads/2025/04/MANGEMENT-2.pdf
wp-content/uploads/2025/04/MANGEMENT.pdf
wp-content/uploads/2025/04/PHARMA-ADMISSION-FORM-FINAL_compressed.pdf
wp-content/uploads/2025/04/engineering-addmissionform_compressed.pdf
wp-content/uploads/2025/04/engineering-fee.pdf
wp-content/uploads/2025/04/fee-2025.pdf
wp-content/uploads/2025/04/pharma-fee.pdf
wp-content/uploads/2025/04/privacy.pdf
wp-content/uploads/2025/05/BBA-Syllabus-3.pdf
wp-content/uploads/2025/05/SUBMITTER-AQAR-2023-24.pdf
wp-content/uploads/2025/06/syllabus-btech.pdf
wp-content/uploads/2025/07/AI_ML.pdf
wp-content/uploads/2025/08/ERP-Manual.pdf
wp-content/uploads/2025/08/Leave-Policy_V1_Rev_2.pdf
wp-content/uploads/2025/08/Procedure-Manual.pdf
wp-content/uploads/2025/08/RTI.pdf
wp-content/uploads/2025/08/Student-Manual-SCE_V4-final.pdf
wp-content/uploads/2025/08/academic-manual-pdf-2.pdf
wp-content/uploads/2025/08/nss--scaled.jpg
wp-content/uploads/2025/08/nss-pics.jpg
wp-content/uploads/2025/08/nss-pics3-scaled.jpg
wp-content/uploads/2025/08/nss-pics4-scaled.jpg
wp-content/uploads/2025/08/nss-pics5-scaled.jpg
wp-content/uploads/2025/08/nss-pics6-scaled.jpg
wp-content/uploads/2025/08/nss-pics7-scaled.jpg
wp-content/uploads/2025/08/nss.jpg
wp-content/uploads/2025/09/2023.pdf
wp-content/uploads/2025/09/2024-newsletter-_compressed.pdf
wp-content/uploads/2025/09/638924111024422339.pdf
wp-content/uploads/2025/09/College-level-india-edition-brochure_compressed.pdf
wp-content/uploads/2025/09/ENGINEERING-FEES-STRUCTURE-2025-26-.jpg
wp-content/uploads/2025/09/ENGINEERING-FEES-STRUCTURE-2025-26-.pdf
wp-content/uploads/2025/09/Human-Resource-Policy-SCE-_compressed.pdf
wp-content/uploads/2025/09/Jan-2025-to-june-2025-newsletter-30-06-2025.pdf
wp-content/uploads/2025/09/Magazine-2022-2023_compressed.pdf
wp-content/uploads/2025/09/Magazine-2023-2024_compressed.pdf
wp-content/uploads/2025/09/Magazine-2024-2025_compressed.pdf
wp-content/uploads/2025/09/T-P-Policy_compressed.pdf
wp-content/uploads/2025/09/co-sce.pdf
wp-content/uploads/2025/09/july-dec-2022-newsletter.pdf
wp-content/uploads/2025/09/school-level-india-edition_compressed.pdf
wp-content/uploads/2025/11/Academin-Calender-II-Odd-Sem-2025-26.pdf
your-career-matters-to-us
`;

const specialCases = new Map<string, string>([
    ["iqac", "IQAC"],
    ["naac", "NAAC"],
    ["nba", "NBA"],
    ["sce", "SCE"],
    ["sips", "SIPS"],
    ["cbii", "CBII"],
    ["ihub", "iHUB"],
    ["ncc", "NCC"],
    ["n-s-s", "NSS"],
    ["n-c-c", "NCC"],
    ["mba", "MBA"],
    ["bba", "BBA"],
    ["bca", "BCA"],
    ["b-pharm", "B.Pharm"],
    ["d-pharm", "D.Pharm"],
    ["b-tech", "B.Tech"],
    ["b-sc", "B.Sc"],
    ["mou", "MoU"],
    ["dotp", "DoTP"],
]);

const capWord = (word: string) =>
    specialCases.get(word.toLowerCase()) ?? word.replace(/\b\w/g, (ch) => ch.toUpperCase());

const formatLabel = (segment: string) => {
    if (!segment) {
        return "Home";
    }

    if (segment.includes(".")) {
        return segment.toUpperCase();
    }

    return segment
        .split("-")
        .filter(Boolean)
        .map((part) => capWord(part))
        .join(" ");
};

export const normalizeSitePath = (path: string) => {
    if (!path || path === "/") {
        return "/";
    }

    const cleaned = path
        .split("/")
        .filter(Boolean)
        .join("/");

    return cleaned ? `/${cleaned}` : "/";
};

export const rawSitePaths = rawPathBlob
    .split(/\r?\n/)
    .map((path) => path.trim())
    .filter(Boolean)
    .map((path) => normalizeSitePath(path));

type InternalNode = {
    label: string;
    href: string;
    children: Map<string, InternalNode>;
};

const createNode = (label: string, href: string): InternalNode => ({
    label,
    href,
    children: new Map(),
});

const root = createNode("Home", "/");

const insertPath = (fullPath: string) => {
    const segments = fullPath.split("/").filter(Boolean);
    let current = root;
    let runningPath = "";

    segments.forEach((segment) => {
        runningPath += `/${segment}`;
        if (!current.children.has(segment)) {
            current.children.set(segment, createNode(formatLabel(segment), runningPath));
        }
        current = current.children.get(segment)!;
    });
};

rawSitePaths.forEach(insertPath);

const toSiteMapNode = (node: InternalNode): SiteMapNode => {
    const children = Array.from(node.children.values())
        .sort((a, b) => a.label.localeCompare(b.label))
        .map(toSiteMapNode);

    return {
        label: node.label,
        href: node.href,
        ...(children.length ? { children } : {}),
    };
};

export const siteMap: SiteMapNode[] = Array.from(root.children.values())
    .sort((a, b) => a.label.localeCompare(b.label))
    .map(toSiteMapNode);

export const siteMapTree: SiteMapNode = {
    label: "Home",
    href: "/",
    children: siteMap,
};

const siteMapLookup = new Map<string, SiteMapNode>();

const registerNode = (node: SiteMapNode) => {
    siteMapLookup.set(normalizeSitePath(node.href), node);
    node.children?.forEach(registerNode);
};

registerNode(siteMapTree);

export const getSiteMapNode = (path: string) => siteMapLookup.get(normalizeSitePath(path));