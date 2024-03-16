import { Component } from '@angular/core';
import {  Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-msg-box',
  standalone: true,
  imports: [],
  templateUrl: './msg-box.component.html',
  styleUrl: './msg-box.component.scss'
})
export class MsgBoxComponent {
  @Input() message: string='';
  @Output() close = new EventEmitter<void>();

  onClose(): void {
    this.close.emit();
  }
}
//<app-message-box [message]="errorMessage" (close)="clearErrorMessage()"></app-message-box>
