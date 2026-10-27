import { Route, Routes } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import Layout from './components/Layout'
import Home from './routes/Home'
import MeetUs from './routes/MeetUs'
import Contact from './routes/Contact'
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
          <Route path="meet-chris-and-helga" element={<MeetUs />} />
          <Route path="contact" element={<Contact />} />
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
