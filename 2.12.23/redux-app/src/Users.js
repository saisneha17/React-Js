import { useEffect } from "react";
import { fetchAllUsers } from "./slices/users.slice";
import { useSelector, useDispatch } from 'react-redux';

function Users() {
    const dispatch = useDispatch();
    const {isLoading, data, error} = useSelector(state => state.users);
    console.log(isLoading, data, error);
    useEffect(() => {
        dispatch(fetchAllUsers());
    }, []);
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-12">
                    <h2 className="text-center">Users List</h2>
                    {isLoading ? (
                        <div>
                            Loading...
                        </div>
                    ) : (
                        <div className="row">
                            {data.map(user => (
                                <div key={user.id} className="col-sm-4">
                                    <div className="p-4" style={{boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px', height: '320px'}}>
                                        <h5 className="my-3">Name: <span className="text-success">{user.name}</span></h5>
                                        <h5 className="my-3">Username: <span className="text-success">{user.username}</span></h5>
                                        <h5 className="my-3">Email: <span className="text-success">{user.email}</span></h5>
                                        <h5 className="my-3">Phone No: <span className="text-success">{user.phone}</span></h5>
                                        <h5 className="my-3">Address: <span className="text-success">{user.address.street}, {user.address.suite}, {user.address.city}</span></h5>
                                        <h5 className="my-3">Company Details: <span className="text-success">{user.company.name} {user.company.catchPhrase}</span></h5>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Users;