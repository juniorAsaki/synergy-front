import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [MessageService ]
})
export class AppComponent {
  title = 'app-immoProject';
}
