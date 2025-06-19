import { Component } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  standalone: true,
  selector: 'app-not-found',
  templateUrl: './not-found.html',
  imports: [TranslocoModule]
})
export class NotFound {}
