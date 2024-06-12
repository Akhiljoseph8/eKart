import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

logStatus:any=false
userName:any=""
wishlistcnt:any=0
cartCnt:any=0
products:any=[]


constructor(private api:ApiService,private toastr:ToastrService){}
ngOnInit() {
    
  if (sessionStorage.getItem('user')) {
    const us:any= sessionStorage.getItem('user') 
    this.userName = JSON.parse(us)?.username
    this.logStatus=true
    this.api.wishListCountBS.subscribe((res:any)=>{
      this.wishlistcnt = res
      this.api.getWishListCount()
      
    })

    this.api.cartCountBS.subscribe((res:any)=>{
      this.cartCnt = res
      this.api.getCartCount()
    })

  } else {
    this.logStatus=false
    this.userName =""
  }

}



}
