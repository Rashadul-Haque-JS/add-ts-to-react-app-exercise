import { TProgram } from "./types/typesProgram";
const TVScheduleItem = ({ program }:{program:TProgram}) => {
    return (
        <li className="list-group-item">
        <strong>{program.start}</strong>
        <div>{program.name}</div>
    </li>
    )

}

export default TVScheduleItem;