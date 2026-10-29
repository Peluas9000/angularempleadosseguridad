import { computed, Injectable, signal } from "@angular/core"; 

@Injectable({providedIn: 'root'}) 

export class ServiceSignals{ 

  public contador = signal(0); 

  //PODEMOS UTILIZAR computed() PARA ACCIONES DE UN SIGNAL 

  public doble = computed(() => { 

    return this.contador() * 2 

  }) 

  reiniciarContador(): void { 

    this.contador.set(0); 

  } 

  incrementarContador(): void { 

    this.contador.update(value => value + 1); 

  } 

} 