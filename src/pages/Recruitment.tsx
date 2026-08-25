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

  const [applicationCode, setApplicationCode] = useState("")

  const [submissionError, setSubmissionError] = useState("")

  const [isSubmitting, setIsSubmitting] = useState(false)

  const [applicationStep, setApplicationStep] = useState<1 | 2>(1)

  const [interestedWing, setInterestedWing] = useState("")

  const [division, setDivision] = useState("")

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

  const divisions =
    interestedWing === "Technical"
      ? ["Electrical", "Mechanical", "Programming", "Research & Development"]
      : interestedWing === "Non-Technical"
        ? [
          "Administration",
          "Branding",
          "Public Relations",
          "Project Management",
        ]
        : []

  const requiresTechnicalDocuments = interestedWing === "Technical" && division !== ""

  const requiresNonTechnicalDocuments = interestedWing === "Non-Technical" && division !== ""

  const checkStatus = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const normalized = trackingCode.trim().toUpperCase()
    if (!normalized) {
      setTrackingResult("NOT FOUND")
      return
    }

    try {
      const response = await fetch(`${recruitmentApiBase}/applications/${encodeURIComponent(normalized)}`)
      if (!response.ok) {
        setTrackingResult("NOT FOUND")
        return
      }

      const result = (await response.json()) as { status: string }
      setTrackingResult(
        result.status === "NOT_SELECTED_ADMINISTRATION"
          ? "NOT SELECTED / ADMINISTRATION"
          : result.status === "NOT_SELECTED_INTERVIEW"
            ? "NOT SELECTED / INTERVIEW"
            : result.status as "PENDING" | "ADMINISTRATION" | "INTERVIEW" | "MEMBER",
      )
    } catch {
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
          <div className="application-panel">
            {submitted ? (
              <div className="application-success">
                <span>APPLICATION RECEIVED</span>
                <h3>
                  YOUR FLIGHT
                  <br />
                  CODE IS
                  <br />
                  <em>{applicationCode}</em>
                </h3>
                <p>
                  Save this code to check your selection status later.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setMode("TRACK")
                    setTrackingCode(applicationCode)
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
                    const result = (await response.json()) as { applicationCode?: string; error?: string }
                    if (!response.ok || !result.applicationCode) {
                      throw new Error(result.error || "Unable to submit application")
                    }
                    localStorage.removeItem(recruitmentDraftKey)
                    setApplicationCode(result.applicationCode)
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
                    <label>
                      EMAIL ADDRESS
                      <input name="email" required type="email" placeholder="name@email.com" />
                    </label>
                    <label>
                      FULL NAME
                      <input name="fullName" required placeholder="Your full name" />
                    </label>
                    <label>
                      NRP
                      <input name="nrp" required inputMode="numeric" placeholder="Your student number" />
                    </label>
                    <label>
                      DEGREE LEVEL
                      <select name="degreeLevel" required defaultValue="">
                        <option value="" disabled>Select degree level</option>
                        <option>D3</option>
                        <option>D4</option>
                        <option>LJ</option>
                        <option>S2</option>
                      </select>
                    </label>
                    <label>
                      STUDY PROGRAM
                      <select name="studyProgram" required defaultValue="">
                        <option value="" disabled>Select study program</option>
                        {studyPrograms.map(([name, url]) => (
                          <option key={name} value={url}>{name}</option>
                        ))}
                      </select>
                    </label>
                    <label>
                      BATCH
                      <select name="batch" required defaultValue="">
                        <option value="" disabled>Select batch</option>
                        <option>2024</option>
                        <option>2025</option>
                        <option>2026</option>
                      </select>
                    </label>
                    <label>
                      INSTAGRAM
                      <input name="instagram" required placeholder="@yourusername" />
                    </label>
                    <label>
                      WHERE DID YOU KNOW ABOUT THIS OPEN RECRUITMENT?
                      <select name="referralSource" required defaultValue="">
                        <option value="" disabled>Select one</option>
                        <option>Instagram</option>
                        <option>Campus information</option>
                        <option>Friend or CAKSA member</option>
                        <option>WhatsApp</option>
                        <option>Other</option>
                      </select>
                    </label>
                  </div>
                ) : (
                  <div className="form-grid">
                    <label>
                      INTERESTED WING
                      <select
                        name="interestedWing"
                        required
                        value={interestedWing}
                        onChange={(event) => {
                          setInterestedWing(event.target.value)
                          setDivision("")
                        }}
                      >
                        <option value="" disabled>
                          Select a wing
                        </option>
                        <option>Technical</option>
                        <option>Non-Technical</option>
                      </select>
                    </label>
                    <label>
                      DIVISION OF INTEREST
                      <select
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
                        <label>
                          CV / PDF
                          <input
                            name="curriculumVitae"
                            required
                            type="file"
                            accept="application/pdf,.pdf"
                          />
                        </label>
                        <label>
                          ESSAY / PDF
                          <input
                            name="essay"
                            required
                            type="file"
                            accept="application/pdf,.pdf"
                          />
                        </label>
                        <label className="full-field">
                          PARENT PERMISSION LETTER / PDF
                          <input
                            name="parentPermissionLetter"
                            required
                            type="file"
                            accept="application/pdf,.pdf"
                          />
                        </label>
                        <label className="full-field">
                          PORTFOLIO / GOOGLE DRIVE LINK
                          <input
                            name="portfolioUrl"
                            required
                            type="url"
                            placeholder="https://drive.google.com/..."
                          />
                        </label>
                      </>
                    )}
                    {requiresNonTechnicalDocuments && (
                      <>
                        <label>
                          CURRICULUM VITAE / PDF
                          <input
                            name="curriculumVitae"
                            required
                            type="file"
                            accept="application/pdf,.pdf"
                          />
                        </label>
                        <label>
                          MOTIVATION LETTER / PDF
                          <input
                            name="motivationLetter"
                            required
                            type="file"
                            accept="application/pdf,.pdf"
                          />
                        </label>
                        <label className="full-field">
                          PARENT PERMISSION LETTER / PDF
                          <input
                            name="parentPermissionLetter"
                            required
                            type="file"
                            accept="application/pdf,.pdf"
                          />
                        </label>
                        {(division === "Administration" || division === "Branding") && (
                          <label className="full-field">
                            SPECIAL TASK / GOOGLE DRIVE LINK
                            <input
                              name="specialTaskUrl"
                              required
                              type="url"
                              placeholder="https://drive.google.com/..."
                            />
                          </label>
                        )}
                        <label className="full-field">
                          PORTFOLIO / GOOGLE DRIVE LINK
                          <input
                            name="portfolioUrl"
                            required
                            type="url"
                            placeholder="https://drive.google.com/..."
                          />
                        </label>
                      </>
                    )}
                    <label className="full-field">
                      WHY CAKSA?
                      <textarea
                        name="whyCaksa"
                        required
                        rows={4}
                        placeholder="Tell us where you want to contribute..."
                      />
                    </label>
                  </div>
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
              <span>APPLICANT TRACKER / NO LOGIN</span>
              <h3>
                FOLLOW
                <br />
                YOUR <em>FLIGHT.</em>
              </h3>
              <p>
                Enter your application code to preview your selection status.
              </p>
            </div>
            <div className="tracking-console">
              <form className="tracking-form" onSubmit={checkStatus}>
                <label>
                  APPLICATION CODE
                  <input
                    value={trackingCode}
                    onChange={(event) => setTrackingCode(event.target.value)}
                    placeholder="CAKSA-26-000"
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
                        {trackingCode.trim().toUpperCase() || "CAKSA-26-000"}
                      </b>
                    </div>
                    <div className="status-hero">
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
                      Enter an application code to receive an immediate
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
              Administration · Branding · Public Relations · Project Management
            </p>
          </article>
        </div>
      </section>
    </PageHero>
  )
}
