import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { MfeAComponent } from './mfe-a/mfe-a.component'
import { MfeBComponent } from './mfe-b/mfe-b.component'

@NgModule({
  declarations: [AppComponent, MfeAComponent, MfeBComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [MfeAComponent, MfeBComponent],
})
export class AppModule {}
