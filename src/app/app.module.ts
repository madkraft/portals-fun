import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { LoadingComponentComponent } from "./loading-component/loading-component.component";
import { LoadingService } from "./loading.service";
import { WellComponent } from './well/well.component';

@NgModule({
  declarations: [AppComponent, LoadingComponentComponent, WellComponent],
  imports: [BrowserModule],
  entryComponents: [LoadingComponentComponent],
  providers: [LoadingService],
  bootstrap: [AppComponent]
})
export class AppModule {}
