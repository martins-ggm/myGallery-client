import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import path from 'path';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StartComponent } from './components/start/start.component';

export const routes: Routes = [
   { path: '',component: StartComponent}
];
