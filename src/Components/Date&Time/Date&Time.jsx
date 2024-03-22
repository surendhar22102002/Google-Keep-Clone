import { formatDistanceToNow, parseISO } from "date-fns";


const DateTime = ({ time }) => {

    let timeAgo = "";

    if (time) {
        const date = parseISO(time);
        const timePeriod = formatDistanceToNow(date);
        timeAgo = `${timePeriod} ago`;
    }

    return (
        <>
            <span title={time} className='text-sm'>
                <i>{timeAgo}</i>
            </span>
        </>
    )
}
export default DateTime;



