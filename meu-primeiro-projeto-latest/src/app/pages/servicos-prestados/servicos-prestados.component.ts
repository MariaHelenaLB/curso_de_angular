import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-servicos-prestados',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './servicos-prestados.component.html',
  styleUrl: './servicos-prestados.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class ServicosPrestadosComponent implements OnInit {
  //# = private 
  #route = inject(ActivatedRoute); //serve para fazer parametros
  #router = inject(Router); // gerenciamento de redirecionamentos

  public getId = signal<null | string>(null);
  @Input() set id(id: string) {
    this.getId.set(id);
  };

  public form = new FormGroup ({
    name: new FormControl(null, [Validators.required]),
  }); 

  //dependendo da situação você pode usar o ngOnInit 
  ngOnInit(): void {
    console.log(this.#route.snapshot.params['id']);
    this.#route.params.subscribe((res) => console.log(res['id']));

    console.log(this.#route.snapshot.queryParamMap.get('name'));
    console.log(this.#route.snapshot.queryParamMap.get('age'));


    //**outras formas de pegar os dados com queryParam:**
    this.#route.queryParamMap.subscribe((res) => console.log(res.get('name')));
    this.#route.queryParamMap.subscribe((res) => console.log(res.get('age')));

    this.#route.queryParamMap.subscribe({
      next: (next) => {
        console.log(next.get('name'));
        console.log(next.get('age'));
      },
    });

    //navigate faz com que a gente ande para as outras rotas
    //setTimeout(() => this.#router.navigate(['/curso']), 3000);

  };
};
