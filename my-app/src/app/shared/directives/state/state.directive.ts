import { Directive, Input, ElementRef, Renderer2, OnChanges } from '@angular/core';
import { States } from '@app/shared/enums/states.enum';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnChanges {
  @Input() appState: number;

  constructor(private _ElementRef: ElementRef, private _Renderer2: Renderer2) {}
  ngOnChanges() {
    const cssClass = `state-${this.appState}`;
    let text: string;
    let states = States;
    const elementNode = this._ElementRef.nativeElement;
    // console.log(typeof(states.ALIVRER));
    switch (this.appState) {
      case states.ALIVRER:
        text = 'A livrer';
        break;
      case states.ENCOURS:
        text = 'En cours de livraison';
        break;
      case states.LIVREE:
        text = 'Commande livrée';
        break;
      default:
        console.log(this.appState);
        break;
    }

    this._Renderer2.addClass(elementNode, cssClass);
    // elementNode.innerHTML = text;
    const nodeText = this._Renderer2.createText(text);
    this._Renderer2.appendChild(elementNode, nodeText);
  }
}
