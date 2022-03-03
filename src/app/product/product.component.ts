import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  pageNo= 0;
  snapshotPageNo= 0;

  constructor(private Activatedroute:ActivatedRoute,
    private router:Router) { }

  ngOnInit() {
    this.snapshotPageNo =+ this.Activatedroute.snapshot.queryParamMap.get('pageNum')||0;
    this.Activatedroute.queryParamMap
    .subscribe(params => {
      this.pageNo =+params.get('pageNum')||0;
      console.log('Query Params', this.pageNo);
      
    })

  }
  nextPage() {
    this.router.navigate(['product'], {queryParams: {pageNum : this.pageNo + 1}});
  }
}

