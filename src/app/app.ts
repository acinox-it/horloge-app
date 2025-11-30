import { Component, OnInit, OnDestroy, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabType } from './models/clock.models';
import { ClockService } from './services/clock.service';
import { TimerService } from './services/timer.service';
import { AlarmService } from './services/alarm.service';
import { StopwatchService } from './services/stopwatch.service';
import { AudioService } from './services/audio.service';
import { ClockDisplayComponent } from './components/clock-display/clock-display';
import { TimerComponent } from './components/timer/timer';
import { AlarmComponent } from './components/alarm/alarm';
import { StopwatchComponent } from './components/stopwatch/stopwatch';

/**
 * Main clock application component
 * Manages navigation between different clock features
 */
@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    ClockDisplayComponent,
    TimerComponent,
    AlarmComponent,
    StopwatchComponent,
  ],
  providers: [ClockService, TimerService, AlarmService, StopwatchService, AudioService],
  templateUrl: './app.html',
})
export class App implements OnInit, OnDestroy {
  protected readonly title = signal('Application Horloge');
  protected readonly activeTab = signal<TabType>('clock');
  protected readonly clockDisplay = computed(() => this.clockService.getState());

  constructor(
    private clockService: ClockService,
    private alarmService: AlarmService
  ) {}

  ngOnInit(): void {
    this.clockService.start();
  }

  ngOnDestroy(): void {
    this.clockService.stop();
  }

  /**
   * Changes the active tab
   */
  protected setTab(tab: TabType): void {
    this.activeTab.set(tab);
  }

  /**
   * Checks if alarm should ring (called by clock service)
   */
  protected checkAlarmOnClockUpdate(): void {
    this.alarmService.checkAlarm(this.clockService.getCurrentDate());
  }
}
