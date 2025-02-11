import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'

import { AuthProvider } from './context/auth-provider'
import VisitsPage from './pages/visits'
import NotFoundPage from './pages/not-found'
import PrivateRoute from './routes/private-route'
import ServiceRatesPage from './pages/service-rates'
import { ThemeProvider } from './components/theme-provider'
import DashboardPage from './pages/dashboard'
import GeneralSettingsPage from './pages/general-settings'
import AddServiceRatePage from './pages/add-service-rate'
import Login from './pages/login'

import { AppSidebar } from '@/components/app-sidebar'
import {
  SidebarInset,
  SidebarProvider
} from '@/components/ui/sidebar'

const AuthenticatedLayout = () => (
  <SidebarProvider>
    <div className="flex w-full">
      <AppSidebar />
      <SidebarInset>
        <Outlet />
      </SidebarInset>
    </div>
  </SidebarProvider>
)

const App = () => (
  <BrowserRouter>
    <AuthProvider>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<PrivateRoute />}>
            <Route element={<AuthenticatedLayout />}>
              <Route index element={<DashboardPage />} />
              <Route path="dashboard" element={<DashboardPage />} />
              <Route path="visits" element={<VisitsPage />} />
              <Route path="servicerates" element={<ServiceRatesPage />} />
              <Route path="addservicerate" element={<AddServiceRatePage />} />
              <Route path="generalsettings" element={<GeneralSettingsPage />} />
            </Route>
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </ThemeProvider>
    </AuthProvider>
  </BrowserRouter>
)

export default App