import {useState} from 'react';
import Users from '../components/Users'
import Appbar from '../components/Appbar'
import Balance from '../components/Balance'
// import Users from '../components/Users'
function Dashboard() {
    return (
        <>
        <Appbar/>
        <div className="m-8">
            <Balance value={"10,000"} />
            <Users />
        </div>
        </>
    )
}
export default Dashboard;