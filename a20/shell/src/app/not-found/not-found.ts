import { Component } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  standalone: true,
  imports: [TranslocoModule],
  selector: 'app-not-found',
  templateUrl: './not-found.html',
})
export class NotFound {}
