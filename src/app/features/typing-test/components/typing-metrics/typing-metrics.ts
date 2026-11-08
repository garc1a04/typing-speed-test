import { Component, input } from '@angular/core';
import { Metric } from '../../../../shared/components/metric/metric';

@Component({
  selector: 'app-typing-metrics',
  imports: [Metric],
  templateUrl: './typing-metrics.html',
  styleUrl: './typing-metrics.css',
})
export class TypingMetrics {
  wpm = input<number>(0);
  accuracy = input<number>(100);
  time = input<string | number>('00:00');
}
