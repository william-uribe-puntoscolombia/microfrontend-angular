import { Component,  } from '@angular/core';


@Component({
  selector: 'remote-root', // Este nombre debe coincidir con el nombre del microfrontend remote en el index.html
  imports: [],
  templateUrl: './page-remote.html',
  styleUrl: './page-remote.css'
})
export class PageRemote {

  private scriptElement: HTMLScriptElement | null = null;

  ngOnInit(): void {
    // Create the script element
    this.scriptElement = document.createElement('script');
    this.scriptElement.src = 'http://localhost:4201/main.js';
    this.scriptElement.type = 'module';
    document.head.appendChild(this.scriptElement);
  }

  ngOnDestroy(): void {
    // Remove the script when component is destroyed
    if (this.scriptElement && document.head.contains(this.scriptElement)) {
      document.head.removeChild(this.scriptElement);
    }
    this.scriptElement = null;
  }
}
