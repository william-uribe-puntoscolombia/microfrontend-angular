import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnChanges {
  title = 'mf-users18';

  @Input() route: string | undefined;

  constructor(private router: Router) {}

  ngOnChanges(changes: SimpleChanges) {
    this.router.navigateByUrl(`${changes['route'].currentValue}`, {
      skipLocationChange: true,
    });
  }
}
