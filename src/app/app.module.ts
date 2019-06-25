import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';
import { ReservaComponent } from './reserva/reserva.component';
import { ResultsComponent } from './results/results.component';
import { HotelesComponent } from './hoteles/hoteles.component';
import { VueloService } from './services/vuelo.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HotelService } from './services/hotel-service.service';
import { BusesComponent } from './buses/buses.component';
import { AirportComponent } from './airport/airport.component';
import { Demo1Pipe } from './pipes/demo1.pipe';




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
    Demo1Pipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [VueloService,HotelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
