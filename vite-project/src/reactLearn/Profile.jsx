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

    let getFavorites = favorites.map((element,index) => (
        <li key ={index}>{element.title} {`-->`} {element.type}</li>
    ))
    let isMale = true;
    return (
        <>
            <h1>Holla ,{isMale ? ("Mr.") : ("Mrs")} {user.name}</h1>
            <img src={user.imageUrl} alt={`Photo of ${user.name}`} style={{ width: user.imageSize, height: user.imageSize, borderRadius: 30 }} />
            <h3>Below is the list of my favorites</h3>
            <ul>
                {getFavorites}
            </ul>
        </>
    );

}

export default Profile;