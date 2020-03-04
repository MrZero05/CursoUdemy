import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

  arrayHero: Heroe[];
  termino: string;

  constructor(private activatedRoute: ActivatedRoute, private heroService: HeroesService) {

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.termino = params['termino'];
      this.arrayHero = this.heroService.buscarHeroe(params['termino']);
    });
  }

}
