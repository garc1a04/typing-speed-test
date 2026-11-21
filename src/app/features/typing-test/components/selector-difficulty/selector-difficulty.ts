import { Component, output, signal } from '@angular/core';
import { ButtonSelector } from '../../../../shared/components/button-selector/button-selector';
import { Selector } from '../../../../shared/components/selector/selector';

export type DifficultyLevel = 1 | 2 | 3;

@Component({
  selector: 'app-selector-difficulty',
  imports: [Selector, ButtonSelector],
  templateUrl: './selector-difficulty.html',
  styleUrl: './selector-difficulty.css',
})
export class SelectorDifficulty {
  readonly difficultySelected = output<DifficultyLevel>();
  protected readonly selectedLevel = signal<DifficultyLevel>(1);

  selectDifficulty(level: DifficultyLevel): void {
    this.selectedLevel.set(level);
    this.difficultySelected.emit(level);
  }
}