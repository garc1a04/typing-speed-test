import { Component } from '@angular/core';
import { ButtonSelector } from '../../../../shared/components/button-selector/button-selector';
import { Selector } from '../../../../shared/components/selector/selector';

@Component({
  selector: 'app-selector-mode',
  imports: [Selector, ButtonSelector],
  templateUrl: './selector-mode.html',
  styleUrl: './selector-mode.css',
})
export class SelectorMode { }
