import { Component } from '@angular/core';
import { FormControl } from "@angular/forms"
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isCollapsed = true
  searchQuery = new FormControl("")
}
