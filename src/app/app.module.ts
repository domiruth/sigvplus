import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';
import { ReservaComponent } from './components/reserva/reserva.component';
import { ResultsComponent } from './components/results/results.component';
import { HotelesComponent } from './components/hoteles/hoteles.component';
import { VueloService } from './services/vuelo.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HotelService } from './services/hotel-service.service';
import { BusesComponent } from './components/buses/buses.component';
import { AirportComponent } from './components/airport/airport.component';
import { BusesService } from './services/buses.service';
import { MenorPrecioHotelPipe } from './pipes/menor-precio-hotel.pipe';
import { LoginComponent } from './components/login/login.component';
import { LoginService } from './services/login.service';
import { HotelhijoComponent } from './components/hotelhijo/hotelhijo.component';
import { CityComponent } from './components/city/city.component';
import { CitydestinoComponent } from './components/citydestino/citydestino.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchComponent,
    ReservaComponent,
    ResultsComponent,
    HotelesComponent,
    BusesComponent,
    AirportComponent,
    MenorPrecioHotelPipe,
    LoginComponent,
    HotelhijoComponent,
    CityComponent,
    CitydestinoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [VueloService, HotelService, BusesService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
