/**
 * Root layout component for the Family Guy app.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {ReactNode} props.children - The child components.
 * @returns {JSX.Element} The rendered root layout.
 */

import './globals.css'
import { Inter } from 'next/font/google'
import { Navigation } from '@/components'

const inter = Inter({ subsets: ['latin'] })

// metadata object contains default metadata tags for the application
export const metadata = {
  title: 'Family Guy',
  description: 'Come here and learn about Family Guy!',
}

// RootLayout - shared across all pages of our application (required)
// Navigation component - represents the navigation bar and will be shatred across all pages of the application
// children prop is a special prop that represents content rendered within the RootLayout component - this allows to nest other components
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}
        </body>
    </html>
  )
}