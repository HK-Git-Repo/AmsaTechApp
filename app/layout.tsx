import Footer from './components/Footer'
import Header from './components/Header'
import './globals.css'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Amsa Tech',
  description: "AMSA TECH, SOLUTION D'ENCAISSEMENT ET DE GESTION POUR CHR ET RETAIL",
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className='bg-black text-white space-y-20 w-full h-full'>
        <div className="w-full z-[999999999] absolute top-0 left-0">
          <Header />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  )
}
