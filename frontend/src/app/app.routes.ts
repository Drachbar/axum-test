import { Routes } from '@angular/router';
import {HejComponent} from "./components/hej/hej.component";
import {StartsidaComponent} from "./components/startsida/startsida.component";

export const routes: Routes = [
    {path: '', component: StartsidaComponent},
    {path: 'hej', component: HejComponent}
];
