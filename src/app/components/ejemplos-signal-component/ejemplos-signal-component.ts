import { Component, computed, inject, signal, Signal } from '@angular/core';
import { ServiceSignals } from '../../services/service.signals';

@Component({
  selector: 'app-ejemplos-signal-component',
  standalone: false,
  styleUrl: './ejemplos-signal-component.css',
  templateUrl: './ejemplos-signal-component.html',
})
export class EjemplosSignalComponent { 

  //recuperamos nuestro servicio utilizando inject 

  //para que sea SINGLETON 

  private _serviceSignal: ServiceSignals =  

    inject(ServiceSignals); 

  //esta variable apunta al contador del service 

  public contador = this._serviceSignal.contador; 

  public doble = this._serviceSignal.doble; 

 

  reiniciarContador(): void { 

    this._serviceSignal.reiniciarContador() 

  } 

  incrementarContador(): void { 

    this._serviceSignal.incrementarContador() 

  } }

