import { Component } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  standalone: true,
  imports: [TranslocoModule],
  selector: 'shell-home',
  templateUrl: './home.html',
})
export class Home {}
