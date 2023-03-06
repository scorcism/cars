import logo from './logo.svg';
import './App.css';
import {Route , BrowserRouter , Redirect} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import BookingCar from './pages/BookingCar'
import 'antd/dist/antd.css';
import UserBookings from './pages/UserBookings';
import AddCar from './pages/AddCar';
import AdminHome from './pages/AdminHome';
import EditCar from './pages/EditCar';
import AboutUs from './pages/AboutUs';
import Contactus from './pages/ContactUs';
import FAQs from './pages/FAQs';
import AllCars from './pages/AllCars';
import Allusers from './pages/Allusers';
import Allbooking from './pages/Allbooking';
import TC from './pages/TC';

function App() {
  return (
    <div className="App">

         
         
         <BrowserRouter>
             
             <ProtectedRoute path='/' exact component={Home} />
             <Route path='/login' exact component={Login} />
             <Route path='/register' exact component={Register} />
             <Route path='/aboutus' exact component={AboutUs} />
             <Route path='/contactus' exact component={Contactus} />
             <Route path='/faqs' exact component={FAQs} />
             <Route path='/tandc' exact component={TC} />
             <ProtectedRoute path='/booking/:carid' exact component={BookingCar} />
             <ProtectedRoute path='/userbookings' exact component={UserBookings} />
             <ProtectedRoute path='/addcar' exact component={AddCar} />
             <ProtectedRoute path='/editcar/:carid' exact component={EditCar} />
             <ProtectedRoute path='/admin' exact component={AdminHome} />
             <ProtectedRoute path='/allcars' exact component={AllCars} />
             <ProtectedRoute path='/allusers' exact component={Allusers} />
             <ProtectedRoute path='/allbookings' exact component={Allbooking} />
         
         </BrowserRouter>

    </div>
  );
}



export default App;


export function ProtectedRoute(props)
{


    if(localStorage.getItem('user'))
    {
      return <Route {...props}/>
    }
    else{
      return <Redirect to='/login'/>
    }

}
