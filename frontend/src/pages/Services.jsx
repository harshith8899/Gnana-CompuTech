import React from 'react'

const SERVICES = [
  {
    title: 'Smart School & College ERP',
    desc: 'Custom academic ERP with attendance, exams, fees, analytics and parent communication built in.',
    points: ['Lower administrative load', 'Full operational transparency', 'Real-time data access'],
    icon: (
      <svg viewBox="0 0 24 24">
        <rect x="3" y="4" width="18" height="14" rx="1" />
        <path d="M3 9h18" />
        <path d="M8 4v14" />
      </svg>
    ),
  },
  {
    title: 'Exam & IQ Test Platforms',
    desc: 'Gamified platforms for quizzes, Olympiads and entrance prep, scored and reported in real time.',
    points: ['Live scoring & analytics', 'Adaptive difficulty', 'Student-facing dashboards'],
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
  {
    title: 'Internships & Real Projects',
    desc: 'Skill-based training across Python, Java Full Stack, Data Analytics, AI/ML, IoT and cybersecurity.',
    points: ['Certification on completion', 'Real project implementation', 'Career-aligned outcomes'],
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
  },
  {
    title: 'Teacher Digital Empowerment',
    desc: 'Hands-on training in LMS platforms, smart boards and content creation for faculty.',
    points: ['Stronger classroom interaction', 'Hybrid & remote-ready teaching', 'Train-the-trainer model'],
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M22 10v6M2 10l10-5 10 5-10 5-10-5z" />
        <path d="M6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5" />
      </svg>
    ),
  },
  {
    title: 'Student Enrichment Programs',
    desc: 'Coding bootcamps, quizzes, counselling and innovation challenges outside the syllabus.',
    points: ['Creativity & teamwork', 'Real-world problem-solving', 'Certification & recognition'],
    icon: (
      <svg viewBox="0 0 24 24">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21v-1a8 8 0 0 1 16 0v1" />
      </svg>
    ),
  },
  {
    title: 'Custom Software Development',
    desc: 'Secure, scalable apps for attendance, exams, alumni and administration, tailored to your institution.',
    points: ['Cloud-enabled & secure', 'UX-optimised interfaces', 'End-to-end maintenance'],
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M12 20V10" />
        <path d="M18 20V4" />
        <path d="M6 20v-4" />
      </svg>
    ),
  },
]

function ServiceCard({ service, reverse }) {
  return (
    <article className={`service-item ${reverse ? 'reverse' : ''}`}>
      <div className="service-card">
        <div className="service-icon">{service.icon}</div>
        <div className="service-copy">
          <h3>{service.title}</h3>
          <p>{service.desc}</p>
          <ul>
            {service.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  )
}

export default function Services() {
  return (
    <main className="page services-page">
      <section className="page-head">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">
              <span className="num">Page</span> SERVICES
            </div>
            <h1>Institution-ready technology services for learning organizations</h1>
            <p>
              Our full-services page gives a dedicated overview of the systems,
              platforms and training programs we build for schools, colleges and
              education teams.
            </p>
          </div>
        </div>
      </section>

      <section className="services-list">
        <div className="wrap">
          {SERVICES.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              reverse={index % 2 === 1}
            />
          ))}
        </div>
      </section>
    </main>
  )
}
