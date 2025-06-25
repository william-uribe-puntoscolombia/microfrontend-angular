import { Component } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  standalone: true,
  selector: 'shell-not-found',
  templateUrl: './not-found.html',
  imports: [TranslocoModule],
})
export class NotFound {}
