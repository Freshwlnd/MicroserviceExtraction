import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { Repository } from '../../models/repository.model';
import { DecompositionDTO } from '../../models/decomposition.dto';
import { ActivatedRoute } from '@angular/router';
import { DataPassingService } from "../../services/datapassing.service";
import { Router } from '@angular/router';


declare var vis: any;
declare var $: any;


@Component({
	moduleId: module.id,
  selector: 'decompose-repo',
  templateUrl: './decompose.component.html',
  providers: [RestService]

})

export class DecomposeComponent implements OnInit{

  repository: Repository;

  logicalCoupling: boolean;

  semanticCoupling: boolean;

  contributorCoupling: boolean = true;

  dynamicCoupling: boolean;

  numServices: Number = 3;

  intervalSeconds: Number = 3600;

  sizeThreshold: Number = 400;

  isDataAvailable: boolean;

  useMethod: String = "MEM"


  constructor(private _rest : RestService, private _route: ActivatedRoute, private _datapassingService: DataPassingService, private _router: Router){

  }


  ngOnInit(): void {

    this._route.params.subscribe(params => {
      let id = +params['id'];
      this._rest.getRepository(id).subscribe(
        result => {
          // this.repository = JSON.parse(result._body);
          this.repository = JSON.parse((result as any)["_body"]);
          this.isDataAvailable = true;
        },
        error => {
          alert(error);
        }
      );
    });
  }

  decompose(): void {
    $('#myModal').modal('show');

    var dto = new DecompositionDTO();
    dto.intervalSeconds = this.intervalSeconds;
    dto.numServices = this.numServices;
    dto.sizeThreshold = this.sizeThreshold;
    dto.logicalCoupling = this.logicalCoupling == true ? true : false;
    dto.semanticCoupling = this.semanticCoupling == true ? true : false;
    dto.contributorCoupling = this.contributorCoupling == true ? true : false;
    dto.dynamicCoupling = this.dynamicCoupling == true ? true : false;
    dto.usePRBME = this.useMethod == "PRBME" ? true : false;
    dto.useMEM = this.useMethod == "MEM" ? true : false;

    this._rest.decompose(this.repository.id, dto).subscribe(
      result => {
        // var response = result._body;
        var response = (result as any)["_body"];
        this._datapassingService.setDecomposition(response);
        this._datapassingService.setRepository(this.repository);
        this._router.navigateByUrl('/graph');
        $('#myModal').modal('hide');
      },
      error => {
        console.log(error);
      }
    );

  }





}
