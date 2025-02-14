import { useEffect, useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import User from './User'

function Users() {
    return (
        <div>
        <div className="font-bold mt-6 text-lg">
            Users
        </div>
        
        <input className='p-2 w-full border rounded border-slate-200' type="text" placeholder='search users...'  />
        <div>
            <User user={{firstName:'Aakash',lastName:'Loyar'}}/>
        </div>

        </div>
    )
}
export default Users;