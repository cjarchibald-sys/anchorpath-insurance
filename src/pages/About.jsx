import { AboutIllo } from '../illustrations'

export default function About({ setPage }) {
  return (
    <>
      <div className="about-split">
        <div className="about-illo"><AboutIllo /></div>
        <div className="about-content-hero">
          <div className="about-role">California Licensed Agent · Life &amp; Health</div>
          <h1>Hi, I'm [Your Name] — and I started this business because of people I love.</h1>
          <p>I watched friends and family struggle to navigate Medicare alone — overwhelmed, confused, and sometimes making decisions they later regretted. I decided to do something about it.</p>
        </div>
      </div>

      <div className="values-strip">
        <div className="values-inner">
          {[
            ['🌿','Honesty first','I tell you what I actually think is best for you, not what earns the biggest commission.'],
            ['🤲','Patience always','No rushing, no jargon. We move at your pace until you feel completely confident.'],
            ['🔍','Deep expertise','Medicare is all I do. That focus means you get sharper, more current guidance.'],
            ['🌅','Long-term thinking','I\'m building relationships, not closing transactions. I\'m here for the long haul.'],
          ].map(([icon,h,p]) => (
            <div key={h} className="value-item">
              <div className="value-icon">{icon}</div>
              <h4>{h}</h4>
              <p>{p}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="about-body">
        <p>
          Medicare decisions are some of the most consequential choices a person makes — and most
          people are expected to make them alone, in a narrow window, with no real guidance.
          I've watched people I care about get this wrong. A family member who enrolled in the
          wrong plan and spent years paying for it. A friend who missed her enrollment window
          entirely and faced a penalty she never expected. A neighbor who had no idea he qualified
          for assistance that would have cut his premiums in half.
        </p>
        <p className="pullquote">"That's what brought me here. I wanted to be the person I wish they'd had."</p>
        <p>
          As an independent agent licensed in California for Life &amp; Health insurance, I work with
          multiple carriers — which means I'm not tied to any one company. I can look across the
          full market and recommend what genuinely makes sense for you. My only loyalty is to
          getting you the right coverage.
        </p>
        <p>
          When you work with me, you get one person. Not a call center. Not a rotating cast of
          representatives. Me — someone who will learn your situation, remember it, and be there
          when things change. My consultations are always complimentary. There's no pressure, no
          countdown clock, and no script. Just a real conversation about your health, your
          priorities, and your options — at whatever pace works for you.
        </p>
        <p>
          Whether you're turning 65, stepping away from employer coverage, or simply wondering
          if your current plan is still the right one — I'd love to talk.
        </p>
        <div className="creds">
          {['🏅 CA Life & Health Licensed','📍 Serving the Bay Area & California','🔒 Independent Agent','📞 Complimentary consultations'].map(c => (
            <div key={c} className="cred-badge">{c}</div>
          ))}
        </div>
      </div>
    </>
  )
}
