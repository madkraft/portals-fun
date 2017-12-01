import {
  Component,
  TemplateRef,
  ViewChild,
  ViewContainerRef
} from "@angular/core";
import { LoadingService } from "./loading.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  // @ViewChild("container", { read: ViewContainerRef })
  // _vcr;
  @ViewChild("testTemplate") testTemplate: TemplateRef<any>;
  // private portalHost: DomPortalHost;

  constructor(
    private loadingService: LoadingService,
    private viewContainerRef: ViewContainerRef
  ) {}

  loadData() {
    this.loadingService.reveal();
    setTimeout(() => this.loadingService.hide(), 2000);
  }

  stamp(event) {
    const coords = event.srcElement.getBoundingClientRect();
    this.loadingService.add(this.testTemplate, this.viewContainerRef, coords);
  }
}
