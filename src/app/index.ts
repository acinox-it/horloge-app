/**
 * Public API for the Clock Application
 * Barrel export for clean imports
 */

// Main component
export { App } from './app';

// Child components
export { ClockDisplayComponent } from './components/clock-display/clock-display';
export { TimerComponent } from './components/timer/timer';
export { AlarmComponent } from './components/alarm/alarm';
export { StopwatchComponent } from './components/stopwatch/stopwatch';

// Services
export { ClockService } from './services/clock.service';
export { TimerService } from './services/timer.service';
export { AlarmService } from './services/alarm.service';
export { StopwatchService } from './services/stopwatch.service';
export { AudioService } from './services/audio.service';

// Models
export * from './models/clock.models';

// Utils
export * from './utils/time.utils';

// Constants
export * from './constants/clock.constants';
