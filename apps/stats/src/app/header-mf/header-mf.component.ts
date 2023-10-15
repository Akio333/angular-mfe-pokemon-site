import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { loadRemoteModule } from '@angular-architects/module-federation';

@Component({
  selector: 'pokemon-site-mf-angular-header-mf',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header-mf.component.html',
  styleUrls: ['./header-mf.component.scss'],
})
export class HeaderMfComponent implements OnInit {
@ViewChild('placeholder', { read: ViewContainerRef })
  placeholder!: ViewContainerRef;
  async ngOnInit() {
    const { HeaderComponent } = await loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:4200/remoteEntry.js',
      exposedModule: './HeaderComponent',
    });
    const { instance } = this.placeholder.createComponent(HeaderComponent);
  }
}
