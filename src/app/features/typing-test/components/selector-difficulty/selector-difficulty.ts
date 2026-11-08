import { Component } from '@angular/core';
import { ButtonSelector } from '../../../../shared/components/button-selector/button-selector';
import { Selector } from '../../../../shared/components/selector/selector';

@Component({
  selector: 'app-selector-difficulty',
  imports: [Selector, ButtonSelector],
  templateUrl: './selector-difficulty.html',
  styleUrl: './selector-difficulty.css',
})
export class SelectorDifficulty { }
