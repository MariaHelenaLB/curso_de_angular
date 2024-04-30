import { CommonModule } from '@angular/common';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild, signal } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { timer } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-life-cycle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './life-cycle.component.html',
  styleUrl: './life-cycle.component.scss'
})
export class LifeCycleComponent implements OnChanges, OnInit, DoCheck, AfterViewInit, AfterContentInit, AfterContentChecked, AfterViewChecked, OnDestroy {

  @Input() public myNumber = 0;

  public myText = signal('MH');

  @ViewChild('content') public content!: ElementRef;
  @ContentChild('text') public text! : ElementRef;

    private _destroy$ = timer(0, 1000).pipe(takeUntilDestroyed())
    .subscribe({
      next: (next) => console.log('next', next),
      error: (error) => console.log('error', error),
      complete: () => console.log('Complete!')
    });
  //construtor ou inicializador
  constructor(private fb: FormBuilder) { }
 
  //changes detections
  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    //console.log('ngOnChanges', changes);

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    //console.log('ngOnInit');
  }

  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    //console.log('ngDoCheck');
  }

  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    //console.log('ngAfterContentInit');
    //console.log(this.text.nativeElement.innerText);
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    //console.log('ngAfterViewInit');
    //console.log(this.content.nativeElement.innerText);
    //console.log(this.text.nativeElement.innerText);
  }
    
  ngAfterContentChecked(): void {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    //console.log('ngAfterContentChecked');
  }

  ngAfterViewChecked(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    //console.log('ngAfterViewChecked')
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log('ngOnDestroy');
    //this.destroy$.unsubscribe();
  }
}
