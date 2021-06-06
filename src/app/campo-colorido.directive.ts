import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCampoColorido]',
  exportAs: 'campoColorido'
})
export class CampoColoridoDirective {

  @Input()
  cor = 'gray';

  @HostBinding('style.backgroundColor')
  corDeFundo!: string;

  @HostListener('focus') colorir() {
    this.corDeFundo = this.cor;
  }

  @HostListener('blur') descolorir() {
    this.corDeFundo = 'transparent'
  }

  /* Com HostListener */
  /*
  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {}

  @HostListener('focus') aoGanharFoco() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'yellow');
  }

  @HostListener('blur') aoPerderFoco() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
  }
  */

}
