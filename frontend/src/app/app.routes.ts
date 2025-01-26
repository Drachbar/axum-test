import { Routes } from '@angular/router';
import {HejComponent} from "./components/hej/hej.component";
import {StartsidaComponent} from "./components/startsida/startsida.component";
import {BackendFetchTestComponent} from "./components/backend-fetch-test/backend-fetch-test.component";

export const routes: Routes = [
    {path: '', component: StartsidaComponent},
    {path: 'hej', component: HejComponent},
    {path: 'backend-fetch-test', component: BackendFetchTestComponent},
];
