import { Directive, HostListener, output } from '@angular/core';

@Directive({
  selector: '[appTypingListenerDirective]',
})
export class TypingListenerDirective {
  readonly keyPressed = output<string>();

  @HostListener('window:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    if (event.ctrlKey || event.altKey || event.metaKey) return;

    if (event.key === 'Backspace' || event.key.length === 1) {
      event.preventDefault();
      this.keyPressed.emit(event.key);
    }
  }
}
