import {
  Injectable,
  ComponentFactoryResolver,
  ApplicationRef,
  Injector,
  TemplateRef,
  ViewContainerRef
} from "@angular/core";

import {
  ComponentPortal,
  DomPortalHost,
  TemplatePortal
} from "@angular/cdk/portal";

import { LoadingComponentComponent } from "./loading-component/loading-component.component";

@Injectable()
export class LoadingService {
  private loadingSpinnerPortal: ComponentPortal<LoadingComponentComponent>;
  private templatePortal;
  private bodyPortalHost: DomPortalHost;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) {
    this.loadingSpinnerPortal = new ComponentPortal(LoadingComponentComponent);

    this.bodyPortalHost = new DomPortalHost(
      document.body,
      this.componentFactoryResolver,
      this.appRef,
      this.injector
    );
  }

  reveal() {
    this.bodyPortalHost.attach(this.loadingSpinnerPortal);
  }

  hide() {
    this.bodyPortalHost.detach();
  }

  add(template: TemplateRef<any>, viewContainerRef, coords) {
    this.templatePortal = new TemplatePortal(template, viewContainerRef, {
      $implicit: coords
    });
    this.bodyPortalHost.attach(this.templatePortal);
  }
}
