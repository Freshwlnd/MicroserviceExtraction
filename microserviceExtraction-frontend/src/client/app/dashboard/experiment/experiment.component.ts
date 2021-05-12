import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { Repository } from '../../models/repository.model';

@Component({
  moduleId: module.id,
  selector: 'experiment-repo',
  templateUrl: './experiment.component.html',
  providers: [RestService]
})

export class ExperimentComponent implements OnInit{

  requestNum: Number = 100;

  PRBMEtime: Number = -1

  MEMtime: Number = -1

  constructor(private _rest : RestService){

  }
  
  ngOnInit(): void {

  }

  makeRequests(): void {
    $('#makeModal').modal('show');
    console.log("makeRequests");
    this._rest.makeRequests(this.requestNum).subscribe(
        result => {
          $('#makeModal').modal('hide');
        },
        error => {
          alert("There was an error during making.");
          $('#makeModal').modal('hide');
        }
    );
    console.log("Sent request");
  }

  doPRBME(): void {
    $('#myModal').modal('show');
    console.log("do PRBME");
    this._rest.doPRBME().subscribe(
        result => {
          this.PRBMEtime = (JSON.parse(result._body));
          $('#myModal').modal('hide');
        },
        error => {
          alert("There was an error during making.");
          $('#myModal').modal('hide');
        }
    );
    console.log("Sent request");
  }

  doMEM(): void {
    $('#myModal').modal('show');
    console.log("do MEM");
    this._rest.doMEM().subscribe(
        result => {
          this.MEMtime = (JSON.parse(result._body));
          $('#myModal').modal('hide');
        },
        error => {
          alert("There was an error during making.");
          $('#myModal').modal('hide');
        }
    );
    console.log("Sent request");
  }
}
