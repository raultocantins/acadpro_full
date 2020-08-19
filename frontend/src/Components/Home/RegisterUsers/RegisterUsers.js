import { Component } from "react";
import React from "react";
import Step1 from "./RegisterStep1";
import Step2 from "./RegisterStep2";
import api from '../../../api'
import "./RegisterUsers.css";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
export default class Registerusers extends Component{
  state={
    id:'',
    deletar:false,
    step:1,    
    name:'',
    email:'',
    number:'',
    days:'',
    height:'',
     weight:'',
    fat:'',
   pressure:'',
   birth:'',
  url:'',
    page:0,
    rowsPerPage:5,
  data:[
    {id:1,name:'Cupcake teste',days:90,weight:80,height:1.99,url:'www.faceboo.com/imagens',fat:40,pressure:12.8,birth:'10/02/1990',number:63992086480,email:'alexbraul.ar@gmail.com'},
    {id:2,name:'Cupcake',days:30,weight:80,height:1.99,url:'www.faceboo.com/imagens',fat:40,pressure:12.8,birth:'10/02/1990',number:63992086480,email:'alexbraul.ar@gmail.com'},
    {id:3,name:'Cupcake',days:30,weight:80,height:1.99,url:'www.faceboo.com/imagens',fat:40,pressure:12.8,birth:'10/02/1990',number:63992086480,email:'alexbraul.ar@gmail.com'},
    {id:4,name:'Cupcake',days:30,weight:80,height:1.99,url:'www.faceboo.com/imagens',fat:40,pressure:12.8,birth:'10/02/1990',number:63992086480,email:'alexbraul.ar@gmail.com'},
    {id:5,name:'Cupcake',days:30,weight:80,height:1.99,url:'www.faceboo.com/imagens',fat:40,pressure:12.8,birth:'10/02/1990',number:63992086480,email:'alexbraul.ar@gmail.com'},
    {id:6,name:'Cupcake',days:30,weight:80,height:1.99,url:'www.faceboo.com/imagens',fat:40,pressure:12.8,birth:'10/02/1990',number:63992086480,email:'alexbraul.ar@gmail.com'},
    ]
  }
constructor(props){
  super(props)
this.CustomPaginationActionsTable=this.CustomPaginationActionsTable.bind(this)
this.handleChange=this.handleChange.bind(this)
this.nextStep=this.nextStep.bind(this)
this.EditUser=this.EditUser.bind(this)
this.RemoveUser=this.RemoveUser.bind(this)
this.RegisterUser=this.RegisterUser.bind(this)
this.AlterUser=this.AlterUser.bind(this)
this.DeleteUser=this.DeleteUser.bind(this)
this.ClearForm=this.ClearForm.bind(this)

}  
componentDidMount(){
  api.get('/users')
  .then(res=>{
this.setState({data:res.data})
  })
  .catch(err=>{
    console.log(err)
  })
}

nextStep = () => {
  const { step } = this.state;
  this.setState({ step: step + 1 });
};
prevStep = () => {
  const { step } = this.state;
  this.setState({ step: step - 1 });
};
handleChange = (input) => (e) => {
  this.setState({ [input]: e.target.value });
};
EditUser(row){
  const{name,email,url,days,birth,weight,fat,pressure,height,number,id}=row
this.setState({ 
  id:id,
name:name,
email:email,
birth:birth,
url:url,
days:days,
weight:weight,
fat:fat,
pressure:pressure,
height:height,
number:number,
step:2,
deletar:false
})

}
RemoveUser(row){
  const{name,email,url,days,birth,weight,fat,pressure,height,number,id}=row
  this.setState({
    id:id, 
  name:name,
  email:email,
  birth:birth,
  url:url,
  days:days,
  weight:weight,
  fat:fat,
  pressure:pressure,
  height:height,
  number:number,
  step:2,
  deletar:true
  })
}
RegisterUser(){
  const {name,email,birth,url,days,weight,fat,pressure,number,height}=this.state
  const dataUser={
    name:name,
    email:email,
    birth:birth,
    url:url,
    days:days,
    weight:weight,
    fat:fat,
    pressure:pressure,
    height:height,
    number:number
  }
  api.post('/users',dataUser)
.then(res=>{
alert('cadastrado com sucesso ')
})
.catch(err=>{
alert('erro ao cadastrar')
})

}
AlterUser(){
  const {name,email,birth,url,days,weight,fat,pressure,number,height,id}=this.state
  const dataUser={
    name:name,
    email:email,
    birth:birth,
    url:url,
    days:days,
    weight:weight,
    fat:fat,
    pressure:pressure,
    height:height,
    number:number
  }
  if(id){
    api.put(`/users/${id}`,dataUser)
    .then(res=>{
    alert('Alterado com sucesso')
    })
    .catch(err=>{  
      alert('Não foi possivel alterar')  
    })
  }else{
    alert('id invalido')
  }
 
}
DeleteUser(){
  if(this.state.deletar){

    api.delete(`/users/${this.state.id}`)
    .then(res=>{
      alert('usuario deletado com sucesso')
    })
    .catch(err=>{
      alert(err)
    })
  }
}
ClearForm(){
  this.setState({
    name:'',
    email:'',
    birth:'',
    url:'',
    days:'',
    weight:'',
    fat:'',
    pressure:'',
    height:'',
    number:'',
  step:2  })

}


TablePaginationActions(props) {
  var propTypes={ count: PropTypes.number.isRequired,
    onChangePage: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,}
      const theme = useTheme();
      const { count, page, rowsPerPage, onChangePage } = props;  
      const handleFirstPageButtonClick = (event) => {
        onChangePage(event, 0);
      };
    
      const handleBackButtonClick = (event) => {
        onChangePage(event, page - 1);
      };
    
      const handleNextButtonClick = (event) => {
        onChangePage(event, page + 1);
      };
    
      const handleLastPageButtonClick = (event) => {
        onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
      };
    
      return (
        <div >
          <IconButton
            onClick={handleFirstPageButtonClick}
            disabled={page === 0}
            aria-label="first page"
          >
            {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
          </IconButton>
          <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
          </IconButton>
          <IconButton
            onClick={handleNextButtonClick}
            disabled={page >= Math.ceil(count / rowsPerPage) - 1}
            aria-label="next page"
          >
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </IconButton>
          <IconButton
            onClick={handleLastPageButtonClick}
            disabled={page >= Math.ceil(count / rowsPerPage) - 1}
            aria-label="last page"
          >
            {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
          </IconButton>
        </div>
      );
    } 
       
  CustomPaginationActionsTable() {              
      const emptyRows = this.state.rowsPerPage - Math.min(this.state.rowsPerPage, this.state.data.length - this.state.page * this.state.rowsPerPage);  
      const handleChangePage = (event, newPage) => {
        this.setState({page:newPage})      
      };    
      const handleChangeRowsPerPage = (event) => {
        this.setState({rowsPerPage:parseInt(event.target.value, 10)})     
      this.setState({page:0})     
      };     
          return (
        <TableContainer component={Paper}>
          <Table  aria-label="custom pagination table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align="right">NOME</TableCell>
                <TableCell align="right">PLANO</TableCell>
                <TableCell align="right">PESO</TableCell>
                <TableCell align="right">ALTURA</TableCell>
                <TableCell align="right">RENOVAR</TableCell>
                <TableCell align="right">AÇÕES</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
    
              {(this.state.rowsPerPage > 0
                ? this.state.data.slice(this.state.page * this.state.rowsPerPage, this.state.page * this.state.rowsPerPage + this.state.rowsPerPage)
                : this.state.data
              ).map((row) => (
                
                <TableRow key={row.name}>
                  <TableCell style={{ width: 60 }} align="right">
                    {row.id}
                  </TableCell>
                  <TableCell style={{ width: 160 }} align="right">
                    {row.name}
                  </TableCell>
                  <TableCell style={{ width: 160 }} align="right">
                    {row.days}
                  </TableCell>
                  <TableCell style={{ width: 160 }} align="right">
                    {row.weight}
                  </TableCell>
                  <TableCell style={{ width: 160 }} align="right">
                    {row.height}
                  </TableCell>
                  <TableCell style={{ width: 160 }} align="right">
                    <h5>renovar</h5>
                  </TableCell>              
                  <TableCell style={{ width: 160 }} align="right">
                  
                      <DeleteForeverIcon onClick={()=>this.RemoveUser(row)} style={{marginRight:'15px',color:'red'}}/>
                   <EditIcon onClick={()=>this.EditUser(row)} style={{color:'#ffc107'}}/>
                    
                  </TableCell>
                </TableRow>
              ))}
    
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                  colSpan={7}
                  count={this.state.data.length}
                  rowsPerPage={this.state.rowsPerPage}
                  page={this.state.page}
                  SelectProps={{
                    inputProps: { 'aria-label': 'rows per page' },
                    native: true,
                  }}
                  onChangePage={handleChangePage}
                  onChangeRowsPerPage={handleChangeRowsPerPage}
                  ActionsComponent={this.TablePaginationActions}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      );
    }  
render(){
  const {name,email,number,days,height,weight,fat,pressure,birth,url,id,deletar}=this.state
  const values={name,email,number,days,height,weight,fat,pressure,birth,url,id,deletar}
  return(
    <div>
       {this.state.step === 1 ? (
          <Step1
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values} 
           ClearForm={this.ClearForm}
                  
          />
        ) : (
          <Step2
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
            RegisterUser={this.RegisterUser}
            AlterUser={this.AlterUser}
            DeleteUser={this.DeleteUser}
            />
        )}
      {this.CustomPaginationActionsTable()}
    </div>
  )
}
  }
