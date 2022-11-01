import { Link, Outlet } from "react-router-dom";
const Admin = () => {
    return ( 
        <div className="Admin">
            <h2 className="wel">مرحبا جمال</h2>
            <div className="Dashboard">
                <div className="d-s">الاحصائيات</div>
                <div className='cards-Board'>
                    <Link to='/Admin/AllCourses'>
                        <div className='card-dashboard'>
                            <div>الكل</div>
                            <div>0</div>
                        </div>
                    </Link>
                    <Link to='/Admin/Pending' >
                        <div className='card-dashboard' >
                            <div>قيد المراجة</div>
                            <div>0</div>
                        </div>
                    </Link>
                    <Link to='/Admin/Confirmed' >
                        <div className='card-dashboard' >
                            <div>تم قبولها</div>
                            <div>0</div>
                        </div>
                    </Link>
                    <Link to='/Admin/Rejected'>
                        <div className='card-dashboard' >
                            <div>تم رفضها</div>
                            <div>0</div>
                        </div>
                    </Link>
                </div>
                
            </div>
            <Outlet/>
        </div>
     );
}
 
export default Admin;