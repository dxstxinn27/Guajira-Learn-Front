import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ChatCompletion } from '../interface/open-ai.interface';

@Injectable({
  providedIn: 'root'
})
export class OpenaiService {

  private readonly URL = 'https://api.openai.com/v1/chat/completions'
  private readonly API_KEY = 'sk-1234ijklmnop5678ijklmnop1234ijklmnop5678'

  constructor() { }

  message = [
    {
      role: "system",
      content: "Eres un asistente virtual. Responde de manera concisa y clara. Evita respuestas largas y repite lo mínimo necesario."
    },
  ]

  private http = inject(HttpClient)

  send(text:string) {
    this.message.push({
      role: "user",
      content: text
    })
    const body = {
      model: "gpt-4o",
      messages: this.message,
      max_tokens: 300
    }

    return this.http.post<ChatCompletion>(this.URL, body, {
      headers: {
        'Content-Type': 'aplication/json',
        'Authorization': `Bearer ${this.API_KEY}`
      }
    })

  }

}
