import { getImageUrl } from './utils.js';

export default function Gallery() {
    return (
        <div>
            <h1>Notable Scientists</h1>
            <Profile profile = {{name:"Maria Skłodowska-Curie" , imageId : "szV5sdG"}} size={70} profession="physicist and chemist" awards="Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal" discovered="polonium (chemical element)" awardsNumber={4} />
            <Profile profile={{name:"Katsuko Saruhashi" , imageId : "YfeOqp2"}} size={70} profession="geochemist" awards="Miyake Prize for geochemistry, Tanaka Prize" discovered="a method for measuring carbon dioxide in seawater" awardsNumber={2} />
        </div>
    );
}

function Profile({ profile, size, profession, awards, discovered,awardsNumber }) {
    return (
        <>
            <section className="profile">
                <h2>{profile.name}</h2>
                <img
                    className="avatar"
                    src={getImageUrl(profile)}
                    alt={profile.name}
                    width={size}
                    height={size}
                />
                <ul>
                    <li>
                        <b>Profession: </b>
                        {profession}

                    </li>
                    <li>
                        <b>Awards: {awardsNumber} </b>
                        {awards}
                    </li>
                    <li>
                        <b>Discovered: </b>
                        {discovered}
                    </li>
                </ul>
            </section>
        </>
    );
}