import { Component, OnInit } from '@angular/core';
import { Observable, Observer, from, of, interval, timer } from 'rxjs';

@Component({
  selector: 'app-basic-creation',
  templateUrl: './basic-creation.component.html',
  styleUrls: ['./basic-creation.component.css']
})
export class BasicCreationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public observableCreate(): void {
    const hello = Observable.create((observer: Observer<string>) => {
      observer.next("Hello");
      observer.next("from");
      observer.next("Observable");
      observer.complete();
    });
    hello.subscribe((val) => console.log(val));
  }

  public fromClick(): void{
    from([1,2,3,4,5,{x:10, y: 20}]).subscribe((v) => console.log(v)); //retorna os dados passados no parâmetro separados, objeto não é separado.
    const source = from([1,2,3,4,5,{x:10, y: 20}]);
    source.subscribe((v) => console.error(v));
    source.subscribe((v) => console.warn(v));
  }

  public ofClick(): void {
    of([1,2,3,4,5,{x:10, y: 20}]).subscribe((v) => console.log(v)); //retorna dados conforme passado dentro do operador.
  }

  public intervalClick(): void {
    const source = interval(1000); //executa em intervalos conforme tempo passado no parâmetro.
    source.subscribe((v) => console.log(v));
  }

  public timerClick(): void {
    // const source = timer(2000); //executa somente uma vez depois do delay.
    const source = timer(3000, 1000); //executa depois do delay e fica executando conforme tempo passado no segundo parâmetro.
    source.subscribe((v) => console.log(v));
  }
}