import { Age } from './components/Age';
import { Address } from './components/Address';


var student = [{
    name: "Jasna",
    lastname: "Aleksandrova",
    age: 37,
    address: "Skopje",
    college: "Semos"
},
{
    name: "Jana",
    lastname: "Aleksandrova",
    age: 12,
    address: "Skopje",
    college: "Komenski"
},
{
    name: "Luna",
    lastname: "Aleksandrova",
    age: 4,
    address: "Skopje",
    college: "Majski Cvet"
},
{
    name: "Bebe",
    lastname: "Darijan",
    age: 2,
    address: "Prilep",
    college: "Pcelicki"
}
]

export function App () {
    return(
        <div>
            <Age student = {student} />
            <Address student = {student}/>
        </div>
    );
}