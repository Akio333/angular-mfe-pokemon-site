import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { loadRemoteModule } from '@angular-architects/module-federation';

@Component({
  selector: 'pokemon-site-mf-angular-footer-mf',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer-mf.component.html',
  styleUrls: ['./footer-mf.component.scss'],
})
export class FooterMfComponent implements OnInit {
  @ViewChild('placeholder', { read: ViewContainerRef })
  placeholder!: ViewContainerRef;
  async ngOnInit() {
    const { FooterComponent } = await loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:4200/remoteEntry.js',
      exposedModule: './FooterComponent',
    });
    const { instance } = this.placeholder.createComponent(FooterComponent);
  }
}
