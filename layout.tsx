export const metadata = {
  title: 'The News Trend-Based Nonprofit Index',
  description: 'Your trusted source for comprehensive insights into charitable organizations focusing on humanist topics in the news. At our heart, we are a beacon of hope and compassion, curating information on nonprofits responding to the pressing challenges of our time.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}


/*import *IMG FILES from SOMEPATH */