import { Component, inject, OnInit } from '@angular/core';
import { TypingListenerDirective } from '../../directives/typing-listener.directive';
import { TypingEngineService } from '../../services/typing-engine.service';

@Component({
  selector: 'app-typing-action',
  imports: [TypingListenerDirective],
  providers: [TypingEngineService],
  templateUrl: './typing-action.html',
  styleUrl: './typing-action.css',
})
export class TypingAction implements OnInit {
  readonly engine = inject(TypingEngineService);

  ngOnInit(): void {
    this.engine.loadText("The archaeological expedition unearthed artifacts that complicated prevailing theories about Bronze Age trade networks. Obsidian from Anatolia, lapis lazuli from Afghanistan, and amber from the Baltic—all discovered in a single Mycenaean tomb—suggested commercial connections far more extensive than previously hypothesized. \"We've underestimated ancient peoples' navigational capabilities and their appetite for luxury goods,\" the lead researcher observed. \"Globalization isn't as modern as we assume.\"");
  }
}
