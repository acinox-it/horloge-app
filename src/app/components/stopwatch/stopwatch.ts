import { Component } from '@angular/core';
import { StopwatchService } from '../../services/stopwatch.service';

/**
 * Component for stopwatch functionality
 */
@Component({
  selector: 'app-stopwatch',
  imports: [],
  templateUrl: './stopwatch.html',
})
export class StopwatchComponent {
  constructor(protected stopwatchService: StopwatchService) {}
}
