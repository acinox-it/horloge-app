/**
 * Types and interfaces for the clock application
 */

export type TabType = 'clock' | 'timer' | 'alarm' | 'stopwatch';

export interface TimerState {
  minutes: number;
  seconds: number;
  display: string;
  isRunning: boolean;
  remainingSeconds: number;
}

export interface AlarmState {
  time: string;
  isSet: boolean;
  isRinging: boolean;
}

export interface StopwatchState {
  display: string;
  isRunning: boolean;
  elapsedMilliseconds: number;
}

export interface ClockDisplay {
  time: string;
  date: string;
}
