import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TimerService } from '../../services/timer.service';

/**
 * Component for timer/countdown functionality
 */
@Component({
  selector: 'app-timer',
  imports: [FormsModule],
  templateUrl: './timer.html',
})
export class TimerComponent {
  constructor(protected timerService: TimerService) {}
}
