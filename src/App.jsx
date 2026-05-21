import { useEffect, useState } from 'react'
import heroBackgroundImage from './assets/hero-background.png'
import './App.css'

const logoUrl =
  'https://warrior-martialarts.com/wp-content/uploads/2022/09/Warrior-Martial-Arts-LOGO-SMALL-3.png'

const heroImageUrl = heroBackgroundImage

const viewLocationUrl =
  'https://warrior-martialarts.com/mc-locations/hasbrouck-heights/'

const mapUrl =
  'https://maps.google.com/maps?z=16&daddr=460+Boulevard++Hasbrouck+Heights+New+Jersey+07604+'

const freeClassSignupUrl = 'https://forms.gle/Wg1A1VwcWfXgfND88'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Enroll', href: '#enroll' },
  { label: 'Instructors', href: '#instructors' },
  { label: 'Schedule', href: '#schedule' },
  { label: 'Contact', href: '#contact' },
]

const classCards = [
  {
    title: 'Kids - Warrior Martial Arts Classes',
    description:
      'Separate youth instruction focused on confidence, discipline, balance, and age-appropriate karate fundamentals.',
    link: 'https://warrior-martialarts.com/wp-content/uploads/2026/02/KIDS_CLASS_WARRIOR-MARTIAL-ARTS_22026.pdf',
  },
  {
    title: 'Adult Classes',
    description:
      'Traditional Okinawan karate, kata, self-defense techniques, conditioning drills, and belt-focused training.',
    link: 'https://warrior-martialarts.com/wp-content/uploads/2026/03/AdultKarateClass_312026.pdf',
  },
  {
    title: 'Seniors - Tai Chi Body Healing, Movement and Breathing',
    description:
      'Gentle strength, mobility, breathing, coordination, and restorative movement for seniors seeking health and longevity.',
    link: 'https://warrior-martialarts.com/wp-content/uploads/2026/02/Taichi-Body-Healing_22026.pdf',
  },
]

const instructors = [
  {
    slug: 'mike-paredes',
    name: 'Sensei Mike Paredes',
    headingName: 'Sensei Michael Paredes',
    title: 'Chief Instructor at Warrior Martial Arts Karate Self-Defense',
    detailTitle: 'Chief instructor at Warrior Martial Arts Karate Self-Defense',
    description:
      'A Bergen County native, Air Force veteran, and fourth-degree black belt who has trained since 2007 and leads with discipline, service, and community.',
    image:
      'https://warrior-martialarts.com/wp-content/uploads/2022/12/sensei-mike.png',
    highlights: ['Training since 2007', '4th Degree Black Belt', 'Air Force veteran'],
    bio: [
      'Since 2007, I have trained at the Center for Karate & Family Fitness in Hasbrouck Heights, New Jersey, under the leadership of Grandmaster Dr. Juan Otero and Sensei Dale Inglima. Like everyone else, I started as a nyumonsha, or beginner, with no prior martial arts experience. With consistent dedication and training, I earned my black belt in 2013, my second-degree black belt in 2015, and my third-degree black belt in 2018 along with the title of Sensei. In 2022, I earned the rank of fourth-degree black belt and continue to pursue greater growth and learning.',
      'I have been a lifelong Bergen County resident. I graduated from Nyack College and the Culinary Institute of America, receiving a BS in Business and an AOS in Occupational Studies. I am also a proud veteran of the U.S. Air Force and received my honorable discharge at the rank of Sergeant.',
      'Warrior Martial Arts encourages and promotes faith, family, and friends. I am honored to continue this journey through our martial arts school and hope you will begin your training with us.',
    ],
  },
  {
    slug: 'deborah-adams',
    name: 'Sensei Deborah Adams',
    title: 'Senior Instructor',
    detailTitle: 'Go-Dan (5th Degree) Senior Instructor',
    description:
      'Go-Dan senior instructor bringing experienced black-belt leadership and hands-on guidance across the Warrior program.',
    image:
      'https://warrior-martialarts.com/wp-content/uploads/2022/12/Sensei-Adam.png',
    highlights: ['Training since 2001', '5th Degree Black Belt', 'Mind-body-spirit focus'],
    bio: [
      'My name is Sensei Deborah Adams. I began my martial arts training in 2001 and received the rank of Go-Dan, fifth-degree black belt, in March 2022. Karate is a lifelong study and it runs through every aspect of my life. Just as a tree has one trunk but many branches, a well-rounded karateka is well trained across the disciplines of the arts. Training the mind, body, and spirit is essential to growth not only in the arts but in life as well.',
      'Staying active in nature through hiking, canoeing, foraging, and weight training is important to me when balancing my training outside the dojo. Meditation, yoga, and breathwork keep me grounded on the softer internal side of the art. My goal is to continue sharing the heart of karate, which is self-defense, with my community and to help people build confidence, self-control, and the ability to protect themselves and those they love.',
    ],
  },
  {
    slug: 'se-min-um',
    name: 'Se Min Um',
    title: 'Go-dan / 5th Degree',
    detailTitle: 'Go-dan (5th Degree)',
    description:
      'A fifth-degree black belt whose background spans Goshin-Ryu, Taekwondo, MCMAP, and cross-training across striking and grappling systems.',
    image:
      'https://warrior-martialarts.com/wp-content/uploads/2022/12/Sensei-Um.png',
    highlights: ['Training since age 14', '5th Degree Black Belt', 'Cross-style experience'],
    bio: [
      'My name is Se Min Um and I am a fifth-degree black belt, or Go-Dan, in Goshin-Ryu Karate. I have been training in martial arts since I was 14 years old, and my formal experience includes Karate, Taekwondo, and the Marine Corps Martial Arts Program (MCMAP). I enjoy learning from other combat sports such as boxing, wrestling, Muay Thai, Jujitsu, and Judo, and elements of those systems are visible in my techniques.',
      'I also enjoy other physical activities such as cycling, basketball, and weight lifting, and I believe that all forms of exercise can be enjoyable and beneficial to our health. Martial arts has always interested me because it is a skill that can be used in all aspects of life, but most importantly it has given me the ability to defend the people I love and the beliefs I stand for. I hope my story inspires others to benefit from the gifts martial arts has to offer.',
    ],
  },
  {
    slug: 'andrea-hewitt',
    name: 'Sensei Andrea Hewitt',
    headingName: 'Ms. Andrea Hewitt',
    title: 'Yondan / 4th Degree',
    detailTitle: 'Yondan (4th Degree)',
    description:
      'Fourth-degree black belt instructor helping students develop strong fundamentals, technical precision, and traditional martial arts confidence.',
    image:
      'https://warrior-martialarts.com/wp-content/uploads/2022/12/Hewitt.png',
    highlights: ['Training since 2002', '4th Degree Black Belt', 'Family-centered teaching'],
    bio: [
      'I started my karate journey in 2002 under Sensei Otero at the Center for Karate and Family Fitness in Hackensack, New Jersey. Through the generosity and kindness of Sensei Otero and Sensei Inglima, I was able to train with many masters in different disciplines. Those opportunities allowed me to grow not only as a student, but personally as well.',
      'My focus is now on teaching, and I consider it a great honor to pass on even a fraction of the wisdom my teachers shared with me. I try to carry the skills and discipline I have gained in training into every aspect of my life. I am fortunate that my husband is also a martial artist, and I hope one day to train with my daughter as she grows.',
    ],
  },
]

const galleryItems = [
  {
    title: 'Warrior kids',
    alt: 'Warrior kids practicing martial arts together in class',
    image:
      'https://warrior-martialarts.com/wp-content/uploads/2023/01/Warrior-kids-400x284.jpeg',
  },
  {
    title: 'Warrior student',
    alt: 'Warrior Martial Arts student posing in uniform',
    image:
      'https://warrior-martialarts.com/wp-content/uploads/2023/01/Warrior-student-400x284.jpeg',
  },
  {
    title: 'Full dojo',
    alt: 'Full Warrior Martial Arts dojo during group training',
    image:
      'https://warrior-martialarts.com/wp-content/uploads/2023/01/Warrior-martial-arts-dojo-full-400x284.jpeg',
  },
  {
    title: 'Martial arts in action',
    alt: 'Warrior Martial Arts students training in action',
    image:
      'https://warrior-martialarts.com/wp-content/uploads/2023/01/Warrior-martial-arts-in-actrion-400x284.jpeg',
  },
  {
    title: 'Training class',
    alt: 'Traditional Warrior Martial Arts training class',
    image:
      'https://warrior-martialarts.com/wp-content/uploads/2023/01/Warrior-training-class-400x284.jpeg',
  },
  {
    title: "Women's self-defense",
    alt: "Women's self-defense session at Warrior Martial Arts",
    image:
      'https://warrior-martialarts.com/wp-content/uploads/2023/01/Warrior-woman-400x284.jpeg',
  },
  {
    title: 'Weapon training',
    alt: 'Traditional weapon training at Warrior Martial Arts',
    image:
      'https://warrior-martialarts.com/wp-content/uploads/2023/01/warrior-weapon-training-2-400x284.jpeg',
  },
  {
    title: 'Group photo',
    alt: 'Warrior Martial Arts group photo with students and instructors',
    image:
      'https://warrior-martialarts.com/wp-content/uploads/2022/12/Warrior-martial-arts-group-pic-400x284.jpg',
  },
]

const locationCards = [
  {
    name: 'Washington Township',
    address: '605 Pascack Rd, Washington Township, NJ',
    image:
      'https://warrior-martialarts.com/wp-content/uploads/2022/12/Warrior-Martial-arts-location-Bethany-Community-Center.jpg',
    map: 'https://maps.google.com/?q=605+Pascack+Rd+Washington+Township+NJ',
  },
  {
    name: 'Hasbrouck Heights',
    address: '460 Valley Blvd, Hasbrouck Heights, NJ',
    image:
      'https://warrior-martialarts.com/wp-content/uploads/2026/02/Warrior-Martial-Arts-Hasbrough-Heights-Location.jpg',
    map: 'https://maps.google.com/?q=460+Valley+Blvd+Hasbrouck+Heights+NJ',
  },
]

const programPillars = [
  'Traditional Okinawan karate',
  'Classical weapons (Kobudo)',
  "Women's assault prevention",
  'Tai Chi, Qi-Gong, and Sanchin exercise',
]

const socialLinks = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/people/Warrior-Martial-Arts/100061304026509/',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/_warriormartialarts/',
  },
]

const createEvent = (date, time, title, description) => ({
  id: `${date}-${time}-${title}`.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
  date,
  time,
  title,
  description,
  category: 'Classes',
  locationName: 'Hasbrouck Heights',
  address: '460 Boulevard, Hasbrouck Heights, NJ 07604',
  viewLocation: viewLocationUrl,
  map: mapUrl,
})

const scheduleEvents = [
  createEvent(
    '2026-05-02',
    '10:00 am - 11:00 am',
    'Kids class and open Adult training',
    'Youth karate plus open adult training time for belt requirements, kata, and drills.',
  ),
  createEvent(
    '2026-05-04',
    '10:00 am - 11:00 am',
    'Senior classes (Tai Chi Body Healing, Movement and Breathing)',
    'Restorative movement, balance, coordinated breathing, and gentle body-healing practice.',
  ),
  createEvent(
    '2026-05-04',
    '1:00 pm - 2:00 pm',
    'Senior classes (Tai Chi Body Healing, Movement and Breathing)',
    'Restorative movement, balance, coordinated breathing, and gentle body-healing practice.',
  ),
  createEvent(
    '2026-05-05',
    '7:00 pm - 8:30 pm',
    'Adult Karate Class',
    'Traditional adult karate focused on kata, self-defense, conditioning drills, and belt progress.',
  ),
  createEvent(
    '2026-05-06',
    '10:00 am - 11:00 am',
    'Senior classes',
    'Low-impact movement and breathing work tailored for senior students.',
  ),
  createEvent(
    '2026-05-06',
    '1:00 pm - 2:00 pm',
    'Senior classes',
    'Low-impact movement and breathing work tailored for senior students.',
  ),
  createEvent(
    '2026-05-07',
    '7:00 pm - 8:30 pm',
    'Adult Karate Class',
    'Traditional adult karate focused on kata, self-defense, conditioning drills, and belt progress.',
  ),
  createEvent(
    '2026-05-09',
    '10:00 am - 11:00 am',
    'Kids class and open Adult training',
    'Youth karate plus open adult training time for belt requirements, kata, and drills.',
  ),
  createEvent(
    '2026-05-11',
    '10:00 am - 11:00 am',
    'Senior classes (Tai Chi Body Healing, Movement and Breathing)',
    'Restorative movement, balance, coordinated breathing, and gentle body-healing practice.',
  ),
  createEvent(
    '2026-05-11',
    '1:00 pm - 2:00 pm',
    'Senior classes (Tai Chi Body Healing, Movement and Breathing)',
    'Restorative movement, balance, coordinated breathing, and gentle body-healing practice.',
  ),
  createEvent(
    '2026-05-12',
    '7:00 pm - 8:30 pm',
    'Adult Karate Class',
    'Traditional adult karate focused on kata, self-defense, conditioning drills, and belt progress.',
  ),
  createEvent(
    '2026-05-13',
    '10:00 am - 11:00 am',
    'Senior classes',
    'Low-impact movement and breathing work tailored for senior students.',
  ),
  createEvent(
    '2026-05-13',
    '1:00 pm - 2:00 pm',
    'Senior classes',
    'Low-impact movement and breathing work tailored for senior students.',
  ),
  createEvent(
    '2026-05-14',
    '7:00 pm - 8:30 pm',
    'Adult Karate Class',
    'Traditional adult karate focused on kata, self-defense, conditioning drills, and belt progress.',
  ),
  createEvent(
    '2026-05-16',
    '10:00 am - 11:00 am',
    'Kids class and open Adult training',
    'Youth karate plus open adult training time for belt requirements, kata, and drills.',
  ),
  createEvent(
    '2026-05-18',
    '10:00 am - 11:00 am',
    'Senior classes (Tai Chi Body Healing, Movement and Breathing)',
    'Restorative movement, balance, coordinated breathing, and gentle body-healing practice.',
  ),
  createEvent(
    '2026-05-18',
    '1:00 pm - 2:00 pm',
    'Senior classes (Tai Chi Body Healing, Movement and Breathing)',
    'Restorative movement, balance, coordinated breathing, and gentle body-healing practice.',
  ),
  createEvent(
    '2026-05-19',
    '7:00 pm - 8:30 pm',
    'Adult Karate Class',
    'Traditional adult karate focused on kata, self-defense, conditioning drills, and belt progress.',
  ),
  createEvent(
    '2026-05-20',
    '10:00 am - 11:00 am',
    'Senior classes',
    'Low-impact movement and breathing work tailored for senior students.',
  ),
  createEvent(
    '2026-05-20',
    '1:00 pm - 2:00 pm',
    'Senior classes',
    'Low-impact movement and breathing work tailored for senior students.',
  ),
  createEvent(
    '2026-05-21',
    '7:00 pm - 8:30 pm',
    'Adult Karate Class',
    'Traditional adult karate focused on kata, self-defense, conditioning drills, and belt progress.',
  ),
  createEvent(
    '2026-05-23',
    '10:00 am - 11:00 am',
    'Kids class and open Adult training',
    'Youth karate plus open adult training time for belt requirements, kata, and drills.',
  ),
  createEvent(
    '2026-05-25',
    '10:00 am - 11:00 am',
    'Senior classes (Tai Chi Body Healing, Movement and Breathing)',
    'Restorative movement, balance, coordinated breathing, and gentle body-healing practice.',
  ),
  createEvent(
    '2026-05-25',
    '1:00 pm - 2:00 pm',
    'Senior classes (Tai Chi Body Healing, Movement and Breathing)',
    'Restorative movement, balance, coordinated breathing, and gentle body-healing practice.',
  ),
  createEvent(
    '2026-05-26',
    '7:00 pm - 8:30 pm',
    'Adult Karate Class',
    'Traditional adult karate focused on kata, self-defense, conditioning drills, and belt progress.',
  ),
  createEvent(
    '2026-05-27',
    '10:00 am - 11:00 am',
    'Senior classes',
    'Low-impact movement and breathing work tailored for senior students.',
  ),
  createEvent(
    '2026-05-27',
    '1:00 pm - 2:00 pm',
    'Senior classes',
    'Low-impact movement and breathing work tailored for senior students.',
  ),
  createEvent(
    '2026-05-28',
    '7:00 pm - 8:30 pm',
    'Adult Karate Class',
    'Traditional adult karate focused on kata, self-defense, conditioning drills, and belt progress.',
  ),
  createEvent(
    '2026-05-30',
    '10:00 am - 11:00 am',
    'Kids class and open Adult training',
    'Youth karate plus open adult training time for belt requirements, kata, and drills.',
  ),
]

const viewModes = ['Month', 'Week', 'Day']
const categoryModes = ['Classes', 'Holiday', 'All']

const todayKey = '2026-05-20'
const monthStart = new Date(2026, 4, 1)
const monthEnd = new Date(2026, 4, 31)

const longDateFormatter = new Intl.DateTimeFormat('en-US', {
  weekday: 'long',
  month: 'long',
  day: 'numeric',
  year: 'numeric',
})

const monthFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'long',
  year: 'numeric',
})

const shortDateFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  day: 'numeric',
})

const weekdayFormatter = new Intl.DateTimeFormat('en-US', {
  weekday: 'short',
})

function parseDate(dateString) {
  const [year, month, day] = dateString.split('-').map(Number)
  return new Date(year, month - 1, day)
}

function formatDateKey(date) {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')

  return `${year}-${month}-${day}`
}

function addDays(date, days) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() + days)
}

function isSameDay(left, right) {
  return formatDateKey(left) === formatDateKey(right)
}

function startOfWeek(date) {
  const normalized = new Date(date.getFullYear(), date.getMonth(), date.getDate())
  const day = normalized.getDay()
  const difference = day === 0 ? -6 : 1 - day

  return addDays(normalized, difference)
}

function endOfWeek(date) {
  return addDays(startOfWeek(date), 6)
}

function getMonthGridDays() {
  const days = []
  const firstVisibleDate = startOfWeek(monthStart)
  const lastVisibleDate = endOfWeek(monthEnd)

  for (
    let cursor = firstVisibleDate;
    cursor <= lastVisibleDate;
    cursor = addDays(cursor, 1)
  ) {
    days.push(cursor)
  }

  return days
}

function getMonthWeekStarts() {
  return getMonthGridDays().filter((_, index) => index % 7 === 0)
}

function getEventsForDate(events, dateString) {
  return events.filter((event) => event.date === dateString)
}

const calendarDays = getMonthGridDays()
const weekStarts = getMonthWeekStarts()

function getInstructorPageHref(slug) {
  return slug ? `#/instructors/${slug}` : '#/instructors'
}

function getRouteFromHash(hash) {
  if (hash.startsWith('#/instructors')) {
    const [, slug = ''] = hash.split('/instructors/')

    return {
      view: 'instructors',
      instructorSlug: slug.replace(/^\/+|\/+$/g, ''),
    }
  }

  return {
    view: 'home',
    anchor: hash.startsWith('#') ? hash.slice(1) : 'home',
  }
}

function InstructorDirectoryView({ selectedInstructorSlug }) {
  const selectedInstructor =
    instructors.find((instructor) => instructor.slug === selectedInstructorSlug) ??
    instructors[0]

  return (
    <>
      <section id="instructors-page-top" className="section instructor-directory-hero">
        <div className="container">
          <a className="text-link instructor-directory__back" href="#instructors">
            Back to instructor cards
          </a>

          <div className="instructor-directory__intro">
            <div className="instructor-directory__copy" data-reveal>
              <span className="eyebrow">Instructor Page</span>
              <h1>Instructors</h1>
              <p className="instructor-directory__lead">
                Meet the black-belt staff leading Warrior Martial Arts across youth
                classes, adult training, self-defense, and senior wellness.
              </p>

              <div
                className="instructor-directory__links"
                role="navigation"
                aria-label="Instructor quick links"
              >
                {instructors.map((instructor) => {
                  const isActive = instructor.slug === selectedInstructor.slug

                  return (
                    <a
                      key={instructor.slug}
                      href={getInstructorPageHref(instructor.slug)}
                      className={isActive ? 'is-active' : ''}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {instructor.name}
                    </a>
                  )
                })}
              </div>
            </div>

            <article className="instructor-directory__spotlight hero-card" data-reveal>
              <div className="instructor-directory__spotlight-image">
                <img
                  src={selectedInstructor.image}
                  alt={selectedInstructor.headingName ?? selectedInstructor.name}
                />
              </div>
              <div className="instructor-directory__spotlight-content">
                <span className="detail-card__label">Selected Instructor</span>
                <h2>{selectedInstructor.headingName ?? selectedInstructor.name}</h2>
                <p className="instructor-directory__spotlight-title">
                  {selectedInstructor.detailTitle}
                </p>
                <p>{selectedInstructor.description}</p>

                <ul className="instructor-directory__highlights">
                  {selectedInstructor.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>

                <div className="button-row">
                  <a
                    className="button button--primary"
                    href={`#profile-${selectedInstructor.slug}`}
                  >
                    Read Full Bio
                  </a>
                  <a
                    className="button button--secondary"
                    href={freeClassSignupUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Free Class Signup
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container instructor-directory__list">
          {instructors.map((instructor, index) => {
            const isActive = instructor.slug === selectedInstructor.slug

            return (
              <article
                key={instructor.slug}
                id={`profile-${instructor.slug}`}
                data-instructor-slug={instructor.slug}
                className={[
                  'instructor-profile',
                  index % 2 === 1 ? 'instructor-profile--reverse' : '',
                  isActive ? 'is-active' : '',
                ]
                  .filter(Boolean)
                  .join(' ')}
                data-reveal
              >
                <div className="instructor-profile__media">
                  <div className="instructor-profile__image">
                    <img src={instructor.image} alt={instructor.name} loading="lazy" />
                  </div>
                </div>

                <div className="instructor-profile__body">
                  <span className="detail-card__label">{instructor.detailTitle}</span>
                  <h2>{instructor.headingName ?? instructor.name}</h2>
                  <p className="instructor-profile__summary">{instructor.description}</p>

                  <ul className="instructor-profile__highlights">
                    {instructor.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>

                  {instructor.bio.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </article>
            )
          })}

          <div className="instructor-directory__footer" data-reveal>
            <span className="detail-card__label">Train with the Team</span>
            <strong>Ready to start your Warrior journey?</strong>
            <p>
              Explore the class schedule, sign up for a free class, or return to the
              homepage to browse programs and locations.
            </p>
            <div className="button-row">
              <a
                className="button button--primary"
                href={freeClassSignupUrl}
                target="_blank"
                rel="noreferrer"
              >
                Free Class Signup
              </a>
              <a className="button button--secondary" href="#schedule">
                View Schedule
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function ScheduleEventCard({ event }) {
  return (
    <article className="event-card">
      <div className="event-card__meta">
        <span className="event-card__category">{event.category}</span>
        <span className="event-card__time">{event.time}</span>
      </div>
      <h4>{event.title}</h4>
      <p>{event.description}</p>
      <div className="event-card__location">
        <strong>{event.locationName}</strong>
        <span>{event.address}</span>
      </div>
      <div className="event-card__links">
        <a href={event.viewLocation} target="_blank" rel="noreferrer">
          View Location
        </a>
        <a href={event.map} target="_blank" rel="noreferrer">
          Map
        </a>
      </div>
    </article>
  )
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scheduleView, setScheduleView] = useState('Month')
  const [scheduleCategory, setScheduleCategory] = useState('All')
  const [activeDate, setActiveDate] = useState(todayKey)
  const [route, setRoute] = useState(() => getRouteFromHash(window.location.hash))

  const filteredEvents =
    scheduleCategory === 'All'
      ? scheduleEvents
      : scheduleEvents.filter((event) => event.category === scheduleCategory)

  const selectedDate =
    filteredEvents.length > 0 &&
    !filteredEvents.some((event) => event.date === activeDate)
      ? filteredEvents[0].date
      : activeDate

  const activeDateObject = parseDate(selectedDate)
  const activeDayEvents = getEventsForDate(filteredEvents, selectedDate)
  const activeWeekStart = startOfWeek(activeDateObject)
  const activeWeekIndex = weekStarts.findIndex((weekStart) =>
    isSameDay(weekStart, activeWeekStart),
  )
  const activeWeekDays = Array.from({ length: 7 }, (_, index) =>
    addDays(activeWeekStart, index),
  )
  const filteredEventDates = [...new Set(filteredEvents.map((event) => event.date))]
  const eventCounts = {
    kids: scheduleEvents.filter((event) => event.title.includes('Kids')).length,
    adults: scheduleEvents.filter((event) => event.title.includes('Adult Karate'))
      .length,
    seniors: scheduleEvents.filter((event) => event.title.includes('Senior')).length,
  }
  const selectedInstructor =
    route.view === 'instructors'
      ? instructors.find((instructor) => instructor.slug === route.instructorSlug) ??
        instructors[0]
      : null

  useEffect(() => {
    function handleHashChange() {
      setRoute(getRouteFromHash(window.location.hash))
      setIsMenuOpen(false)
    }

    window.addEventListener('hashchange', handleHashChange)

    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]')
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    if (prefersReducedMotion) {
      elements.forEach((element) => element.classList.add('is-visible'))
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.18,
        rootMargin: '0px 0px -48px 0px',
      },
    )

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [route.view, route.instructorSlug])

  useEffect(() => {
    if (route.view === 'instructors') {
      document.title = selectedInstructor
        ? `${selectedInstructor.name} | Warrior Martial Arts`
        : 'Instructors | Warrior Martial Arts'

      const timeoutId = window.setTimeout(() => {
        const targetId = route.instructorSlug
          ? `profile-${selectedInstructor?.slug ?? instructors[0].slug}`
          : 'instructors-page-top'

        document.getElementById(targetId)?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }, 60)

      return () => window.clearTimeout(timeoutId)
    }

    document.title = 'Warrior Martial Arts'

    if (!window.location.hash || window.location.hash.startsWith('#/')) {
      return undefined
    }

    const timeoutId = window.setTimeout(() => {
      document.getElementById(window.location.hash.slice(1))?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }, 60)

    return () => window.clearTimeout(timeoutId)
  }, [route.view, route.instructorSlug, selectedInstructor])

  function handleNavClick() {
    setIsMenuOpen(false)
  }

  function handleWeekShift(direction) {
    const nextIndex = Math.min(
      Math.max(activeWeekIndex + direction, 0),
      weekStarts.length - 1,
    )

    if (nextIndex === activeWeekIndex) {
      return
    }

    const nextWeekStart = weekStarts[nextIndex]
    const nextWeekDates = Array.from({ length: 7 }, (_, index) =>
      formatDateKey(addDays(nextWeekStart, index)),
    )
    const firstEventInWeek = filteredEvents.find((event) =>
      nextWeekDates.includes(event.date),
    )
    const firstMayDateInWeek =
      nextWeekDates.find((date) => date.startsWith('2026-05')) ?? nextWeekDates[0]

    setActiveDate(firstEventInWeek?.date ?? firstMayDateInWeek)
  }

  const weekGroups = activeWeekDays
    .map((date) => ({
      date,
      dateKey: formatDateKey(date),
      events: getEventsForDate(filteredEvents, formatDateKey(date)),
    }))
    .filter((group) => group.events.length > 0)

  return (
    <div className="page-shell">
      <header className="site-header">
        <div className="top-bar">
          
        </div>

        <div className="nav-bar">
          <div className="container nav-bar__inner">
            <a className="brand" href="#home" onClick={handleNavClick}>
              <img src={logoUrl} alt="Warrior Martial Arts logo" />
              <span>
                Warrior
                <small>Martial Arts</small>
              </span>
            </a>

            <button
              type="button"
              className="menu-toggle"
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation"
              onClick={() => setIsMenuOpen((open) => !open)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

            <nav className={`site-nav ${isMenuOpen ? 'is-open' : ''}`}>
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={handleNavClick}
                >
                  {item.label}
                </a>
              ))}
             
            </nav>
          </div>
        </div>
      </header>

      <main>
        {route.view === 'instructors' ? (
          <InstructorDirectoryView selectedInstructorSlug={selectedInstructor?.slug} />
        ) : (
          <>
        <section
          id="home"
          className="hero section"
          style={{ '--hero-image': `url(${heroImageUrl})` }}
        >
          <div className="container hero__grid">
            <div className="hero__copy" data-reveal>
              <span className="eyebrow">
                Traditional Okinawan Karate • Kobudo • Tai Chi
              </span>
              <h1>Unlock Your Potential</h1>
              <p className="hero__subheading">
                Two Locations: 460 Blvd, Hasbrouck Heights, NJ &amp; 605 Pascack
                Rd, Washington Township, NJ
              </p>
              <p className="hero__body">
                Warrior Martial Arts blends traditional discipline, practical
                self-defense, and family-centered instruction for kids, adults, and
                seniors across Bergen County.
              </p>
              <div className="hero__actions">
                <a
                  className="button button--primary"
                  href={freeClassSignupUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Sign Up for a Free Class
                </a>
                <a className="button button--secondary" href="#schedule">
                  View Schedule
                </a>
              </div>
              <ul className="hero__pillars">
                {programPillars.map((pillar) => (
                  <li key={pillar}>{pillar}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="about" className="section section--dark">
          <div className="container">
            <div className="section-heading" data-reveal>
              <span className="eyebrow">ABOUT US</span>
              <h2>Traditional instruction, modern confidence, and a dojo built for community.</h2>
            </div>

            <div className="about-grid">
              <div className="about-copy" data-reveal>
                <p>
                  We welcome all students, from kids to seniors wanting to train
                  in the art of Okinawan Karate-Self-Defense. Classical Weapons –
                  Kobudo, Street-wise Assault Prevention for Women and Japanese
                  Swordsmanship Seminars and Tai Chi, Qi-Gong and Sanchin Style
                  exercise of our seniors.
                </p>
                <p>
                  You will enjoy a proud tradition of teaching excellence from the
                  experienced Black Belt staff at the school. Classes are held at
                  our main location in Hasbrouck Heights and our affiliate Bethany
                  Community Center. Warrior Martial Arts training facility is called
                  a DOJO. The dojo is the place where learning takes place. Separate
                  classes for children and adults allow for more individualized
                  learning and for greater age-appropriate material to be covered.
                </p>
                <p>
                  The particular styles of Karate taught are called Goshin-Ryu and
                  Goju-Ryu, which means &quot;self-defense way&quot; and &quot;hard and
                  soft way&quot;. We&apos;ve combined these major styles of traditional
                  Okinawan karate, jujitsu, and modern self-defense techniques in
                  order to offer a complete system of training.
                </p>
                <a
                  className="text-link"
                  href="https://warrior-martialarts.com/aboutus"
                  target="_blank"
                  rel="noreferrer"
                >
                  Learn more
                </a>
              </div>

              <aside className="about-side" data-reveal>
                <div className="detail-card">
                  <span className="detail-card__label">Founded</span>
                  <strong>January 2019</strong>
                  <p>
                    Led by Sensei Michael Paredes and guided by the Okinawan
                    Goshin-Ryu Karate-Do Association.
                  </p>
                </div>
                <div className="detail-card">
                  <span className="detail-card__label">Class Format</span>
                  <strong>Separate adult and youth programs</strong>
                  <p>
                    Small-group instruction keeps training personal, focused, and
                    age-appropriate.
                  </p>
                </div>
                <div className="detail-card detail-card--logos">
                  <span className="detail-card__label">Affiliations</span>
                  <div className="affiliations">
                    <img
                      src="https://warrior-martialarts.com/wp-content/uploads/2023/01/Goshin-ryu-karate-480x480.png"
                      alt="Goshin-Ryu Karate association of New Jersey"
                    />
                    <img
                      src="https://warrior-martialarts.com/wp-content/uploads/2023/01/SOBBA-480x480.png"
                      alt="Society of Black Belts of America"
                    />
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section id="enroll" className="section">
          <div className="container">
            <div className="section-heading" data-reveal>
              <span className="eyebrow">ENROLL</span>
              <h2>Start your Warrior journey with the right forms and the right class fit.</h2>
            </div>

            <div className="enroll-panel" data-reveal>
              <p>
                If you are interested in joining Warrior Martial Arts, please fill
                out the following forms and email them to{' '}
                <a href="mailto:defendlikeawarrior@gmail.com">
                  defendlikeawarrior@gmail.com
                </a>
                .
              </p>
              <div className="button-row">
                <a
                  className="button button--primary"
                  href="https://warrior-martialarts.com/wp-content/uploads/2026/02/WMA_ApplicationForm_2026.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  Apply Now
                </a>
                <a
                  className="button button--secondary"
                  href="https://warrior-martialarts.com/wp-content/uploads/2023/02/Warrior-Martial-Arts-Waiver-of-Liability-Form_BCC_22422.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  Waiver of Liability Form
                </a>
              </div>
            </div>

            <div className="subsection-heading" data-reveal>
              <span className="eyebrow">Classes Offered</span>
              <h3>Programs built for kids, adults, and seniors.</h3>
            </div>

            <div className="class-grid">
              {classCards.map((card) => (
                <article key={card.title} className="class-card" data-reveal>
                  <span className="class-card__tag">Program</span>
                  <h4>{card.title}</h4>
                  <p>{card.description}</p>
                  <a
                    className="text-link"
                    href={card.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Learn More
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="instructors" className="section section--dark">
          <div className="container">
            <div className="section-heading" data-reveal>
              <span className="eyebrow">Meet the Instructors</span>
              <h2>Experienced black-belt leadership across every Warrior program.</h2>
            </div>

            <div className="instructor-grid">
              {instructors.map((instructor) => (
                <article key={instructor.name} className="instructor-card" data-reveal>
                  <div className="instructor-card__inner">
                    <div className="instructor-card__face instructor-card__face--front">
                      <div className="instructor-card__image instructor-card__image--front">
                        <img src={instructor.image} alt={instructor.name} loading="lazy" />
                      </div>
                      <div className="instructor-card__front-copy">
                        <span className="instructor-card__label">Instructor Profile</span>
                        <h3>{instructor.name}</h3>
                        <p>{instructor.title}</p>
                      </div>
                      <span className="instructor-card__hint">Hover to reveal bio</span>
                    </div>

                    <div className="instructor-card__face instructor-card__face--back">
                      <div className="instructor-card__image instructor-card__image--back">
                        <img
                          src={instructor.image}
                          alt=""
                          aria-hidden="true"
                          loading="lazy"
                        />
                      </div>
                      <div className="instructor-card__content">
                        <span className="class-card__tag">{instructor.title}</span>
                        <h3>{instructor.name}</h3>
                        <p>{instructor.description}</p>
                        <a
                          className="text-link"
                          href={getInstructorPageHref(instructor.slug)}
                        >
                          Learn More
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="schedule" className="section">
          <div className="container">
            <div className="section-heading" data-reveal>
              <span className="eyebrow">Schedule</span>
              <h2>Events in May 2026</h2>
              <p className="section-heading__body">
                Browse month, week, or day views for our recurring class schedule
                in Hasbrouck Heights.
              </p>
            </div>

            <div className="schedule-shell" data-reveal>
              <div className="schedule-shell__header">
                <div className="schedule-shell__controls">
                  <div className="chip-group" role="tablist" aria-label="Schedule views">
                    {viewModes.map((mode) => (
                      <button
                        key={mode}
                        type="button"
                        className={mode === scheduleView ? 'is-active' : ''}
                        onClick={() => setScheduleView(mode)}
                      >
                        {mode}
                      </button>
                    ))}
                  </div>

                  <div
                    className="chip-group chip-group--subtle"
                    role="tablist"
                    aria-label="Schedule categories"
                  >
                    {categoryModes.map((category) => (
                      <button
                        key={category}
                        type="button"
                        className={category === scheduleCategory ? 'is-active' : ''}
                        onClick={() => setScheduleCategory(category)}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="schedule-shell__summary">
                  <strong>{monthFormatter.format(monthStart)}</strong>
                  <span>{filteredEvents.length} scheduled sessions in this filter.</span>
                </div>
              </div>

              <div className="schedule-layout">
                <div className="schedule-main">
                  {scheduleView === 'Month' && (
                    <div className="calendar">
                      <div className="calendar__weekdays">
                        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(
                          (weekday) => (
                            <span key={weekday}>{weekday}</span>
                          ),
                        )}
                      </div>
                      <div className="calendar__grid">
                        {calendarDays.map((date) => {
                          const dateKey = formatDateKey(date)
                          const dailyEvents = getEventsForDate(filteredEvents, dateKey)
                          const isActive = dateKey === selectedDate
                          const isCurrentMonth = date.getMonth() === 4
                          const isToday = dateKey === todayKey

                          return (
                            <button
                              key={dateKey}
                              type="button"
                              className={[
                                'calendar__day',
                                isActive ? 'is-active' : '',
                                isCurrentMonth ? '' : 'is-muted',
                                isToday ? 'is-today' : '',
                              ]
                                .filter(Boolean)
                                .join(' ')}
                              onClick={() => setActiveDate(dateKey)}
                            >
                              <span className="calendar__date">{date.getDate()}</span>
                              {isToday && <span className="calendar__today">Today</span>}
                              <span className="calendar__count">
                                {dailyEvents.length > 0
                                  ? `${dailyEvents.length} event${
                                      dailyEvents.length > 1 ? 's' : ''
                                    }`
                                  : 'No events'}
                              </span>
                              {dailyEvents[0] && (
                                <span className="calendar__preview">
                                  {dailyEvents[0].title}
                                </span>
                              )}
                            </button>
                          )
                        })}
                      </div>
                    </div>
                  )}

                  {scheduleView === 'Week' && (
                    <div className="week-view">
                      <div className="week-view__header">
                        <button
                          type="button"
                          className="ghost-button"
                          onClick={() => handleWeekShift(-1)}
                        >
                          Previous
                        </button>
                        <strong>
                          {shortDateFormatter.format(activeWeekDays[0])} -{' '}
                          {shortDateFormatter.format(activeWeekDays[6])}
                        </strong>
                        <button
                          type="button"
                          className="ghost-button"
                          onClick={() => handleWeekShift(1)}
                        >
                          Next
                        </button>
                      </div>
                      {weekGroups.length > 0 ? (
                        <div className="week-view__list">
                          {weekGroups.map((group) => (
                            <article key={group.dateKey} className="week-day-card">
                              <div className="week-day-card__header">
                                <div>
                                  <span>{weekdayFormatter.format(group.date)}</span>
                                  <h4>{longDateFormatter.format(group.date)}</h4>
                                </div>
                                <button
                                  type="button"
                                  className="ghost-link"
                                  onClick={() => {
                                    setActiveDate(group.dateKey)
                                    setScheduleView('Day')
                                  }}
                                >
                                  Open Day View
                                </button>
                              </div>
                              <div className="week-day-card__events">
                                {group.events.map((event) => (
                                  <ScheduleEventCard key={event.id} event={event} />
                                ))}
                              </div>
                            </article>
                          ))}
                        </div>
                      ) : (
                        <div className="schedule-empty">
                          <h4>No events in this view.</h4>
                          <p>No {scheduleCategory.toLowerCase()} items are listed for this week.</p>
                        </div>
                      )}
                    </div>
                  )}

                  {scheduleView === 'Day' && (
                    <div className="day-view">
                      <div className="day-view__dates">
                        {filteredEventDates.length > 0 ? (
                          filteredEventDates.map((date) => (
                            <button
                              key={date}
                              type="button"
                              className={date === selectedDate ? 'is-active' : ''}
                              onClick={() => setActiveDate(date)}
                            >
                              <span>{weekdayFormatter.format(parseDate(date))}</span>
                              <strong>{shortDateFormatter.format(parseDate(date))}</strong>
                            </button>
                          ))
                        ) : (
                          <div className="schedule-empty">
                            <h4>No holiday events published.</h4>
                            <p>Switch back to Classes or All to see active training sessions.</p>
                          </div>
                        )}
                      </div>

                      {filteredEventDates.length > 0 && (
                        <div className="day-view__events">
                          {activeDayEvents.length > 0 ? (
                            activeDayEvents.map((event) => (
                              <ScheduleEventCard key={event.id} event={event} />
                            ))
                          ) : (
                            <div className="schedule-empty">
                              <h4>No events on this date.</h4>
                              <p>Select another day to view available classes.</p>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </div>

                <aside className="schedule-side">
                  <div className="schedule-side__panel">
                    <span className="detail-card__label">Selected Day</span>
                    <h3>{longDateFormatter.format(activeDateObject)}</h3>
                    <p>
                      Hasbrouck Heights, 460 Boulevard, Hasbrouck Heights, NJ
                      07604
                    </p>
                    <div className="schedule-side__actions">
                      <a href={viewLocationUrl} target="_blank" rel="noreferrer">
                        View Location
                      </a>
                      <a href={mapUrl} target="_blank" rel="noreferrer">
                        Map
                      </a>
                    </div>
                  </div>

                  <div className="schedule-side__panel">
                    <span className="detail-card__label">Monthly Breakdown</span>
                    <div className="schedule-metrics">
                      <div>
                        <strong>{eventCounts.kids}</strong>
                        <span>Kids sessions</span>
                      </div>
                      <div>
                        <strong>{eventCounts.adults}</strong>
                        <span>Adult classes</span>
                      </div>
                      <div>
                        <strong>{eventCounts.seniors}</strong>
                        <span>Senior sessions</span>
                      </div>
                    </div>
                  </div>

                  <div className="schedule-side__panel">
                    <span className="detail-card__label">Print</span>
                    <p>
                      Use a printer-friendly version when you want a quick offline
                      reference for May classes.
                    </p>
                    <button
                      type="button"
                      className="button button--secondary button--full"
                      onClick={() => window.print()}
                    >
                      Print View
                    </button>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </section>

        <section id="gallery" className="section section--dark">
          <div className="container">
            <div className="section-heading" data-reveal>
              <span className="eyebrow">Gallery</span>
              <h2>Inside the Warrior dojo.</h2>
            </div>

            <div className="gallery-grid">
              {galleryItems.map((item, index) => (
                <article
                  key={item.title}
                  className={`gallery-card ${index === 0 || index === 5 ? 'gallery-card--wide' : ''}`}
                  data-reveal
                >
                  <img src={item.image} alt={item.alt} loading="lazy" />
                  <div className="gallery-card__overlay">
                    <span>{item.title}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container contact-grid">
            <div className="contact-copy" data-reveal>
              <span className="eyebrow">Contact Us</span>
              <h2>Questions, scheduling help, or ready to begin?</h2>
              <p>
                For any further questions or information email us at{' '}
                <a href="mailto:defendlikeawarrior@gmail.com">
                  defendlikeawarrior@gmail.com
                </a>{' '}
                or call{' '}
                <a href="tel:+15514042043">+1 (551) 404-2043</a>.
              </p>
              <div className="contact-actions">
                <a
                  className="button button--primary"
                  href="mailto:defendlikeawarrior@gmail.com"
                >
                  Email Us
                </a>
                <a className="button button--secondary" href="tel:+15514042043">
                  Call Now
                </a>
              </div>

              <div className="social-row">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="locations-grid">
              {locationCards.map((location) => (
                <article key={location.name} className="location-card" data-reveal>
                  <img src={location.image} alt={location.name} loading="lazy" />
                  <div className="location-card__content">
                    <span className="class-card__tag">Location</span>
                    <h3>{location.name}</h3>
                    <p>{location.address}</p>
                    <a
                      className="text-link"
                      href={location.map}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View on Map
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
          </>
        )}
      </main>

      <footer className="site-footer">
        <div className="container site-footer__inner">
          <span>© 2026 Warrior Martial Arts | Website by Pentcreative</span>
          <a href="#home">Back to top</a>
        </div>
      </footer>
    </div>
  )
}

export default App
