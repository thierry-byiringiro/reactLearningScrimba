const Profile = () => {
    const user = {
        name: "Aime Thierry Byiringiro",
        imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
        imageSize: 90
    }

    return (
        <>
            <h1>Holla,{user.name}</h1>
            <img src={user.imageUrl} alt={`Photo of ${user.name}`} style={{ width: user.imageSize, height: user.imageSize }} />
        </>
    );

}

export default Profile;