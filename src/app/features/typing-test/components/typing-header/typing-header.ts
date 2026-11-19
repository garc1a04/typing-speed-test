import { Component, input } from '@angular/core';
import { PersonalBestBadge } from '../personal-best-badge/personal-best-badge';
import { SelectorDifficulty } from '../selector-difficulty/selector-difficulty';
import { SelectorMode } from '../selector-mode/selector-mode';
import { TypingMetrics } from '../typing-metrics/typing-metrics';

@Component({
  selector: 'app-typing-header',
  imports: [PersonalBestBadge, SelectorDifficulty, SelectorMode, TypingMetrics],
  templateUrl: './typing-header.html',
  styleUrl: './typing-header.css',
})
export class TypingHeader {
  personalBestScore = input.required<number>();
}
