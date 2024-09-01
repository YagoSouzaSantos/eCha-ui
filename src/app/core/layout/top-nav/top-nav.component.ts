import { Component, inject, OnInit } from '@angular/core';
import { MATERIAL } from '../../../features/login/components/imports/imports';
import { TopNavImports } from './config/material';
import { Router } from '@angular/router';
import { TopnavService } from './services/topnav.service';

@Component({
  selector: 'app-top-nav',
  standalone: true,
  imports: [TopNavImports],
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss', '/src/styles/colors.scss']
})
export class TopNavComponent implements OnInit {
  private router = inject(Router)
  // Variável para armazenar o valor atual da variável booleana
  display: boolean = true;

  constructor(private topnavService: TopnavService) { }

  ngOnInit(): void {
    // Inscreva-se para obter atualizações sobre a variável booleana
    this.topnavService.myBoolean$.subscribe(value => {
      this.display = value;
    });

    // Modificar o valor da variável booleana
    this.topnavService.setMyBoolean(true);
  }


  toLogin() {
    this.router.navigate(['/login'])
  }
}
