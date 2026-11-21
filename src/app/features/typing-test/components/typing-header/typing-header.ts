import { Component, input, output } from '@angular/core';
import { PersonalBestBadge } from '../personal-best-badge/personal-best-badge';
import { DifficultyLevel, SelectorDifficulty } from '../selector-difficulty/selector-difficulty';
import { SelectorMode } from '../selector-mode/selector-mode';
import { TypingMetrics } from '../typing-metrics/typing-metrics';

@Component({
  selector: 'app-typing-header',
  imports: [PersonalBestBadge, SelectorDifficulty, SelectorMode, TypingMetrics],
  templateUrl: './typing-header.html',
  styleUrl: './typing-header.css',
})
export class TypingHeader {
  readonly wpm = input<number>(0);
  readonly accuracy = input<number>(100);
  readonly time = input<string | number>('00:00');
  readonly personalBestScore = input.required<number>();
  readonly difficultyChange = output<DifficultyLevel>();

  onDifficultyChange(level: DifficultyLevel): void {
    this.difficultyChange.emit(level);
  }
}
