import React from 'react'
import { Outlet,useSearchParams } from 'react-router-dom'

function Users() {
    // const search=useSearchParams()
    // console.log(search);
    const [searchParams,setSearchParams]=useSearchParams()
    const showActiveUsers=searchParams.get('filter') ==='active'
    // console.log(showActiveUsers);
  return (
    <div>
        <h2>Users 1</h2>
        <h2>Users 2</h2>
        <h2>Users 3</h2>
        <Outlet/>
        <div>
            <button  onClick={()=>{setSearchParams({filter:'active'})}}>Active Users</button>
            <button onClick={()=>{setSearchParams({})}}>Reset</button>
        </div>
        {
            showActiveUsers ? <h2>Showing Active users</h2>:<h2>Showing All Users</h2>
        }
    </div>
  )
}

export default Users