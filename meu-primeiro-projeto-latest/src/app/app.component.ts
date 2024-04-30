import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

//Components
import { NewComponent } from './components/new-component/new-component.component';
import { TemplateBindingComponent } from './components/template/template-binding/template-binding.component';
import { TemplateVariablesComponent } from './components/template/template-variables/template-variables.component';
import { TemplateControlFlowComponent } from './components/template/template-control-flow/template-control-flow.component';
import { TemplateDeferrableViewsComponent } from './components/template/template-deferrable-views/template-deferrable-views.component';
import { SignalComponent } from "./components/signal/signal.component";
import { PaiOuMaeComponent } from './components/comunicacao-entre-components/pai-ou-mae/pai-ou-mae.component';
import { AngularPipesComponent } from './components/pipes/angular-pipes/angular-pipes.component';
import { ReactiveFormsComponent } from './components/forms/reactive-forms/reactive-forms.component';
import { TemplateDrivenFormsComponent } from './components/forms/template-driven-forms/template-driven-forms.component';
import { ContentComponent } from './components/content/content.component';
import { HostElementsComponent } from './components/host-elements/host-elements.component';
import { LifeCycleComponent } from './components/life-cycle/life-cycle.component';


@Component({
  selector: 'app-root',
  standalone: true,

  imports: [CommonModule, RouterOutlet, NewComponent, TemplateBindingComponent, TemplateVariablesComponent, TemplateControlFlowComponent, TemplateDeferrableViewsComponent, SignalComponent, PaiOuMaeComponent, AngularPipesComponent, ReactiveFormsComponent, TemplateDrivenFormsComponent, ContentComponent, HostElementsComponent, LifeCycleComponent],

  template: `
<!-- 
  <router-outlet></router-outlet>  
  <app-new-component /> 
  <app-template-binding /> 
  <app-template-variables /> -
  <app-template-control-flow /> 
  <app-template-deferrable-views />
  <app-signal />
  <app-pai-ou-mae />
  <app-angular-pipes />
  <app-template-driven-forms />
  <app-reactive-forms />
    <app-content>
    <header id="header">
      <p>Header</p>
    </header>
    <p text>Text</p>
    <p text>Text</p>
    <p text>Text</p>
    <footer class="footer">
      <p>Footer</p>
    </footer>
  </app-content>
  <app-host-elements />
-->

  <h1>Curso de Angular</h1>
  <app-life-cycle [myNumber]="number" />

  `,

})
export class AppComponent implements OnInit {
  public number = 1;

  ngOnInit(): void {
   
  }
}
