import { SuperHTML } from "./types/typesSuper";

const TVSchedule = ({title, children }:SuperHTML) => {
    return <>
        <h1 id="js-title">{title}</h1>
        <div id="js-schedule">
            <ul className="list-group list-group-flush">
                {children}
            </ul>
        </div>
    </>
}

export default TVSchedule;