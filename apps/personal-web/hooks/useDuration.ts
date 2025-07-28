import { useMemo } from "react"

interface Duration {
  years: number
  months: number
  days: number
}

/**
 * Custom hook to calculate duration between two dates
 * @param period - Date range in format "YYYY/M/D - YYYY/M/D" or "YYYY/M/D - Present"
 * @returns Duration object with years, months, and days, or null if invalid format
 */
export function useDuration(period: string): Duration | null {
  return useMemo(() => {
    // 支援格式: "YYYY/M/D - YYYY/M/D" 或 "YYYY/M/D - Present"
    const [start, end] = period.split(" - ").map((s) => s.trim())
    if (!start) return null

    // 允許 YYYY/M/D 或 YYYY/M 格式
    function parseDate(str: string): Date | null {
      const parts = str.split("/")
      if (parts.length === 3) {
        const [y, m, d] = parts.map(Number)
        if (!y || !m || !d) return null
        return new Date(y, m - 1, d)
      } else if (parts.length === 2) {
        const [y, m] = parts.map(Number)
        if (!y || !m) return null
        return new Date(y, m - 1, 1)
      }
      return null
    }

    const startDate = parseDate(start)
    let endDate: Date

    if (end === "Present") {
      const now = new Date()
      endDate = new Date(now.getFullYear(), now.getMonth(), now.getDate())
    } else {
      const parsed = parseDate(end)
      if (!parsed) return null
      endDate = parsed
    }

    if (!startDate || !endDate) return null

    // 計算年、月、日
    let years = endDate.getFullYear() - startDate.getFullYear()
    let months = endDate.getMonth() - startDate.getMonth()
    let days = endDate.getDate() - startDate.getDate()

    if (days < 0) {
      // 借一個月
      months -= 1
      // 上一個月的天數
      const prevMonth = new Date(endDate.getFullYear(), endDate.getMonth(), 0)
      days += prevMonth.getDate()
    }
    if (months < 0) {
      years -= 1
      months += 12
    }

    // 若全為0，代表同一天
    return { years, months, days }
  }, [period])
}

/**
 * Format duration to human readable string
 * @param duration - Duration object
 * @returns Formatted string like "2 years 3 months 15 days"
 */
export function formatDuration(duration: Duration | null): string {
  if (!duration) return ""

  const parts: string[] = []
  
  if (duration.years > 0) {
    parts.push(`${duration.years} year${duration.years > 1 ? "s" : ""}`)
  }
  if (duration.months > 0) {
    parts.push(`${duration.months} month${duration.months > 1 ? "s" : ""}`)
  }
  if (duration.days > 0) {
    parts.push(`${duration.days} day${duration.days > 1 ? "s" : ""}`)
  }
  
  if (parts.length === 0) {
    return "Less than 1 day"
  }
  
  return parts.join(" ")
} 