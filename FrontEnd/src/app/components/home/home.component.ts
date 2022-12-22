import { Component, OnInit} from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  search:any;
  proData:any;
  constructor(private pser:ProductService){}

  ngOnInit(): void {
    this.pser.getAllProduct()
    .subscribe((res:any)=>{
      console.log(res);
      this.proData=res;
    })
  }

  delPro(id:any){
    if(confirm("Do you really want to delete?")){
      this.pser.deleteData(id)
      .subscribe(res=>{
         if(res){
          alert("Data Deleted");
          let data=this.proData.filter((pro:any)=> pro._id!=id);
          this.proData=data;
         }
      })
    }
  }
}
