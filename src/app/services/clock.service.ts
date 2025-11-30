import { Injectable, signal, OnDestroy } from '@angular/core';
import { ClockDisplay } from '../models/clock.models';
import { CLOCK_CONSTANTS, DATE_FORMAT_OPTIONS } from '../constants/clock.constants';

/**
 * Service for managing real-time clock display
 */
@Injectable()
export class ClockService implements OnDestroy {
  private clockInterval?: number;

  readonly currentTime = signal('');
  readonly currentDate = signal('');

  /**
   * Starts the clock
   */
  start(): void {
    this.updateClock();
    this.clockInterval = window.setInterval(() => {
      this.updateClock();
    }, CLOCK_CONSTANTS.UPDATE_INTERVAL);
  }

  /**
   * Stops the clock
   */
  stop(): void {
    if (this.clockInterval) {
      clearInterval(this.clockInterval);
      this.clockInterval = undefined;
    }
  }

  ngOnDestroy(): void {
    this.stop();
  }

  /**
   * Updates the clock display with current time and date
   */
  private updateClock(): void {
    const now = new Date();
    this.currentTime.set(now.toLocaleTimeString(CLOCK_CONSTANTS.LOCALE));
    this.currentDate.set(now.toLocaleDateString(CLOCK_CONSTANTS.LOCALE, DATE_FORMAT_OPTIONS));
  }

  /**
   * Gets the current clock display state
   */
  getState(): ClockDisplay {
    return {
      time: this.currentTime(),
      date: this.currentDate(),
    };
  }

  /**
   * Gets the current Date object
   */
  getCurrentDate(): Date {
    return new Date();
  }
}
