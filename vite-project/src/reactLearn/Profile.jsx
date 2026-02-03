const Profile = () => {
    const user = {
        name: "Aime Thierry Byiringiro",
        imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
        imageSize: 90
    }

    const favorites = [
        { title: 'Football',type: "Man U" },
        { title: 'Movie',type : 'Stranger Things' },
        { title: 'Food',type : "French fries" }
    ];
    
    let isMale = false;
    return (
        <>
            <h1>Holla ,{isMale ? ("Mr.") : ("Mrs")} {user.name}</h1>
            <img src={user.imageUrl} alt={`Photo of ${user.name}`} style={{ width: user.imageSize, height: user.imageSize, borderRadius: 30 }} />
            <h3>Below is the list of my favorites</h3>
        </>
    );

}

export default Profile;