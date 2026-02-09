import { getImageUrl } from "./utils";
function Avatar({person,size}){
    return (
    <>
        < img className="avatar" src={getImageUrl(person)} alt={person.name} width={size} height={size}/>
    </>
    );
}

export default function MyProfile(){
    return (
        <>
            <Avatar person={{name : "aime",imageId:'1bX5QH6'}} size={100}/>
        </>
    );
}

