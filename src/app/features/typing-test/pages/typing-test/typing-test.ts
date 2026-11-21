import { Component, signal } from '@angular/core';
import { DifficultyLevel } from '../../components/selector-difficulty/selector-difficulty';
import { TypingAction } from '../../components/typing-action/typing-action';
import { TypingHeader } from '../../components/typing-header/typing-header';

@Component({
  selector: 'app-typing-test',
  imports: [TypingAction, TypingHeader],
  templateUrl: './typing-test.html',
  styleUrl: './typing-test.css',
})
export class TypingTest {
  protected readonly difficulty = signal<DifficultyLevel>(1);

  onDifficultyChange(level: DifficultyLevel): void {
    this.difficulty.set(level);
  }
}