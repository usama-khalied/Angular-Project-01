import { Component, OnInit, ViewChild } from '@angular/core';
import { SysMasterCodesService } from '../shared/sys-master-codes.service';
import { SysMasterCodes } from '../shared/sys-master-codes.model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import * as _ from 'lodash';

@Component({
selector: 'app-sys-master-codes-list',
templateUrl: './sys-master-codes.component.html',
styleUrls: ['./sys-master-codes.component.css'], })

export class SysMasterCodesListComponent implements OnInit {
dataSource;
searchValue;

constructor(
public service: SysMasterCodesService,
private router: Router,
private dialog: MatDialog
) {}

ngOnInit() {
this.service.getAllData().subscribe((list) => {
this.service.sysMasterCodesList = _.cloneDeep(list);
this.service.filteredSource = _.cloneDeep(list);
}); }

// onEdit(row) {
// this.service.formData = row as SysMasterCodes;
// const dialogConfig = new MatDialogConfig();
// dialogConfig.disableClose = true;
// dialogConfig.autoFocus = true;
// dialogConfig.width = '900px';
// dialogConfig.maxHeight = '90vh';
// this.dialog.open(SysMasterCodesComponent, dialogConfig); }

// onCreate() {
// const dialogConfig = new MatDialogConfig();
// dialogConfig.disableClose = true;
// dialogConfig.autoFocus = true;
// dialogConfig.width = '900px';
// dialogConfig.maxHeight = '90vh';
// this.service.formData = null;
// this.dialog.open(SysMasterCodesComponent, dialogConfig); }

applyFilter(event: Event) {
this.searchValue = (event.target as HTMLInputElement).value;
if (!this.searchValue) {
this.service.filteredSource = _.cloneDeep(
this.service.sysMasterCodesList );
return; }
this.service.filteredSource = this.service.sysMasterCodesList.filter(
(item) => {
return Object.keys(item).some((key) => {
return String(item[key])
.toLowerCase()
.includes(this.searchValue.toLowerCase());
}); } );
} }
