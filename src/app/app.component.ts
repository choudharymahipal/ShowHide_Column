import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular";
  displayedColumns: string[] = ["id", "name", "Designation"];
  dataSource = ELEMENT_DATA;
}

export interface EmpData {
  id:number;
  name: string;
  Designation: string;
}

const ELEMENT_DATA: EmpData[] = [
  { id: 1, name: "Manoj Puri", Designation: "Team Leader"},
  { id: 2, name: "Mahipal Choudhary", Designation: "Developer"},
  { id: 3, name: "Meghna Kumari", Designation: "Developer"},
  { id: 4, name: "Manoj jangid", Designation: "Developer"},
  { id: 5, name: "Praveen Rathore", Designation: "Developer"}
];
