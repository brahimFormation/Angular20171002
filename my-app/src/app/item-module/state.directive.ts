import { Directive, Input, ElementRef, Renderer2, OnChanges } from '@angular/core';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnChanges {
  @Input() appState: number;

  constructor(private _ElementRef: ElementRef, private _Renderer2: Renderer2) {}
  ngOnChanges() {
    const cssClass = `state-${this.appState}`;
    let text: string;
    const elementNode = this._ElementRef.nativeElement;
    switch (this.appState) {
      case 0:
        text = 'A livrer';
        break;
      case 1:
        text = 'En cours de livraison';
        break;
      case 2:
        text = 'Commande livrée';
        break;
      default:
        console.log(this.appState);
        break;
    }

    this._Renderer2.addClass(elementNode, cssClass);
    elementNode.innerHTML = text;
  }
}
