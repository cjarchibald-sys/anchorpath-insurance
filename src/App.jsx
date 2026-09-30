import { Route, Routes } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import Layout from './components/Layout'
import Home from './routes/Home'
import MedicareBasics from './routes/MedicareBasics'
import CoverageChoices from './routes/CoverageChoices'
import Turning65 from './routes/Turning65'
import RetiringAfter65 from './routes/RetiringAfter65'
import AlreadyOnMedicare from './routes/AlreadyOnMedicare'
import CaliforniaResources from './routes/CaliforniaResources'
import Faq from './routes/Faq'
import Resources from './routes/Resources'
import MeetUs from './routes/MeetUs'
import Schedule from './routes/Schedule'
import LicensingDisclosures from './routes/LicensingDisclosures'
import Privacy from './routes/Privacy'
import Accessibility from './routes/Accessibility'
import Terms from './routes/Terms'
import NotFound from './routes/NotFound'
import Prelaunch from './routes/Prelaunch'

// __SITE_LIVE__ is set in vite.config.js: true locally and on Vercel preview
// deployments, false on production until VITE_PUBLIC_LAUNCH=true.
export default function App() {
  if (!__SITE_LIVE__) return <Prelaunch />
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="medicare-basics" element={<MedicareBasics />} />
          <Route path="medicare-coverage-choices" element={<CoverageChoices />} />
          <Route path="turning-65" element={<Turning65 />} />
          <Route path="retiring-after-65" element={<RetiringAfter65 />} />
          <Route path="already-on-medicare" element={<AlreadyOnMedicare />} />
          <Route path="california-medicare-resources" element={<CaliforniaResources />} />
          <Route path="faq" element={<Faq />} />
          <Route path="resources" element={<Resources />} />
          <Route path="meet-chris-and-helga" element={<MeetUs />} />
          <Route path="schedule" element={<Schedule />} />
          <Route path="licensing-disclosures" element={<LicensingDisclosures />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="accessibility" element={<Accessibility />} />
          <Route path="terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <Analytics />
    </>
  )
}
