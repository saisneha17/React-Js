function User(props) {
    const styles = { 
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', 
        margin: '10px' 
    };
    return (
        <div className="col-sm-4">
            <div className="m-2 p-4" style={styles}>
                <h5>Name: {props.userInfo.name}</h5>
                <h5>Phone No: {props.userInfo.phone}</h5>
                <h5>Username: {props.userInfo.username}</h5>
                <h5>Email: {props.userInfo.email}</h5>
                <h5>Website: {props.userInfo.website}</h5>
                <h5>Address: {props.userInfo.address.street} {props.userInfo.address.city}</h5>
                <button className="btn btn-danger mt-2" onClick={() => props.deleteUser(props.userInfo.id)}>Delete</button>
            </div>
        </div>
    )
}

export default User;