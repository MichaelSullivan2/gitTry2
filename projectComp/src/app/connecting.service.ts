import { Injectable } from '@angular/core';
import { Component, EventEmitter, Input, Output } from "@angular/core";
@Injectable({
  providedIn: 'root'
})
export class ConnectingService {

  constructor() { }

  statusEdited1: EventEmitter<boolean> = new EventEmitter<boolean>();
  statusEdited2: EventEmitter<boolean> = new EventEmitter<boolean>();
  statusEdited3: EventEmitter<boolean> = new EventEmitter<boolean>();
  statusEdited4: EventEmitter<boolean> = new EventEmitter<boolean>();
  statusEdited5: EventEmitter<boolean> = new EventEmitter<boolean>();
}
