import { useState, useEffect } from 'react'
import { CalendarIcon } from 'lucide-react'

import { Card, CardContent } from "@/components/ui/card"

export default function HeroCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [countUp, setCountUp] = useState(500)

  useEffect(() => {
    // Update the date every second
    const dateInterval = setInterval(() => {
      setCurrentDate(new Date())
    }, 1000)

    // Increase the count every 24 hours
    const countInterval = setInterval(() => {
      setCountUp(prevCount => prevCount + 1)
    }, 24 * 60 * 60 * 1000) // 24 hours in milliseconds

    // Clean up intervals on component unmount
    return () => {
      clearInterval(dateInterval)
      clearInterval(countInterval)
    }
  }, [])

  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    }
    return date.toLocaleDateString('en-US', options)
  }

  return (
    <div className="flex flex-col items-center space-y-4">
      <Card className="w-full max-w-sm">
        <CardContent className="p-6">
          <div className="flex items-center space-x-4">
            <CalendarIcon className="h-10 w-10 text-primary" />
            <div>
              <h2 className="text-2xl font-bold">Today's Date</h2>
              <p className="text-sm text-muted-foreground">{formatDate(currentDate)}</p>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className="w-full max-w-sm">
        <CardContent className="p-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold">Count Up</h2>
            <p className="text-4xl font-bold text-primary">{countUp}</p>
            <p className="text-sm text-muted-foreground">Increases every 24 hours</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}