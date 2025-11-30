/**
 * Constants for the clock application
 */

export const CLOCK_CONSTANTS = {
  UPDATE_INTERVAL: 1000,
  STOPWATCH_INTERVAL: 100,
  AUDIO: {
    FREQUENCY: 800,
    TYPE: 'sine' as OscillatorType,
    GAIN: 0.3,
    DURATION: 1,
  },
  TIMER: {
    MAX_MINUTES: 99,
    MAX_SECONDS: 59,
  },
  LOCALE: 'fr-FR',
} as const;

export const DATE_FORMAT_OPTIONS: Intl.DateTimeFormatOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
} as const;
