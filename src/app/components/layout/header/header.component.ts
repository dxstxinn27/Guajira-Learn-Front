import { Component } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { AvatarModule } from 'primeng/avatar';
import { FooterComponent } from '../footer/footer.component';
import { RouterModule } from '@angular/router';
import { ContentComponent } from '../content/content.component';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ToolbarModule, AvatarModule, ContentComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  scrollToBottom() {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth' // Desplazamiento suave
    });
  }
  // items: MenuItem[] | undefined;

  //   ngOnInit() {
  //       this.items = [
  //           {
  //               label: 'Inicio',
  //               icon: 'pi pi-home'
  //           },
            // {
            //     label: 'Features',
            //     icon: 'pi pi-star'
            // },
            // {
            //     label: 'Projects',
            //     icon: 'pi pi-search',
            //     items: [
            //         {
            //             label: 'Core',
            //             icon: 'pi pi-bolt',
            //             shortcut: '⌘+S'
            //         },
            //         {
            //             label: 'Blocks',
            //             icon: 'pi pi-server',
            //             shortcut: '⌘+B'
            //         },
            //         {
            //             label: 'UI Kit',
            //             icon: 'pi pi-pencil',
            //             shortcut: '⌘+U'
            //         },
            //         {
            //             separator: true
            //         },
            //         {
            //             label: 'Templates',
            //             icon: 'pi pi-palette',
            //             items: [
            //                 {
            //                     label: 'Apollo',
            //                     icon: 'pi pi-palette',
            //                     badge: '2'
            //                 },
            //                 {
            //                     label: 'Ultima',
            //                     icon: 'pi pi-palette',
            //                     badge: '3'
            //                 }
            //             ]
            //         }
            //     ]
            // },
    //         {
    //             label: 'Contacto',
    //             icon: 'pi pi-envelope',
    //             //badge: '3'
    //         }
    //     ];
    // }
}
