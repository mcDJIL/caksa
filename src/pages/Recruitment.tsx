import { useEffect, useRef, useState, type FormEvent } from "react"

import PageHero from "../components/sections/PageHero"

import { images } from "../data/images"

import { Eyebrow } from "../components/ui/editorial"

const studyPrograms = [
  ["Teknik Elektronika", "teknik-elektronika"],
  ["Teknik Telekomunikasi", "teknik-telekomunikasi"],
  ["Teknik Elektro Industri", "teknik-elektro-industri"],
  ["Teknologi Rekayasa Internet", "teknologi-rekayasa-internet"],
  ["Teknologi Rekayasa Keselamatan K3", "teknologi-rekayasa-keselamatan-k3"],
  ["Teknik Informatika", "teknik-informatika"],
  ["Teknik Komputer", "teknik-komputer"],
  ["Sains Data Terapan", "sains-data-terapan"],
  ["Teknik Mekatronika", "teknik-mekatronika"],
  ["Sistem Pembangkit Energi", "sistem-pembangkit-energi"],
  ["Teknologi Rekayasa Perancangan Manufaktur", "teknologi-rekayasa-perancangan-manufaktur"],
  ["Teknologi Game", "teknologi-game"],
  ["Teknologi Rekayasa Multimedia", "teknologi-rekayasa-multimedia"],
  ["Bisnis Digital", "bisnis-digital"],
] as const;

const recruitmentDraftKey = "caksa-recruitment-draft"
const recruitmentApiBase = (import.meta.env.VITE_RECRUITMENT_API_URL || "http://localhost:3000/api").replace(/\/$/, "")

const recruitmentGuidebookUrl = "https://drive.google.com/drive/folders/11LKF7_k3EBj9RqbS1Um4P5tck8ALnkpV?usp=sharing"
const sampleDocumentsUrl = "https://drive.google.com/drive/folders/154BjdqqBInzGvhG-5UTzr2mkiPCKyzAE?usp=sharing"
const stepOneFieldNames = ["email", "fullName", "nrp", "degreeLevel", "studyProgram", "batch", "instagram", "referralSource"] as const

const readRecruitmentDraft = (): Record<string, string> => {
  const savedDraft = localStorage.getItem(recruitmentDraftKey)
  if (!savedDraft) return {}

  try {
    return JSON.parse(savedDraft) as Record<string, string>
  } catch {
    localStorage.removeItem(recruitmentDraftKey)
    return {}
  }
}

export default function Recruitment() {
  const applicationFormRef = useRef<HTMLFormElement>(null)

  const [mode, setMode] = useState<"APPLY" | "TRACK">("APPLY")

  const [submitted, setSubmitted] = useState(false)

  const [nrp, setNrp] = useState("")

  const [submissionError, setSubmissionError] = useState("")

  const [isSubmitting, setIsSubmitting] = useState(false)

  const [applicationStep, setApplicationStep] = useState<1 | 2>(1)

  const [interestedWing, setInterestedWing] = useState("")

  const [division, setDivision] = useState("")

  const scrollToApplicationForm = () => {
    setMode("APPLY")
    requestAnimationFrame(() => {
      document.getElementById("application-form")?.scrollIntoView({ behavior: "smooth", block: "start" })
    })
  }

  useEffect(() => {
    const draft = readRecruitmentDraft()
    if (Object.keys(draft).length === 0) return

    if (draft.applicationStep === "2") setApplicationStep(2)
    setInterestedWing(draft.interestedWing ?? "")
    setDivision(draft.division ?? "")

    const form = applicationFormRef.current
    if (!form) return

    Object.entries(draft).forEach(([name, value]) => {
      const field = form.elements.namedItem(name)
      if (field instanceof HTMLInputElement && field.type !== "file") {
        field.value = value
      } else if (field instanceof HTMLSelectElement || field instanceof HTMLTextAreaElement) {
        field.value = value
      }
    })
  }, [applicationStep])

  const saveApplicationDraft = (step = applicationStep) => {
    const form = applicationFormRef.current
    if (!form) return

    let draft: Record<string, string> = {}

    const savedDraft = localStorage.getItem(recruitmentDraftKey)
    if (savedDraft) {
      try {
        draft = JSON.parse(savedDraft) as Record<string, string>
      } catch {
        localStorage.removeItem(recruitmentDraftKey)
      }
    }

    Object.assign(draft, {
      applicationStep: String(step),
      interestedWing,
      division,
    })

    new FormData(form).forEach((value, name) => {
      if (typeof value === "string") draft[name] = value
    })

    localStorage.setItem(recruitmentDraftKey, JSON.stringify(draft))
  }


  const [trackingCode, setTrackingCode] = useState("")

  const [trackingResult, setTrackingResult] =
    useState<"PENDING" | "ADMINISTRATION" | "INTERVIEW" | "MEMBER" | "NOT SELECTED / ADMINISTRATION" | "NOT SELECTED / INTERVIEW" | "NOT FOUND" | null>(
      null,
    )
  const [trackingApplicantName, setTrackingApplicantName] = useState("")

  const technicalWings = ["Technical", "Research & Development"];
  const nonTechnicalWings = ["Non-Technical"];

  let divisions: string[] = [];
  if (technicalWings.includes(interestedWing)) {
    divisions = ["Electrical", "Mechanical", "Programming"];
  } else if (nonTechnicalWings.includes(interestedWing)) {
    divisions = ["Internal", "Branding", "Public Relations", "Project Management"];
  }

  const requiresTechnicalDocuments = (interestedWing === "Technical" || interestedWing === "Research & Development") && division !== ""

  const requiresNonTechnicalDocuments = interestedWing === "Non-Technical" && division !== ""

  const checkStatus = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const normalized = trackingCode.trim().toUpperCase()
    if (!normalized) {
      setTrackingApplicantName("")
      setTrackingResult("NOT FOUND")
      return
    }

    try {
      const response = await fetch(`${recruitmentApiBase}/applications/${encodeURIComponent(normalized)}`)
      if (!response.ok) {
        setTrackingApplicantName("")
        setTrackingResult("NOT FOUND")
        return
      }

      const result = (await response.json()) as { status: string; full_name?: string }
      console.log(result);
      
      setTrackingApplicantName(result.full_name?.trim() ?? "")
      setTrackingResult(
        result.status === "NOT_SELECTED_ADMINISTRATION"
          ? "NOT SELECTED / ADMINISTRATION"
          : result.status === "NOT_SELECTED_INTERVIEW"
            ? "NOT SELECTED / INTERVIEW"
            : result.status as "PENDING" | "ADMINISTRATION" | "INTERVIEW" | "MEMBER",
      )
    } catch {
      setTrackingApplicantName("")
      setTrackingResult("NOT FOUND")
    }
  }

  return (
    <PageHero
      label="Open Recruitment / 2026"
      title={
        <>
          THE NEXT
          <br />
          CREW IS
          <br />
          <em>CALLING.</em>
        </>
      }
      description="Open Recruitment is your entry point into the CAKSA formation. Find your discipline, submit your application, and follow your selection flight."
      image={images.hero}
      actionLabel="START APPLICATION"
      onActionClick={scrollToApplicationForm}
    >
      <section className="recruitment-hub section-dark">
        <div className="recruitment-intro">
          <div>
            <Eyebrow>Open Recruitment / 2026</Eyebrow>
            <h2>
              ONE TEAM.
              <br />
              MANY WAYS
              <br />
              TO <em>FLY.</em>
            </h2>
          </div>
          <p>
            CAKSA welcomes students who want to build, organize, document, and
            take Indonesian UAV research further. No login is required for this
            UI prototype.
          </p>
        </div>
        <aside className="recruitment-guide" aria-labelledby="recruitment-guide-title">
          <div className="recruitment-guide-index">PRE-FLIGHT CHECK / 00</div>
          <div className="recruitment-guide-copy">
            <span>START HERE</span>
            <h3 id="recruitment-guide-title" className="text-[32px] sm:text-6xl">
              READ THE
              <br />
              <em>GUIDEBOOK.</em>
            </h3>
            <p>Understand the selection flow and prepare the right documents before you start your application.</p>
          </div>
          <div className="recruitment-guide-actions">
            <a href={recruitmentGuidebookUrl} target="_blank" rel="noreferrer">
              OPEN GUIDEBOOK <b>↗</b>
            </a>
            <a href={sampleDocumentsUrl} target="_blank" rel="noreferrer">
              VIEW SAMPLE FILES <b>↗</b>
            </a>
          </div>
        </aside>
        <div className="recruitment-mode max-[380px]:!grid-cols-1">
          <button
            type="button"
            className={`${mode === "APPLY" ? "active" : ""} max-[380px]:!px-0`}
            onClick={() => setMode("APPLY")}
          >
            01 / START APPLICATION
          </button>
          <button
            type="button"
            className={`${mode === "TRACK" ? "active" : ""
              } max-[380px]:!border-l-0 max-[380px]:!border-t max-[380px]:!border-white/25 max-[380px]:!px-0`}
            onClick={() => setMode("TRACK")}
          >
            02 / TRACK APPLICATION
          </button>
        </div>
        {mode === "APPLY" ? (
          <div id="application-form" className="application-panel">
            {submitted ? (
              <div className="application-success">
                <span>APPLICATION RECEIVED</span>
                <h3>
                  THANK YOU
                  <br />
                  FOR APPLY
                  <br />
                  <a target="_blank" href="https://chat.whatsapp.com/KNcAiaKtlzDHj1Pf394sM8?s=sw&p=a&mlu=4"><button>JOIN GROUP WHATSAPP</button></a>
                </h3>
                <p>
                  Remember your NRP to check your selection status later.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setMode("TRACK")
                    setTrackingCode(nrp)
                    setTrackingResult("PENDING")
                  }}
                >
                  Track application ↗
                </button>
              </div>
            ) : (
              <form
                className="recruitment-form"
                ref={applicationFormRef}
                onChange={() => requestAnimationFrame(() => saveApplicationDraft())}
                onSubmit={async (event) => {
                  event.preventDefault()
                  if (applicationStep === 1) {
                    saveApplicationDraft(2)
                    setApplicationStep(2)
                    return
                  }
                  setSubmissionError("")
                  setIsSubmitting(true)
                  try {
                    const submissionFormData = new FormData(event.currentTarget)
                    const draft = readRecruitmentDraft()

                    stepOneFieldNames.forEach((fieldName) => {
                      const currentValue = submissionFormData.get(fieldName)
                      const draftValue = draft[fieldName]

                      if (typeof currentValue === "string" && currentValue.trim() !== "") return
                      if (typeof draftValue === "string" && draftValue.trim() !== "") {
                        submissionFormData.set(fieldName, draftValue)
                      }
                    })

                    const response = await fetch(`${recruitmentApiBase}/applications`, {
                      method: "POST",
                      body: submissionFormData,
                    })
                    const result = (await response.json()) as { nrp?: string; error?: string }
                    if (!response.ok || !result.nrp) {
                      throw new Error(result.error || "Unable to submit application")
                    }
                    localStorage.removeItem(recruitmentDraftKey)
                    setNrp(result.nrp)
                    setSubmitted(true)
                  } catch (error) {
                    setSubmissionError(error instanceof Error ? error.message : "Unable to submit application")
                  } finally {
                    setIsSubmitting(false)
                  }
                }}
              >
                <div className="form-header">
                  <span>APPLICATION FORM / STEP 0{applicationStep} OF 02</span>
                </div>
                {applicationStep === 1 ? (
                  <div className="form-grid">
                    <label className="font-bold">
                      EMAIL ADDRESS
                      <input className="font-light" name="email" required type="email" placeholder="name@email.com" />
                    </label>
                    <label className="font-bold">
                      FULL NAME
                      <input className="font-light" name="fullName" required placeholder="Your full name" />
                    </label>
                    <label className="font-bold">
                      NRP
                      <input className="font-light" name="nrp" required inputMode="numeric" placeholder="Your student number" />
                    </label>
                    <label className="font-bold">
                      DEGREE LEVEL
                      <select className="font-light" name="degreeLevel" required defaultValue="">
                        <option value="" disabled>Select degree level</option>
                        <option>D3</option>
                        <option>D4</option>
                        <option>LJ</option>
                        <option>S2</option>
                      </select>
                    </label>
                    <label className="font-bold">
                      STUDY PROGRAM
                      <select className="font-light" name="studyProgram" required defaultValue="">
                        <option value="" disabled>Select study program</option>
                        {studyPrograms.map(([name, url]) => (
                          <option key={name} value={url}>{name}</option>
                        ))}
                      </select>
                    </label>
                    <label className="font-bold">
                      BATCH
                      <select className="font-light" name="batch" required defaultValue="">
                        <option value="" disabled>Select batch</option>
                        <option>2024</option>
                        <option>2025</option>
                        <option>2026</option>
                      </select>
                    </label>
                    <label className="font-bold">
                      INSTAGRAM
                      <input className="font-light" name="instagram" required placeholder="@yourusername" />
                    </label>
                    <label className="font-bold">
                      WHERE DID YOU KNOW ABOUT THIS OPEN RECRUITMENT?
                      <select className="font-light" name="referralSource" required defaultValue="">
                        <option value="" disabled>Select one</option>
                        <option>MBEX (Minat Bakat Expo)</option>
                        <option>Instagram</option>
                        <option>Campus information</option>
                        <option>Friend or CAKSA member</option>
                        <option>WhatsApp</option>
                        <option>Other</option>
                      </select>
                    </label>
                  </div>
                ) : (
                  <>
                    <div className="form-resource">
                      <div>
                        <span>DOCUMENT CHECK / BEFORE UPLOAD</span>
                        <p>Need a reference for the required files? Open the sample folder before uploading.</p>
                      </div>
                      <a href={sampleDocumentsUrl} target="_blank" rel="noreferrer">
                        SEE EXAMPLES <b>↗</b>
                      </a>
                    </div>
                    <div className="form-grid">
                      <label className="font-bold">
                        INTERESTED DIVISION
                      <select
                        className="font-light"
                        name="interestedWing"
                        required
                        value={interestedWing}
                        onChange={(event) => {
                          setInterestedWing(event.target.value)
                          setDivision("")
                        }}
                      >
                        <option value="" disabled>
                          Select a Division
                        </option>
                        <option>Technical</option>
                        <option>Non-Technical</option>
                        <option>Research & Development</option>
                      </select>
                    </label>
                    <label className="font-bold">
                      SUBDIVISION OF INTEREST
                      <select
                        className="font-light"
                        name="division"
                        required
                        value={division}
                        disabled={!interestedWing}
                        onChange={(event) => {
                          setDivision(event.target.value)
                        }}
                      >
                        <option value="" disabled>
                          {interestedWing
                            ? "Select division"
                            : "Select a wing first"}
                        </option>
                        {divisions.map((item) => (
                          <option key={item}>{item}</option>
                        ))}
                      </select>
                    </label>
                    {requiresTechnicalDocuments && (
                      <>
                        <label className="font-bold">
                          CV / PDF
                          <input
                            className="font-light"
                            name="curriculumVitae"
                            required
                            type="file"
                            accept="application/pdf,.pdf"
                          />
                        </label>
                        <label className="font-bold">
                          ESSAY / PDF
                          <input
                            className="font-light"
                            name="essay"
                            required
                            type="file"
                            accept="application/pdf,.pdf"
                          />
                        </label>
                        <label className="full-field font-bold">
                          PARENT PERMISSION LETTER / PDF
                          <input
                            className="font-light"
                            name="parentPermissionLetter"
                            required
                            type="file"
                            accept="application/pdf,.pdf"
                          />
                        </label>
                        <label className="full-field font-bold">
                          PORTFOLIO / GOOGLE DRIVE LINK
                          <input
                            className="font-light"
                            name="portfolioUrl"
                            type="url"
                            placeholder="https://drive.google.com/..."
                          />
                        </label>
                      </>
                    )}
                    {requiresNonTechnicalDocuments && (
                      <>
                        <label className="font-bold">
                          CURRICULUM VITAE / PDF
                          <input
                            className="font-light"
                            name="curriculumVitae"
                            required
                            type="file"
                            accept="application/pdf,.pdf"
                          />
                        </label>
                        <label className="font-bold">
                          MOTIVATION LETTER / PDF
                          <input
                            className="font-light"
                            name="motivationLetter"
                            required
                            type="file"
                            accept="application/pdf,.pdf"
                          />
                        </label>
                        <label className="full-field font-bold">
                          PARENT PERMISSION LETTER / PDF
                          <input
                            className="font-light"
                            name="parentPermissionLetter"
                            required
                            type="file"
                            accept="application/pdf,.pdf"
                          />
                        </label>
                        {(division === "Internal" || division === "Branding") && (
                          <label className="full-field font-bold">
                            SPECIAL TASK / GOOGLE DRIVE LINK
                            <input
                              className="font-light"
                              name="specialTaskUrl"
                              required
                              type="url"
                              placeholder="https://drive.google.com/..."
                            />
                          </label>
                        )}
                        <label className="full-field font-bold">
                          PORTFOLIO / GOOGLE DRIVE LINK
                          <input
                            className="font-light"
                            name="portfolioUrl"
                            type="url"
                            placeholder="https://drive.google.com/..."
                          />
                        </label>
                      </>
                    )}
                    <div className="form-resource-inline">
                      <span>NOT SURE WHAT TO UPLOAD?</span>
                      <a href={sampleDocumentsUrl} target="_blank" rel="noreferrer">
                        OPEN SAMPLE FILES <b>↗</b>
                      </a>
                    </div>
                    <label className="full-field font-bold">
                      WHY CAKSA?
                      <textarea
                        className="font-light"
                        name="whyCaksa"
                        required
                        rows={4}
                        placeholder="Tell us where you want to contribute..."
                      />
                    </label>
                    </div>
                  </>
                )}
                <div className="recruitment-form-actions">
                  {submissionError && <p role="alert" className="text-sm font-semibold text-red-400">{submissionError}</p>}
                  {applicationStep === 2 && <button className="form-back" type="button" onClick={() => {
                    saveApplicationDraft(1)
                    setApplicationStep(1)
                  }} disabled={isSubmitting}>↙ Back</button>}
                  <button className="submit-application disabled:cursor-not-allowed disabled:opacity-60" type="submit" disabled={isSubmitting} aria-busy={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <span className="mr-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent align-[-0.125em]" aria-hidden="true" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        {applicationStep === 1 ? "Next step" : "Submit application"} <b>↗</b>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        ) : (
          <div className="tracking-panel">
            <div className="tracking-copy">
              <span>APPLICANT TRACKER</span>
              <h3>
                FOLLOW
                <br />
                YOUR <em>FLIGHT.</em>
              </h3>
              <p>
                Enter your NRP to preview your selection status.
              </p>
            </div>
            <div className="tracking-console">
              <form className="tracking-form" onSubmit={checkStatus}>
                <label>
                  NRP
                  <input
                    value={trackingCode}
                    onChange={(event) => setTrackingCode(event.target.value)}
                    placeholder="3125600063"
                  />
                </label>
                <button type="submit">CHECK ↗</button>
              </form>
              <div
                className={`status-board ${trackingResult
                    ? `result-${trackingResult.toLowerCase().split(" / ").join("-").split(" ").join("-")}`
                    : "standby"
                  }`}
              >
                {trackingResult === "NOT FOUND" ? (
                  <>
                    <span>FLIGHT CODE / NOT FOUND</span>
                    <h4>NO SIGNAL.</h4>
                    <p>
                      Check the code or try one of the demo codes shown on the
                      left.
                    </p>
                  </>
                ) : trackingResult === "NOT SELECTED / ADMINISTRATION" ||
                  trackingResult === "NOT SELECTED / INTERVIEW" ? (
                  <>
                    <div className="status-board-top">
                      <span>SELECTION RESULT</span>
                      <b>
                        {trackingCode.trim().toUpperCase() || "CAKSA-26-000"}
                      </b>
                    </div>
                    {trackingApplicantName && (
                      <p className="status-applicant">
                        <span>APPLICANT / </span>{trackingApplicantName}
                      </p>
                    )}
                    <div className="status-hero">
                      <span>
                        {trackingResult === "NOT SELECTED / ADMINISTRATION"
                          ? "ADMINISTRATION REVIEW"
                          : "INTERVIEW REVIEW"}
                      </span>
                      <h4>
                        NOT
                        <br />
                        SELECTED.
                      </h4>
                      <p>
                        {trackingResult === "NOT SELECTED / ADMINISTRATION"
                          ? "Thank you for applying. This application did not progress beyond the administration stage."
                          : "Thank you for completing the interview. This application was not selected for the current team term."}
                      </p>
                    </div>
                    <div className="status-flight">
                      <article className="done">
                        <b>01</b>
                        <span>APPLY</span>
                        <i />
                      </article>
                      <article
                        className={
                          trackingResult === "NOT SELECTED / INTERVIEW"
                            ? "done"
                            : "not-selected"
                        }
                      >
                        <b>02</b>
                        <span>ADMIN</span>
                        <i />
                      </article>
                      <article
                        className={
                          trackingResult === "NOT SELECTED / INTERVIEW"
                            ? "not-selected"
                            : ""
                        }
                      >
                        <b>03</b>
                        <span>INTERVIEW</span>
                        <i />
                      </article>
                      <article>
                        <b>04</b>
                        <span>MEMBER</span>
                        <i />
                      </article>
                    </div>
                  </>
                ) : trackingResult ? (
                  <>
                    <div className="status-board-top">
                      <span>LIVE APPLICATION STATUS</span>
                      <b>
                        {trackingCode.trim().toUpperCase() || "3125600063"}
                      </b>
                    </div>
                    {trackingApplicantName && (
                      <p className="status-applicant">
                        <span>APPLICANT / </span>{trackingApplicantName}
                      </p>
                    )}
                    <div className="status-hero">
                      <h3 className="font-bold">Group Whatsapp: <a target="_blank" href="https://chat.whatsapp.com/KNcAiaKtlzDHj1Pf394sM8?s=sw&p=a&mlu=4" className="text-orange-400">Join</a></h3>
                      <span>CURRENT STAGE</span>
                      <h4>
                        {trackingResult === "MEMBER"
                          ? "MEMBER"
                          : trackingResult === "INTERVIEW"
                            ? "INTERVIEW"
                            : trackingResult === "ADMINISTRATION"
                              ? "ADMIN"
                              : "REVIEW"}
                      </h4>
                      <p>
                        {trackingResult === "MEMBER"
                          ? "WELCOME TO THE FORMATION."
                          : trackingResult === "INTERVIEW"
                            ? "YOU HAVE CLEARED THE ADMINISTRATION STAGE."
                            : trackingResult === "ADMINISTRATION"
                              ? "YOUR APPLICATION IS UNDER ADMINISTRATION REVIEW."
                              : "YOUR APPLICATION IS IN THE FLIGHT QUEUE."}
                      </p>
                    </div>
                    <div className="status-flight">
                      <article className="done">
                        <b>01</b>
                        <span>APPLY</span>
                        <i />
                      </article>
                      <article
                        className={
                          trackingResult === "ADMINISTRATION" ||
                            trackingResult === "INTERVIEW" ||
                            trackingResult === "MEMBER"
                            ? "done"
                            : ""
                        }
                      >
                        <b>02</b>
                        <span>ADMIN</span>
                        <i />
                      </article>
                      <article
                        className={
                          trackingResult === "INTERVIEW" ||
                            trackingResult === "MEMBER"
                            ? "done"
                            : ""
                        }
                      >
                        <b>03</b>
                        <span>INTERVIEW</span>
                        <i />
                      </article>
                      <article
                        className={
                          trackingResult === "MEMBER" ? "done final" : ""
                        }
                      >
                        <b>04</b>
                        <span>MEMBER</span>
                        <i />
                      </article>
                    </div>
                  </>
                ) : (
                  <>
                    <span>STATUS CONSOLE / STANDBY</span>
                    <h4>
                      READY FOR
                      <br />
                      YOUR CODE.
                    </h4>
                    <p>
                      Enter an NRP to receive an immediate
                      selection signal.
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </section>
      <section className="recruitment-roles section-light">
        <div>
          <Eyebrow>Choose your wing</Eyebrow>
          <h2>
            BRING YOUR
            <br />
            <em>OWN</em>
            <br />
            DISCIPLINE.
          </h2>
        </div>
        <div className="role-stream">
          <article>
            <span>01 / TECHNICAL</span>
            <h3>
              BUILD THE
              <br />
              AIRFRAME.
            </h3>
            <p>Electrical · Programming · Mechanical · Project Management</p>
          </article>
          <article>
            <span>02 / NON-TECHNICAL</span>
            <h3>
              MOVE THE
              <br />
              MISSION.
            </h3>
            <p>
              Internal · Branding · Public Relations · Project Management
            </p>
          </article>
        </div>
      </section>
    </PageHero>
  )
}
