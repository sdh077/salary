import { Providers } from '@/redux/provider'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Menu from '../layout/component/Menu'
import './globals.css'
import Sidebar from '@/layout/component/Sidebar'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers><Menu />

          <div className='flex justify-between px-4 mx-auto max-w-8xl'>
            <div className='hidden mb-6 xl:block lg:w-80'>
              <Sidebar />
            </div>
            <div className='w-full mx-auto'>
              {children}
            </div>
          </div>
        </Providers>
      </body>
    </html >
  )
}
// 1. 모달
// 2. alert
// 3. navi
// 4. highlight text
// 5. spinner
// 6. pagination
// 7. paper canvas
// 8. editor / quill
// 9. select

// 10. picker / Date, Time, Month, Time
// 11. calendar
// 12. Toolbar
// 13. Button
// 14. address