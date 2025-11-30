import { Component, input } from '@angular/core';
import { ClockDisplay } from '../../models/clock.models';

/**
 * Component for displaying the current time and date
 */
@Component({
  selector: 'app-clock-display',
  imports: [],
  templateUrl: './clock-display.html',
})
export class ClockDisplayComponent {
  readonly clockData = input.required<ClockDisplay>();
}
