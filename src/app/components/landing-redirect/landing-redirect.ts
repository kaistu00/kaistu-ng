import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-redirect',
  imports: [],
  templateUrl: './landing-redirect.html',
  styleUrl: './landing-redirect.scss',
  standalone: true
})
export class LandingRedirect implements OnInit {
  ngOnInit(): void {
    // Redirección directa al archivo físico copiado por Angular
    window.location.replace('/landing-web-kaistu/landing-web-kaistu.html');
  }
}
