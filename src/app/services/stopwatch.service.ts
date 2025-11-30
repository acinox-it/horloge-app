import { Injectable, signal, OnDestroy } from '@angular/core';
import { StopwatchState } from '../models/clock.models';
import { formatStopwatch } from '../utils/time.utils';
import { CLOCK_CONSTANTS } from '../constants/clock.constants';

/**
 * Service for managing stopwatch functionality
 */
@Injectable()
export class StopwatchService implements OnDestroy {
  private stopwatchInterval?: number;
  private elapsedMilliseconds = 0;

  readonly display = signal('00:00:00');
  readonly isRunning = signal(false);

  ngOnDestroy(): void {
    this.pause();
  }

  /**
   * Starts the stopwatch
   */
  start(): void {
    this.isRunning.set(true);
    const startTime = Date.now() - this.elapsedMilliseconds;

    this.stopwatchInterval = window.setInterval(() => {
      this.elapsedMilliseconds = Date.now() - startTime;
      this.display.set(formatStopwatch(this.elapsedMilliseconds));
    }, CLOCK_CONSTANTS.STOPWATCH_INTERVAL);
  }

  /**
   * Pauses the stopwatch
   */
  pause(): void {
    if (this.stopwatchInterval) {
      clearInterval(this.stopwatchInterval);
      this.stopwatchInterval = undefined;
    }
    this.isRunning.set(false);
  }

  /**
   * Resets the stopwatch to zero
   */
  reset(): void {
    this.pause();
    this.elapsedMilliseconds = 0;
    this.display.set('00:00:00');
  }

  /**
   * Gets the current stopwatch state
   */
  getState(): StopwatchState {
    return {
      display: this.display(),
      isRunning: this.isRunning(),
      elapsedMilliseconds: this.elapsedMilliseconds,
    };
  }
}
