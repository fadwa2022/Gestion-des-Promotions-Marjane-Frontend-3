import { Component ,OnInit,Input} from '@angular/core';
import { Responsable } from 'src/app/models/responsable.model';

@Component({
  selector: 'app-responsable-detail',
  templateUrl: './responsable-detail.component.html',
  styleUrls: ['./responsable-detail.component.css']
})
export class ResponsableDetailComponent implements OnInit{
@Input() responsable:Responsable

constructor(){}
ngOnInit():void {

}
}
