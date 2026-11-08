import { Component, input } from '@angular/core';
import { Badge } from '../../../../shared/components/badge/badge';

@Component({
  selector: 'app-personal-best-badge',
  imports: [Badge],
  templateUrl: './personal-best-badge.html',
  styleUrl: './personal-best-badge.css',
})
export class PersonalBestBadge {
  score = input.required<number>();
}
