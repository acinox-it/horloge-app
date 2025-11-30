import { Injectable, signal, OnDestroy } from '@angular/core';
import { AlarmState } from '../models/clock.models';
import { formatAlarmTime } from '../utils/time.utils';
import { AudioService } from './audio.service';

/**
 * Service for managing alarm functionality
 */
@Injectable()
export class AlarmService implements OnDestroy {
  private alarmInterval?: number;

  readonly time = signal('');
  readonly isSet = signal(false);
  readonly isRinging = signal(false);

  constructor(private audioService: AudioService) {}

  ngOnDestroy(): void {
    this.cancel();
  }

  /**
   * Sets an alarm for the specified time
   */
  setAlarm(): void {
    if (!this.time()) return;

    this.isSet.set(true);

    if (!this.alarmInterval) {
      this.alarmInterval = window.setInterval(() => {
        this.checkAlarm(new Date());
      }, 1000);
    }
  }

  /**
   * Cancels the alarm
   */
  cancel(): void {
    this.isSet.set(false);
    this.isRinging.set(false);

    if (this.alarmInterval) {
      clearInterval(this.alarmInterval);
      this.alarmInterval = undefined;
    }
  }

  /**
   * Stops the ringing alarm
   */
  stopRinging(): void {
    this.isRinging.set(false);
    this.cancel();
  }

  /**
   * Checks if the current time matches the alarm time
   */
  checkAlarm(now: Date): void {
    if (!this.isSet() || this.isRinging()) return;

    const currentTime = formatAlarmTime(now);
    if (currentTime === this.time()) {
      this.isRinging.set(true);
      this.audioService.playNotification();
    }
  }

  /**
   * Gets the current alarm state
   */
  getState(): AlarmState {
    return {
      time: this.time(),
      isSet: this.isSet(),
      isRinging: this.isRinging(),
    };
  }
}
