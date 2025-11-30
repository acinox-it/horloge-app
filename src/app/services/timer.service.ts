import { Injectable, signal, OnDestroy } from '@angular/core';
import { TimerState } from '../models/clock.models';
import { formatTimer, toTotalSeconds } from '../utils/time.utils';
import { AudioService } from './audio.service';

/**
 * Service for managing timer functionality
 */
@Injectable()
export class TimerService implements OnDestroy {
  private timerInterval?: number;

  readonly minutes = signal(0);
  readonly seconds = signal(0);
  readonly display = signal('00:00');
  readonly isRunning = signal(false);
  private remainingSeconds = 0;

  constructor(private audioService: AudioService) {}

  ngOnDestroy(): void {
    this.stop();
  }

  /**
   * Starts the countdown timer
   */
  start(): void {
    const totalSeconds = toTotalSeconds(this.minutes(), this.seconds());
    if (totalSeconds <= 0) return;

    this.remainingSeconds = totalSeconds;
    this.isRunning.set(true);

    this.timerInterval = window.setInterval(() => {
      this.remainingSeconds--;
      this.display.set(formatTimer(this.remainingSeconds));

      if (this.remainingSeconds <= 0) {
        this.stop();
        this.audioService.playNotification();
      }
    }, 1000);
  }

  /**
   * Stops the timer
   */
  stop(): void {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = undefined;
    }
    this.isRunning.set(false);
  }

  /**
   * Resets the timer to initial state
   */
  reset(): void {
    this.stop();
    this.display.set('00:00');
    this.minutes.set(0);
    this.seconds.set(0);
  }

  /**
   * Gets the current timer state
   */
  getState(): TimerState {
    return {
      minutes: this.minutes(),
      seconds: this.seconds(),
      display: this.display(),
      isRunning: this.isRunning(),
      remainingSeconds: this.remainingSeconds,
    };
  }
}
