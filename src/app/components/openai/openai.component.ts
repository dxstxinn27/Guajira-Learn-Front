import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, inject, ViewChild } from '@angular/core';
import { OpenaiService } from '../../services/openai.service';
import { interval, takeWhile } from 'rxjs';
import { Router, RouterOutlet } from '@angular/router';

type TypeChat = 'OPEN_AI' | 'USER'

type Chats = {
  type: TypeChat,
  message: string
}

@Component({
  selector: 'app-openai',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './openai.component.html',
  styleUrl: './openai.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OpenaiComponent {
  chats: Chats[] = []

  private readonly openAiService = inject(OpenaiService)
  private readonly cdr = inject(ChangeDetectorRef)


  @ViewChild('txtInput', { static: true }) txtInput!: ElementRef<HTMLInputElement>;

  @ViewChild('contentChat', { static: true }) contentChat!: ElementRef<HTMLElement>;

  private setChat(type: TypeChat, message: string) {
    this.chats.push({
      type,
      message
    })
  }

  public sendMessage(text: string) {
    if (text.length > 3) {
      this.setChat('USER', text);
      this.txtInput.nativeElement.value = ''
      this.getResponseOpenAi(text)
    }
  }

  private scrollToBotton(): void {
    try {
      this.contentChat.nativeElement.scrollTop = this.contentChat.nativeElement.scrollHeight;

    } catch (err) {
      console.error('');
    }
  }

  private convertToHtml(responseGpt: string) {
    return responseGpt
    .replace(/###/g, '<br/>')
    .replace(/\n/g, '<br/>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
  }

  private typeText(responseGpt: string){
    const responseHtml = this.convertToHtml(responseGpt)
    const responseLength = responseHtml.length
    let currentIndex = 0

    interval(10)
      .pipe(takeWhile(() => currentIndex < responseLength))
      .subscribe(()=> {
        const currentHtml = responseHtml[currentIndex]

        if (currentIndex === 0) this.setChat('OPEN_AI', currentHtml) 
        else {
          const lastChat = this.chats[this.chats.length - 1]
          lastChat.message += currentHtml
        }
        currentIndex++
        this.scrollToBotton()
        this.cdr.detectChanges()
      })
  }

  getResponseOpenAi(text: string){
    this.openAiService.send(text).subscribe(resp =>{
      const message = resp.choices[0].message.content
      this.typeText(message)

      this.openAiService.message.push({
        role: "assistant",
        content: message
      })
    })
  }

  constructor(private router: Router) {}

  racha = 0;
  cactusCoins = 0.0;
  fechaActual = new Date();
  diasMes: number[] = [];
  isDarkMode = false;

  ngOnInit(): void {
    this.cargarEstadoDarkMode();
    this.generarCalendario();
  }

  cargarEstadoDarkMode(): void {
    const modoOscuroGuardado = localStorage.getItem('isDarkMode');
    this.isDarkMode = modoOscuroGuardado === 'true';
  }

  generarCalendario(): void {
    const fecha = new Date(this.fechaActual.getFullYear(), this.fechaActual.getMonth() + 1, 0);
    const dias = fecha.getDate();
    this.diasMes = Array.from({ length: dias }, (_, i) => i + 1);
  }

  cerrarSesion(): void {
    // Limpiar el localStorage y redirigir al inicio de sesión
    localStorage.removeItem('estudianteId');
    localStorage.removeItem('token');
    // localStorage.removeItem('isDarkMode');
    this.router.navigate(['usuarios/estudiante/iniciar-sesion']);
  }

  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('isDarkMode', this.isDarkMode.toString());
  }

  navegar(ruta: string): void {
    this.router.navigate([ruta]);
  }

}
