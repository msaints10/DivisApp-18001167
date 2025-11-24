import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonLabel, IonInput, IonButton, IonIcon } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { DecimalPipe } from '@angular/common';
import { addIcons } from 'ionicons';
import { swapHorizontal, cashOutline } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonLabel, IonInput, IonButton, IonIcon, FormsModule, DecimalPipe],
})
export class HomePage {
  quetzales: number | null = null;
  dolares: number = 0;
  tasaCambio: number = 8; // 8 quetzales por dólar

  constructor() {
    addIcons({ swapHorizontal, cashOutline });
  }

  convertir() {
    if (this.quetzales && this.quetzales > 0) {
      this.dolares = this.quetzales / this.tasaCambio;
    } else {
      this.dolares = 0;
    }
  }

  limpiar() {
    this.quetzales = null;
    this.dolares = 0;
  }
}
