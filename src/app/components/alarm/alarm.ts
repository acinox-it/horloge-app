import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AlarmService } from '../../services/alarm.service';

/**
 * Component for alarm functionality
 */
@Component({
  selector: 'app-alarm',
  imports: [FormsModule],
  templateUrl: './alarm.html',
})
export class AlarmComponent {
  constructor(protected alarmService: AlarmService) {}
}
