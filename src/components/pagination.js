import React from 'react';
import Pagination from "@material-ui/lab/Pagination";
import PaginationItem from "@material-ui/lab/PaginationItem";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: 'white',
    },
    selected: {
        outlined:'#ffffff',
    },
    
}));

const Paginations = ({ sq, paginate, scientistsPerPage }) => {
const classes = useStyles();

   const pageNumbers = [];
   for (let i = 1; i <= Math.ceil(sq / scientistsPerPage); i++) {
       pageNumbers.push(i)
   }
   console.log(pageNumbers)
   const handlePage = (e) => {
       paginate(Number(e.target.innerText));
   }
    
    return ( 
        <div  >
        <Pagination  className={classes.root} count={3} variant="outlined" onClick={(e)=> handlePage(e)} color="primary"  />
        </div>      
);
}
 
export default Paginations;

//renderItem={(item)=> <PaginationItem {...item} classes={{selected:classes.selected}} />