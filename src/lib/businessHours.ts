import { BusinessHour } from '@/types/sanity'

/**
 * Convert business hours from Sanity format to Schema.org format
 * @param businessHours Array of business hours from Sanity
 * @returns Array of opening hours in Schema.org format (e.g., ["Tu-Fr 09:00-17:00"])
 */
export function convertToSchemaOrgHours(businessHours: BusinessHour[]): string[] {
  if (!businessHours || businessHours.length === 0) {
    return []
  }

  const dayAbbreviations: { [key: string]: string } = {
    Monday: 'Mo',
    Tuesday: 'Tu',
    Wednesday: 'We',
    Thursday: 'Th',
    Friday: 'Fr',
    Saturday: 'Sa',
    Sunday: 'Su',
  }

  const openDays = businessHours.filter((h) => !h.isClosed && h.hours !== 'Closed')
  
  if (openDays.length === 0) {
    return []
  }

  // Group consecutive days with same hours
  const grouped: { days: string[]; hours: string }[] = []
  
  openDays.forEach((hour) => {
    const timeString = convertTo24HourFormat(hour.hours)
    const lastGroup = grouped[grouped.length - 1]
    
    if (lastGroup && lastGroup.hours === timeString) {
      lastGroup.days.push(hour.day)
    } else {
      grouped.push({ days: [hour.day], hours: timeString })
    }
  })

  // Convert to Schema.org format
  return grouped.map((group) => {
    const dayAbbrevs = group.days.map((day) => dayAbbreviations[day])
    const dayRange = dayAbbrevs.length > 1 
      ? `${dayAbbrevs[0]}-${dayAbbrevs[dayAbbrevs.length - 1]}`
      : dayAbbrevs[0]
    
    return `${dayRange} ${group.hours}`
  })
}

/**
 * Convert time from 12-hour format to 24-hour format for Schema.org
 * @param timeRange Time range like "9:00am - 5:00pm"
 * @returns Time range in 24-hour format like "09:00-17:00"
 */
function convertTo24HourFormat(timeRange: string): string {
  // Match patterns like "9:00am - 5:00pm" or "10:00am-5:00pm"
  const match = timeRange.match(/(\d{1,2}):(\d{2})\s*(am|pm)\s*-\s*(\d{1,2}):(\d{2})\s*(am|pm)/i)
  
  if (!match) {
    return timeRange
  }

  const [, startHour, startMin, startPeriod, endHour, endMin, endPeriod] = match
  
  const start24 = convertTimeTo24Hour(parseInt(startHour), parseInt(startMin), startPeriod.toLowerCase())
  const end24 = convertTimeTo24Hour(parseInt(endHour), parseInt(endMin), endPeriod.toLowerCase())
  
  return `${start24}-${end24}`
}

/**
 * Helper to convert individual time to 24-hour format
 */
function convertTimeTo24Hour(hour: number, minute: number, period: string): string {
  let hour24 = hour
  
  if (period === 'pm' && hour !== 12) {
    hour24 = hour + 12
  } else if (period === 'am' && hour === 12) {
    hour24 = 0
  }
  
  return `${hour24.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`
}

/**
 * Default business hours fallback
 */
export const defaultBusinessHours: BusinessHour[] = [
  { day: 'Monday', hours: 'Closed', isClosed: true },
  { day: 'Tuesday', hours: '9:00am - 5:00pm', isClosed: false },
  { day: 'Wednesday', hours: '9:00am - 5:00pm', isClosed: false },
  { day: 'Thursday', hours: '9:00am - 5:00pm', isClosed: false },
  { day: 'Friday', hours: '9:00am - 5:00pm', isClosed: false },
  { day: 'Saturday', hours: 'Closed', isClosed: true },
  { day: 'Sunday', hours: 'Closed', isClosed: true },
]
