import { ChangeDetectionStrategy, Component, inject, ViewChild } from '@angular/core';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MinimalistFooterComponent } from "../../core/layout/minimalist-footer/minimalist-footer.component";
import { FilterComponent } from "../../shared/components/filter/filter.component";
import { AuthGoogleService } from '../auth/data-access/auth-google.service';
import { MyListsComponent } from "../gift-list/my-lists/my-lists.component";
import { SidenavMenuService } from './Services/sidenav-menu.service';
import { ToolbarComponent } from "./ui/toolbar/toolbar.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatSidenavModule, ToolbarComponent, MinimalistFooterComponent, MyListsComponent, FilterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  private authGoogleService = inject(AuthGoogleService);

  @ViewChild('drawerSub') sidenav!: MatSidenav;

  constructor(private sidenavMenuService: SidenavMenuService) { }

  ngAfterViewInit(): void {
    this.sidenavMenuService.setSidenav(this.sidenav);
  }

  showData() { // necessário alterar isso no futuro
    const data = JSON.stringify(this.authGoogleService.getProfile())
    console.log(data);
  }

}
