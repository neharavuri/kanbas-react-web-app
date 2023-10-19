import {AiOutlinePlus} from 'react-icons/ai';
import {AiOutlineCheckCircle} from 'react-icons/ai';
import {HiEllipsisVertical} from 'react-icons/hi2';
function ButtonBar() {
    return(
        <div>
            <button type="button" class="btn btn-light grey-button">Collapse All</button>
            <button type="button" class="btn btn-light grey-button">View Progress</button>
            <button type="button" class="btn btn-light grey-button"><AiOutlineCheckCircle className="text-success"/>Publish All</button>
            <button type="button" class="btn btn-danger square-button">
                <AiOutlinePlus/> Module</button>
            <button type="button" class="btn btn-light grey-button">
                <HiEllipsisVertical/>
            </button>
        </div>
    );
}
export default ButtonBar;