/**
 * Utility functions for time formatting and calculations
 */

/**
 * Pads a number with leading zeros
 */
export function padZero(num: number, length: number = 2): string {
  return num.toString().padStart(length, '0');
}

/**
 * Formats seconds into MM:SS format
 */
export function formatTimer(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${padZero(mins)}:${padZero(secs)}`;
}

/**
 * Formats milliseconds into HH:MM:SS format
 */
export function formatStopwatch(milliseconds: number): string {
  const hours = Math.floor(milliseconds / 3600000);
  const minutes = Math.floor((milliseconds % 3600000) / 60000);
  const seconds = Math.floor((milliseconds % 60000) / 1000);
  return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
}

/**
 * Formats current time as HH:MM
 */
export function formatAlarmTime(date: Date): string {
  return `${padZero(date.getHours())}:${padZero(date.getMinutes())}`;
}

/**
 * Converts minutes and seconds to total seconds
 */
export function toTotalSeconds(minutes: number, seconds: number): number {
  return minutes * 60 + seconds;
}
