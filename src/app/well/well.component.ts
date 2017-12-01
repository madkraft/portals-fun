import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
  ViewContainerRef
} from "@angular/core";

@Component({
  selector: "app-well",
  templateUrl: "./well.component.html",
  styleUrls: ["./well.component.css"]
})
export class WellComponent implements OnInit {
  @ViewChild("tooltip") tooltip;
  @Input() coords;
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    console.log(this.coords);
    console.log(this.tooltip.nativeElement);
    this.renderer.setStyle(
      this.tooltip.nativeElement,
      "top",
      `${this.coords.top}px`
    );
    this.renderer.setStyle(
      this.tooltip.nativeElement,
      "left",
      `${this.coords.right}px`
    );
  }
}
