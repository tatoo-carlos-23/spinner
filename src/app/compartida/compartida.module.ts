
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnersComponent } from './spinners/spinners.component';

import { FlowerSpinnerModule, AtomSpinnerModule, PixelSpinnerModule, HollowDotsSpinnerModule, IntersectingCirclesSpinnerModule, OrbitSpinnerModule, RadarSpinnerModule, ScalingSquaresSpinnerModule, HalfCircleSpinnerModule, TrinityRingsSpinnerModule, FulfillingSquareSpinnerModule, CirclesToRhumbusesSpinnerModule, SemipolarSpinnerModule, SelfBuildingSquareSpinnerModule, SwappingSquaresSpinnerModule, FulfillingBouncingCircleSpinnerModule, FingerprintSpinnerModule, SpringSpinnerModule, LoopingRhumbusesSpinnerModule, BreedingRhombusSpinnerModule } from 'angular-epic-spinners'

@NgModule({
  declarations: [
    SpinnersComponent
  ],
  imports: [
    CommonModule,
    FlowerSpinnerModule,
    AtomSpinnerModule,
    PixelSpinnerModule,
    HollowDotsSpinnerModule,
    IntersectingCirclesSpinnerModule,
    OrbitSpinnerModule,
    RadarSpinnerModule,
    ScalingSquaresSpinnerModule,
    HalfCircleSpinnerModule,
    TrinityRingsSpinnerModule,
    FulfillingSquareSpinnerModule,
    CirclesToRhumbusesSpinnerModule,
    SemipolarSpinnerModule,
    SelfBuildingSquareSpinnerModule,
    SwappingSquaresSpinnerModule,
    FulfillingBouncingCircleSpinnerModule,
    FingerprintSpinnerModule,
    SpringSpinnerModule,
    LoopingRhumbusesSpinnerModule,
    BreedingRhombusSpinnerModule
  ],
  exports: [
    SpinnersComponent
  ]
})
export class CompartidaModule { }
