function User() {
    const user = {
        id: 1,
        firstName: 'Dominick',
        lastName: 'Cordell',
        email: 'dcordell0@netscape.com',
        ipAddress: '210.128.236.116'
    };
    const getSearchQuery = (event) => {
        console.log(event.target.value);
    }
    const search = () => {
        console.log('Search button has been clicked...');
    };
    return (
        <div>
            <h2>Id: {user.id}</h2>
            <h2>FirstName: {user.firstName}</h2>
            <h2>LastName: {user.lastName}</h2>
            <h2>Email: {user.email}</h2>
            <h2>Ip Address: {user.ipAddress}</h2>

            <input placeholder="Enter search query..." onChange={($event) => getSearchQuery($event)}/>

            <button className="btn btn-success" onClick={search}>Search</button>
        </div>
    )
}

export default User;