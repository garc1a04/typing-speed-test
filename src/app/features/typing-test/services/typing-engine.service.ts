import { computed, Injectable, signal } from '@angular/core';

@Injectable()
export class TypingEngineService {
  private readonly text = signal('');
  private readonly typed = signal('');

  readonly characters = computed(() => this.text().split(''));
  readonly currentIndex = computed(() => this.typed().length);
  readonly typedText = this.typed.asReadonly();

  readonly isFinished = computed(
    () => this.text().length > 0 && this.currentIndex() >= this.text().length
  );

  loadText(text: string): void {
    this.text.set(text);
    this.typed.set('');
  }

  registerKey(key: string): void {
    if (this.isFinished()) return;

    if (key.length === 1) {
      this.typed.update((prev) => prev + key);
    }
  }

  isCharCorrect(index: number): boolean {
    return this.typed()[index] === this.characters()[index];
  }

  reset(newText?: string): void {
    if (newText !== undefined) {
      this.text.set(newText);
    }
    this.typed.set('');
  }
}