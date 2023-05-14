import Footer from './footer';
import './globals.css'
import Nav from './nav'
import {Playfair_Display} from 'next/font/google';

const playfairDisplay = Playfair_Display({
    weight: ['400', '700'],
    subsets: ['latin']
})

export const metadata = {
  title: 'Puppy App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">        
        <body className={`${playfairDisplay.className}`}>
            <Nav/>
            <div>
            {children}
            </div>
            {/* <Footer/> */}
        </body>
    </html>
  )
}
