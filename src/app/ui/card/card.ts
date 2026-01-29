import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Testimonials } from "../testimonials/testimonials";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [Testimonials, RouterLink],
  templateUrl: './card.html',
  styleUrls: ['./card.css'],
})
export class Card {

}
