import { Component, Injector } from '@angular/core'
import { createCustomElement } from '@angular/elements'
import { MfeAComponent } from './mfe-a/mfe-a.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'mfe-portal-ab'
  constructor(injector: Injector) {
    const MfeAElement = createCustomElement(MfeAComponent, { injector: injector })
    customElements.define('mfe-a-element', MfeAElement)
  }
}
