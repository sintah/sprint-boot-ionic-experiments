import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { BeerPage } from "../beer/beer";
import {CalendaryPage} from "../calendary/calendary";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = BeerPage;
  tab3Root = AboutPage;
  tab4Root = ContactPage;
  tab5Root = CalendaryPage;

  constructor() {

  }
}
