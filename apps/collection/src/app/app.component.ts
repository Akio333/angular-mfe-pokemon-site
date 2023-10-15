import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { GridComponent } from './grid/grid.component';
import { SearchComponent } from './search/search.component';
import { HeaderMfComponent } from './header-mf/header-mf.component';
import { FooterMfComponent } from './footer-mf/footer-mf.component';

@Component({
  standalone: true,
  imports: [
    NxWelcomeComponent,
    RouterModule,
    GridComponent,
    SearchComponent,
    HeaderMfComponent,
    FooterMfComponent,
  ],
  selector: 'pokemon-site-mf-angular-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'collection';
}
